"use client";

import React, { useState } from "react";

interface FormData {
  nom: string;
  email: string;
  telephone: string;
  typeProjet: string;
  budget: string;
  description: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    nom: "",
    email: "",
    telephone: "",
    typeProjet: "",
    budget: "",
    description: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState<"success" | "error" | "">(
    ""
  );

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = (): boolean => {
    if (
      !formData.nom ||
      !formData.email ||
      !formData.telephone ||
      !formData.typeProjet ||
      !formData.description
    ) {
      setMessage("Tous les champs requis doivent être remplis");
      setMessageType("error");
      return false;
    }

    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      setMessage("Format d'email invalide");
      setMessageType("error");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    if (!validateForm()) {
      setLoading(false);
      return;
    }

    try {
      const response = await fetch("/api/send-contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          date: new Date().toLocaleString("fr-TN"),
        }),
      });

      const result = await response.json();

      if (response.ok) {
        setMessage(
          "Votre demande a été envoyée avec succès ! Nous vous contacterons dans les plus brefs délais."
        );
        setMessageType("success");

        setFormData({
          nom: "",
          email: "",
          telephone: "",
          typeProjet: "",
          budget: "",
          description: "",
        });

        setTimeout(() => {
          setMessage("");
        }, 5000);
      } else {
        setMessage(
          result.error ||
            "Une erreur est survenue lors de l'envoi. Veuillez réessayer."
        );
        setMessageType("error");
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage(
        "Une erreur est survenue lors de l'envoi. Veuillez réessayer ou nous contacter directement."
      );
      setMessageType("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="contact-section">
      <div className="contact-container">
        <h2 className="contact-title">Demander un Devis</h2>
        <p className="contact-subtitle">
          Remplissez le formulaire ci-dessous et nous vous répondrons dans les
          24 heures
        </p>

        <form onSubmit={handleSubmit} className="contact-form">
          {message && (
            <div
              className={`message-alert ${
                messageType === "success" ? "success" : "error"
              }`}
              role="alert"
            >
              {message}
            </div>
          )}

          <div className="form-group">
            <label htmlFor="nom" className="form-label">
              Nom *
            </label>
            <input
              type="text"
              id="nom"
              name="nom"
              value={formData.nom}
              onChange={handleChange}
              required
              className="form-input"
              placeholder="Votre nom complet"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="form-input"
              placeholder="votre.email@example.com"
            />
          </div>

          <div className="form-group">
            <label htmlFor="telephone" className="form-label">
              Téléphone *
            </label>
            <input
              type="tel"
              id="telephone"
              name="telephone"
              value={formData.telephone}
              onChange={handleChange}
              required
              className="form-input"
              placeholder="XXX XXX XXX"
            />
          </div>

          <div className="form-group">
            <label htmlFor="typeProjet" className="form-label">
              Type de projet *
            </label>
            <select
              id="typeProjet"
              name="typeProjet"
              value={formData.typeProjet}
              onChange={handleChange}
              required
              className="form-select"
            >
              <option value="">Sélectionnez un type de projet</option>
              <option value="Construction">Construction</option>
              <option value="Rénovation">Rénovation</option>
              <option value="Extension">Extension</option>
              <option value="Aménagement">Aménagement</option>
              <option value="Autre">Autre</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="budget" className="form-label">
              Budget (optionnel)
            </label>
            <input
              type="text"
              id="budget"
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              className="form-input"
              placeholder="ex: 50,000 - 100,000 €"
            />
          </div>

          <div className="form-group">
            <label htmlFor="description" className="form-label">
              Description du projet *
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
              className="form-textarea"
              placeholder="Décrivez votre projet en détail..."
              rows={6}
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`submit-button ${loading ? "loading" : ""}`}
            onMouseEnter={(e) => {
              if (!loading)
                (e.target as HTMLButtonElement).style.backgroundColor =
                  "#ff6b35";
            }}
            onMouseLeave={(e) => {
              if (!loading)
                (e.target as HTMLButtonElement).style.backgroundColor =
                  "#ff8c00";
            }}
          >
            {loading ? "Envoi en cours..." : "Envoyer ma demande"}
          </button>
        </form>
      </div>

      <style jsx>{`
        .contact-section {
          background: linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 50%, #1f1f1f 100%);
          padding: 60px 20px;
          border-top: 3px solid #ff8c00;
          border-bottom: 2px solid #ff8c00;
          position: relative;
          overflow: hidden;
        }

        .contact-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, #ff8c00 0%, #ff6b35 50%, #ff8c00 100%);
          z-index: 1;
        }

        .contact-container {
          max-width: 600px;
          margin: 0 auto;
          position: relative;
          z-index: 2;
        }

        .contact-title {
          color: #ffffff;
          font-size: 2.5rem;
          font-weight: 600;
          text-align: center;
          margin-bottom: 12px;
          letter-spacing: 0.5px;
          position: relative;
          display: inline-block;
          width: 100%;
        }

        .contact-title::after {
          content: '';
          position: absolute;
          bottom: -12px;
          left: 50%;
          transform: translateX(-50%);
          width: 80px;
          height: 3px;
          background: linear-gradient(90deg, #ff8c00 0%, #ff6b35 100%);
        }

        .contact-subtitle {
          color: #e0e7ff;
          text-align: center;
          font-size: 1rem;
          margin-top: 30px;
          margin-bottom: 40px;
          line-height: 1.6;
        }

        .contact-form {
          background: rgba(26, 26, 26, 0.7);
          padding: 40px;
          border-radius: 8px;
          border: 1px solid rgba(255, 140, 0, 0.2);
          backdrop-filter: blur(10px);
        }

        .form-group {
          margin-bottom: 24px;
        }

        .form-label {
          display: block;
          color: #ffffff;
          font-weight: 600;
          margin-bottom: 8px;
          font-size: 0.95rem;
          letter-spacing: 0.3px;
        }

        .form-input,
        .form-select,
        .form-textarea {
          width: 100%;
          padding: 12px 14px;
          border: 1px solid rgba(255, 140, 0, 0.3);
          border-radius: 6px;
          background-color: rgba(42, 42, 42, 0.8);
          color: #ffffff;
          font-size: 0.95rem;
          transition: all 0.3s ease;
          box-sizing: border-box;
          font-family: inherit;
        }

        .form-input::placeholder,
        .form-select::placeholder,
        .form-textarea::placeholder {
          color: #a8b2c1;
        }

        .form-input:focus,
        .form-select:focus,
        .form-textarea:focus {
          outline: none;
          border-color: #ff8c00;
          background-color: rgba(42, 42, 42, 0.95);
          box-shadow: 0 0 0 3px rgba(255, 140, 0, 0.2);
        }

        .form-textarea {
          min-height: 150px;
          resize: vertical;
        }

        .message-alert {
          padding: 16px;
          margin-bottom: 24px;
          border-radius: 6px;
          font-size: 0.95rem;
          border: 1px solid;
          animation: slideDown 0.3s ease;
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .message-alert.success {
          background-color: rgba(34, 197, 94, 0.1);
          color: #22c55e;
          border-color: rgba(34, 197, 94, 0.3);
        }

        .message-alert.error {
          background-color: rgba(239, 68, 68, 0.1);
          color: #ef4444;
          border-color: rgba(239, 68, 68, 0.3);
        }

        .submit-button {
          width: 100%;
          padding: 14px;
          background-color: #ff8c00;
          color: #1a1a1a;
          border: none;
          border-radius: 6px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          position: relative;
          overflow: hidden;
        }

        .submit-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: rgba(255, 255, 255, 0.1);
          transition: left 0.3s ease;
        }

        .submit-button:hover:not(.loading) {
          background-color: #ff6b35;
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(255, 140, 0, 0.3);
        }

        .submit-button:hover:not(.loading)::before {
          left: 100%;
        }

        .submit-button.loading {
          background-color: #666666;
          cursor: not-allowed;
          opacity: 0.7;
        }

        @media (max-width: 768px) {
          .contact-section {
            padding: 40px 16px;
          }

          .contact-title {
            font-size: 1.8rem;
          }

          .contact-form {
            padding: 24px;
          }

          .contact-title::after {
            width: 60px;
          }
        }
      `}</style>
    </section>
  );
}
