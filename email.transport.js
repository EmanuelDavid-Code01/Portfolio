// email.transport.js
import emailjs from '@emailjs/browser';

const serviceId = 'service_q17osgq';
const templateId = 'template_eiee83a';
const publicKey = 'eyMDoICMhEhXYr9_e';
const privateKey = 'Qprk1UGEjryCZLvpET5NE';

emailjs.init(publicKey);

export { serviceId, templateId, emailjs };
