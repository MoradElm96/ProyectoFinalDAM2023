const { Sequelize } = require('sequelize');
require('dotenv').config();

// Crea una instancia de Sequelize para establecer la conexión a la base de datos
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: 'mysql',
  // Para poder conectarse a un servidor de base de datos que sea HTTPS
  // dialectOptions: {
  //   ssl: {
  //     require: true,
  //     rejectUnauthorized: false // Opción para evitar el rechazo de certificados no autorizados
  //   }
  // }
});

// Función asincrónica para autenticar la conexión a la base de datos
async function connectToDatabase() {
  try {
    await sequelize.authenticate();
    console.log('Conexión a la base de datos establecida correctamente.');
  } catch (error) {
    console.error('No se pudo conectar a la base de datos:', error);
  }
}

// Exporta la instancia de Sequelize y la función de conexión a la base de datos
module.exports = { sequelize, connectToDatabase };
