const axios = require("axios");

//PETICIONES A LA API ALIMENTARIA ----> EDAMAM 

const nutricionController = {
  searchFoods: async (req, res) => {
    const APP_ID = "e74e80cf"; // Identificador de la aplicación en la API de Edamam
    const API_KEY = "b8f902a1b33b22d9c1e5112e9e4ed5d8"; // Clave de la API de Edamam
    const { foodName } = req.body; // Obtener el nombre del alimento de los datos enviados en el cuerpo de la solicitud
  
    const API_URL = `https://api.edamam.com/api/food-database/v2/parser?app_id=${APP_ID}&app_key=${API_KEY}&ingr=${encodeURIComponent(
      foodName
    )}&lc=es`; // Construir la URL de la API de Edamam con los parámetros necesarios
  
    try {
      const response = await axios.get(API_URL); // Realizar una solicitud GET a la API de Edamam utilizando la URL construida
      const food = response.data.hints[0].food; // Obtener la información del primer alimento devuelto en la respuesta
      const name = food.label; // Nombre del alimento
      const image = food.image; // URL de la imagen del alimento
      const calories = food.nutrients.ENERC_KCAL.toFixed(2); // Calorías del alimento (redondeadas a 2 decimales)
      const carbs = food.nutrients.CHOCDF.toFixed(2); // Carbohidratos del alimento (redondeados a 2 decimales)
      const fat = food.nutrients.FAT; // Grasas del alimento
  
      res.json({ name, image, calories, carbs, fat }); // Devolver una respuesta JSON con la información del alimento encontrado
    } catch (error) {
      console.error(error); // Registrar el error en la consola
      res.status(500).send("Error al buscar el alimento"); // Devolver una respuesta de error con código 500 indicando que ocurrió un error al buscar el alimento
    }
  },
  
  searchRecipes: async (req, res) => {
    const APP_ID = "260a0ddb"; // Identificador de la aplicación en la API de Edamam
    const API_KEY = "f68f30dec111346b295ec1bb521c8cfe"; // Clave de la API de Edamam
  
    try {
      const { foodName } = req.body; // Obtener el nombre del alimento de los datos enviados en el cuerpo de la solicitud
      const API_URL = `https://api.edamam.com/api/recipes/v2?type=public&q=${encodeURIComponent(
        foodName
      )}&lc=es&app_id=${APP_ID}&app_key=${API_KEY}`; // Construir la URL de la API de Edamam con los parámetros necesarios
  
      const response = await axios.get(API_URL); // Realizar una solicitud GET a la API de Edamam utilizando la URL construida
      const { hits } = response.data; // Obtener los resultados de recetas devueltos en la respuesta
  
      const recipes = hits.map((hit) => {
        const { recipe } = hit;
        const { label, image, url, yield: servings, calories } = recipe; // Extraer la información relevante de cada receta
        return { label, image, url, servings, calories }; // Crear un objeto con la información de la receta
      });
  
      res.json(recipes); // Devolver una respuesta JSON con las recetas encontradas
    } catch (error) {
      console.error(error); // Registrar el error en la consola
      res.status(500).send("Error al buscar las recetas"); // Devolver una respuesta de error con código 500 indicando que ocurrió un error al buscar las recetas
    }
  }
  
};

// Exportar la función
module.exports = nutricionController;
