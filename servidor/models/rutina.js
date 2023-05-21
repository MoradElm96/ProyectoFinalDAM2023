const { sequelize } = require('../config/db');
const { DataTypes } = require('sequelize');

// Define el modelo de Rutina utilizando la instancia de Sequelize (sequelize)
const Rutina = sequelize.define('rutina', {
  // Definición de las columnas de la tabla 'rutinas'
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  objetivo: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  dia_semana: {
    type: DataTypes.STRING(20),
    allowNull: false
  },
  ejercicio: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  repeticiones: {
    type: DataTypes.STRING(20),
    allowNull: false
  },
  sets: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
},
{
  tableName: 'rutinas', // Nombre de la tabla en la base de datos
  timestamps: false // Desactiva el registro automático de las columnas createdAt y updatedAt
});

// Exporta el modelo Rutina para utilizarlo en otros archivos
module.exports = Rutina;
