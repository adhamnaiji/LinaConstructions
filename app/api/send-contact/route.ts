import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

// Email template component
function ContactEmailTemplate({
  clientName,
  clientEmail,
  clientPhone,
  projectType,
  budget,
  description,
  date,
}: {
  clientName: string;
  clientEmail: string;
  clientPhone: string;
  projectType: string;
  budget: string;
  description: string;
  date: string;
}) {
  return `
    <div style="font-family: Arial, sans-serif; padding: 20px; max-width: 600px;">
      <h2 style="color: #333; border-bottom: 2px solid #ff9d3a; padding-bottom: 10px;">
        Nouvelle demande de Devis - Lina Constructions
      </h2>
      
      <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin-bottom: 20px;">
        <p><strong>Nom:</strong> ${clientName}</p>
        <p><strong>Email:</strong> ${clientEmail}</p>
        <p><strong>Téléphone:</strong> ${clientPhone}</p>
        <p><strong>Type de projet:</strong> ${projectType}</p>
        <p><strong>Budget:</strong> ${budget || 'Non spécifié'}</p>
        <p><strong>Date de soumission:</strong> ${date}</p>
      </div>

      <div style="margin-bottom: 20px;">
        <h3 style="color: #333;">Description du projet:</h3>
        <p style="white-space: pre-wrap; color: #555; line-height: 1.6;">${description}</p>
      </div>

      <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;" />
      
      <p style="color: #999; font-size: 12px;">
        Pour répondre à cette demande, vous pouvez contacter le client directement à <strong>${clientEmail}</strong>
      </p>
    </div>
  `;
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      nom,
      email,
      telephone,
      typeProjet,
      budget,
      description,
      date,
    } = body;

    // Validate required fields
    if (!nom || !email || !telephone || !typeProjet || !description) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Generate HTML email
    const htmlEmail = ContactEmailTemplate({
      clientName: nom,
      clientEmail: email,
      clientPhone: telephone,
      projectType: typeProjet,
      budget,
      description,
      date,
    });

    // Send emails to both recipients
    // Using onboarding@resend.dev for testing (domain still pending verification)
    const { data, error } = await resend.emails.send({
      from: 'Lina Constructions <onboarding@resend.dev>', // TESTING DOMAIN - works immediately
      to: ['mohamedalielmabrouk66@gmail.com'], // Your personal email for testing
      subject: `Nouvelle demande de contact - ${nom}`,
      html: htmlEmail,
      replyTo: email, // Allows direct replies to the client
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: 'Failed to send email', details: error },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: 'Email sent successfully', data },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error in send-contact route:', error);
    return NextResponse.json(
      { error: 'Internal server error', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}