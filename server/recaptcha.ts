import fetch from 'node-fetch';

/**
 * Verifica un token de reCAPTCHA con la API de Google
 * @param token - El token de reCAPTCHA recibido del cliente
 * @returns true si la verificación fue exitosa, false en caso contrario
 */
export async function verifyRecaptcha(token: string): Promise<boolean> {
  if (!token) return false;
  
  try {
    const secretKey = process.env.RECAPTCHA_SECRET_KEY;
    if (!secretKey) {
      console.error('RECAPTCHA_SECRET_KEY no está configurada');
      return false;
    }
    
    const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `secret=${secretKey}&response=${token}`,
    });
    
    const data = await response.json() as { success: boolean, score?: number };
    
    if (data.success) {
      console.log('Verificación reCAPTCHA exitosa', data);
      return true;
    } else {
      console.error('Verificación reCAPTCHA fallida', data);
      return false;
    }
  } catch (error) {
    console.error('Error al verificar reCAPTCHA:', error);
    return false;
  }
}