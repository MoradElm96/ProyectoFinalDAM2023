create database proyectobd;
use proyectobd;

CREATE TABLE `tipousuario` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `tipo` varchar(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `tipousuario` (`id`, `tipo`) VALUES
(1, 'admin'),
(2, 'normal');



CREATE TABLE `ejercicios` (
  `idEjercicio` int(11) NOT NULL AUTO_INCREMENT,
  `titulo` varchar(100) NOT NULL,
  `imagen` varchar(255) NOT NULL,
  `imagen2` varchar(255) NOT NULL,
  `descripcion` text NOT NULL,
  `grupoMuscular` varchar(100) DEFAULT NULL,
  `tipoEntrenamiento` varchar(100) DEFAULT NULL,
  `tipoNivel` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`idEjercicio`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;


CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) NOT NULL,
  `apellido` varchar(50) NOT NULL,
  `edad` int(11) DEFAULT NULL,
  `peso` int(11) DEFAULT NULL,
  `email` varchar(100) UNIQUE NOT NULL ,
  `contrasena` varchar(100) NOT NULL,
  `rol` int(11) NOT NULL,
  FOREIGN KEY (`rol`) REFERENCES `tipousuario` (`id`),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE `favoritos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_usuario` int(11) NOT NULL,
  `id_ejercicio` int(11) NOT NULL,
  `ejercicio` varchar(20) NOT NULL,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id`),
  FOREIGN KEY (`id_ejercicio`) REFERENCES `ejercicios` (`idEjercicio`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;



