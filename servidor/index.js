const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const userRoutes = require('./routes/userRoutes');
const { connectToDatabase } = require('./config/db');
//const cookieParser = require("cookie-parser");
const session = require("express-session");
const User = require("./models/user");




const path = require('path');
const dotenv = require('dotenv');
dotenv.config({ path: path.resolve(__dirname, '.env') });


// Constante app
const app = express();

// Middleware para permitir solicitudes de otros dominios
// Permitir solicitudes CORS desde cualquier origen y con credenciales
app.use(cors({
  origin: true,
  credentials: true
}));

User.sync({force: false});

// Middleware para analizar solicitudes entrantes con el tipo de contenido JSON

app.use(bodyParser.json()); // middleware para analizar JSON
app.use(bodyParser.urlencoded({ extended: true })); // middleware para analizar datos de formulario


//app.use(cookieParser());


app.use(session({
  secret: 'millavesecreta',// una clave secreta para firmar la cookie de sesión
  resave: false, // no guardar la sesión en cada petición
  saveUninitialized: false // no guardar sesiones vacías
}));

// Configuración de las rutas
//app.use(userRoutes);

//ruta base "/api" a las rutas
app.use('/api', userRoutes);

const PORT = process.env.PORT || 4000;

// // Conexión a la base de datos
connectToDatabase()
  .then(() => {
    //console.log('Conexión a la base de datos establecida');
  })
  .catch((err) => {
    console.error('Error al conectarse a la base de datos: ', err);
  });


app.listen(PORT, () =>
  console.log(`Servidor escuchando en el puerto: ${PORT}`)
);