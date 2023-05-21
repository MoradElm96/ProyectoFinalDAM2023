const Favorito = require('../models/favoritos');

const favController = {
  createFavorito: async (req, res) => {
    const { id_usuario, id_ejercicio, ejercicio } = req.body; // Obtener los datos necesarios del cuerpo de la solicitud
    try {
      // Crear un nuevo favorito utilizando los datos proporcionados
      const favorito = await Favorito.create({
        id_usuario,
        id_ejercicio,
        ejercicio
      });
      res.json(favorito); // Devolver el favorito creado en formato JSON
      // res.json({ message: "Ejercicio marcado como favorito" }); // También puedes devolver un mensaje de éxito si lo prefieres
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'Hubo un error al crear el favorito' }); // En caso de error, devolver un mensaje de error con código 500
    }
  },

  obtenerFavoritos: async (req, res) => {
    const { id_usuario } = req.params; // Obtener el ID de usuario de los parámetros de la solicitud
    try {
      const favoritos = await Favorito.findAll({
        where: { id_usuario: id_usuario } // Buscar todos los favoritos asociados al ID de usuario proporcionado
      });
  
      if (favoritos.length === 0) {
        res.status(200).json({ mensaje: "No hay favoritos." }); // Si no se encuentran favoritos, devolver un mensaje indicando que no hay favoritos
        // console.log("tabla vacia");
      } else {
        res.status(200).json(favoritos); // Si se encuentran favoritos, devolver los favoritos encontrados en formato JSON
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({ mensaje: "Hubo un error al obtener los favoritos." }); // En caso de error, devolver un mensaje de error con código 500
    }
  },
  
  deleteFavoritos: async (req, res) => {
    const { favoritosAEliminar } = req.body; // Obtener los IDs de los favoritos a eliminar de los datos enviados en el cuerpo de la solicitud
    try {
      const result = await Favorito.destroy({
        where: {
          id: favoritosAEliminar, // Eliminar los favoritos cuyos IDs coincidan con los proporcionados
        },
      });
  
      if (!result) {
        console.log(`El favorito con id ${id} no existe`); // Si no se encuentra ningún favorito con los IDs proporcionados, registrar en la consola un mensaje indicando que el favorito no existe
        res.status(404).json({ message: 'El favorito no existe' }); // Devolver una respuesta con código 404 indicando que el favorito no existe
      }
      //console.log(`Se eliminaron ${result} favoritos`);
      res.json({ message: 'Favoritos eliminados exitosamente' }); // Devolver una respuesta exitosa indicando que los favoritos han sido eliminados correctamente
    } catch (error) {
      console.error(`Hubo un error al eliminar los favoritos: ${error}`); // Registrar el error en la consola
      res.status(500).json({ message: 'Hubo un error al eliminar los favoritos' }); // Devolver una respuesta de error con código 500 indicando que ocurrió un error al eliminar los favoritos
    }
  }
  
      
}
module.exports = favController;
