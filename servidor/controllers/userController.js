const User = require("../models/user"); // Importar el modelo "User"
const bcrypt = require("bcrypt"); // Importar la librería bcrypt para el cifrado de contraseñas
const { verifyToken } = require("../utils/utilToken"); // Importar una función para verificar tokens

const userController = {
  listUsers: async (req, res) => {
    try {
      const users = await User.findAll(); // Obtener todos los usuarios de la base de datos
      res.json(users); // Devolver los usuarios en formato JSON como respuesta
    } catch (error) {
      console.log(error); // Registrar el error en la consola
      res.status(500).json({ message: "Error en el servidor" }); // Devolver una respuesta de error con código 500 indicando que ocurrió un error en el servidor
    }
  },

  getUserById: async (req, res) => {
    const { id } = req.params; // Obtener el ID del usuario de los parámetros de la solicitud
    try {
      const user = await User.findOne({ where: { id } }); // Buscar el usuario por su ID en la base de datos
      if (!user) {
        res.status(404).json({ message: "Usuario no encontrado" }); // Si el usuario no existe, devolver una respuesta de error con código 404 indicando que el usuario no fue encontrado
        return;
      }
      res.json(user); // Devolver el usuario en formato JSON como respuesta
    } catch (error) {
      console.log(error); // Registrar el error en la consola
      res.status(500).json({ message: "Error en el servidor" }); // Devolver una respuesta de error con código 500 indicando que ocurrió un error en el servidor
    }
  },
  createUser: async (req, res) => {
    const { nombre, apellido, edad, peso, email, contrasena, rol } = req.body;
    try {
      const hashedPassword = await bcrypt.hash(contrasena, 10); // Encriptar la contraseña utilizando bcrypt
      const user = await User.create({
        nombre,
        apellido,
        edad,
        peso,
        email,
        contrasena: hashedPassword, // Guardamos la contraseña encriptada
        rol,
      }); // Crear un nuevo usuario en la base de datos con los datos proporcionados
      res.json(user); // Devolver el usuario creado en formato JSON como respuesta
    } catch (error) {
      console.log(error); // Registrar el error en la consola
      res.status(500).json({ message: "Error en el servidor" }); // Devolver una respuesta de error con código 500 indicando que ocurrió un error en el servidor
    }
  },

  updateUserById: async (req, res) => {
    const { id } = req.params; // Obtener el ID del usuario de los parámetros de la solicitud
    const { nombre, apellido, edad, peso, email, contrasena, rol } = req.body; // Obtener los datos actualizados del usuario de los datos enviados en el cuerpo de la solicitud
    try {
      const user = await User.findOne({ where: { id } }); // Buscar el usuario por su ID en la base de datos
      if (!user) {
        res.status(404).json({ message: "Usuario no encontrado" }); // Si el usuario no existe, devolver una respuesta de error con código 404 indicando que el usuario no fue encontrado
        return;
      }
      // Actualizar los campos del usuario con los nuevos valores proporcionados en caso de que se hayan proporcionado, de lo contrario, mantener los valores existentes
      user.nombre = nombre || user.nombre;
      user.apellido = apellido || user.apellido;
      user.edad = edad || user.edad;
      user.peso = peso || user.peso;
      user.email = email || user.email;
      user.contrasena = contrasena || user.contrasena;
      user.rol = rol || user.rol;
      await user.save(); // Guardar los cambios en la base de datos
      res.json(user); // Devolver el usuario actualizado en formato JSON como respuesta
    } catch (error) {
      console.log(error); // Registrar el error en la consola
      res.status(500).json({ message: "Error en el servidor" }); // Devolver una respuesta de error con código 500 indicando que ocurrió un error en el servidor
    }
  },

  deleteUserById: async (req, res) => {
    const { id } = req.params; // Obtener el ID del usuario de los parámetros de la solicitud
    try {
      const user = await User.findOne({ where: { id } }); // Buscar el usuario por su ID en la base de datos
      if (!user) {
        res.status(404).json({ message: "Usuario no encontrado" }); // Si el usuario no existe, devolver una respuesta de error con código 404 indicando que el usuario no fue encontrado
        return;
      }
      await user.destroy(); // Eliminar el usuario de la base de datos
      res.json({ message: "Usuario eliminado correctamente" }); // Devolver una respuesta exitosa indicando que el usuario fue eliminado correctamente
    } catch (error) {
      console.log(error); // Registrar el error en la consola
      res.status(500).json({ message: "Error en el servidor" }); // Devolver una respuesta de error con código 500 indicando que ocurrió un error en el servidor
    }
  },

  login: async (req, res) => {
    const { email, password } = req.body; // Obtener el correo electrónico y la contraseña de los datos enviados en el cuerpo de la solicitud
    try {
      const user = await User.findOne({ where: { email } }); // Buscar al usuario por su correo electrónico en la base de datos
      if (!user) {
        return res.status(401).json({
          message: "El correo electrónico es incorrecto o no existe", // Si el usuario no existe, devolver una respuesta de error con código 401 indicando que el correo electrónico es incorrecto o no existe
          success: false,
        });
      }
      // Comparar la contraseña proporcionada con la contraseña almacenada utilizando bcrypt
      const passwordMatch = await bcrypt.compare(password, user.contrasena);
      if (!passwordMatch) {
        return res
          .status(401)
          .json({ message: "Contraseña incorrecta.", success: false }); // Si la contraseña no coincide, devolver una respuesta de error con código 401 indicando que la contraseña es incorrecta
      }

      res.json({ message: "Inicio de sesión exitoso", success: true }); // Si la autenticación es exitosa, devolver una respuesta exitosa indicando que el inicio de sesión fue exitoso
    } catch (error) {
      console.log(error); // Registrar el error en la consola
      res.status(500).json({ message: "Error en el servidor" }); // Devolver una respuesta de error con código 500 indicando que ocurrió un error en el servidor
    }
  },

  registrar: async (req, res) => {
    const data = req.body; // Obtener los datos del cuerpo de la solicitud
    const { nombre, apellido, edad, peso, email, contrasena, rol } = req.body; // Obtener los campos específicos de los datos del usuario

    try {
      const saltRounds = 10; // Número de rounds que se utilizarán para generar la salt
      const salt = await bcrypt.genSalt(saltRounds); // Generar la salt utilizando bcrypt

      const hashedPassword = await bcrypt.hash(contrasena, 10); // Encriptar la contraseña utilizando bcrypt y la salt generada
      const user = await User.create({
        nombre,
        apellido,
        edad,
        peso,
        email,
        contrasena: hashedPassword, // Guardar la contraseña encriptada
        rol,
      }); // Crear un nuevo usuario en la base de datos con los datos proporcionados
      res.json(user); // Devolver el usuario creado en formato JSON como respuesta
    } catch (error) {
      console.log(error); // Registrar el error en la consola
      res.status(500).json({ message: "Error en el servidor" }); // Devolver una respuesta de error con código 500 indicando que ocurrió un error en el servidor
    }
  },

  updateUserPasswordById: async (req, res) => {
    const { id } = req.params; // Obtener el ID del usuario de los parámetros de la solicitud
    const { contrasena } = req.body; // Obtener la nueva contraseña del cuerpo de la solicitud
    const token = req.query.token; // Obtener el token de autenticación de la consulta

    try {
      const user = await User.findOne({ where: { id } }); // Buscar al usuario por su ID en la base de datos
      if (!user) {
        res.status(404).json({ message: "Usuario no encontrado" }); // Si el usuario no existe, devolver una respuesta de error con código 404 indicando que el usuario no fue encontrado
        return;
      }

      if (!token) {
        return res.status(401).send({ message: "Token no provisto" }); // Si el token no está presente, devolver una respuesta de error con código 401 indicando que el token no fue proporcionado
      }

      try {
        verifyToken(token); // Verificar si el token es válido utilizando una función llamada `verifyToken` (no se muestra en el código proporcionado)
      } catch (error) {
        res.status(401).send({ message: "Token inválido" }); // Si el token no es válido, devolver una respuesta de error con código 401 indicando que el token es inválido
        return;
      }

      const hashedPassword = await bcrypt.hash(contrasena, 10); // Encriptar la nueva contraseña utilizando bcrypt y la salt generada
      user.contrasena = hashedPassword; // Actualizar la contraseña del usuario en la base de datos con la nueva contraseña encriptada
      await user.save(); // Guardar los cambios en la base de datos
      res.json(user); // Devolver el usuario actualizado en formato JSON como respuesta
    } catch (error) {
      console.log(error); // Registrar el error en la consola
      res.status(500).json({ message: "Error en el servidor" }); // Devolver una respuesta de error con código 500 indicando que ocurrió un error en el servidor
    }
  },

  actualizarPasswordById: async (req, res) => {
    const { id } = req.params; // Obtener el ID del usuario de los parámetros de la solicitud
    const { contrasena } = req.body; // Obtener la nueva contraseña del cuerpo de la solicitud
    try {
      const user = await User.findOne({ where: { id } }); // Buscar al usuario por su ID en la base de datos
      if (!user) {
        res.status(404).json({ message: "Usuario no encontrado" }); // Si el usuario no existe, devolver una respuesta de error con código 404 indicando que el usuario no fue encontrado
        return;
      }
      const hashedPassword = await bcrypt.hash(contrasena, 10); // Encriptar la nueva contraseña utilizando bcrypt y la salt generada
      user.contrasena = hashedPassword; // Actualizar la contraseña del usuario en la base de datos con la nueva contraseña encriptada
      await user.save(); // Guardar los cambios en la base de datos
      res.json(user); // Devolver el usuario actualizado en formato JSON como respuesta
    } catch (error) {
      console.log(error); // Registrar el error en la consola
      res.status(500).json({ message: "Error en el servidor" }); // Devolver una respuesta de error con código 500 indicando que ocurrió un error en el servidor
    }
  },

  obtenerIdUsuario: async (req, res) => {
    const { email } = req.query; // Obtener el correo electrónico de la consulta
    try {
      const usuario = await User.findOne({ where: { email } }); // Buscar al usuario por su correo electrónico en la base de datos
      if (!usuario) {
        res.status(404).json({ message: "Usuario no encontrado" }); // Si el usuario no existe, devolver una respuesta de error con código 404 indicando que el usuario no fue encontrado
        return;
      }
      res.json({ id: usuario.id }); // Devolver el ID del usuario en formato JSON como respuesta
    } catch (error) {
      console.log(error); // Registrar el error en la consola
      res.status(500).json({ message: "Error en el servidor" }); // Devolver una respuesta de error con código 500 indicando que ocurrió un error en el servidor
    }
  },

  compararHashContrasena: async (req, res) => {
    const { id } = req.params;
    // Obtenemos el ID del usuario y la contraseña proporcionada en la solicitud
    const { password } = req.body;
    //console.log(password);
    try {
      // Buscamos al usuario por su ID
      const user = await User.findOne({ where: { id } });
      // Si el usuario no existe, enviamos un error
      if (!user) {
        return res.status(401).json({
          message: "El usuario no existe",
          success: false,
        });
      }

      //console.log(password);
      //Comparamos la contraseña proporcionada con el hash de la contraseña almacenada de forma segura usando bcrypt
      const passwordMatch = await bcrypt.compare(password, user.contrasena);
      //console.log(user.contrasena);
      if (!passwordMatch) {
        return res
          .status(401)
          .json({ message: "Contraseña incorrecta.", success: false });
      }
      //Enviamos una respuesta exitosa
      res.json({ message: "Inicio de sesión exitoso", success: true });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Error en el servidor" });
    }
  },
};

module.exports = userController;
