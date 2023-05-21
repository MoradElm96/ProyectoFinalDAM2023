const jwt = require('jsonwebtoken');
require("dotenv").config();

// Función para generar un token JWT
function generateToken(userId) {
  // Crea un token utilizando el método sign de jwt
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: '24h' });
  return token;
}

// Función para verificar si un token es válido
function verifyToken(token) {
  try {
    // Verifica y decodifica el token utilizando el método verify de jwt
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    return decoded;
  } catch (error) {
    // Si el token es inválido o ha expirado, lanza un error
    throw new Error('Token inválido');
  }
}

// Exporta las funciones generateToken y verifyToken
module.exports = { generateToken, verifyToken };
