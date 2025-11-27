"use client";

import Image from "next/image";
import { useState } from "react";
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
import image32 from "./projects/32.jpg";
import image33 from "./projects/33.jpg";
import image34 from "./projects/34.jpg";
import image35 from "./projects/35.jpg";
import image36 from "./projects/36.jpg";
import image37 from "./projects/37.jpg";


const projectsData = [
  { id: 1, category: "lina constructions ", src: image1, alt: "Projet 1" },
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
  { id: 31, category: "lina constructions", src: image32, alt: "Projet 32" },
  { id: 31, category: "lina constructions", src: image33, alt: "Projet 33" },
  { id: 31, category: "lina constructions", src: image34, alt: "Projet 34" },
  { id: 31, category: "lina constructions", src: image35, alt: "Projet 35" },
  { id: 31, category: "lina constructions", src: image36, alt: "Projet 36" },
  { id: 31, category: "lina constructions", src: image37, alt: "Projet 37" },
];

// Component to track individual image loading
function ProjectCard({ project }: { project: (typeof projectsData)[0] }) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="group overflow-hidden rounded-lg shadow-md hover:shadow-lg transition">
      <div className={`relative h-64 overflow-hidden transition-all duration-300 ${
        isLoaded ? "bg-transparent" : "bg-gray-200 animate-pulse"
      }`}>
        <Image
          src={project.src}
          alt={project.alt}
          fill
          className="object-cover group-hover:scale-105 transition duration-300"
          loading="lazy"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          onLoad={() => setIsLoaded(true)}
        />
      </div>
    </div>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState("tous");

  const filteredProjects =
    filter === "tous"
      ? projectsData
      : projectsData.filter((project) => project.category === filter);

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">Nos Projets</h2>
        <p className="text-center text-gray-600 mb-12">Réalisations de qualité</p>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
