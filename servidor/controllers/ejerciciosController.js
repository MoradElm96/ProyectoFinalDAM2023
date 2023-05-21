const Ejercicio = require("../models/ejercicio");

const ejerciciosController = {

  // Controlador para obtener todos los ejercicios
  getEjercicios: async (req, res) => {
    try {
      const ejercicios = await Ejercicio.findAll(); // Obtener todos los ejercicios de la base de datos
      res.json(ejercicios); // Enviar la respuesta en formato JSON con los ejercicios
    } catch (error) {
      res.status(500).send("Ha ocurrido un error al obtener los ejercicios"); // En caso de error, enviar un mensaje de error con código 500
    }
  },

  // Controlador para obtener un ejercicio por su ID
  getEjercicioById: async (req, res) => {
    const { id } = req.params; // Obtener el ID del ejercicio de los parámetros de la solicitud
    try {
      const ejercicio = await Ejercicio.findByPk(id); // Buscar el ejercicio en la base de datos por su ID
      if (ejercicio) {
        res.json(ejercicio); // Si se encuentra el ejercicio, enviar la respuesta en formato JSON con el ejercicio
      } else {
        res.status(404).send("No se ha encontrado el ejercicio"); // Si no se encuentra el ejercicio, enviar un mensaje de error con código 404
      }
    } catch (error) {
      res.status(500).send("Ha ocurrido un error al obtener el ejercicio"); // En caso de error, enviar un mensaje de error con código 500
    }
  },


  createEjercicio: async (req, res) => {
    // Obtener los datos del ejercicio del cuerpo de la solicitud
    const {
      titulo,
      imagen,
      imagen2,
      descripcion,
      grupoMuscular,
      tipoEntrenamiento,
      tipoNivel,
    } = req.body;
  
    try {
      // Crear un nuevo ejercicio en la base de datos
      const nuevoEjercicio = await Ejercicio.create({
        titulo,
        imagen,
        imagen2,
        descripcion,
        grupoMuscular,
        tipoEntrenamiento,
        tipoNivel,
      });
  
      res.json(nuevoEjercicio); // Enviar la respuesta en formato JSON con el nuevo ejercicio creado
    } catch (error) {
      res.status(500).send("Ha ocurrido un error al crear el ejercicio"); // En caso de error, enviar un mensaje de error con código 500
    }
  },
  

  getEjerciciosByGrupoMuscular: async (req, res) => {
    const { grupoMuscular } = req.query; // Obtener el parámetro 'grupoMuscular' de la consulta
  
    let ejercicios;
  
    try {
      if (grupoMuscular === "Piernas") {
        // Si el grupo muscular es "Piernas"
        ejercicios = await Ejercicio.findAll({
          where: {
            grupoMuscular: {
              [Op.or]: ["Cuadriceps", "Gemelos"], // Obtener ejercicios de los grupos musculares "Cuadriceps" o "Gemelos"
            },
          },
        });
      } else if (grupoMuscular === "Brazos") {
        // Si el grupo muscular es "Brazos"
        ejercicios = await Ejercicio.findAll({
          where: {
            grupoMuscular: {
              [Op.or]: ["Biceps", "Triceps"], // Obtener ejercicios de los grupos musculares "Biceps" o "Triceps"
            },
          },
        });
      } else {
        // Si el grupo muscular no es "Piernas" ni "Brazos"
        ejercicios = await Ejercicio.findAll({
          where: {
            grupoMuscular: grupoMuscular, // Obtener ejercicios del grupo muscular especificado
          },
        });
      }
  
      res.json(ejercicios); // Enviar la respuesta en formato JSON con los ejercicios encontrados
    } catch (error) {
      res.status(500).send("Ha ocurrido un error al obtener los ejercicios"); // En caso de error, enviar un mensaje de error con código 500
    }
  },
  

  getEjerciciosByTipoEntrenamiento: async (req, res) => {
    const { tipoEntrenamiento } = req.query; // Obtener el parámetro 'tipoEntrenamiento' de la consulta
  
    try {
      const ejercicios = await Ejercicio.findAll({
        where: {
          tipoEntrenamiento: tipoEntrenamiento, // Obtener ejercicios del tipo de entrenamiento especificado
        },
      });
      res.json(ejercicios); // Enviar la respuesta en formato JSON con los ejercicios encontrados
    } catch (error) {
      res.status(500).send("Ha ocurrido un error al obtener los ejercicios"); // En caso de error, enviar un mensaje de error con código 500
    }
  },
  
  getEjerciciosByTipoNivel: async (req, res) => {
    const { tipoNivel } = req.query; // Obtener el parámetro 'tipoNivel' de la consulta
  
    try {
      const ejercicios = await Ejercicio.findAll({
        where: {
          tipoNivel: tipoNivel, // Obtener ejercicios del tipo de nivel especificado
        },
      });
      res.json(ejercicios); // Enviar la respuesta en formato JSON con los ejercicios encontrados
    } catch (error) {
      res.status(500).send("Ha ocurrido un error al obtener los ejercicios"); // En caso de error, enviar un mensaje de error con código 500
    }
  },
  

  buscarEjerciciosPorTitulo: async (req, res) => {
    const { titulo } = req.query; // Obtener el parámetro 'titulo' de la consulta
  
    try {
      const ejercicios = await Ejercicio.findAll({
        where: {
          titulo: {
            [Op.like]: `%${titulo}%`, // Buscar ejercicios cuyo título coincida parcialmente con el valor proporcionado
          },
        },
      });
      res.json(ejercicios); // Enviar la respuesta en formato JSON con los ejercicios encontrados
    } catch (error) {
      res.status(500).send("Ha ocurrido un error al obtener los ejercicios"); // En caso de error, enviar un mensaje de error con código 500
    }
  },
  
};

module.exports = ejerciciosController;
