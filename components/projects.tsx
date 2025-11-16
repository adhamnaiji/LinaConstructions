"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import image1 from "./projects/1.jpeg";
import image2 from "./projects/2.jpeg";
import image3 from "./projects/3.jpeg";
import image4 from "./projects/4.jpeg";
import image5 from "./projects/5.jpeg";
import image6 from "./projects/6.jpeg";
import image7 from "./projects/7.jpeg";
import image8 from "./projects/8.jpeg";
import image9 from "./projects/9.jpeg";
import image10 from "./projects/10.jpeg";
import image11 from "./projects/11.jpeg";
import image12 from "./projects/12.jpeg";
import image13 from "./projects/13.jpeg";
import image14 from "./projects/14.jpeg";
import image15 from "./projects/15.jpeg";
import image16 from "./projects/16.jpeg";
import image17 from "./projects/17.jpeg";
import image18 from "./projects/18.jpeg";
import image19 from "./projects/19.jpeg";
import image20 from "./projects/20.jpeg";
import image21 from "./projects/21.jpeg";
import image22 from "./projects/22.jpeg";
import image23 from "./projects/23.jpeg";
import image24 from "./projects/24.jpeg";
import image25 from "./projects/25.jpeg";
import image26 from "./projects/26.jpeg";
import image27 from "./projects/27.jpeg";
import image28 from "./projects/28.jpg";
import image29 from "./projects/29.jpg";
import image30 from "./projects/30.jpg";
import image31 from "./projects/31.jpg"; 

const projectsData = [
  { id: 1, category: "lina constructions", src: image1, alt: "Projet 1" },
  { id: 2, category: "lina constructions", src: image2, alt: "Projet 2" },
  { id: 3, category: "lina constructions", src: image3, alt: "Projet 3" },
  { id: 4, category: "lina constructions", src: image4, alt: "Projet 4" },
  { id: 5, category: "lina constructions", src: image5, alt: "Projet 5" },
  { id: 6, category: "lina constructions", src: image6, alt: "Projet 6" },
  { id: 7, category: "lina constructions", src: image7, alt: "Projet 7" },
  { id: 8, category: "lina constructions", src: image8, alt: "Projet 8" },
  { id: 9, category: "lina constructions", src: image9, alt: "Projet 9" },
  { id: 10, category: "lina constructions", src: image10, alt: "Projet 10" },
  { id: 11, category: "lina constructions", src: image11, alt: "Projet 11" },
  { id: 12, category: "lina constructions", src: image12, alt: "Projet 12" },
  { id: 13, category: "lina constructions", src: image13, alt: "Projet 13" },
  { id: 14, category: "lina constructions", src: image14, alt: "Projet 14" },
  { id: 15, category: "lina constructions", src: image15, alt: "Projet 15" },
  { id: 16, category: "lina constructions", src: image16, alt: "Projet 16" },
  { id: 17, category: "lina constructions", src: image17, alt: "Projet 17" },
  { id: 18, category: "lina constructions", src: image18, alt: "Projet 18" },
  { id: 19, category: "lina constructions", src: image19, alt: "Projet 19" },
  { id: 20, category: "lina constructions", src: image20, alt: "Projet 20" },
  { id: 21, category: "lina constructions", src: image21, alt: "Projet 21" },
  { id: 22, category: "lina constructions", src: image22, alt: "Projet 22" },
  { id: 23, category: "lina constructions", src: image23, alt: "Projet 23" },
  { id: 24, category: "lina constructions", src: image24, alt: "Projet 24" },
  { id: 25, category: "lina constructions", src: image25, alt: "Projet 25" },
  { id: 26, category: "lina constructions", src: image26, alt: "Projet 26" },
  { id: 27, category: "lina constructions", src: image27, alt: "Projet 27" },
  { id: 28, category: "lina constructions", src: image28, alt: "Projet 28" },
  { id: 29, category: "lina constructions", src: image29, alt: "Projet 29" },
  { id: 30, category: "lina constructions", src: image30, alt: "Projet 30" },
  { id: 31, category: "lina constructions", src: image31, alt: "Projet 31" },
];

