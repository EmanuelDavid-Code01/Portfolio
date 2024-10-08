"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";

const projectsData = [
  {
    id: 1,
    title: "Tienda de Zapatillas",
    description:
      "E-commerce Basico donde vas a poder seleccionar y agregar a tu carrito lo que estes buscando. Tambien podemos hacerlo desde el celular.",
    image: "/images/projects/1.png",
    tag: ["Todos", "Web"],
    gitUrl: "https://github.com/EmanuelDavid-Code01/App-Note-Ema",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Panaderia",
    description:
      "Proyecto en el cual usamos, Node.js,npm (Node Package Manager) para administrar dependencias y scripts, Sass y Nodemon. ",
    image: "/images/projects/2.png",
    tag: ["Todos", "Web"],
    gitUrl:
      "https://github.com/EmanuelDavid-Code01/LaPanaderia-DesafioFinalCoderHouse",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Juego de mecanografia",
    description:
      "juego ideado para mejorar la velocidad de tipeo, habilitado para jugar por browsers preferentemente google chrome. A desafiar los limites",
    image: "/images/projects/3.png",
    tag: ["Todos", "Web"],
    gitUrl: "https://github.com/EmanuelDavid-Code01/MecaPharsh",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Tienda de ropa",
    description:
      "En esta opotunidad estamos viendo una tienda de ropa que cuenta con un catalogo y la misma se adapta a diferentes tamaños, es responsive.",
    image: "/images/projects/4.png",
    tag: ["Todos", "Responsive"],
    gitUrl: "https://github.com/EmanuelDavid-Code01/LaTiendaDeEmaGood",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("Todos");

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );
  return (
    <>
      <h2
        id="Proyectos"
        className="text-center text-4xl font-bold text-white mt-4 mb-4"
      >
        Mis proyectos
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="Todos"
          isSelected={tag === "Todos"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Responsive"
          isSelected={tag === "Responsive"}
        />
      </div>
      <div className="grid md:grid-cols-3 gap-8 md:gap-12 py-1">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
            tag={project}
            gitUrl={project.gitUrl}
            previewUrl={project.previewUrl}
          />
        ))}
      </div>
    </>
  );
};

export default ProjectsSection;
