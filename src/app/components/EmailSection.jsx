"use client";
import React, { useState } from "react";
import { emailjs, serviceId, templateId } from "../../../email.transport";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import InstagramIcon from "../../../public/instagram-icon.svg";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);
  const [error, setError] = useState(null);

  const handleSendEmail = (e) => {
    e.preventDefault();
    setSending(true);

    const templateParams = {
      from_name: name,
      to_name: "Emanuel David Garcia",
      message: message,
      reply_to: email,
    };

    emailjs
      .send(serviceId, templateId, templateParams)
      .then((response) => {
        console.log("Correo electrónico enviado", response);
        alert("Correo electrónico enviado con éxito!");
        setName("");
        setEmail("");
        setMessage("");
        setError(null);
      })
      .catch((error) => {
        console.error("Error al enviar correo electrónico:", error);
        setError(error);
        alert(
          "Error al enviar correo electrónico. Inténtalo de nuevo más tarde."
        );
      })
      .finally(() => {
        setSending(false);
      });
  };

  return (
    <section
      className={`grid md:grid-cols-2 gap-4 p-4 rounded-lg shadow-md flex-col items-center mt-48 relative`}
    >
      <div className="bg-gradient-radial from-blue-900 to-transparent rounded-full h-80 w-80 blur-lg absolute top-1/4 -left-4 transform -translate-x-1/2 z-1"></div>
      <div className="md:w-1/2 md:text-left h-full relative">
        <h5 className="text-xl font-bold text-white mb-4">Contactame</h5>
        <p className="text-gray-500 mb-1 max-w-md">
          ¿Necesitás asesoramiento u orientación? Envíame un mensaje y estaré
          encantado de ayudarte.
        </p>
        <div className="flex flex-row gap-x-4 md:gap-x-2 py-2 justify-start">
          <Link href="https://github.com/EmanuelDavid-Code01">
            <Image src={GithubIcon} alt="Github Icon" />
          </Link>
          <Link href="https://www.linkedin.com/in/emanuel-david-garcia-b73346215/">
            <Image src={LinkedinIcon} alt="Linkedin Icon" />
          </Link>
          <Link href="https://www.instagram.com/codewizart/">
            <Image src={InstagramIcon} alt="Instagram Icon" />
          </Link>
        </div>
      </div>
      <form onSubmit={handleSendEmail} className="space-y-4 w-full md:w-auto">
        <div className="flex flex-col">
          <label htmlFor="name" className="text-white py-2">
            Nombre:
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            placeholder="Escribe tu nombre."
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-indigo-200 text-black"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="email" className="text-white py-2">
            Correo electrónico:
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Escribe tu email."
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-indigo-200 text-black"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="message" className="text-white py-2">
            Mensaje:
          </label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            placeholder="Escribe tu consulta."
            className="w-full px-3 py-3 border rounded-lg focus:outline-none focus:ring focus:ring-indigo-200 text-black"
          />
        </div>
        <button
          type="submit"
          disabled={sending}
          className={`w-full bg-[#3a55b4] text-white px-4 py-2 rounded-lg hover:bg-[#2395f2] focus:outline-none focus:ring focus:ring-indigo-200 ${
            sending ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          {sending ? "Enviando..." : "Enviar correo electrónico"}
        </button>
        {error && <p className="text-red-600">{error.message}</p>}
      </form>
    </section>
  );
};

export default EmailSection;
