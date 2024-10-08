"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2 marker:text-[#1dcffd]">
        <li>JavaScript,React,Node</li>
        <li>UX/UI Design</li>
        <li>MongoDB, GIT</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2 marker:text-[#1dcffd]">
        <li>Rediseño web de KINEPOLIS</li>
        <li>Profesor de Informatica</li>
        <li>Proyectos Freelance</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2 marker:text-[#1dcffd]">
        <li>Desarrollo Web Full-Stack (CoderHouse)</li>
        <li>Adobe Illustrator, Photoshop</li>
        <li>UX/UI Avanzado (CoderHouse)</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };
  return (
    <section id="AboutMe" className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/images/about-image.png"
          width={500}
          height={500}
          alt="About Image"
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full ">
          <h2 className="text-4xl font-bold text-white mb-4">Sobre mí</h2>
          <p className="text-base md:text-lg whitespace-nowrap">
            ¿Buscás a un desarrollador Full-Stack entusiasta y creativo?
          </p>
          <br className="block" />
          <p className="text-base md:text-lg">
            ¡No busques más!
          </p>
          <p className="text-base md:text-lg">
            Soy Emanuel Garcia, tengo habilidades en desarrollo web,
            frontend/backend, UX/UI y desarrollo de videojuegos.
          </p>
          <p className="text-base md:text-lg">
            Con mi experiencia en educación física y como guardavidas, la
            comunicación eficaz, tu tranquilidad y tu seguridad son esenciales en
            mi trabajo diario como programador. Siempre estoy interesado en
            nuevos retos y aprender nuevas tecnologías.
          </p>
          <br className="block" />
          <p className="text-base md:text-lg">
            No te vayas sin ver mi portfolio en GitHub, ¡Y no dudes en
            consultarme si tenes alguna pregunta!
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Habilidades{" "}
            </TabButton>

            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Experiencia{" "}
            </TabButton>

            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Educación{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
