export async function POST(req) {
  try {
    const payload = await req.json();

    const email = payload.email;
    const nombre = payload.nombre || payload.name;
    const empresa = payload.empresa || payload.company || '';
    const mensaje = payload.mensaje || payload.message;
    const telefono = payload.telefono || payload.phone || '';

    if (!email || !nombre || !mensaje) {
      return Response.json(
        { error: 'Campos requeridos faltantes' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return Response.json(
        { error: 'Email inválido' },
        { status: 400 }
      );
    }

    console.log('📧 Contacto recibido:', { email, nombre, empresa, mensaje, telefono });

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
