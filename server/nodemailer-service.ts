import nodemailer from 'nodemailer';

// Crear un transportador para Gmail
const createTransporter = async () => {
  // Usar el servicio de pruebas de Nodemailer (ethereal.email)
  // Esto nos permite probar el envío de correos sin necesidad de credenciales reales
  const testAccount = await nodemailer.createTestAccount();
  
  const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    secure: false, // true para 465, false para otros puertos
    auth: {
      user: testAccount.user,
      pass: testAccount.pass,
    },
  });
  
  return { transporter, testAccount };
};

interface EmailData {
  to: string;
  cc?: string | string[]; // Campo opcional para copia de correo (string o array de strings)
  subject: string;
  text: string;
  html: string;
}

/**
 * Envía un correo electrónico usando Nodemailer con el servicio de prueba de Ethereal
 * @returns URL donde se puede ver el correo enviado (solo para pruebas)
 */
export const sendEmail = async (emailData: EmailData): Promise<string> => {
  try {
    const { transporter, testAccount } = await createTransporter();
    
    // Enviar correo
    const info = await transporter.sendMail({
      from: '"Los Cabos Soccer Tournament" <ventas@loscabossoccertournament.lat>',
      to: emailData.to,
      cc: emailData.cc, // Incluir copia si existe
      subject: emailData.subject,
      text: emailData.text,
      html: emailData.html,
    });
    
    console.log('Mensaje enviado: %s', info.messageId);
    
    // URL para ver el correo (solo disponible durante las pruebas con Ethereal)
    const previewURL = nodemailer.getTestMessageUrl(info);
    console.log('Vista previa del correo: %s', previewURL);
    
    return previewURL || '';
  } catch (error) {
    console.error('Error al enviar correo con Nodemailer:', error);
    return '';
  }
};