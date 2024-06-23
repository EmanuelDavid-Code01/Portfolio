import { emailjs } from 'emailjs-com';

const serviceId = 'ervice_l5ezkhn';
const templateId = '__ejs-test-mail-service__';
const publicKey = 'rJFfZ-rgSWocVCc62';
const privateKey = 'CDbZxR954THTnDT11_bM4';

const transporter = emailjs.init(publicKey);

export default transporter;