import React from "react";
import ProjectCard from "./ProjectCard";

const projectsData = [
  {
    id: 1,
    title: "React Portfolio Website",
    description: "Descripcion 1",
    image: "images/projects/1.png",
    tag: ["All", "Web"],
  },
  {
    id: 2,
    title: "React Portfolio Website",
    description: "Descripcion 2",
    image: "images/projects/2.png",
    tag: ["All", "Web"],
  },
  {
    id: 3,
    title: "React Portfolio Website",
    description: "Descripcion 3",
    image: "images/projects/3.png",
    tag: ["All", "Web"],
  },
  {
    id: 4,
    title: "React Portfolio Website",
    description: "Descripcion 4",
    image: "images/projects/1.png",
    tag: ["All", "Web"],
  },
];

const ProjectsSection = () => {
  return (
    <>
      <h2>My Projects</h2>
      <div>
        {projectsData.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
          />
        ))}
      </div>
    </>
  );
};

export default ProjectsSection;