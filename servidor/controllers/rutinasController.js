const Rutina = require("../models/rutina"); // Importar el modelo "Rutina"

const rutinasController = {
  obtenerRutinas: async (req, res) => {
    try {
      const rutinas = await Rutina.findAll(); // Obtener todas las rutinas de la base de datos
      res.json(rutinas); // Devolver las rutinas en formato JSON como respuesta
    } catch (error) {
      console.log(error); // Registrar el error en la consola
      res.status(500).json({ mensaje: 'Hubo un error' }); // Devolver una respuesta de error con código 500 indicando que ocurrió un error al obtener las rutinas
    }
  },

  obtenerRutinasPorObjetivo: async (req, res) => {
    try {
      const objetivo = req.params.objetivo; // Obtener el objetivo de los parámetros de la solicitud
      const rutinas = await Rutina.findAll({ where: { objetivo } }); // Obtener las rutinas que coinciden con el objetivo especificado
      res.json(rutinas); // Devolver las rutinas en formato JSON como respuesta
    } catch (error) {
      console.log(error); // Registrar el error en la consola
      res.status(500).json({ mensaje: 'Hubo un error' }); // Devolver una respuesta de error con código 500 indicando que ocurrió un error al obtener las rutinas
    }
  }
};

module.exports = rutinasController; // Exportar el controlador

