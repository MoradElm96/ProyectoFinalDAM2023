const User = require("../models/user");
const nodemailer = require("nodemailer");
require("dotenv").config();
const { generateToken } = require("../utils/utilToken");


const emailController = {

  sendMail: async (req, res) => {
    const { email } = req.body; // Obtener el correo electrónico del cuerpo de la solicitud
  
    try {
      const user = await User.findOne({ where: { email } }); // Buscar un usuario con el correo electrónico proporcionado
  
      if (!user) {
        return res.status(404).send({
          message: "No se encontró ningún usuario con esa dirección de correo electrónico.", // Si no se encuentra ningún usuario, devolver un mensaje de error con código 404
        });
      }
  
      // Configurar el transporte de correo con los detalles proporcionados en las variables de entorno
      const transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        secure: false,
        auth: {
          user: process.env.EMAIL_ADDRESS,
          pass: process.env.EMAIL_PASSWORD,
        },
        tls: {
          rejectUnauthorized: false,
        },
      });
  
      // Verificar la configuración del transporte de correo
      transporter.verify().then(() => {
        // console.log("Ready for send emails");
      });
  
      // Generar el enlace de restablecimiento de contraseña utilizando el ID del usuario y un token generado
      const resetLink = `${process.env.SERVERCLIENTE}/resetpassword/${user.id}?token=${generateToken(user.id)}`;
  
      // Configurar las opciones del correo electrónico
      const mailOptions = {
        from: "ProyectoMorad@gmail.com",
        to: `${user.email}`,
        subject: "Restablecer la contraseña",
        html: `
          <p>Hola ${user.nombre}</p>
          <p>Haga clic en el siguiente enlace para restablecer su contraseña:</p>
          <a href="${resetLink}">${resetLink}</a>
          <p>Este enlace caducará en 24 horas.</p>
          <p>Si no ha solicitado restablecer su contraseña, ignore este mensaje.</p>
        `,
      };
  
      // Enviar el correo electrónico utilizando el transporte de correo configurado
      transporter.sendMail(mailOptions, (err, response) => {
        if (err) {
          // console.log("Ha ocurrido un error:", err);
          return res.status(500).send({
            message: "Ha ocurrido un error al enviar el correo electrónico de restablecimiento de contraseña.", // En caso de error, devolver un mensaje de error con código 500
          });
        } else {
          // console.log("Respuesta: ", response);
          return res.status(200).send({
            message: "El correo electrónico de restablecimiento de contraseña se ha enviado correctamente.", // Si se envía correctamente, devolver un mensaje de éxito con código 200
          });
        }
      });
    } catch (error) {
      console.log(error);
      return res.status(500).send({
        message: "Ha ocurrido un error al procesar la solicitud de restablecimiento de contraseña.", // En caso de error durante el procesamiento, devolver un mensaje de error con código 500
      });
    }
  },
  


sendContactMail: async (req, res) => {
  const { nombre, numero, email, asunto, mensaje } = req.body; // Obtener los datos del formulario de contacto

  try {
    // Configurar el transporte de correo con los detalles proporcionados en las variables de entorno
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      secure: false,
      auth: {
        user: process.env.EMAIL_ADDRESS,
        pass: process.env.EMAIL_PASSWORD,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    // Verificar la configuración del transporte de correo
    transporter.verify().then(() => {
      // console.log("Ready for send emails");
    });

    // Configurar las opciones del correo electrónico
    const mailOptions = {
      from: email,
      to: process.env.EMAIL_ADDRESS,
      subject: asunto,
      html: `
        <p>Nombre: ${nombre}</p>
        <p>Teléfono: ${numero}</p>
        <p>Email: ${email}</p>
        <p>Mensaje:</p>
        <p>${mensaje}</p>
      `,
    };

    // Enviar el correo electrónico utilizando el transporte de correo configurado
    transporter.sendMail(mailOptions, (err, response) => {
      if (err) {
        // console.log("Ha ocurrido un error:", err);
        return res.status(500).send({
          message: "Ha ocurrido un error al enviar el correo electrónico de contacto.", // En caso de error, devolver un mensaje de error con código 500
        });
      } else {
        //console.log("Respuesta: ", response);
        return res.status(200).send({
          message: "El correo electrónico de contacto se ha enviado correctamente.", // Si se envía correctamente, devolver un mensaje de éxito con código 200
        });
      }
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      message: "Ha ocurrido un error al procesar la solicitud de contacto.", // En caso de error durante el procesamiento, devolver un mensaje de error con código 500
    });
  }
},

};

module.exports = emailController;
