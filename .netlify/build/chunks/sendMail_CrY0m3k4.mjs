import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  auth: {
    user: "jtogni.developer@gmail.com",
    pass: "wchzfezodtigjefz"
  }
});

const POST = async ({
  request
}) => {
  const data = await request.formData();
  const nombre = data.get("nombre");
  const email = data.get("email");
  const tel = data.get("telefono");
  const msj = data.get("mensaje");
  const obtenerPropuesta = data.get("ObtenerPropuesta");
  const agendarReunion = data.get("AgendarReunion");
  const mailOptions = {
    from: "jtogni.developer@gmail.com",
    to: "info@panambi.net",
    subject: "Nuevo contacto desde pagina web",
    text: `Los datos del formulario son 
      Nombre: ${nombre}
      Email: ${email}
      Telefono: ${tel}
      Mensaje: ${msj}
      ObtenerPropuesta: ${obtenerPropuesta}
      AgendarReunion: ${agendarReunion}`
  };
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
    } else {
      console.log("Email sent: " + info.messageId);
    }
  });
  return new Response(JSON.stringify({
    message: "Missing required fields"
  }), {
    status: 400
  });
};

export { POST };
