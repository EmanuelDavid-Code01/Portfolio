"use client";
import React, { useState } from "react";
import { emailjs, serviceId, templateId } from "../../../email.transport";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
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
      className={`md:grid gap-4 max-w-md mx-auto p-4 bg-white rounded-lg shadow-md flex flex-col items-center mt-48 `}
    >
      <h5 className="text-xl font-bold text-gray-700 text-center mb-4">
        Contactame
      </h5>
      <p className="text-black mb-1 max-w-md">
        Por cualquier consulta escribime.
      </p>
      <div className="socials flex flex-row gap-2">
        <Link href= "github.com">
        <Image src={GithubIcon} alt="Github Icon"/>
        </Link>
        <Link href="linkedin.com">
        <Image src={LinkedinIcon} alt="Linkedin Icon"/>
        </Link>
      </div>
      <form onSubmit={handleSendEmail} className="space-y-4 w-full md:w-auto">
        <div className="flex flex-col">
          <label htmlFor="name" className="text-gray-700 py-2">
            Nombre:
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-indigo-200 text-black"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="email" className="text-gray-700 py-2">
            Correo electrónico:
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-indigo-200 text-black"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="message" className="text-gray-700 py-2">
            Mensaje:
          </label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            className="w-full px-3 py-3 border rounded-lg focus:outline-none focus:ring focus:ring-indigo-200 text-black"
          />
        </div>
        <button
          type="submit"
          disabled={sending}
          className={`w-full md:w-auto bg-[#3a55b4] text-white px-4 py-2 rounded-lg hover:bg-[#2395f2] focus:outline-none focus:ring focus:ring-indigo-200 ${
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
