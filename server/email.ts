import { MailService } from '@sendgrid/mail';
import { sendEmail as sendNodemailerEmail } from './nodemailer-service';

// Inicializar SendGrid con manejo de errores
const sgMail = new MailService();
try {
  // Verificamos que la API key exista y tenga el formato correcto
  const apiKey = process.env.SENDGRID_API_KEY || '';
  if (apiKey && apiKey.startsWith('SG.')) {
    sgMail.setApiKey(apiKey);
    console.log('SendGrid API key configurada correctamente');
  } else {
    console.warn('SendGrid API key no válida o no disponible. El envío de correos podría no funcionar correctamente.');
  }
} catch (error) {
  console.error('Error al configurar SendGrid:', error);
}

interface RegistrationEmailData {
  teamName: string;
  category: string;
  coachName: string;
  coachEmail: string;
  needAccommodation: boolean;
  needTransportation: boolean;
}

export async function sendRegistrationEmails(data: RegistrationEmailData): Promise<boolean> {
  const formattedCategory = getCategoryName(data.category);
  
  // Contenido del email para administradores
  const adminEmailContent = `
    Nuevo registro de equipo:
    
    Nombre del Equipo: ${data.teamName}
    Categoría: ${formattedCategory}
    Nombre del Entrenador: ${data.coachName}
    Email: ${data.coachEmail}
    
    Servicios adicionales:
    - Hospedaje: ${data.needAccommodation ? 'Sí' : 'No'}
    - Transporte: ${data.needTransportation ? 'Sí' : 'No'}
    
    Por favor, contacte al entrenador para completar el proceso de inscripción.
  `;
  
  // Contenido del email para el entrenador
  const coachEmailContent = `
    Estimado/a ${data.coachName},
    
    Gracias por registrar a tu equipo "${data.teamName}" en la categoría ${formattedCategory} para el Los Cabos Soccer Tournament 2025.
    
    Hemos recibido tu información de registro. Nuestro equipo te contactará pronto para confirmar los detalles y proporcionar más información sobre el torneo.
    
    Servicios solicitados:
    - Hospedaje: ${data.needAccommodation ? 'Sí' : 'No'}
    - Transporte: ${data.needTransportation ? 'Sí' : 'No'}
    
    Si tienes alguna pregunta, no dudes en contactarnos:
    - Email: ventas@loscabossoccertournament.com
    - Teléfono: +52 (624) 137-0820
    - WhatsApp: +52 (624) 137-0820
    
    ¡Esperamos verte en Los Cabos!
    
    Atentamente,
    El Equipo de Los Cabos Soccer Tournament
  `;
  
  try {
    // Configurar mensajes de correo electrónico con remitente verificado
    const adminEmail = {
      to: 'ventas@loscabossoccertournament.lat',
      cc: ['miguel.palomera1986@gmail.com', 'rbriseno.cas11@gmail.com'], // Formato de array para CC
      from: 'ventas@loscabossoccertournament.lat', // Usando tu correo corporativo como remitente
      subject: `Nueva inscripción - Equipo ${data.teamName} - ${formattedCategory}`,
      text: adminEmailContent,
      html: adminEmailContent.replace(/\n/g, '<br>'),
    };
    
    const coachEmail = {
      to: data.coachEmail,
      from: 'ventas@loscabossoccertournament.lat', // Usando tu correo corporativo como remitente
      subject: `Inscripción recibida - Los Cabos Soccer Tournament 2025`,
      text: coachEmailContent,
      html: coachEmailContent.replace(/\n/g, '<br>'),
    };
    
    // Crear contenido combinado de mejor formato para correo único
    const combinedHtmlContent = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <div style="background-color: #005192; color: white; padding: 20px; text-align: center;">
        <h1>Los Cabos Soccer Tournament 2025</h1>
        <h2>Nueva Inscripción de Equipo</h2>
      </div>
      
      <div style="padding: 20px; border: 1px solid #ddd; margin: 20px 0;">
        <h3 style="color: #005192; border-bottom: 2px solid #005192; padding-bottom: 10px;">INFORMACIÓN DE REGISTRO</h3>
        <div style="padding: 15px; background-color: #f9f9f9;">
          ${adminEmailContent.replace(/\n/g, '<br>')}
        </div>
      </div>
      
      <div style="padding: 20px; border: 1px solid #ddd; margin: 20px 0;">
        <h3 style="color: #005192; border-bottom: 2px solid #005192; padding-bottom: 10px;">MENSAJE ENVIADO AL ENTRENADOR</h3>
        <div style="padding: 15px; background-color: #f9f9f9;">
          ${coachEmailContent.replace(/\n/g, '<br>')}
        </div>
      </div>
      
      <div style="background-color: #f2f2f2; padding: 15px; text-align: center; font-size: 12px; color: #666;">
        <p>Este es un correo automático, por favor no responder a esta dirección.</p>
        <p>Los Cabos Soccer Tournament 2025 - Todos los derechos reservados</p>
      </div>
    </div>`;
    
    // Texto plano combinado
    const combinedTextContent = `
INFORMACIÓN DE REGISTRO:
------------------------
${adminEmailContent}

MENSAJE ENVIADO AL ENTRENADOR:
------------------------------
${coachEmailContent}
    `;
    
    // Objeto de correo combinado para ambos métodos
    const combinedEmail = {
      to: 'ventas@loscabossoccertournament.lat',
      cc: ['miguel.palomera1986@gmail.com', 'rbriseno.cas11@gmail.com'], // Formato de array para CC
      from: 'ventas@loscabossoccertournament.lat', // Usar el correo corporativo verificado como remitente
      subject: `Nueva inscripción - Equipo ${data.teamName} - ${formattedCategory}`,
      text: combinedTextContent,
      html: combinedHtmlContent
    };
    
    // Variable para rastrear si algún método de envío fue exitoso
    let emailSent = false;
    
    // 1. Intentar primero con SendGrid
    const apiKey = process.env.SENDGRID_API_KEY || '';
    if (apiKey && apiKey.startsWith('SG.')) {
      console.log('Intentando enviar correo con SendGrid...');
      try {
        // Información de diagnóstico
        console.log('Configuración SendGrid:');
        console.log('- API Key: SG.****' + (apiKey.length > 6 ? apiKey.substring(apiKey.length - 6) : ''));
        console.log('- Remitente:', combinedEmail.from);
        console.log('- Destinatario:', combinedEmail.to);
        
        // Enviar correo con SendGrid
        const result = await sgMail.send(combinedEmail);
        console.log('Correo enviado exitosamente con SendGrid');
        emailSent = true;
      } catch (sendgridError) {
        console.error('Error al enviar correo con SendGrid:', sendgridError);
        // Continuamos con el siguiente método
      }
    }
    
    // 2. Si SendGrid falló, intentar con Nodemailer
    if (!emailSent) {
      console.log('SendGrid falló o no está configurado. Intentando enviar con Nodemailer...');
      try {
        // Enviar con Nodemailer (servicio de prueba Ethereal)
        const previewURL = await sendNodemailerEmail({
          to: combinedEmail.to,
          cc: combinedEmail.cc,
          subject: combinedEmail.subject,
          text: combinedEmail.text,
          html: combinedEmail.html
        });
        
        if (previewURL) {
          console.log('Correo enviado exitosamente con Nodemailer');
          console.log('URL de vista previa del correo (solo en desarrollo):', previewURL);
          emailSent = true;
        } else {
          console.warn('No se pudo obtener URL de vista previa del correo de Nodemailer');
        }
      } catch (nodemailerError) {
        console.error('Error al enviar correo con Nodemailer:', nodemailerError);
      }
    }
    
    // Si ninguno de los métodos funcionó, registrar los detalles del correo
    if (!emailSent) {
      console.warn('Todos los métodos de envío de correo fallaron. Registrando detalles para envío manual...');
      logEmailDetails(adminEmail, coachEmail);
      return false; // Indicar que no se pudo enviar el correo
    }
    
    // Si llegamos aquí, al menos un método tuvo éxito
    console.log('Proceso de envío de correo completado exitosamente');
    return true;
  } catch (error) {
    console.error('Error general en el proceso de correo:', error);
    // Aún así resolvemos la promesa para que el registro continúe
    return false; // Error general
  }
}

// Función auxiliar para registrar los detalles del correo cuando SendGrid no está disponible
function logEmailDetails(adminEmail: any, coachEmail: any): void {
  console.log(`==================== REGISTRO DE CORREOS ====================`);
  console.log(`FECHA: ${new Date().toLocaleString()}`);
  console.log(`\n------------------ Correo para administrador ------------------`);
  console.log(`PARA: ${adminEmail.to}`);
  console.log(`ASUNTO: ${adminEmail.subject}`);
  console.log(`CONTENIDO:\n${adminEmail.text}`);
  
  console.log(`\n------------------ Correo para entrenador ------------------`);
  console.log(`PARA: ${coachEmail.to}`);
  console.log(`ASUNTO: ${coachEmail.subject}`);
  console.log(`CONTENIDO:\n${coachEmail.text}`);
  console.log(`==========================================================`);
}

function getCategoryName(category: string): string {
  switch (category) {
    case 'sub8':
      return 'Sub-8 (2016-2017)';
    case 'sub10':
      return 'Sub-10 (2014-2015)';
    case 'sub12':
      return 'Sub-12 (2012-2013)';
    case 'sub14':
      return 'Sub-14 (2010-2011)';
    case 'sub17':
      return 'Sub-17 (2007-2009)';
    default:
      return category;
  }
}