export default function Projects() {
  const [filter, setFilter] = useState("tous");
  const [loading, setLoading] = useState(true);
  const [loadedImages, setLoadedImages] = useState(0);

  const filteredProjects =
    filter === "tous"
      ? projectsData
      : projectsData.filter((project) => project.category === filter);

  // Track image loading
  const handleImageLoad = () => {
    setLoadedImages((prev) => {
      const newCount = prev + 1;
      // Hide loading screen when all images are loaded
      if (newCount >= filteredProjects.length) {
        setTimeout(() => setLoading(false), 300); // Small delay for smooth transition
      }
      return newCount;
    });
  };

  // Reset loading when filter changes
  useEffect(() => {
    setLoading(true);
    setLoadedImages(0);
  }, [filter]);

  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-title">
          <div>
            <h2>Nos Projets</h2>
            <h3>Réalisations de qualité</h3>
          </div>
        </div>
        
        
      

        {/* Loading Splash Screen */}
        {loading && (
          <div className="loading-screen">
            <div className="spinner"></div>
            <p>Chargement des projets...</p>
            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{
                  width: `${(loadedImages / filteredProjects.length) * 100}%`,
                }}
              ></div>
            </div>
          </div>
        )}

        {/* Projects Grid */}
        <div className={`projects ${loading ? "hidden" : ""}`}>
          {filteredProjects.map((project, index) => (
            <div key={project.id} className="project">
              <Image
                src={project.src}
                alt={project.alt}
                width={942}
                height={747}
                placeholder="blur"
                priority={index < 3}
                className="project-image"
                onLoadingComplete={handleImageLoad}
              />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .section {
          padding: clamp(56px, 7vw, 96px) 0;
          scroll-margin-top: 80px;
        }
        .section-title {
          display: flex;
          align-items: end;
          justify-content: space-between;
          gap: 1rem;
          margin-bottom: 28px;
        }
        .section-title h2 {
          font-size: clamp(1.4rem, 3.4vw, 2.2rem);
          margin: 0;
        }
        .section-title p {
          color: var(--muted);
          margin: 0;
        }
        .filters {
          display: flex;
          gap: 0.6rem;
          flex-wrap: wrap;
          margin-bottom: 28px;
        }
        .chip {
          border: 1px solid var(--line);
          padding: 0.45rem 0.8rem;
          border-radius: 999px;
          background: var(--card);
          color: var(--muted);
          cursor: pointer;
          font-weight: 700;
          transition: all 0.2s;
        }
        .chip.active {
          background: var(--brand);
          color: #fff;
          border-color: transparent;
        }

        /* Loading Screen */
        .loading-screen {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-height: 400px;
          gap: 20px;
        }
        .spinner {
          width: 50px;
          height: 50px;
          border: 4px solid var(--line);
          border-top: 4px solid var(--brand);
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }
        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
        .loading-screen p {
          color: var(--muted);
          font-size: 1.1rem;
        }
        .progress-bar {
          width: 300px;
          height: 4px;
          background: var(--line);
          border-radius: 2px;
          overflow: hidden;
        }
        .progress-fill {
          height: 100%;
          background: var(--brand);
          transition: width 0.3s ease;
        }

        /* Projects Grid */
        .projects {
          display: grid;
          gap: 18px;
          grid-template-columns: repeat(3, 1fr);
          opacity: 1;
          transition: opacity 0.3s ease;
        }
        .projects.hidden {
          opacity: 0;
          height: 0;
          overflow: hidden;
        }
        .project {
          position: relative;
          border-radius: 16px;
          overflow: hidden;
          background: #0f1115;
          border: 1px solid var(--line);
          aspect-ratio: 942 / 747;
        }
        :global(.project-image) {
          width: 100% !important;
          height: 100% !important;
          object-fit: cover;
          display: block;
        }
        .project:hover :global(.project-image) {
          transform: scale(1.06);
          transition: transform 0.4s ease;
        }
        @media (max-width: 980px) {
          .projects {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 580px) {
          .projects {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
