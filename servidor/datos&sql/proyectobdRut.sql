-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 07-05-2023 a las 22:11:48
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `proyectobd`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ejercicios`
--

CREATE TABLE `ejercicios` (
  `idEjercicio` int(11) NOT NULL,
  `titulo` varchar(100) NOT NULL,
  `imagen` varchar(255) NOT NULL,
  `imagen2` varchar(255) NOT NULL,
  `descripcion` varchar(2000) CHARACTER SET utf8 COLLATE utf8_spanish2_ci NOT NULL,
  `grupoMuscular` varchar(100) DEFAULT NULL,
  `tipoEntrenamiento` varchar(100) DEFAULT NULL,
  `tipoNivel` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `ejercicios`
--

INSERT INTO `ejercicios` (`idEjercicio`, `titulo`, `imagen`, `imagen2`, `descripcion`, `grupoMuscular`, `tipoEntrenamiento`, `tipoNivel`) VALUES
(1, 'Press Arnold', 'img/Arnold-press-1.svg', 'img/Arnold-press-2.svg', 'El Press Arnold es un ejercicio de levantamiento de pesas que se realiza con mancuernas y se enfoca en los hombros. Para hacerlo, siéntate en una banca con respaldo vertical y sostén una mancuerna en cada mano. Lleva las mancuernas a la altura de los hombros con las palmas de las manos mirando hacia el cuerpo. Luego, empuja las mancuernas hacia arriba y al mismo tiempo gira las muñecas para que las palmas de las manos miren hacia afuera. Mantén los brazos estirados por encima de la cabeza y luego baja lentamente las mancuernas de nuevo a la posición inicial.', 'Hombros', 'Musculacion', 'Intermedio'),
(2, 'Elevaciones frontales con barra', 'img/Barbell-front-raises-1.svg', 'img/Barbell-front-raises-2.svg', 'Las elevaciones frontales con barra son un ejercicio de entrenamiento de fuerza que se enfoca en los músculos del hombro. Para hacer este ejercicio, debes pararte con los pies separados a la altura de los hombros, agarrar una barra con las palmas hacia abajo y levantarla frente a ti hasta que tus brazos queden paralelos al suelo. Luego, baja lentamente la barra y repite el movimiento durante varias repeticiones. Este ejercicio ayuda a desarrollar los músculos del hombro y puede ser realizado con diferentes variaciones, como el uso de mancuernas o la elevación lateral con mancuernas.', 'Hombros', 'Musculacion', 'Intermedio'),
(3, 'Remos verticales con barra', 'img/Barbell-upright-rows-1.svg', 'img/Barbell-upright-rows-2.svg', 'Los remos verticales con barra son un ejercicio de entrenamiento de fuerza que trabaja principalmente los músculos de la espalda, los hombros y los brazos. Para realizar el ejercicio, se debe pararse con los pies separados al ancho de los hombros y agarrar una barra con las manos colocadas al ancho de los hombros y las palmas hacia abajo. Luego, se debe levantar la barra hacia el pecho, manteniendo los codos pegados al cuerpo y los hombros hacia abajo y hacia atrás. Al llegar al pecho, se debe sostener la posición por un momento antes de bajar lentamente la barra de nuevo a la posición inicial. Es importante mantener una buena postura durante todo el ejercicio para evitar lesiones y maximizar los beneficios del entrenamiento.', 'Hombros', 'Musculacion', 'Intermedio'),
(4, 'Fondos en paralelas', 'img/Bench-dips-1.svg', 'img/Bench-dips-2.svg', 'Los fondos en paralelas son un ejercicio de entrenamiento de fuerza que se enfoca en los tríceps, los hombros y el pecho. Para realizar este ejercicio, se necesita una barra horizontal con dos soportes paralelos. De pie frente a la barra, se colocan las manos en los soportes paralelos con los dedos apuntando hacia adelante. El cuerpo se baja lentamente doblando los brazos y manteniendo los codos cerca del cuerpo hasta que los brazos estén paralelos al suelo o se siente una buena contracción en los tríceps. Luego se empuja el cuerpo hacia arriba para volver a la posición inicial. Los fondos en paralelas son un ejercicio avanzado y deben ser realizados con cuidado para evitar lesiones.', 'Triceps', 'Musculacion', 'Intermedio'),
(5, 'Press de banca', 'img/Bench-press-1.svg', 'img/Bench-press-2.svg', 'El press banca es un ejercicio de levantamiento de pesas que se realiza acostado en un banco horizontal con una barra cargada. El objetivo del ejercicio es fortalecer los músculos del pecho, los hombros y los tríceps, y mejorar la resistencia y la fuerza. El levantamiento se realiza bajando la barra lentamente hacia el pecho y luego empujándola hacia arriba, extendiendo los brazos completamente. Es importante mantener los codos cerca del cuerpo y controlar el movimiento en todo momento para evitar lesiones. El press banca se puede realizar con diferentes variaciones, como con mancuernas, en un banco inclinado o declinado, o con una barra hexagonal, para trabajar diferentes áreas de los músculos del pecho y los hombros.', 'Pectorales', 'Musculacion', 'Principiante'),
(6, 'Pullover', 'img/Bent-arm-pullover-1.svg', 'img/Bent-arm-pullover-2.svg', 'El pullover es un ejercicio que trabaja principalmente la musculatura de la espalda, el pecho y los tríceps. Para realizar este ejercicio, se debe acostar en un banco con la cabeza apoyada en él y los pies en el suelo. Luego, se sostiene una mancuerna con ambas manos y se lleva detrás de la cabeza, manteniendo los codos ligeramente flexionados. A continuación, se eleva la mancuerna hacia el techo, extendiendo los brazos y contrayendo los músculos del pecho y la espalda. Este movimiento debe hacerse lentamente y controlado, evitando el balanceo o movimientos bruscos. El pullover es un ejercicio muy efectivo para fortalecer la parte superior del cuerpo y mejorar la postura.', 'Espalda', 'Musculacion', 'Principiante'),
(7, 'Curl de biceps martillo', 'img/Bicep-hammer-curl-1.svg', 'img/Bicep-hammer-curl-2.svg', 'El curl de bíceps martillo es un ejercicio de entrenamiento de fuerza para los bíceps que se realiza con mancuernas. Para comenzar, se sostiene una mancuerna en cada mano con las palmas enfrentadas entre sí y los brazos estirados a los lados del cuerpo. Luego, se flexionan los codos y se levantan las mancuernas hacia los hombros mientras se mantienen las palmas hacia adentro durante todo el movimiento. Al llegar a la parte superior del movimiento, se sostiene brevemente antes de bajar las mancuernas lentamente a la posición inicial. El curl de bíceps martillo se enfoca en los músculos del bíceps braquial, así como en los músculos del antebrazo.', 'Gemelos', 'Musculacion', 'Principiante'),
(8, 'Curl de biceps', 'img/Biceps-curl-1.svg', 'img/Biceps-curl-2.svg', 'El curl de bíceps es un ejercicio de entrenamiento de fuerza que se enfoca en el desarrollo del músculo bíceps en la parte superior del brazo. Se realiza sosteniendo una barra con las manos, con las palmas hacia arriba y los codos cerca del cuerpo, y levantando la barra hacia los hombros, doblando los codos. A medida que se levanta la barra, los bíceps se contraen y se relajan cuando se baja lentamente la barra hacia la posición inicial. Este ejercicio se puede realizar en una variedad de configuraciones, como en un banco de predicador, con mancuernas o con una barra recta o EZ.', 'Biceps', 'Musculacion', 'Intermedio'),
(9, 'Curl de biceps inverso', 'img/Biceps-curl-reverse-1.svg', 'img/Biceps-curl-reverse-2.svg', 'Los curls de bíceps reverso son un ejercicio de entrenamiento de fuerza para los músculos de los brazos, especialmente para el músculo braquial y el músculo braquiorradial. Se realiza con una barra o mancuernas con un agarre pronado, es decir, con las palmas de las manos mirando hacia arriba. En la posición inicial, los brazos están extendidos y las manos están en línea con los muslos. Luego, levanta la barra o las mancuernas hacia los hombros, manteniendo los codos pegados al cuerpo y los antebrazos en posición vertical. Luego, baja lentamente la barra o las mancuernas a la posición inicial. Este movimiento es excelente para trabajar la parte superior del antebrazo y los músculos extensores del antebrazo.', 'Biceps', 'Musculacion', 'Intermedio'),
(10, 'Curl concentrado', 'img/Concentration-curls-1.svg', 'img/Concentration-curls-2.svg', 'El curl de bíceps concentrado es un ejercicio de aislamiento que se enfoca en trabajar los músculos del bíceps en la parte superior del brazo. Para realizarlo, se requiere sentarse en un banco y sostener una mancuerna con un agarre supino en el brazo que se va a trabajar. Luego, se coloca el codo en el interior del muslo y se extiende el brazo hacia abajo, de modo que la mancuerna quede debajo del cuerpo. Finalmente, se realiza la contracción del bíceps levantando la mancuerna hacia el hombro, manteniendo el codo fijo en su lugar y manteniendo la espalda recta en todo momento. Este ejercicio ayuda a desarrollar fuerza y tamaño en los músculos del bíceps y se puede realizar tanto en el gimnasio como en casa con una mancuerna.', 'Biceps', 'Musculacion', 'Principiante'),
(11, 'Crunches Oblicuos', 'img/Cross-body-crunch-1.svg', 'img/Cross-body-crunch-2.svg', 'Los crunches oblicuos son un ejercicio abdominal que se enfoca en los músculos oblicuos. Para realizar este ejercicio, acuéstate boca arriba en el suelo con las rodillas dobladas y los pies apoyados en el suelo. Coloca las manos detrás de las orejas o cruzadas en el pecho y levanta el torso hacia arriba, hacia las rodillas. Al mismo tiempo, gira el torso hacia un lado y lleva el codo del mismo lado hacia la rodilla opuesta. Luego, baja el torso y repite del otro lado. El movimiento debe ser controlado y enfocado en los oblicuos, evitando usar el cuello o los hombros para ayudar en el levantamiento.', 'Core', 'Musculacion', 'Intermedio'),
(12, 'Crunches', 'img/Crunches-1.svg', 'img/Crunches-2.svg', 'Los crunches son un ejercicio de abdominales que se realizan acostándose en el suelo con las rodillas flexionadas y los pies apoyados en el suelo. Luego, se eleva la parte superior del cuerpo hacia las piernas, contrayendo los músculos abdominales. En el caso de los crunches normales, las manos se colocan detrás de la cabeza y se mantiene la mirada hacia arriba durante todo el ejercicio para evitar forzar el cuello. Este ejercicio ayuda a fortalecer los músculos abdominales y mejorar la resistencia de la zona media del cuerpo.', 'Core', 'Musculacion', 'Principiante'),
(13, 'Chrunches con balon estabilizador', 'img/Crunches-with-legs-on-stability-ball-1.svg', 'img/Crunches-with-legs-on-stability-ball-2.svg', 'Crunches con balón estabilizador es un ejercicio de entrenamiento de fuerza para los abdominales y los músculos estabilizadores de la pelvis. En este ejercicio, se acuesta boca arriba sobre una pelota de estabilidad con las piernas levantadas y las pantorrillas apoyadas en la pelota. Luego, realiza contracciones de los abdominales superiores, levantando los hombros y la cabeza del suelo y acercándolos a las rodillas. La pelota de estabilidad añade un elemento de inestabilidad al ejercicio, lo que requiere un mayor esfuerzo de los músculos estabilizadores de la pelvis.', 'Core', 'Musculacion', 'Avanzado'),
(14, 'Crunch declinado', 'img/Decline-crunch-1.svg', 'img/Decline-crunch-2.svg', 'El crunch en banco declinado es un ejercicio para los abdominales que se realiza acostado en un banco inclinado con la cabeza hacia abajo y los pies asegurados en la parte superior del banco. Se comienza con las manos detrás de la cabeza y se eleva el torso hacia las rodillas, contrayendo los músculos abdominales en el camino. Este movimiento se repite varias veces para trabajar los músculos abdominales superiores. Al realizar el crunch en un banco declinado, se añade un mayor nivel de resistencia a los abdominales, lo que hace que el ejercicio sea más desafiante y efectivo.', 'Core', 'Musculacion', 'Intermedio'),
(15, 'Aperturas con mancuernas banco declinado', 'img/Dumbbell-decline-flys-1.svg', 'img/Dumbbell-decline-flys-2.svg', 'El ejercicio de moscas con mancuernas en declive se enfoca en la parte inferior del pecho. Acuéstese sobre un banco inclinado con una mancuerna en cada mano, y levante los brazos hacia los lados hasta que las mancuernas estén directamente sobre el pecho. Luego baje lentamente las mancuernas hacia los lados y hacia atrás, manteniendo los codos ligeramente doblados, hasta que sienta un estiramiento en el pecho y los hombros, y luego levante las mancuernas de nuevo a la posición inicial.', 'Pectorales', 'Musculacion', 'Intermedio'),
(16, 'Aperturas con mancuernas en banco plano', 'img/Dumbbell-decline-flys-1.svg', 'img/Dumbbell-decline-flys-2.svg', 'Las aperturas con mancuernas en banco plano son un ejercicio de entrenamiento de fuerza para trabajar los músculos pectorales mayores y menores. El ejercicio implica acostarse sobre un banco plano con una mancuerna en cada mano, los brazos estirados hacia arriba y las palmas de las manos mirando hacia adentro. Desde esta posición, se bajan lentamente las mancuernas hacia los lados hasta que los brazos están paralelos al suelo y luego se elevan las mancuernas a la posición inicial. El movimiento se repite para completar una serie de repeticiones.', 'Pectorales', 'Musculacion', 'Principiante'),
(17, 'Elevaciones frontales con mancuernas', 'img/Dumbbell-front-raises-1.svg', 'img/Dumbbell-front-raises-2-1.svg', 'Las elevaciones frontales con mancuernas son un ejercicio de entrenamiento de fuerza que se enfoca en los músculos del hombro y del brazo. Para realizar el ejercicio, se sostiene una mancuerna en cada mano y se elevan los brazos hacia adelante, manteniendo los codos ligeramente flexionados. Este movimiento fortalece los músculos del hombro, especialmente el deltoides anterior, que es el músculo en la parte delantera del hombro. También puede ayudar a mejorar la estabilidad del hombro y la postura.', 'Hombros', 'Musculacion', 'Principiante'),
(18, 'Elevaciones laterales con mancuernas', 'img/Dumbbell-lateral-raises-1.svg', 'img/Dumbbell-lateral-raises-2.svg', 'Las elevaciones laterales con mancuernas son un ejercicio de entrenamiento de fuerza para los hombros. Para realizar este ejercicio, debes pararte con los pies separados al ancho de los hombros, sostener una mancuerna en cada mano con las palmas hacia adentro y los brazos rectos a los lados. Luego, levanta los brazos en línea recta hacia los lados hasta que las manos estén a la altura de los hombros o un poco más arriba. Mantén la posición durante un segundo y luego baja los brazos lentamente a la posición inicial. Este ejercicio trabaja los músculos del hombro medio y también puede ayudar a fortalecer los músculos del hombro anterior y posterior.', 'Hombros', 'Musculacion', 'Principiante'),
(19, 'Encogimientos con Swiss ball', 'img/Exercise-ball-pull-in-1.svg', 'img/Exercise-ball-pull-in-2.svg', 'Los encogimientos con Swiss ball son un ejercicio de entrenamiento de fuerza que se enfoca en los músculos abdominales y de la espalda baja. Para realizar este ejercicio, se requiere un balón suizo (Swiss ball) y una superficie plana para acostarse. Para realizar los encogimientos con Swiss ball, el usuario debe acostarse boca arriba en el suelo con los pies apoyados sobre el balón suizo. Luego, se debe levantar lentamente el balón con las piernas extendidas hacia el techo, manteniendo los abdominales tensos y apretados. A continuación, se debe bajar el balón de manera controlada hacia el suelo y repetir el movimiento para completar varias repeticiones. Este ejercicio es beneficioso para desarrollar la fuerza y la resistencia en los músculos abdominales, así como para mejorar la estabilidad y el equilibrio. También puede ayudar a fortalecer los músculos de la espalda baja y mejorar la postura.', 'Hombros', 'Musculacion', 'Intermedio'),
(20, 'Dominadas', 'img/Gironda-sternum-chins-1.svg', 'img/Gironda-sternum-chins-2.svg', 'Las dominadas sternum chins, también conocidas como dominadas esternón o pull-ups esternón, son una variante avanzada de las dominadas tradicionales que se enfocan en el desarrollo de los músculos de la espalda superior, el pecho y los hombros. En lugar de simplemente subir el cuerpo hacia la barra, como se hace en las dominadas tradicionales, en las dominadas sternum chins el objetivo es llevar el pecho hacia la barra, específicamente hacia el esternón. Para hacer esto, se debe tener una buena fuerza y control de la escápula, y se debe elevar el cuerpo hacia la barra en un ángulo más vertical que en las dominadas normales. Las dominadas sternum chins son un ejercicio desafiante y requieren un alto nivel de fuerza y técnica. Se recomienda que solo los atletas avanzados y experimentados en la realización de dominadas las realicen.', 'Espalda', 'Musculacion', 'Intermedio'),
(21, 'Hiperextensione', 'img/Hyperextensions-1.svg', 'img/Hyperextensions-2.svg', 'Las hyperextensiones, también conocidas como extensiones lumbares o back extensions en inglés, son un ejercicio de entrenamiento de fuerza que se enfoca en los músculos de la espalda baja, específicamente los músculos erectores de la columna vertebral y los glúteos. El ejercicio se realiza típicamente en un banco de hyperextensiones, con los pies asegurados y la parte superior del cuerpo colgando libremente. Durante el ejercicio, el individuo eleva su cuerpo hasta una posición horizontal, creando una línea recta entre los hombros y las rodillas, y luego baja de regreso a la posición inicial. Las hyperextensiones pueden ser realizadas con el propio peso corporal, con una carga adicional, o con una barra, lo que aumenta la intensidad del ejercicio. Este ejercicio es beneficioso para mejorar la postura, fortalecer los músculos de la espalda baja y prevenir lesiones en la espalda. Sin embargo, es importante realizarlo con la técnica adecuada para evitar lesiones en la espalda baja.', 'Core', 'Musculacion', 'Principiante'),
(22, 'Extensiones de triceps', 'img/Incline-triceps-extensions-1.svg', 'img/Incline-triceps-extensions-2.svg', 'La extensión de tríceps en banco inclinado es un ejercicio de entrenamiento de fuerza que se enfoca en el desarrollo del músculo tríceps. En este ejercicio, se usa un banco inclinado y un par de mancuernas para realizar la extensión del tríceps mientras se mantiene el brazo en una posición fija. El atleta comienza sentado en el banco inclinado con los pies apoyados en el suelo y las mancuernas sujetas con ambas manos. Luego, se extienden los brazos hacia arriba, manteniendo los codos en su lugar, y se baja lentamente las mancuernas detrás de la cabeza hasta que los brazos formen un ángulo de 90 grados. A continuación, se elevan las mancuernas de nuevo hacia arriba hasta la posición inicial y se repite el ejercicio. Este movimiento ayuda a tonificar y fortalecer los músculos del tríceps, que son importantes para muchas actividades cotidianas, así como para deportes que requieren fuerza en los brazos.', 'Triceps', 'Musculacion', 'Principiante'),
(23, 'Extensiones triceps con apoyo en polea', 'img/Kneeling-concentration-triceps-extension-1.svg', 'img/Kneeling-concentration-triceps-extension-2.svg', 'La \"kneeling concentration triceps\" (extensión de tríceps con apoyo) es un ejercicio de entrenamiento de fuerza para trabajar específicamente los tríceps. El ejercicio se realiza sentado en un banco o silla con una mancuerna en la mano, apoyando el codo en la pierna opuesta. A partir de ahí, se extiende el brazo hacia atrás y hacia arriba, manteniendo el codo en su lugar. Este movimiento se repite varias veces para trabajar los músculos del tríceps de manera efectiva. La kneeling concentration triceps se enfoca en la cabeza larga del tríceps y puede ser una excelente manera de mejorar la fuerza y la definición muscular en esta área.', 'Triceps', 'Musculacion', 'Intermedio'),
(24, 'Prensa', 'img/Leg-press-1-1024x670.svg', 'img/Leg-press-2-1024x670.svg', 'El press de piernas es un ejercicio de entrenamiento de fuerza que se realiza en una máquina de pesas y está diseñado para trabajar los músculos de las piernas, incluyendo los cuádriceps, los glúteos, los isquiotibiales y los músculos de la pantorrilla. El ejercicio implica sentarse en una plataforma acolchada y empujar una placa de peso con las piernas mientras se mantiene la espalda en posición vertical. A medida que se extienden las piernas, se contraen los músculos de las piernas para levantar el peso. Este ejercicio es ideal para mejorar la fuerza y la definición muscular en las piernas.', 'Cuadriceps', 'Musculacion', 'Intermedio'),
(25, 'Elevaciones de piernas', 'img/Leg-raises-1.svg', 'img/Leg-raises-2.svg', 'Los leg raises o elevaciones de piernas son un ejercicio de entrenamiento de fuerza para el abdomen y los músculos de las caderas. El ejercicio se realiza acostado en una superficie plana, generalmente en una colchoneta o en un banco de entrenamiento. Las piernas se elevan hacia arriba, manteniéndolas juntas y estiradas, mientras se contraen los músculos abdominales y de la parte inferior del torso. A medida que las piernas se elevan, se inhala y se exhala cuando se bajan. Las variaciones del ejercicio pueden incluir agregar peso o mantener los brazos en diferentes posiciones para involucrar diferentes músculos.', 'Core', 'Musculacion', 'Intermedio'),
(26, 'Extensiones triceps polea baja', 'img/Low-triceps-extension-1.svg', 'img/Low-triceps-extension-2.svg', 'Las low triceps extensions, también conocidas como extensiones de tríceps con polea baja, son un ejercicio de entrenamiento de fuerza para los tríceps. Para realizar este ejercicio, se necesita una máquina de polea baja con una barra en V o una cuerda de tríceps. Para empezar, el usuario se coloca de pie frente a la máquina con los pies separados a la anchura de los hombros y agarra la barra o la cuerda con las manos en pronación (palmas hacia abajo). Los brazos deben estar doblados y pegados al cuerpo. Luego, se extienden los brazos hacia abajo y hacia atrás, manteniendo los codos pegados al cuerpo, hasta que los tríceps estén completamente contraídos. La posición final debe ser con los brazos rectos y la barra o la cuerda apuntando hacia abajo. Se realiza una pausa en la posición final antes de volver lentamente a la posición inicial, controlando el movimiento. Es importante mantener el núcleo y los glúteos apretados para mantener una postura adecuada durante todo el ejercicio. Las low triceps extensions trabajan los tríceps, ayudando a fortalecer y tonificar los músculos en la parte posterior de los brazos.', 'Triceps', 'Musculacion', 'Principiante'),
(27, 'Lunges ', 'img/Lunges-1.svg', 'img/Lunges-2-1.svg', 'Los lunges, también conocidos como estocadas, son un ejercicio de entrenamiento de fuerza que implica mover el cuerpo hacia adelante con una pierna mientras se mantiene la otra en su lugar, y luego volver a la posición inicial. Este ejercicio trabaja principalmente los músculos de las piernas, incluyendo los cuádriceps, los glúteos y los músculos isquiotibiales. También puede ayudar a mejorar la fuerza, la estabilidad y la flexibilidad de las piernas. Los lunges se pueden realizar con o sin peso adicional y en varias variaciones, como lunges laterales o lunges hacia atrás.', 'Cuadriceps', 'Musculacion', 'Principiante'),
(28, 'Press francés', 'img/Lying-close-grip-triceps-press-to-chin-1.svg', 'img/Lying-close-grip-triceps-press-to-chin-2.svg', 'El ejercicio Lying Close Grip es una variación del press de banca en la que se utiliza una barra con un agarre más estrecho, lo que implica una mayor activación del tríceps en lugar del pecho. Para realizar el ejercicio, se acuesta en un banco plano y sostiene la barra con un agarre estrecho, con las manos separadas a la distancia de los hombros. A continuación, se baja la barra hacia el pecho manteniendo los codos cerca del cuerpo y se extienden los brazos para volver a la posición inicial. El Lying Close Grip se enfoca principalmente en el tríceps, pero también involucra los hombros y el pecho como músculos secundarios.', 'Triceps', 'Musculacion', 'Intermedio'),
(29, 'Patada de triceps con mancuerna', 'img/Triceps-kickback-1.svg', 'img/Triceps-kickback-2.svg', 'El triceps kickback es un ejercicio de aislamiento que se enfoca en trabajar los músculos tríceps. Para realizarlo, se necesita una mancuerna y un banco. Primero, se debe colocar el pie y la mano del mismo lado en el banco, y doblar la parte superior del cuerpo hacia adelante hasta que quede paralela al suelo. Sosteniendo la mancuerna con la otra mano y con el brazo doblado, se debe llevar la mancuerna hacia atrás, manteniendo el codo fijo en un ángulo de 90 grados, y luego extender el brazo hacia atrás hasta que esté completamente recto. Se debe sentir una contracción en los tríceps durante todo el movimiento. Luego, se baja lentamente la mancuerna a la posición inicial y se repite el movimiento. Este ejercicio es ideal para tonificar y fortalecer los músculos tríceps.', 'Triceps', 'Musculacion', 'Principiante'),
(30, 'Fondos en maquina', 'img/Tricep-dips-1.svg', 'img/Tricep-dips-2-1.svg', 'Los fondos en máquina para tríceps son un ejercicio de entrenamiento de fuerza que se realiza en una máquina de entrenamiento de pesas específica para tríceps. El ejercicio se realiza sentado en la máquina, con los brazos extendidos hacia atrás y sosteniendo las asas de la máquina. Desde esta posición, se contraen los tríceps para extender los brazos y levantar el peso. Luego se baja el peso lentamente para volver a la posición inicial. Este ejercicio es efectivo para fortalecer y tonificar los tríceps, y puede ser una buena opción para aquellos que buscan reducir la carga en las articulaciones de los hombros y codos que pueden ocurrir con otros ejercicios de tríceps como las flexiones de tríceps o los fondos en paralelas.', 'Triceps', 'Musculacion', 'Principiante'),
(31, 'Remo en maquina', 'img/T-bar-row-1.svg', 'img/T-bar-row-2.svg', 'El T-Bar Row es un ejercicio de entrenamiento de fuerza que se enfoca en trabajar los músculos de la espalda, específicamente los músculos de la parte superior de la espalda como el trapecio y los músculos del manguito rotador. El ejercicio se realiza con una barra colocada en un soporte en ángulo, con un extremo de la barra colocado en el suelo y el otro extremo cargado con discos de peso. El usuario agarra la barra con ambas manos en un agarre cerrado y levanta la barra hacia el pecho, manteniendo los codos cerca del cuerpo y apretando los omóplatos. Este movimiento ayuda a fortalecer la espalda, mejorando la postura y la estabilidad del núcleo.', 'Espalda', 'Musculacion', 'Principiante'),
(32, 'Supermans', 'img/Supermans-1.svg', 'img/Supermans-2.svg', 'Supermans es un ejercicio de fortalecimiento de la espalda y glúteos. Para realizarlo, se debe acostar boca abajo en el suelo, con los brazos extendidos hacia adelante y las piernas extendidas detrás del cuerpo. Luego, se debe levantar simultáneamente los brazos, piernas y torso del suelo, manteniéndolos rectos y en línea recta con el cuerpo. Una vez que se alcanza la posición más alta, se debe sostener durante unos segundos antes de volver a la posición inicial. El ejercicio debe realizarse lentamente y con control para evitar lesiones y maximizar los beneficios para la espalda y glúteos.', 'Core', 'Musculacion', 'Intermedio'),
(33, 'Curl de biceps de pie', 'img/Standing-biceps-curl-1.svg', 'img/Standing-biceps-curl-2.svg', 'La standing biceps curl, también conocida como curl de pie, es un ejercicio de entrenamiento de fuerza que se enfoca en los músculos bíceps de los brazos. Para realizar este ejercicio, el usuario sostiene una barra con peso en posición de pie, con las palmas de las manos hacia arriba y las manos separadas al ancho de los hombros. Luego, con un movimiento controlado, flexiona los codos para levantar la barra hacia los hombros, manteniendo los codos pegados al cuerpo en todo momento. Finalmente, se baja la barra de manera controlada para completar una repetición. La standing biceps curl es un ejercicio popular entre los culturistas y los entusiastas del fitness debido a su capacidad para desarrollar y tonificar los músculos de los brazos.', 'Biceps', 'Musculacion', 'Principiante'),
(34, 'Sentadillas', 'img/Squats-1.svg', 'img/Squats-2.svg', 'Los squats libres, también conocidos como sentadillas libres, son un ejercicio de entrenamiento de fuerza en el que se coloca una barra cargada sobre los hombros, se baja en una posición de cuclillas manteniendo la espalda recta y las rodillas apuntando hacia afuera, y luego se vuelve a la posición inicial. Este ejercicio trabaja principalmente los músculos de las piernas, incluyendo los cuádriceps, los glúteos y los isquiotibiales, así como los músculos estabilizadores del núcleo y la espalda. Es una técnica de entrenamiento popular en el levantamiento de pesas y puede ser modificado para adaptarse a diferentes niveles de habilidad y objetivos de entrenamiento.', 'Cuadriceps', 'Musculacion', 'Avanzado'),
(35, 'Extensiones triceps sentado', 'img/Seated-triceps-press-1.svg', 'img/Seated-triceps-press-2.svg', 'El ejercicio de tríceps sentado es un ejercicio de entrenamiento de fuerza que se enfoca en los músculos tríceps. Se realiza sentado en un banco con una mancuerna o con un cable de resistencia detrás de la cabeza, y el objetivo es extender los brazos hacia arriba para trabajar los músculos tríceps. Es importante mantener una buena postura y controlar el movimiento durante todo el ejercicio para evitar lesiones.', 'Triceps', 'Musculacion', 'Intermedio'),
(36, 'Reverse plate curls', 'img/Reverse-plate-curls-1.svg', 'img/Reverse-plate-curls-2.svg', 'Las reverse plate curls son un ejercicio de entrenamiento de fuerza para los brazos que se enfoca en los músculos del antebrazo. Para realizarlo, se sostiene una pesa con los dedos hacia abajo y se flexionan los brazos levantando la pesa hacia el cuerpo, manteniendo los codos cerca del torso. Este ejercicio es ideal para desarrollar la fuerza y el tamaño de los músculos del antebrazo.', 'Biceps', 'Musculacion', 'Intermedio'),
(37, 'Predicador', 'img/Preacher-curl-3-1.svg', 'img/Preacher-curl-3-2.svg', 'El predicador bíceps es un ejercicio que se enfoca en los músculos del bíceps braquial. Se realiza en un banco predicador con una barra EZ o mancuerna, sostenida con los codos apoyados en el cojín del predicador. Se levanta la barra o mancuerna hasta la altura de los hombros, doblando los codos y contrayendo los músculos del bíceps. Luego, se baja lentamente hasta la posición inicial, manteniendo la contracción del bíceps durante todo el movimiento. Es importante realizarlo con técnica adecuada y peso adecuado para evitar lesiones y obtener resultados deseados.', 'Biceps', 'Musculacion', 'Intermedio'),
(38, 'Planchas laterales', 'img/Side-plank-1.svg', 'img/Side-plank-2.svg', 'El side plank, también conocido como plancha lateral, es un ejercicio de entrenamiento de fuerza en el que se apoya el peso del cuerpo sobre un brazo mientras se levanta la cadera del suelo, manteniendo el cuerpo en una posición lateral. Este ejercicio se enfoca en los músculos del núcleo, incluyendo los abdominales, la espalda y los glúteos, así como en los músculos estabilizadores del hombro y las piernas. La plancha lateral también es una excelente forma de mejorar la fuerza y la estabilidad de la parte superior del cuerpo.', 'Core', 'Musculacion', 'Avanzaado'),
(39, 'Elevaciones de talón en maquina', 'img/Standing-calf-raises-1.svg', 'img/Standing-calf-raises-2.svg', 'Las elevaciones de gemelos en máquina son un ejercicio que se enfoca en fortalecer y tonificar los músculos de la pantorrilla. Para realizar este ejercicio, debes pararte en la plataforma de la máquina con los hombros debajo de los cojines de los hombros y los pies en el borde inferior de la plataforma. Luego, levanta los talones mientras exhalas y mantén la posición por un segundo antes de bajar lentamente los talones hasta la posición inicial mientras inhalas. Es importante asegurarse de mantener una postura correcta y evitar curvar la espalda.', 'Gemelos', 'Musculacion', 'Intermedio'),
(40, 'Elevaciones talón', 'img/seatedRaises.svg', 'img/seatedRaises2.svg', 'La elevación de gemelos sentado es un ejercicio para trabajar los músculos de la pantorrilla. Para realizarlo, se debe sentar en una máquina específica con las rodillas dobladas y los pies apoyados en una plataforma. Luego, se debe levantar los talones lo más alto posible, contrayendo los músculos de la pantorrilla en la parte superior del movimiento. Se debe bajar lentamente los talones hasta que queden por debajo de la plataforma para completar una repetición. Es importante mantener la espalda recta durante todo el ejercicio y evitar hacer trampa moviendo la parte superior del cuerpo.', 'Gemelos', 'Musculacion', 'Intermedio'),
(41, 'Remo en barra', 'img/remoBarra.png', 'img/No-image.png', 'El remo a barra es un ejercicio de calistenia que se enfoca en fortalecer los músculos de la espalda y los brazos. Para realizar este ejercicio, es necesario una barra horizontal y colocarse debajo de ella con las manos en pronación, es decir, con las palmas mirando hacia fuera. Luego, se debe levantar el cuerpo hasta que el pecho toque la barra y volver a bajar lentamente. El remo a barra es un excelente ejercicio para desarrollar fuerza y masa muscular en la espalda y los brazos, así como también ayuda a mejorar la postura y la estabilidad de la parte superior del cuerpo.', 'Espalda', 'Calistenia', 'Principiante'),
(42, 'Dominadas', 'img/pullup1.png', 'img/pullup2.png', 'Las dominadas son un ejercicio de calistenia en el que se utiliza principalmente la fuerza del brazo y la espalda para levantar el cuerpo. El ejercicio se realiza colgando de una barra y levantando el cuerpo hacia arriba hasta que la barbilla esté por encima de la barra. Las dominadas son un ejercicio muy efectivo para desarrollar la fuerza de la parte superior del cuerpo y son utilizadas por atletas, militares y entusiastas del fitness en todo el mundo.', 'Espalda', 'Calistenia', 'Intermedio'),
(43, 'Muscle up', 'img/muscle1.png', 'img/muscle2.png', 'El muscle-up es un ejercicio avanzado de calistenia que combina una dominada explosiva y un dip para llevar el cuerpo desde una posición colgante a una posición por encima de la barra. Es un movimiento muy exigente que requiere una gran fuerza, control y técnica. El muscle-up es considerado como uno de los ejercicios más difíciles en el mundo de la calistenia.', 'Espalda', 'Calistenia', 'Avanzado'),
(44, 'Fondos en paralelas', 'img/fondos.png', 'img/No-image.png', 'Los fondos en paralelas son un ejercicio de calistenia que se enfoca en trabajar principalmente los tríceps, hombros y pecho. Se realizan mediante el apoyo en dos barras paralelas para levantar el propio peso corporal, y son ideales para fortalecer la parte superior del cuerpo y mejorar la estabilidad del core.', 'Triceps', 'Calistenia', 'Intermedio'),
(45, 'Pino en paralelas', 'img/pino.png', 'img/No-image.png', 'El pino en paralelas es un ejercicio de calistenia avanzado que consiste en sostener el cuerpo en posición vertical, apoyado únicamente en las manos en unas barras paralelas, con las piernas extendidas hacia arriba. Es un ejercicio que requiere fuerza, equilibrio y coordinación para realizarlo correctamente. Trabaja principalmente los hombros, tríceps y abdominales, pero también involucra otros músculos del cuerpo como la espalda, el pecho y los glúteos.', 'Hombros', 'Calistenia', 'Avanzado'),
(46, 'Felxiones planas', 'img/flexion.png', 'img/flexion1.png', 'Las flexiones planas son un ejercicio de calistenia que se realiza apoyando las manos en el suelo y elevando el cuerpo hasta extender los brazos completamente. Este ejercicio trabaja principalmente los músculos del pecho, los hombros y los tríceps, y puede ser modificado para aumentar o disminuir la intensidad.', 'Pectorales', 'Calistenia', 'Principiante'),
(47, 'La bandera ', 'img/bandera.png', 'img/No-image.png', 'La bandera en calistenia es un ejercicio de fuerza estática que implica sostener el cuerpo en posición horizontal, sostenido únicamente por las manos en una barra vertical. Es un movimiento desafiante que requiere fuerza, equilibrio y control corporal.', 'Espalda', 'Calistenia', 'Avanzado'),
(48, 'Ciclismo al aire libre ', 'img/bici.png', 'img/No-image.png', 'El ciclismo al aire libre es una excelente forma de hacer cardio y mantenerte en forma mientras disfrutas del aire fresco y las vistas al aire libre. Esta actividad cardiovascular de bajo impacto es ideal para mejorar tu salud cardiovascular, tonificar tus músculos y quemar calorías. Además, andar en bicicleta es una excelente manera de reducir el estrés y mejorar tu estado de ánimo. Ya sea que prefieras pasear en bicicleta o buscar un desafío en una ruta de montaña, el ciclismo al aire libre es una actividad emocionante y gratificante para incluir en tu rutina de entrenamiento.', 'Cuadriceps', 'Cardiovascular', 'Intermedio'),
(49, 'Bicicleta estática', 'img/bici4.png', 'img/biciStatica.png', 'El cardio en bicicleta estática es una excelente opción para mantenerse en forma y mejorar la salud cardiovascular. Esta actividad consiste en pedalear en una bicicleta estacionaria a diferentes intensidades y duraciones. Es ideal para quienes buscan un entrenamiento de bajo impacto que no ejerza mucha presión en las articulaciones. Al practicar cardio en bicicleta estática se pueden quemar calorías, mejorar el sistema cardiovascular y aumentar la resistencia física. Además, es una actividad que se puede realizar en cualquier momento y en la comodidad del hogar o en un gimnasio.', 'Cuadriceps', 'Cardiovascular', 'Principiante'),
(50, 'Remo en maquina', 'img/remo11.png', 'img/remo12.png', 'El remo en máquina es un ejercicio cardiovascular que involucra todo el cuerpo. Al remar, trabajas los músculos de los brazos, las piernas, la espalda y los abdominales, mientras aumentas tu frecuencia cardíaca para mejorar tu salud cardiovascular. Además, el remo en máquina es una forma de entrenamiento de bajo impacto, lo que lo hace ideal para aquellos que buscan reducir el estrés en las articulaciones. Al agregar el remo en máquina a tu rutina de entrenamiento, puedes mejorar tu resistencia, quemar calorías y tonificar tus músculos de manera efectiva.', 'Espalda', 'Cardiovascular', 'Intermedio'),
(51, 'Running   al aire libre', 'img/correr.png', 'img/correr2.png', 'Correr o trotar al aire libre es una excelente forma de realizar ejercicio cardiovascular. Además de ser una actividad sencilla y accesible para la mayoría de las personas, ofrece múltiples beneficios para la salud, como mejorar la capacidad cardiovascular y respiratoria, aumentar la resistencia física, reducir el estrés y mejorar el estado de ánimo.\n\nPara realizar esta actividad es importante contar con un calzado adecuado y cómodo, así como con ropa transpirable y ligera. Es recomendable realizar un calentamiento previo, como caminar durante unos minutos, para evitar lesiones y preparar al cuerpo para el ejercicio.\n\nUna buena forma de empezar es establecer un ritmo cómodo y constante, y luego ir aumentando gradualmente la intensidad y la duración del ejercicio a medida que se adquiere mayor resistencia. También es importante hidratarse correctamente antes, durante y después del ejercicio, y realizar estiramientos al finalizar para prevenir la rigidez muscular.', 'Cuadriceps', 'Cardiovascular', 'Intermedio'),
(52, 'Correr en cinta', 'img/cinta3.png', 'img/cinta2.png', 'La cinta de correr es una excelente opción para aquellos que quieren hacer ejercicio cardiovascular en interiores. Correr o caminar en la cinta te permite ajustar la velocidad y la inclinación para adecuar el entrenamiento a tu nivel de condición física. También puedes monitorear la distancia recorrida, las calorías quemadas y otros datos importantes de tu entrenamiento en la pantalla de la cinta. Correr o caminar en cinta es un entrenamiento de bajo impacto, lo que significa que es más suave para tus articulaciones en comparación con correr en pavimento. Además, puedes hacerlo en cualquier clima, sin preocuparte por las condiciones exteriores. Si buscas una forma efectiva de hacer cardio en interiores, correr o caminar en cinta es una excelente opción.', 'Cuadriceps', 'Cardiovascular', 'Intermedio'),
(53, 'Boxeo y/o sombras', 'img/boxeo.png', 'img/boxeo2.png', 'El boxeo es una excelente actividad para realizar ejercicio cardiovascular. Puedes realizar sombra o golpear un saco de boxeo para aumentar tu frecuencia cardíaca y mejorar tu condición física. Además, el boxeo es una actividad divertida que te ayuda a liberar estrés mientras trabajas en tu resistencia y fuerza muscular. Con el entrenamiento de boxeo cardio, puedes quemar calorías, mejorar tu coordinación y aumentar tu agilidad. ', 'Hombros', 'Cardiovascular', 'Intermedio'),
(54, 'Saltos a la comba', 'img/comba3.png', 'img/comba.png', 'Saltar a la comba es una actividad que puede proporcionar una excelente sesión de cardio, ya que involucra a todo el cuerpo y aumenta la frecuencia cardíaca. Al saltar, se trabaja la coordinación, la agilidad, la fuerza y la resistencia. Además, es una actividad de bajo impacto que puede ser realizada en cualquier lugar, en cualquier momento y sin necesidad de equipo costoso. Una sesión de saltos a la comba puede ser adaptada a cualquier nivel de condición física, ya que puede variar en duración, intensidad y tipo de saltos.', 'Cuadriceps', 'Cardiovascular', 'Intermedio');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `favoritos`
--

CREATE TABLE `favoritos` (
  `id` int(11) NOT NULL,
  `id_usuario` int(11) NOT NULL,
  `id_ejercicio` int(11) NOT NULL,
  `ejercicio` varchar(300) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `favoritos`
--

INSERT INTO `favoritos` (`id`, `id_usuario`, `id_ejercicio`, `ejercicio`) VALUES
(51, 2, 1, 'Press Arnold'),
(52, 2, 2, 'Elevaciones frontales con barra');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `rutinas`
--

CREATE TABLE `rutinas` (
  `id` int(11) NOT NULL,
  `objetivo` varchar(50) DEFAULT NULL,
  `dia_semana` varchar(20) DEFAULT NULL,
  `ejercicio` varchar(50) DEFAULT NULL,
  `repeticiones` varchar(20) DEFAULT NULL,
  `sets` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `rutinas`
--

INSERT INTO `rutinas` (`id`, `objetivo`, `dia_semana`, `ejercicio`, `repeticiones`, `sets`) VALUES
(1, 'bajar-peso', 'Lunes', 'Sentadillas', '12', 3),
(2, 'bajar-peso', 'Lunes', 'Fondos de tríceps', '12', 3),
(3, 'bajar-peso', 'Lunes', 'Burpees', '10', 3),
(4, 'bajar-peso', 'Lunes', 'Plancha', '30', 3),
(5, 'bajar-peso', 'Lunes', 'Zancadas', '12', 3),
(6, 'bajar-peso', 'Lunes', 'Flexiones', '12', 3),
(7, 'bajar-peso', 'Martes', 'Carrera continua', '30 minutos', 0),
(8, 'bajar-peso', 'Martes', 'Saltos', '30', 3),
(9, 'bajar-peso', 'Martes', 'Escalador', '20', 3),
(10, 'bajar-peso', 'Martes', 'Zancadas con salto', '12', 3),
(11, 'bajar-peso', 'Martes', 'Plancha lateral', '30 segundos', 3),
(12, 'bajar-peso', 'Miércoles', 'Press de banca', '10', 3),
(13, 'bajar-peso', 'Miércoles', 'Peso muerto', '10', 3),
(14, 'bajar-peso', 'Miércoles', 'Curl de bíceps con mancuernas', '12', 3),
(15, 'bajar-peso', 'Miércoles', 'Sentadillas con salto', '12', 3),
(16, 'bajar-peso', 'Miércoles', 'Elevaciones laterales de hombros', '12', 3),
(17, 'bajar-peso', 'Miércoles', 'Elevaciones de pantorrillas con mancuernas', '15', 3),
(18, 'bajar-peso', 'Viernes', 'Remo con mancuernas', '12', 3),
(19, 'bajar-peso', 'Viernes', 'Press militar con mancuernas', '12', 3),
(20, 'bajar-peso', 'Viernes', 'Elevaciones frontales de hombros', '12', 3),
(21, 'bajar-peso', 'Viernes', 'Crunches', '15', 3),
(22, 'bajar-peso', 'Viernes', 'Plancha lateral', '30 segundos', 3),
(23, 'bajar-peso', 'Viernes', 'Mountain climbers', '20', 3),
(24, 'subir-peso', 'Lunes', 'Sentadillas', '8', 4),
(25, 'subir-peso', 'Lunes', 'Press de banca', '8', 4),
(26, 'subir-peso', 'Lunes', 'Remo con barra', '8', 4),
(27, 'subir-peso', 'Lunes', 'Curl de bíceps con barra', '10', 4),
(28, 'subir-peso', 'Lunes', 'Press francés', '10', 4),
(29, 'subir-peso', 'Lunes', 'Elevaciones laterales de hombros', '12', 3),
(30, 'subir-peso', 'Miércoles', 'Peso muerto', '6', 4),
(31, 'subir-peso', 'Miércoles', 'Press militar con barra', '8', 4),
(32, 'subir-peso', 'Miércoles', 'Dominadas', 'Max', 4),
(33, 'subir-peso', 'Miércoles', 'Curl de bíceps con mancuernas', '12', 3),
(34, 'subir-peso', 'Miércoles', 'Extensiones de tríceps con mancuernas', '12', 3),
(35, 'subir-peso', 'Miércoles', 'Elevaciones de talones con barra', '15', 3),
(36, 'subir-peso', 'Viernes', 'Sentadilla frontal', '8', 4),
(37, 'subir-peso', 'Viernes', 'Press de banca inclinado', '8', 4),
(38, 'subir-peso', 'Viernes', 'Remo con mancuernas', '10', 4),
(39, 'subir-peso', 'Viernes', 'Curl de martillo con mancuernas', '10', 4),
(40, 'subir-peso', 'Viernes', 'Extensiones de tríceps en polea alta', '12', 3),
(41, 'subir-peso', 'Viernes', 'Elevaciones frontales de hombros con mancuernas', '12', 3),
(42, 'mantenimiento', 'Lunes', 'Press de banca', '12', 3),
(43, 'mantenimiento', 'Lunes', 'Dominadas', '10', 3),
(44, 'mantenimiento', 'Lunes', 'Elevaciones laterales de hombros', '12', 3),
(45, 'mantenimiento', 'Lunes', 'Curl de bíceps con mancuernas', '12', 3),
(46, 'mantenimiento', 'Lunes', 'Prensa de piernas', '12', 3),
(47, 'mantenimiento', 'Miércoles', 'Sentadillas', '12', 3),
(48, 'mantenimiento', 'Miércoles', 'Peso muerto', '12', 3),
(49, 'mantenimiento', 'Miércoles', 'Press militar con mancuernas', '12', 3),
(50, 'mantenimiento', 'Miércoles', 'Crunches', '15', 3),
(51, 'mantenimiento', 'Miércoles', 'Elevaciones de pantorrillas con mancuernas', '15', 3),
(52, 'mantenimiento', 'Jueves', 'Caminadora a ritmo moderado', '20 minutos', 0),
(53, 'mantenimiento', 'Jueves', 'Máquina de remo', '15 minutos', 0),
(54, 'mantenimiento', 'Jueves', 'Bicicleta estática a resistencia baja', '20 minutos', 0),
(55, 'mantenimiento', 'Jueves', 'Escaladora', '10 minutos', 0),
(56, 'mantenimiento', 'Viernes', 'Remo con mancuernas', '12', 3),
(57, 'mantenimiento', 'Viernes', 'Fondos de tríceps', '12', 3),
(58, 'mantenimiento', 'Viernes', 'Elevaciones frontales de hombros', '12', 3),
(59, 'mantenimiento', 'Viernes', 'Plancha lateral', '30 segundos', 3),
(60, 'mantenimiento', 'Viernes', 'Abdominales con rueda', '12', 3);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipousuario`
--

