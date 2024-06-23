import React, { useState } from 'eact';
import { EnvelopeIcon } from "@heroicons/react/24/outline";
import transporter from '../../../email.transport';

const EmailSection = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSendEmail = () => {
    const mailOptions = {
      from: 'obile20ema@gmail.com',
      to: 'obile20ema@gmail.com',
      subject: 'Nuevo mensaje de contacto',
      text: `Nombre: ${name}\nEmail: ${email}\nMensaje: ${message}`
    };

    transporter.send(serviceId, templateId, mailOptions)
   .then((response) => {
        console.log('Correo electrónico enviado');
      })
   .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-4">
      <h2 className="text-lg font-semibold mb-4">Contactanos</h2>
      <form className="flex flex-col">
        <label className="text-gray-600 mb-2">Nombre:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="input w-full p-2 pl-10 text-sm text-gray-700"
          placeholder="Ingrese su nombre"
        />
        <br />
        <label className="text-gray-600 mb-2">Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="input w-full p-2 pl-10 text-sm text-gray-700"
          placeholder="Ingrese su email"
        />
        <br />
        <label className="text-gray-600 mb-2">Mensaje:</label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="textarea w-full p-2 pl-10 text-sm text-gray-700"
          placeholder="Ingrese su mensaje"
        />
        <br />
        <button onClick={handleSendEmail} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Enviar Email
          <EnvelopeIcon className="h-5 w-5 ml-2" />
        </button>
      </form>
    </div>
  );
};

export default EmailSection;