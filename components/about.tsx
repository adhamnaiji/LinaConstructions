"use client";

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="about">
          <div className="about-content">
            <h2>À Propos de Lina Constructions</h2>
            <p>
              Lina Constructions mêle savoir-faire traditionnel et technologies modernes pour
              livrer des ouvrages durables, performants et élégants.
            </p>
            <p>
              <strong>Notre priorité :</strong> Sécurité, qualité et communication transparente avec tous nos clients.
            </p>
            <h3>Pourquoi nous choisir ?</h3>
            <ul>
              <li>✅ Expertise reconnue en construction tous corps d&apos;état</li>
              <li>✅ Respect des délais et budgets convenus</li>
              <li>✅ Conformité aux normes et régulations</li>
              <li>✅ Équipe expérimentée et professionnelle</li>
              <li>✅ Garanties de qualité et de satisfaction</li>
              <li>✅ Communication régulière avec les clients</li>
            </ul>
          </div>
          
        </div>
      </div>

      <style jsx>{`
        .about-section {
          background: linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 50%, #1f1f1f 100%);
          padding: clamp(56px, 7vw, 96px) 0;
          scroll-margin-top: 80px;
          position: relative;
          overflow: hidden;
        }

        .about-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent 0%, #ff8c00 50%, transparent 100%);
        }

        .about-section::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent 0%, #ff8c00 50%, transparent 100%);
        }

        .about {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 48px;
          align-items: center;
          position: relative;
          z-index: 1;
        }

        .about-content {
          color: #e0e7ff;
        }

        .about h2 {
          font-size: clamp(1.8rem, 3.4vw, 2.4rem);
          margin: 0 0 24px 0;
          color: #ffffff;
          font-weight: 600;
          position: relative;
          display: inline-block;
          letter-spacing: 0.5px;
        }

        .about h2::after {
          content: '';
          position: absolute;
          bottom: -12px;
          left: 0;
          width: 60px;
          height: 3px;
          background: linear-gradient(90deg, #ff8c00 0%, #ff6b35 100%);
        }

        .about h3 {
          margin-top: 36px;
          margin-bottom: 16px;
          font-size: 1.25rem;
          color: #ffffff;
          font-weight: 600;
          position: relative;
          display: inline-block;
        }

        .about h3::before {
          content: '';
          position: absolute;
          left: -20px;
          top: 50%;
          transform: translateY(-50%);
          width: 4px;
          height: 24px;
          background: linear-gradient(180deg, #ff8c00 0%, #ff6b35 100%);
          border-radius: 2px;
        }

        .about p {
          color: #e0e7ff;
          margin: 0 0 16px 0;
          line-height: 1.8;
          font-size: 1rem;
          transition: color 0.3s ease;
        }

        .about p strong {
          color: #ff8c00;
          font-weight: 600;
        }

        .about ul {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .about li {
          padding: 12px 0;
          color: #e0e7ff;
          font-size: 0.95rem;
          line-height: 1.6;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .about li:hover {
          color: #ff8c00;
          transform: translateX(8px);
        }

        .about li::before {
          content: '';
          display: inline-block;
          width: 4px;
          height: 4px;
          background: #ff8c00;
          border-radius: 50%;
          flex-shrink: 0;
        }

        .pic {
          border-radius: 12px;
          background: linear-gradient(135deg, rgba(255, 140, 0, 0.15) 0%, rgba(255, 107, 53, 0.1) 50%, transparent 100%),
            linear-gradient(120deg, color-mix(in srgb, #ff8c00 22%, transparent), transparent 60%),
            url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 800 600%22%3E%3Crect width=%22800%22 height=%22600%22 fill=%22%23343a46%22/%3E%3Crect x=%22100%22 y=%22160%22 width=%22160%22 height=%22340%22 fill=%22%23656b77%22/%3E%3Crect x=%22290%22 y=%2290%22 width=%22150%22 height=%22410%22 fill=%22%23575963%22/%3E%3Crect x=%22470%22 y=%22140%22 width=%22165%22 height=%22360%22 fill=%22%23797f88%22/%3E%3Ccircle cx=%22640%22 cy=%2290%22 r=%2240%22 fill=%22%23ff8c00%22/%3E%3C/svg%3E');
          background-size: cover;
          background-position: center;
          min-height: 400px;
          border: 2px solid rgba(255, 140, 0, 0.3);
          position: relative;
          overflow: hidden;
          box-shadow: 0 8px 32px rgba(255, 140, 0, 0.15), inset 0 1px 0 rgba(255, 140, 0, 0.1);
          transition: all 0.3s ease;
        }

        .pic::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(circle at 30% 30%, rgba(255, 140, 0, 0.1) 0%, transparent 50%);
          pointer-events: none;
        }

        .pic::after {
          content: '';
          position: absolute;
          inset: 0;
          border: 1px solid rgba(255, 140, 0, 0.2);
          border-radius: 12px;
          pointer-events: none;
        }

        .pic:hover {
          border-color: rgba(255, 140, 0, 0.5);
          box-shadow: 0 12px 48px rgba(255, 140, 0, 0.25), inset 0 1px 0 rgba(255, 140, 0, 0.15);
          transform: translateY(-4px);
        }

        @media (max-width: 980px) {
          .about {
            grid-template-columns: 1fr;
            gap: 32px;
          }

          .about h2::after {
            width: 50px;
          }

          .pic {
            min-height: 300px;
          }
        }

        @media (max-width: 640px) {
          .about-section {
            padding: clamp(40px, 5vw, 64px) 0;
          }

          .about h2 {
            font-size: 1.6rem;
          }

          .about h3 {
            font-size: 1.1rem;
          }

          .about li {
            font-size: 0.9rem;
          }

          .pic {
            min-height: 250px;
          }
        }
      `}</style>
    </section>
  );
}
