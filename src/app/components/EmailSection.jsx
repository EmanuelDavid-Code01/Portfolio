'use client';
import React, { useState } from 'eact';
import mailgun from '../../../email.transport';

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

    mailgun.messages().send(mailOptions, (error, body) => {
      if (error) {
        console.log(error);
      } else {
        console.log('Correo electrónico enviado');
      }
    });
  };

  return (
    <div>
      <h2>Contactanos</h2>
      <form>
        <label>Nombre:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <br />
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <br />
        <label>Mensaje:</label>
        <textarea value={message} onChange={(e) => setMessage(e.target.value)} />
        <br />
        <button onClick={handleSendEmail}>Enviar Email</button>
      </form>
    </div>
  );
};

export default EmailSection;