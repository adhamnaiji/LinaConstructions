
"use client";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="fgrid">
          <div className="foot">
            <h4>À Propos</h4>
            <a href="#about">Qui sommes-nous</a>
            <a href="#services">Services</a>
            <a href="#projects">Projets</a>
          </div>
         <div className="foot">
        <h4>Contact</h4>
        <a href="tel:+352621633226" className="contact-link">
          <FaPhone className="icon" />
          +352 62 163 3226
        </a>
        <a href="tel:+4917624062756" className="contact-link">
          <FaPhone className="icon" />
          +49 176 240 627 56
        </a>
        <a href="mailto:info@linaconstructions.com" className="contact-link">
          <FaEnvelope className="icon" />
          info@linaconstructions.com
        </a>
        <a href="#" className="contact-link">
          <FaMapMarkerAlt className="icon" />
          44 rue de l'industrie, 8069 Strassen
        </a>
      
      </div>

      <div className="foot">
        <h4>Nous Suivre</h4>
        <a 
          href="https://www.facebook.com/profile.php?id=61583341880229" 
          target="_blank" 
          rel="noopener noreferrer"
          className="social-link"
        >
          <FaFacebook className="icon" />
          Facebook
        </a>
        <a 
          href="https://www.instagram.com/lina_constructions_luxembourg" 
          target="_blank" 
          rel="noopener noreferrer"
          className="social-link"
        >
          <FaInstagram className="icon" />
          Instagram
        </a>
      </div>
        </div>
        <div className="copy">
          <p>
            &copy; 2025 Lina Constructions. Tous droits réservés. | <a href="#">Politique de confidentialité</a>
          </p>
        </div>
      </div>

      <style jsx>{`
        footer {
          margin-top: 42px;
          background: linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 50%, #1f1f1f 100%);
          color: #e0e7ff;
          border-top: 3px solid #ff8c00;
          position: relative;
          overflow: hidden;
        }

        footer::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, #ff8c00 0%, #ff6b35 50%, #ff8c00 100%);
        }

        footer::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent 0%, #ff8c00 50%, transparent 100%);
        }

        .fgrid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 18px;
          padding: 32px 0;
          position: relative;
          z-index: 1;
        }

        .foot {
          padding: 0 12px;
        }

        .foot h4 {
          color: #ffffff;
          margin: 0.2rem 0 0.6rem;
          font-size: 1.05rem;
          font-weight: 600;
          letter-spacing: 0.5px;
          position: relative;
          display: inline-block;
        }

        .foot h4::after {
          content: '';
          position: absolute;
          bottom: -6px;
          left: 0;
          width: 30px;
          height: 2px;
          background: #ff8c00;
        }

        .foot a {
          display: block;
          color: #e0e7ff;
          text-decoration: none;
          padding: 0.2rem 0;
          transition: all 0.3s ease;
          font-size: 0.95rem;
          margin-top: 8px;
        }

        .foot a:hover {
          color: #ff8c00;
          transform: translateX(4px);
        }

        /* Icons and text alignment */
        .contact-link,
        .social-link {
          display: flex !important;
          align-items: center;
          gap: 10px;
          color: #e0e7ff !important;
        }

        .contact-link:hover,
        .social-link:hover {
          color: #ff8c00 !important;
        }

        .contact-link .icon,
        .social-link .icon {
          font-size: 16px;
          flex-shrink: 0;
          color: #ff8c00;
          transition: all 0.3s ease;
        }

        .contact-link:hover .icon,
        .social-link:hover .icon {
          transform: scale(1.2);
        }

        .contact-link.highlight {
          background-color: #ff8c00;
          color: #1a1a1a;
          padding: 8px 12px;
          border-radius: 4px;
          font-weight: bold;
          margin-top: 8px;
          display: inline-flex !important;
        }

        .contact-link.highlight:hover {
          background-color: #ff6b35;
          transform: scale(1.05);
        }

        .copy {
          border-top: 1px solid rgba(255, 140, 0, 0.3);
          color: #a8b2c1;
          padding: 12px 0;
          font-size: 0.95rem;
          position: relative;
          z-index: 1;
        }

        .copy a {
          color: #ff8c00;
          text-decoration: none;
          transition: color 0.3s ease;
          font-weight: 500;
        }

        .copy a:hover {
          color: #ff6b35;
          text-decoration: underline;
        }

        @media (max-width: 768px) {
          .fgrid {
            grid-template-columns: 1fr;
          }

          .foot h4::after {
            width: 20px;
          }
        }
      `}</style>
    </footer>
  );
}
