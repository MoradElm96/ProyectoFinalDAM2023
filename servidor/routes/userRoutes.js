const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const emailController = require('../controllers/emailController');
const ejerciciosController = require('../controllers/ejerciciosController');
const favController = require('../controllers/favoritoControlador');
const rutinasController = require('../controllers/rutinasController');
const nutricionController = require('../controllers/nutricionController');

// Definir la ruta base "/api"
router.use('/api', (req, res, next) => {
  next();
});

//ruta para crear un usuario
router.post('/users', userController.createUser);
//ruta para obtener todos los usuarios
router.get('/users', userController.listUsers);
//ruta para obtener un usuario por su ID
router.get('/users/:id', userController.getUserById);
//ruta para actualizar un usuario por su ID
router.post('/users/update/:id', userController.updateUserById);


//ruta para eliminar un usuario por su ID
router.delete('/users/:id', userController.deleteUserById);


router.post('/compararClave/:id', userController.compararHashContrasena);



//enpoints para el login
router.post('/login', userController.login);
router.post('/register', userController.registrar);
router.post('/forgotpassword', emailController.sendMail);

//enpoints para reset password
router.put('/resetpassword/:id', userController.updateUserPasswordById);
router.put('/users/:id', userController.actualizarPasswordById);
router.get('/usuario', userController.obtenerIdUsuario);



// Endpoints para los ejercicios
router.get('/ejercicios', ejerciciosController.getEjercicios);
router.get('/ejercicios/:id', ejerciciosController.getEjercicioById);
router.post('/ejercicios', ejerciciosController.createEjercicio);
router.get('/ejercicios/grupoMuscular', ejerciciosController.getEjerciciosByGrupoMuscular);
router.get('/ejercicios/tipoEntrenamiento', ejerciciosController.getEjerciciosByTipoEntrenamiento);
router.get('/ejercicios/tipoNivel', ejerciciosController.getEjerciciosByTipoNivel);
router.get('/ejercicios/buscar/:titulo', ejerciciosController.buscarEjerciciosPorTitulo); // Nueva ruta
//router.delete('/menu/:id', ejerciciosController.deleteEjercicio);


//Rutas para favoritos
router.post('/favoritos', favController.createFavorito);
router.get('/favoritos-usuario/:id_usuario', favController.obtenerFavoritos);
//router.delete('/favoritos/:id', favController.deleteFavoritos);
router.delete('/favoritos', favController.deleteFavoritos);


//rutinas
router.get('/rutinas', rutinasController.obtenerRutinas);
router.get('/rutinas/:objetivo', rutinasController.obtenerRutinasPorObjetivo);



//enpoints para hacer consulta a la api ,alimento
router.get('/food', nutricionController.searchFoods);
router.post('/food', nutricionController.searchFoods);

//enpoints para buscar platos o recetas
router.get('/recipe', nutricionController.searchRecipes);
router.post('/recipe', nutricionController.searchRecipes);

//enpoint para fomulario de contacto
router.post('/contacto', emailController.sendContactMail);

module.exports = router;
