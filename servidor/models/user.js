const { sequelize } = require('../config/db');
const { DataTypes } = require('sequelize');

// Define el modelo de User utilizando la instancia de Sequelize (sequelize)
const User = sequelize.define('user', {
  // Definición de las columnas de la tabla 'usuarios'
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
    onDelete: 'CASCADE'
  },
  nombre: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  apellido: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  edad: {
    type: DataTypes.INTEGER,
    defaultValue: null,
  },
  peso: {
    type: DataTypes.INTEGER,
    defaultValue: null,
  },
  email: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  contrasena: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  rol: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 2,
  },
}, {
  tableName: 'usuarios', // Nombre de la tabla en la base de datos
  timestamps: false, // Desactiva el registro automático de las columnas createdAt y updatedAt
});

// Exporta el modelo User para utilizarlo en otros archivos
module.exports = User;
