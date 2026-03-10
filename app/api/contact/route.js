export async function POST(req) {
  // Validar método
  if (req.method !== 'POST') {
    return Response.json(
      { error: 'Método no permitido' },
      { status: 405 }
    );
  }

  try {
    const { email, nombre, empresa, mensaje, telefono } = await req.json();

    // Validación básica
    if (!email || !nombre || !mensaje) {
      return Response.json(
        { error: 'Campos requeridos faltantes' },
        { status: 400 }
      );
    }

    // Validar email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return Response.json(
        { error: 'Email inválido' },
        { status: 400 }
      );
    }

    // Aquí iría la lógica real de envío de email
    // Por ahora, simular envío exitoso
    console.log('📧 Contacto recibido:', { email, nombre, empresa, mensaje, telefono });

    // Guardar en base de datos o enviar email real
    // const result = await sendEmail({ email, nombre, empresa, mensaje, telefono });

    return Response.json(
      { 
        success: true, 
        message: 'Tu mensaje ha sido recibido. Nos pondremos en contacto pronto.' 
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error en API de contacto:', error);
    return Response.json(
      { error: 'Error al procesar el mensaje' },
      { status: 500 }
    );
  }
}

// Función para enviar email con Nodemailer (implementar según sea necesario)
// async function sendEmail(contactData) {
//   // Instalar nodemailer primero: npm install nodemailer
//   const nodemailer = require('nodemailer');
//   
//   const transporter = nodemailer.createTransport({
//     host: process.env.SMTP_HOST,
//     port: process.env.SMTP_PORT,
//     secure: true,
//     auth: {
//       user: process.env.SMTP_USER,
//       pass: process.env.SMTP_PASS,
//     },
//   });
//
//   const mailOptions = {
//     from: process.env.SMTP_USER,
//     to: process.env.CONTACT_EMAIL,
//     subject: `Nuevo contacto de ${contactData.nombre} - Lex Iuridicus`,
//     html: `
//       <h2>Nuevo mensaje de contacto</h2>
//       <p><strong>Nombre:</strong> ${contactData.nombre}</p>
//       <p><strong>Email:</strong> ${contactData.email}</p>
//       <p><strong>Teléfono:</strong> ${contactData.telefono || 'No proporcionado'}</p>
//       <p><strong>Empresa:</strong> ${contactData.empresa || 'No especificada'}</p>
//       <p><strong>Mensaje:</strong></p>
//       <p>${contactData.mensaje}</p>
//     `,
//     replyTo: contactData.email,
//   };
//
//   return transporter.sendMail(mailOptions);
// }
