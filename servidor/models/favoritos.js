const { sequelize } = require('../config/db');
const { DataTypes } = require('sequelize');
const Ejercicio = require('./ejercicio');
const Usuario = require('./user');

// Define el modelo de Favorito utilizando la instancia de Sequelize (sequelize)
const Favorito = sequelize.define('favorito', {
  // Definición de las columnas de la tabla 'favoritos'
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true
  },
  id_usuario: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Usuario,
      key: 'id'
    }
  },
  id_ejercicio: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Ejercicio,
      key: 'idEjercicio'
    },
    onDelete: 'CASCADE'
  },
  ejercicio: {
    type: DataTypes.STRING(20),
    allowNull: false
  }
}, {
  tableName: 'favoritos', // Nombre de la tabla en la base de datos
  timestamps: false // Desactiva el registro automático de las columnas createdAt y updatedAt
});

// Exporta el modelo Favorito para utilizarlo en otros archivos
module.exports = Favorito;
