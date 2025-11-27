"use client";

import { useState } from "react"
import Link from "next/link"
import Image from "next/image";
import logo from "./projects/Lina Constructions.png";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const headerHeight = 80
      const elementPosition = element.offsetTop - headerHeight
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      })
      setMobileMenuOpen(false)
    }
  }

  return (
    <>
      {/* Top Notice Bar */}
      <div className="notice">
        <div className="inner container">
          <span>Entreprise de construction et rénovation - Résidentiel • Commercial • Industriel</span>
        </div>
      </div>

      {/* Header/Navigation */}
      <header id="header" className="header">
        <nav className="container">
          <Link href="#" className="brand">
            <Image 
              src={logo} 
              alt="Lina Constructions Logo" 
              width={150} 
              height={50}
              priority
            />
          </Link>
          <div className={`nav-links ${mobileMenuOpen ? "active" : ""}`} id="nav">
            <button onClick={() => scrollToSection("services")} className="nav-link">
              Services
            </button>
            <button onClick={() => scrollToSection("projects")} className="nav-link">
              Projets
            </button>
            <button onClick={() => scrollToSection("about")} className="nav-link">
              À propos
            </button>
            <button onClick={() => scrollToSection("contact")} className="nav-link">
              Contact
            </button>
          </div>
          <button
            id="menuToggle"
            className="menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menu mobile"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          <button className="cta" style={{margin:"6px"}} onClick={() => scrollToSection("contact")} aria-label="Demander un devis gratuit">
            Devis Gratuit
          </button>
        </nav>
      </header>

      <style jsx>{`
        .notice {
          background: linear-gradient(90deg, rgba(255, 140, 0, 0.1) 0%, rgba(255, 107, 53, 0.05) 100%);
          border-bottom: 1px solid rgba(255, 140, 0, 0.2);
          padding: 12px 0;
          color: #e0e7ff;
          font-size: 0.9rem;
          text-align: center;
        }

        .notice span {
          color: #ff8c00;
          font-weight: 600;
          letter-spacing: 0.3px;
        }

        .header {
          position: sticky;
          top: 0;
          z-index: 50;
          backdrop-filter: saturate(140%) blur(8px);
          background: linear-gradient(135deg, rgba(26, 26, 26, 0.95) 0%, rgba(42, 42, 42, 0.95) 100%);
          border-bottom: 2px solid rgba(255, 140, 0, 0.3);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
        }

        nav {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          padding: 0.8rem 0;
        }

        .brand {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          text-decoration: none;
          cursor: pointer;
          transition: all 0.3s ease;
          filter: brightness(1);
        }

        .brand:hover {
          filter: brightness(1.1);
          transform: scale(1.02);
        }

        .logo {
          width: 34px;
          height: 34px;
          border-radius: 10px;
          display: grid;
          place-items: center;
          background: linear-gradient(135deg, #ff8c00 0%, #ff6b35 100%);
          color: white;
          font-weight: 900;
          box-shadow: 0 4px 12px rgba(255, 140, 0, 0.3);
        }

        .brand span {
          font-weight: 700;
          letter-spacing: 0.4px;
          color: #ffffff;
          font-size: 1rem;
        }

        .nav-links {
          display: flex;
          gap: 1.5rem;
          align-items: center;
        }

        .nav-link {
          padding: 0.6rem 1rem;
          border-radius: 8px;
          text-decoration: none;
          color: #e0e7ff;
          font-weight: 600;
          background: transparent;
          border: 1px solid rgba(255, 140, 0, 0);
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          position: relative;
          font-size: 0.95rem;
          letter-spacing: 0.3px;
        }

        .nav-link::before {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, #ff8c00 0%, #ff6b35 100%);
          transition: width 0.3s ease;
        }

        .nav-link:hover {
          color: #ff8c00;
          background: rgba(255, 140, 0, 0.1);
          border-color: rgba(255, 140, 0, 0.2);
        }

        .nav-link:hover::before {
          width: 100%;
        }

        .cta {
          background: linear-gradient(135deg, #ff8c00 0%, #ff6b35 100%);
          color: #1a1a1a;
          border: 0;
          padding: 0.8rem 1.4rem;
          border-radius: 10px;
          font-weight: 700;
          cursor: pointer;
          box-shadow: 0 6px 20px rgba(255, 140, 0, 0.35);
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          position: relative;
          overflow: hidden;
          font-size: 0.95rem;
          letter-spacing: 0.3px;
          text-transform: uppercase;
        }

        .cta::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: rgba(255, 255, 255, 0.2);
          transition: left 0.3s ease;
        }

        .cta:hover {
          transform: translateY(-2px) scale(1.05);
          box-shadow: 0 10px 30px rgba(255, 140, 0, 0.45);
        }

        .cta:hover::before {
          left: 100%;
        }

        .menu {
          display: none;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
          background: rgba(255, 140, 0, 0.1);
          border: 1px solid rgba(255, 140, 0, 0.3);
          padding: 0.6rem 0.8rem;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .menu span {
          width: 24px;
          height: 2px;
          background: #ff8c00;
          border-radius: 2px;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .menu:hover {
          background: rgba(255, 140, 0, 0.2);
          border-color: rgba(255, 140, 0, 0.5);
        }

        @media (max-width: 980px) {
          .nav-links {
            display: none;
            position: fixed;
            inset: 80px 0 auto 0;
            background: linear-gradient(135deg, rgba(26, 26, 26, 0.98) 0%, rgba(42, 42, 42, 0.98) 100%);
            border-top: 2px solid rgba(255, 140, 0, 0.3);
            padding: 16px;
            flex-direction: column;
            gap: 8px;
            backdrop-filter: blur(10px);
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5);
          }

          .nav-links.active {
            display: flex;
          }

          .nav-link {
            padding: 0.8rem 1.2rem;
            width: 100%;
            text-align: left;
            border-left: 3px solid transparent;
            border-radius: 6px;
            transition: all 0.3s ease;
          }

          .nav-link:hover {
            background: rgba(255, 140, 0, 0.15);
            border-left-color: #ff8c00;
            transform: translateX(8px);
          }

          .menu {
            display: flex;
          }

          .cta {
            width: 100%;
            text-align: center;
          }
        }

        @media (max-width: 640px) {
          nav {
            padding: 0.6rem 0;
            gap: 0.8rem;
          }

          .cta {
            padding: 0.7rem 1rem;
            font-size: 0.9rem;
          }

          .notice span {
            font-size: 0.85rem;
          }
        }
      `}</style>
    </>
  )
}