CREATE TABLE `tipousuario` (
  `id` int(11) NOT NULL,
  `tipo` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `tipousuario`
--

INSERT INTO `tipousuario` (`id`, `tipo`) VALUES
(1, 'admin'),
(2, 'normal');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `apellido` varchar(50) NOT NULL,
  `edad` int(11) DEFAULT NULL,
  `peso` int(11) DEFAULT NULL,
  `email` varchar(100) NOT NULL,
  `contrasena` varchar(100) NOT NULL,
  `rol` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `nombre`, `apellido`, `edad`, `peso`, `email`, `contrasena`, `rol`) VALUES
(1, 'Morad', 'El mourabit', 26, 76, 'moradelm1996@gmail.com', '$2b$10$NhV5bl17JJ0JyLbFjsn/p./HUixi.Ewqd3j2n02kDEu65AoNJ4BUO', 1),
(2, 'Mody', 'elmm', 26, 75, 'mmmmody45@gmail.com', '$2b$10$rfUHVSZ9dgPO26usd1Dn/.bPwqgqyoCeRi6EW2avg5RdlVgY8H8iS', 2);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `ejercicios`
--
ALTER TABLE `ejercicios`
  ADD PRIMARY KEY (`idEjercicio`);

--
-- Indices de la tabla `favoritos`
--
ALTER TABLE `favoritos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_usuario` (`id_usuario`),
  ADD KEY `id_ejercicio` (`id_ejercicio`);

--
-- Indices de la tabla `rutinas`
--
ALTER TABLE `rutinas`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `tipousuario`
--
ALTER TABLE `tipousuario`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`),
  ADD KEY `rol` (`rol`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `ejercicios`
--
ALTER TABLE `ejercicios`
  MODIFY `idEjercicio` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=55;

--
-- AUTO_INCREMENT de la tabla `favoritos`
--
ALTER TABLE `favoritos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=161;

--
-- AUTO_INCREMENT de la tabla `rutinas`
--
ALTER TABLE `rutinas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=61;

--
-- AUTO_INCREMENT de la tabla `tipousuario`
--
ALTER TABLE `tipousuario`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `favoritos`
--
ALTER TABLE `favoritos`
  ADD CONSTRAINT `favoritos_ibfk_1` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id`),
  ADD CONSTRAINT `favoritos_ibfk_2` FOREIGN KEY (`id_ejercicio`) REFERENCES `ejercicios` (`idEjercicio`) ON DELETE CASCADE;

--
-- Filtros para la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD CONSTRAINT `usuarios_ibfk_1` FOREIGN KEY (`rol`) REFERENCES `tipousuario` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
