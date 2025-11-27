"use client";

export default function Services() {
  const services = [
    {
      icon: "🏠",
      title: "Construction Résidentielle",
      description:
        "Maisons sur mesure, extensions, surélévations et rénovations énergétiques pour votre confort de vie.",
    },
    {
      icon: "🏢",
      title: "Construction Commerciale",
      description: "Du gros œuvre aux finitions, conformité et sécurité garanties pour vos espaces professionnels.",
    },
    {
      icon: "🏭",
      title: "Construction Industrielle",
      description: "Usines, entrepôts et installations industrielles avec expertise technique avancée.",
    },
    {
      icon: "📋",
      title: "Gestion de Projets",
      description: "Planification, coordination des corps de métier, contrôle qualité et sécurité sur chantier.",
    },
    {
      icon: "📐",
      title: "Études & Consulting",
      description: "Études de faisabilité, estimations détaillées, optimisation des coûts et des délais.",
    },
    {
      icon: "🔧",
      title: "Rénovation & Réhabilitation",
      description: "Réhabilitation complète avec phasage intelligent.",
    },
  ];

  return (
    <section id="services" className="services-section">
      <div className="container">
        <div className="section-title">
          <div>
            <h2>Services de Construction</h2>
            <p style={{marginTop:"8px"}}>Solutions adaptées à vos besoins</p>
          </div>
        </div>
        <div className="grid cols-3">
          {services.map((service, index) => (
            <div key={index} className="card">
              <div className="service-head">
                <div className="service-ico">{service.icon}</div>
                <h3>{service.title}</h3>
              </div>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .services-section {
          background: linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 50%, #1f1f1f 100%);
          padding: clamp(56px, 7vw, 96px) 0;
          scroll-margin-top: 80px;
          position: relative;
          overflow: hidden;
        }

        .services-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent 0%, #ff8c00 50%, transparent 100%);
        }

        .services-section::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent 0%, #ff8c00 50%, transparent 100%);
        }

        .section-title {
          display: flex;
          align-items: end;
          justify-content: space-between;
          gap: 1rem;
          margin-bottom: 48px;
          position: relative;
          z-index: 1;
        }

        .section-title h2 {
          font-size: clamp(1.8rem, 3.4vw, 2.4rem);
          margin: 0 0 8px 0;
          color: #ffffff;
          font-weight: 600;
          position: relative;
          display: inline-block;
          letter-spacing: 0.5px;
        }

        .section-title h2::after {
          content: '';
          position: absolute;
          bottom: -16px;
          left: 0;
          width: 60px;
          height: 3px;
          background: linear-gradient(90deg, #ff8c00 0%, #ff6b35 100%);
        }

        .section-title p {
          color: #e0e7ff;
          margin: 0;
          font-size: 1rem;
          transition: color 0.3s ease;
        }

        .grid {
          display: grid;
          gap: 24px;
          position: relative;
          z-index: 1;
        }

        .grid.cols-3 {
          grid-template-columns: repeat(3, 1fr);
        }

        .card {
          background: linear-gradient(135deg, rgba(42, 42, 42, 0.8) 0%, rgba(31, 31, 31, 0.8) 100%);
          border: 1px solid rgba(255, 140, 0, 0.2);
          border-radius: 12px;
          padding: 28px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 140, 0, 0.1);
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          position: relative;
          overflow: hidden;
          backdrop-filter: blur(10px);
        }

        .card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent 0%, #ff8c00 50%, transparent 100%);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .card:hover {
          transform: translateY(-8px);
          border-color: rgba(255, 140, 0, 0.4);
          box-shadow: 0 12px 40px rgba(255, 140, 0, 0.2), inset 0 1px 0 rgba(255, 140, 0, 0.2);
          background: linear-gradient(135deg, rgba(42, 42, 42, 0.95) 0%, rgba(31, 31, 31, 0.95) 100%);
        }

        .card:hover::before {
          opacity: 1;
        }

        .service-head {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 16px;
        }

        .service-ico {
          width: 50px;
          height: 50px;
          border-radius: 10px;
          background: linear-gradient(135deg, rgba(255, 140, 0, 0.15) 0%, rgba(255, 107, 53, 0.1) 100%);
          display: grid;
          place-items: center;
          font-size: 28px;
          border: 1px solid rgba(255, 140, 0, 0.2);
          flex-shrink: 0;
          transition: all 0.3s ease;
        }

        .card:hover .service-ico {
          background: linear-gradient(135deg, rgba(255, 140, 0, 0.25) 0%, rgba(255, 107, 53, 0.15) 100%);
          border-color: rgba(255, 140, 0, 0.4);
          transform: scale(1.1);
        }

        .card h3 {
          margin: 0;
          font-size: 1.1rem;
          color: #ffffff;
          font-weight: 600;
          letter-spacing: 0.3px;
          transition: color 0.3s ease;
        }

        .card:hover h3 {
          color: #ff8c00;
        }

        .card p {
          color: #e0e7ff;
          margin: 0;
          font-size: 0.95rem;
          line-height: 1.6;
          transition: color 0.3s ease;
        }

        .card:hover p {
          color: #e8eef8;
        }

        @media (max-width: 980px) {
          .grid.cols-3 {
            grid-template-columns: repeat(2, 1fr);
          }

          .section-title h2::after {
            width: 50px;
          }
        }

        @media (max-width: 640px) {
          .services-section {
            padding: clamp(40px, 5vw, 64px) 0;
          }

          .grid.cols-3 {
            grid-template-columns: 1fr;
          }

          .section-title {
            flex-direction: column;
            align-items: flex-start;
            margin-bottom: 32px;
          }

          .section-title h2 {
            font-size: 1.6rem;
          }

          .card {
            padding: 20px;
          }

          .service-ico {
            width: 44px;
            height: 44px;
            font-size: 24px;
          }
        }
      `}</style>
    </section>
  );
}
