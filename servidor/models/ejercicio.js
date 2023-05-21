const { sequelize } = require('../config/db');
const { DataTypes } = require('sequelize');

// Define el modelo de Ejercicio utilizando la instancia de Sequelize (sequelize)
const Ejercicio = sequelize.define('ejercicio', {
  // Definición de las columnas de la tabla 'ejercicios'
  idEjercicio: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  titulo: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  imagen: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  imagen2: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  descripcion: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  grupoMuscular: {
    type: DataTypes.STRING(100),
    allowNull: true,
  },
  tipoEntrenamiento: {
    type: DataTypes.STRING(100),
    allowNull: true,
  },
  tipoNivel: {
    type: DataTypes.STRING(100),
    allowNull: true,
  },
}, {
  timestamps: false, // Desactiva el registro automático de las columnas createdAt y updatedAt
  tableName: 'ejercicios', // Nombre de la tabla en la base de datos
});

// Exporta el modelo Ejercicio para utilizarlo en otros archivos
module.exports = Ejercicio;
