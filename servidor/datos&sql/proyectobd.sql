-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 24-04-2023 a las 18:06:14
-- Versión del servidor: 10.4.27-MariaDB
-- Versión de PHP: 8.1.12

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
  `descripcion` text NOT NULL,
  `grupoMuscular` varchar(100) DEFAULT NULL,
  `tipoEntrenamiento` varchar(100) DEFAULT NULL,
  `tipoNivel` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `ejercicios`
--

INSERT INTO `ejercicios` (`idEjercicio`, `titulo`, `imagen`, `imagen2`, `descripcion`, `grupoMuscular`, `tipoEntrenamiento`, `tipoNivel`) VALUES
(1, 'Press Arnold', 'img/Arnold-press-1.svg', 'img/Arnold-press-2.svg', 'El press Arnold es un ejercicio de levantamiento de pesas que se realiza con mancuernas y se enfoca en los hombros. Para hacerlo, siÃ©ntate en una banca con respaldo vertical y sostÃ©n una mancuerna en cada mano. Lleva las mancuernas a la altura de los hombros con las palmas de las manos mirando hacia el cuerpo. Luego, empuja las mancuernas hacia arriba y al mismo tiempo gira las muÃ±ecas para que las palmas de las manos miren hacia afuera. MantÃ©n los brazos estirados por encima de la cabeza y luego baja lentamente las mancuernas de nuevo a la posiciÃ³n inicial.', 'Hombros', 'Musculacion', 'Intermedio'),
(2, 'Elevaciones frontales con barra', 'img/Barbell-front-raises-1.svg', 'img/Barbell-front-raises-2.svg', 'Las elevaciones frontales con barra son un ejercicio de entrenamiento de fuerza que se enfoca en los mÃºsculos del hombro. Para hacer este ejercicio, debes pararte con los pies separados a la altura de los hombros, agarrar una barra con las palmas hacia abajo y levantarla frente a ti hasta que tus brazos queden paralelos al suelo. Luego, baja lentamente la barra y repite el movimiento durante varias repeticiones. Este ejercicio ayuda a desarrollar los mÃºsculos del hombro y puede ser realizado con diferentes variaciones, como el uso de mancuernas o la elevaciÃ³n lateral con mancuernas.', 'Hombros', 'Musculacion', 'Intermedio'),
(3, 'Remos verticales con barra', 'img/Barbell-upright-rows-1.svg', 'img/Barbell-upright-rows-2.svg', 'Los remos verticales con barra son un ejercicio de entrenamiento de fuerza que trabaja principalmente los mÃºsculos de la espalda, los hombros y los brazos. Para realizar el ejercicio, se debe pararse con los pies separados al ancho de los hombros y agarrar una barra con las manos colocadas al ancho de los hombros y las palmas hacia abajo. Luego, se debe levantar la barra hacia el pecho, manteniendo los codos pegados al cuerpo y los hombros hacia abajo y hacia atrÃ¡s. Al llegar al pecho, se debe sostener la posiciÃ³n por un momento antes de bajar lentamente la barra de nuevo a la posiciÃ³n inicial. Es importante mantener una buena postura durante todo el ejercicio para evitar lesiones y maximizar los beneficios del entrenamiento.', 'Hombros', 'Musculacion', 'Intermedio'),
(4, 'Fondos en paralelas', 'img/Bench-dips-1.svg', 'img/Bench-dips-2.svg', 'Los fondos en paralelas son un ejercicio de entrenamiento de fuerza que se enfoca en los trÃ­ceps, los hombros y el pecho. Para realizar este ejercicio, se necesita una barra horizontal con dos soportes paralelos. De pie frente a la barra, se colocan las manos en los soportes paralelos con los dedos apuntando hacia adelante. El cuerpo se baja lentamente doblando los brazos y manteniendo los codos cerca del cuerpo hasta que los brazos estÃ¡n paralelos al suelo o se siente una buena contracciÃ³n en los trÃ­ceps. Luego se empuja el cuerpo hacia arriba para volver a la posiciÃ³n inicial. Los fondos en paralelas son un ejercicio avanzado y deben ser realizados con cuidado para evitar lesiones', 'Triceps', 'Musculacion', 'Intermedio'),
(5, 'Press de banca', 'img/Bench-press-1.svg', 'img/Bench-press-2.svg', 'El press banca es un ejercicio de levantamiento de pesas que se realiza acostado en un banco horizontal con una barra cargada. El objetivo del ejercicio es fortalecer los mÃºsculos del pecho, los hombros y los trÃ­ceps, y mejorar la resistencia y la fuerza. El levantamiento se realiza bajando la barra lentamente hacia el pecho y luego empujÃ¡ndola hacia arriba, extendiendo los brazos completamente. Es importante mantener los codos cerca del cuerpo y controlar el movimiento en todo momento para evitar lesiones. El press banca se puede realizar con diferentes variaciones, como con mancuernas, en un banco inclinado o declinado, o con una barra hexagonal, para trabajar diferentes Ã¡reas de los mÃºsculos del pecho y los hombros.', 'Pectorales', 'Musculacion', 'Principiante'),
(6, 'Pullover', 'img/Bent-arm-pullover-1.svg', 'img/Bent-arm-pullover-2.svg', 'El pullover es un ejercicio que trabaja principalmente la musculatura de la espalda, el pecho y los trÃ­ceps. Para realizar este ejercicio, se debe acostar en un banco con la cabeza apoyada en Ã©l y los pies en el suelo. Luego, se sostiene una mancuerna con ambas manos y se lleva detrÃ¡s de la cabeza, manteniendo los codos ligeramente flexionados. A continuaciÃ³n, se eleva la mancuerna hacia el techo, extendiendo los brazos y contrayendo los mÃºsculos del pecho y la espalda. Este movimiento debe hacerse lentamente y controlado, evitando el balanceo o movimientos bruscos. El pullover es un ejercicio muy efectivo para fortalecer la parte superior del cuerpo y mejorar la postura.', 'Espalda', 'Musculacion', 'Principiante'),
(7, 'Curl de biceps martillo', 'img/Bicep-hammer-curl-1.svg', 'img/Bicep-hammer-curl-2.svg', 'El curl de bÃ­ceps martillo es un ejercicio de entrenamiento de fuerza para los bÃ­ceps que se realiza con mancuernas. Para comenzar, se sostiene una mancuerna en cada mano con las palmas enfrentadas entre sÃ­ y los brazos estirados a los lados del cuerpo. Luego, se flexionan los codos y se levantan las mancuernas hacia los hombros mientras se mantienen las palmas hacia adentro durante todo el movimiento. Al llegar a la parte superior del movimiento, se sostiene brevemente antes de bajar las mancuernas lentamente a la posiciÃ³n inicial. El curl de bÃ­ceps martillo se enfoca en los mÃºsculos del bÃ­ceps braquial, asÃ­ como en los mÃºsculos del antebrazo.', 'Gemelos', 'Musculacion', 'Principiante'),
(8, 'Curl de biceps', 'img/Biceps-curl-1.svg', 'img/Biceps-curl-2.svg', 'El curl de bÃ­ceps es un ejercicio de entrenamiento de fuerza que se enfoca en el desarrollo del mÃºsculo bÃ­ceps en la parte superior del brazo. Se realiza sosteniendo una barra con las manos, con las palmas hacia arriba y los codos cerca del cuerpo, y levantando la barra hacia los hombros, doblando los codos. A medida que se levanta la barra, los bÃ­ceps se contraen y se contraen aÃºn mÃ¡s cuando se baja lentamente la barra hacia la posiciÃ³n inicial. Este ejercicio se puede realizar en una variedad de configuraciones, como en un banco de predicador, con mancuernas o con una barra recta o EZ', 'Biceps', 'Musculacion', 'Intermedio'),
(9, 'Curl de biceps inverso', 'img/Biceps-curl-reverse-1.svg', 'img/ Biceps-curl-reverse-2.svg', 'Los curls de bÃ­ceps reverso son un ejercicio de entrenamiento de fuerza para los mÃºsculos de los brazos, especialmente para el mÃºsculo braquial y el mÃºsculo braquiorradial. Se realiza con una barra o mancuernas con un agarre supino, es decir, con las palmas de las manos mirando hacia abajo. En la posiciÃ³n inicial, los brazos estÃ¡n extendidos y las manos estÃ¡n en lÃ­nea con los muslos. Luego, levanta la barra o las mancuernas hacia los hombros, manteniendo los codos pegados al cuerpo y los antebrazos en posiciÃ³n vertical. Luego, baja lentamente la barra o las mancuernas a la posiciÃ³n inicial. Este movimiento es excelente para trabajar la parte superior del antebrazo y los mÃºsculos extensores del antebrazo.', 'Biceps', 'Musculacion', 'Intermedio'),
(10, 'Curl concentrado', 'img/Concentration-curls-1.svg', 'img/Concentration-curls-2.svg', 'El curl de bÃ­ceps concentrado es un ejercicio de aislamiento que se enfoca en trabajar los mÃºsculos del bÃ­ceps en la parte superior del brazo. Para realizarlo, se requiere sentarse en un banco y sostener una mancuerna con un agarre supino en el brazo que se va a trabajar. Luego, se coloca el codo en el interior del muslo y se extiende el brazo hacia abajo, de modo que la mancuerna quede debajo del cuerpo. Finalmente, se realiza la contracciÃ³n del bÃ­ceps levantando la mancuerna hacia el hombro, manteniendo el codo fijo en su lugar y manteniendo la espalda recta en todo momento. Este ejercicio ayuda a desarrollar fuerza y tamaÃ±o en los mÃºsculos del bÃ­ceps y se puede realizar tanto en el gimnasio como en casa con una mancuerna.', 'Biceps', 'Musculacion', 'Principiante'),
(11, 'Crunches Oblicuos', 'img/Cross-body-crunch-1.svg', 'img/Cross-body-crunch-2.svg', 'Los crunches oblicuos son un ejercicio abdominal que se enfoca en los mÃºsculos oblicuos. Para realizar este ejercicio, acuÃ©state boca arriba en el suelo con las rodillas dobladas y los pies apoyados en el suelo. Coloca las manos detrÃ¡s de las orejas o cruzadas en el pecho y levanta el torso hacia arriba, hacia las rodillas. Al mismo tiempo, gira el torso hacia un lado y lleva el codo opuesto hacia la rodilla opuesta. Luego, baja el torso y repite del otro lado. El movimiento debe ser controlado y enfocado en los oblicuos, evitando usar el cuello o los hombros para ayudar en el levantamiento.', 'Core', 'Musculacion', 'Intermedio'),
(12, 'Crunches', 'img/Crunches-1.svg', 'img/Crunches-2.svg', 'Los crunches son un ejercicio de abdominales que se realizan acostÃ¡ndose en el suelo con las rodillas flexionadas y los pies apoyados en el suelo. Luego, se eleva la parte superior del cuerpo hacia las piernas, contrayendo los mÃºsculos abdominales. En el caso de los crunches normales, las manos se colocan detrÃ¡s de la cabeza y se mantiene la mirada hacia arriba durante todo el ejercicio para evitar forzar el cuello. Este ejercicio ayuda a fortalecer los mÃºsculos abdominales y mejorar la resistencia de la zona media del cuerpo.', 'Core', 'Musculacion', 'Principiante'),
(13, 'Chrunches con balon estabilizador', 'img/Crunches-with-legs-on-stability-ball-1.svg', 'img/Crunches-with-legs-on-stability-ball-2.svg', 'Crunches con balon estabilizador es un ejercicio de entrenamiento de fuerza para los abdominales y los mÃºsculos estabilizadores de la pelvis. En este ejercicio, se acuesta boca arriba sobre una pelota de estabilidad con las piernas levantadas y las pantorrillas apoyadas en la pelota. Luego, realiza contracciones de los abdominales superiores, levantando los hombros y la cabeza del suelo y acercÃ¡ndolos a las rodillas. La pelota de estabilidad aÃ±ade un elemento de inestabilidad al ejercicio, lo que requiere un mayor esfuerzo de los mÃºsculos estabilizadores de la pelvis.', 'Core', 'Musculacion', 'Avanzaado'),
(14, 'Crunch declinado', 'img/Decline-crunch-1.svg', 'img/Decline-crunch-2.svg', 'El crunch en banco declinado es un ejercicio para los abdominales que se realiza acostado en un banco inclinado con la cabeza hacia abajo y los pies asegurados en la parte superior del banco. Se comienza con las manos detrÃ¡s de la cabeza y se eleva el torso hacia las rodillas, contrayendo los mÃºsculos abdominales en el camino. Este movimiento se repite varias veces para trabajar los mÃºsculos abdominales superiores. Al realizar el crunch en un banco declinado, se aÃ±ade un mayor nivel de resistencia a los abdominales, lo que hace que el ejercicio sea mÃ¡s desafiante y efectivo.', 'Core', 'Musculacion', 'Intermedio'),
(15, 'Aperturas con mancuernas banco declinado', 'img/Dumbbell-decline-flys-1.svg', 'img/Dumbbell-decline-flys-2.svg', 'El ejercicio de moscas con mancuernas en declive se enfoca en la parte inferior del pecho. AcuÃ©stese sobre un banco inclinado con una mancuerna en cada mano, y levante los brazos hacia los lados hasta que las mancuernas estÃ©n directamente sobre el pecho. Luego baje lentamente las mancuernas hacia los lados y hacia atrÃ¡s, manteniendo los codos ligeramente doblados, hasta que sienta un estiramiento en el pecho y los hombros, y luego levante las mancuernas de nuevo a la posiciÃ³n inicial.', 'Pectorales', 'Musculacion', 'Intermedio'),
(16, 'Aperturas con mancuernas banco plano', 'img/Dumbbell-decline-flys-1.svg', 'img/Dumbbell-decline-flys-2.svg', 'Las aperturas con mancuernas en banco plano son un ejercicio de entrenamiento de fuerza para trabajar los mÃºsculos pectorales mayores y menores. El ejercicio implica acostarse sobre un banco plano con una mancuerna en cada mano, los brazos estirados hacia arriba y las palmas de las manos mirando hacia adentro. Desde esta posiciÃ³n, se baja lentamente las mancuernas hacia los lados hasta que los brazos estÃ¡n paralelos al suelo y luego se elevan las mancuernas a la posiciÃ³n inicial. El movimiento se repite para completar una serie de repeticiones.', 'Pectorales', 'Musculacion', 'Principiante'),
(17, 'Elevaciones frontales con mancuernas', 'img/Dumbbell-front-raises-1.svg', 'img/Dumbbell-front-raises-2-1.svg', 'Las elevaciones frontales con mancuernas son un ejercicio de entrenamiento de fuerza que se enfoca en los mÃºsculos del hombro y del brazo. Para realizar el ejercicio, se sostiene una mancuerna en cada mano y se elevan los brazos hacia adelante, manteniendo los codos ligeramente flexionados. Este movimiento fortalece los mÃºsculos del hombro, especialmente el deltoides anterior, que es el mÃºsculo en la parte delantera del hombro. TambiÃ©n puede ayudar a mejorar la estabilidad del hombro y la postura.', 'Hombros', 'Musculacion', 'Principiante'),
(18, 'Elevaciones laterales con mancuernas', 'img/Dumbbell-lateral-raises-1.svg', 'img/Dumbbell-lateral-raises-2.svg', 'Las elevaciones laterales con mancuernas son un ejercicio de entrenamiento de fuerza para los hombros. Para realizar este ejercicio, debes pararte con los pies separados al ancho de los hombros, sostener una mancuerna en cada mano con las palmas hacia adentro y los brazos rectos a los lados. Luego, levanta los brazos en lÃ­nea recta hacia los lados hasta que las manos estÃ©n a la altura de los hombros o un poco mÃ¡s arriba. MantÃ©n la posiciÃ³n durante un segundo y luego baja los brazos lentamente a la posiciÃ³n inicial. Este ejercicio trabaja los mÃºsculos del hombro medio y tambiÃ©n puede ayudar a fortalecer los mÃºsculos del hombro anterior y posterior.', 'Hombros', 'Musculacion', 'Principiante'),
(19, 'Encogimientos con Swiss ball', 'img/Exercise-ball-pull-in-1.svg', 'img/Exercise-ball-pull-in-2.svg', 'Los encogimientos con Swiss ball son un ejercicio de entrenamiento de fuerza que se enfoca en los mÃºsculos abdominales y de la espalda baja. Para realizar este ejercicio, se requiere un balÃ³n suizo (Swiss ball) y una superficie plana para acostarse. Para realizar los encogimientos con Swiss ball, el usuario debe acostarse boca arriba en el suelo con los pies apoyados sobre el balÃ³n suizo. Luego, se debe levantar lentamente el balÃ³n con las piernas extendidas hacia el techo, manteniendo los abdominales tensos y apretados. A continuaciÃ³n, se debe bajar el balÃ³n de manera controlada hacia el suelo y repetir el movimiento para completar varias repeticiones.Este ejercicio es beneficioso para desarrollar la fuerza y la resistencia en los mÃºsculos abdominales, asÃ­ como para mejorar la estabilidad y el equilibrio. TambiÃ©n puede ayudar a fortalecer los mÃºsculos de la espalda baja y mejorar la postura.', 'Hombros', 'Musculacion', 'Intermedio'),
(20, 'Dominadas', ' img/Gironda-sternum-chins-1.svg', 'img/Gironda-sternum-chins-2.svg', 'Las dominadas sternum chins, tambiÃ©n conocidas como dominadas esternÃ³n o pull-ups esternÃ³n, son una variante avanzada de las dominadas tradicionales que se enfocan en el desarrollo de los mÃºsculos de la espalda superior, el pecho y los hombros.En lugar de simplemente subir el cuerpo hacia la barra, como se hace en las dominadas tradicionales, en las dominadas sternum chins el objetivo es llevar el pecho hacia la barra, especÃ­ficamente hacia el esternÃ³n. Para hacer esto, se debe tener una buena fuerza y control de la escÃ¡pula, y se debe elevar el cuerpo hacia la barra en un Ã¡ngulo mÃ¡s vertical que en las dominadas normales.Las dominadas sternum chins son un ejercicio desafiante y requieren un alto nivel de fuerza y tÃ©cnica. Se recomienda que solo los atletas avanzados y experimentados en la realizaciÃ³n de dominadas las realicen.', 'Espalda', 'Musculacion', 'Intermedio'),
(21, 'Hiperextensione', 'img/Hyperextensions-1.svg', 'img/Hyperextensions-2.svg', 'Las hyperextensiones, tambiÃ©n conocidas como extensiones lumbares o back extensions en inglÃ©s, son un ejercicio de entrenamiento de fuerza que se enfoca en los mÃºsculos de la espalda baja, especÃ­ficamente los mÃºsculos erectores de la columna vertebral y los glÃºteos. El ejercicio se realiza tÃ­picamente en un banco de hyperextensiones, con los pies asegurados y la parte superior del cuerpo colgando libremente.Durante el ejercicio, el individuo eleva su cuerpo hasta una posiciÃ³n horizontal, creando una lÃ­nea recta entre los hombros y las rodillas, y luego baja de regreso a la posiciÃ³n inicial. Las hyperextensiones pueden ser realizadas con el propio peso corporal, con una carga adicional, o con una barra, lo que aumenta la intensidad del ejercicio.Este ejercicio es beneficioso para mejorar la postura, fortalecer los mÃºsculos de la espalda baja y prevenir lesiones en la espalda. Sin embargo, es importante realizarlo con la tÃ©cnica adecuada para evitar lesiones en la espalda baja.', 'Core', 'Musculacion', 'Principiante'),
(22, 'Extensiones de triceps inclinado con mancuernas', 'img/Incline-triceps-extensions-1.svg', 'img/Incline-triceps-extensions-2.svg', 'La extensiÃ³n de trÃ­ceps en banco inclinado es un ejercicio de entrenamiento de fuerza que se enfoca en el desarrollo del mÃºsculo trÃ­ceps. En este ejercicio, se usa un banco inclinado y un par de mancuernas para realizar la extensiÃ³n del trÃ­ceps mientras se mantiene el brazo en una posiciÃ³n fija. El atleta comienza sentado en el banco inclinado con los pies apoyados en el suelo y las mancuernas sujetas con ambas manos. Luego, se extienden los brazos hacia arriba, manteniendo los codos en su lugar, y se baja lentamente las mancuernas detrÃ¡s de la cabeza hasta que los brazos formen un Ã¡ngulo de 90 grados. A continuaciÃ³n, se eleva las mancuernas de nuevo hacia arriba hasta la posiciÃ³n inicial y se repite el ejercicio. Este movimiento ayuda a tonificar y fortalecer los mÃºsculos del trÃ­ceps, que son importantes para muchas actividades cotidianas, asÃ­ como para deportes que requieren fuerza en los brazos.', 'Triceps', 'Musculacion', 'Principiante'),
(23, 'Extensiones triceps con apoyo en polea', 'img/Kneeling-concentration-triceps-extension-1.svg', 'img/Kneeling-concentration-triceps-extension-2.svg', 'La kneeling concentration triceps, tambiÃ©n conocida como extensiÃ³n de trÃ­ceps con apoyo, es un ejercicio de entrenamiento de fuerza para trabajar especÃ­ficamente los trÃ­ceps. El ejercicio se realiza sentado en un banco o silla con una mancuerna en la mano, apoyando el codo en la pierna opuesta. A partir de ahÃ­, se extiende el brazo hacia atrÃ¡s y hacia arriba, manteniendo el codo en su lugar. Este movimiento se repite varias veces para trabajar los mÃºsculos del trÃ­ceps de manera efectiva. La kneeling concentration triceps se enfoca en la cabeza larga del trÃ­ceps y puede ser una excelente manera de mejorar la fuerza y la definiciÃ³n muscular en esta Ã¡rea.', 'Triceps', 'Musculacion', 'Intermedio'),
(24, 'Prensa', 'img/Leg-press-1-1024x670.svg', 'img/Leg-press-2-1024x670.svg', 'El press de piernas es un ejercicio de entrenamiento de fuerza que se realiza en una mÃ¡quina de pesas y estÃ¡ diseÃ±ado para trabajar los mÃºsculos de las piernas, incluyendo los cuÃ¡driceps, los glÃºteos, los isquiotibiales y los mÃºsculos de la pantorrilla. El ejercicio implica sentarse en una plataforma acolchada y empujar una placa de peso con las piernas mientras se mantiene la espalda en posiciÃ³n vertical. A medida que se extienden las piernas, se contraen los mÃºsculos de las piernas para levantar el peso. Este ejercicio es ideal para mejorar la fuerza y la definiciÃ³n muscular en las piernas.', 'Cuadriceps', 'Musculacion', 'Intermedio'),
(25, 'Elevaciones de piernas', 'img/Leg-raises-1.svg', 'img/Leg-raises-2.svg', 'Los leg raises o elevaciones de piernas son un ejercicio de entrenamiento de fuerza para el abdomen y los mÃºsculos de las caderas. El ejercicio se realiza acostado en una superficie plana, generalmente en una colchoneta o en un banco de entrenamiento. Las piernas se elevan hacia arriba, manteniÃ©ndolas juntas y estiradas, mientras se contraen los mÃºsculos abdominales y de la parte inferior del torso. A medida que las piernas se elevan, se inhala y se exhala cuando se bajan. Las variaciones del ejercicio pueden incluir agregar peso o mantener los brazos en diferentes posiciones para involucrar diferentes mÃºsculos.', 'Core', 'Musculacion', 'Intermedio'),
(26, 'Extensiones triceps polea baja', 'img/Low-triceps-extension-1.svg', 'img/Low-triceps-extension-2.svg', 'Las low triceps extensions, tambiÃ©n conocidas como extensiones de trÃ­ceps con polea baja, son un ejercicio de entrenamiento de fuerza para los trÃ­ceps. Para realizar este ejercicio, se necesita una mÃ¡quina de polea baja con una barra en V o una cuerda de trÃ­ceps.Para empezar, el usuario se coloca de pie frente a la mÃ¡quina con los pies separados a la anchura de los hombros y agarra la barra o la cuerda con las manos en pronaciÃ³n (palmas hacia abajo). Los brazos deben estar doblados y pegados al cuerpo.Luego, se extienden los brazos hacia abajo y hacia atrÃ¡s, manteniendo los codos pegados al cuerpo, hasta que los trÃ­ceps estÃ©n completamente contraÃ­dos. La posiciÃ³n final debe ser con los brazos rectos y la barra o la cuerda apuntando hacia abajo.Se realiza una pausa en la posiciÃ³n final antes de volver lentamente a la posiciÃ³n inicial, controlando el movimiento. Es importante mantener el nÃºcleo y los glÃºteos apretados para mantener una postura adecuada durante todo el ejercicio.Las low triceps extensions trabajan los trÃ­ceps, ayudando a fortalecer y tonificar los mÃºsculos en la parte posterior de los brazos.', 'Triceps', 'Musculacion', 'Principiante'),
(27, 'Lunges ', 'img/Lunges-1.svg', 'img/Lunges-2-1.svg', 'Los lunges, tambiÃ©n conocidos como estocadas, son un ejercicio de entrenamiento de fuerza que implica mover el cuerpo hacia adelante con una pierna mientras se mantiene la otra en su lugar, y luego volver a la posiciÃ³n inicial. Este ejercicio trabaja principalmente los mÃºsculos de las piernas, incluyendo los cuÃ¡driceps, los glÃºteos y los mÃºsculos isquiotibiales. TambiÃ©n puede ayudar a mejorar la fuerza, la estabilidad y la flexibilidad de las piernas. Los lunges se pueden realizar con o sin peso adicional y en varias variaciones, como lunges laterales o lunges en retroceso.', 'Cuadriceps', 'Musculacion', 'Principiante'),
(28, 'Press francÃ©s', 'img/Lying-close-grip-triceps-press-to-chin-1.svg', 'img/Lying-close-grip-triceps-press-to-chin-2.svg', 'El ejercicio Lying Close Grip es una variaciÃ³n del press de banca en la que se utiliza una barra con un agarre mÃ¡s estrecho, lo que implica una mayor activaciÃ³n del trÃ­ceps en lugar del pecho. Para realizar el ejercicio, se acuesta en un banco plano y sostiene la barra con un agarre estrecho, con las manos separadas a la distancia de los hombros. A continuaciÃ³n, se baja la barra hacia el pecho manteniendo los codos cerca del cuerpo y se extienden los brazos para volver a la posiciÃ³n inicial. El Lying Close Grip se enfoca principalmente en el trÃ­ceps, pero tambiÃ©n involucra los hombros y el pecho como mÃºsculos secundarios.', 'Triceps', 'Musculacion', 'Intermedio'),
(29, 'Patada de triceps con mancuerna', 'img/Triceps-kickback-1.svg', 'img/Triceps-kickback-2.svg', 'El triceps kickback es un ejercicio de aislamiento que se enfoca en trabajar los mÃºsculos trÃ­ceps. Para realizarlo, se necesita una mancuerna y un banco. Primero, se debe colocar el pie y la mano del mismo lado en el banco, y doblar la parte superior del cuerpo hacia adelante hasta que quede paralela al suelo. Sosteniendo la mancuerna con la otra mano y con el brazo doblado, se debe llevar la mancuerna hacia atrÃ¡s, manteniendo el codo fijo en un Ã¡ngulo de 90 grados, y luego extender el brazo hacia atrÃ¡s hasta que estÃ© completamente recto. Se debe sentir una contracciÃ³n en los trÃ­ceps durante todo el movimiento. Luego, se baja lentamente la mancuerna a la posiciÃ³n inicial y se repite el movimiento. Este ejercicio es ideal para tonificar y fortalecer los mÃºsculos trÃ­ceps.', 'Triceps', 'Musculacion', 'Principiante'),
(30, 'Fondos en maquina', 'img/Tricep-dips-1.svg', 'img/Tricep-dips-2-1.svg', 'Los fondos en mÃ¡quina para trÃ­ceps son un ejercicio de entrenamiento de fuerza que se realiza en una mÃ¡quina de entrenamiento de pesas especÃ­fica para trÃ­ceps. El ejercicio se realiza sentado en la mÃ¡quina, con los brazos extendidos hacia atrÃ¡s y sosteniendo las asas de la mÃ¡quina. Desde esta posiciÃ³n, se contraen los trÃ­ceps para extender los brazos y levantar el peso. Luego se baja el peso lentamente para volver a la posiciÃ³n inicial. Este ejercicio es efectivo para fortalecer y tonificar los trÃ­ceps, y puede ser una buena opciÃ³n para aquellos que buscan reducir la carga en las articulaciones de los hombros y codos que pueden ocurrir con otros ejercicios de trÃ­ceps como las flexiones de trÃ­ceps o los fondos en paralelas.', 'Triceps', 'Musculacion', 'Principiante'),
(31, 'Remo en maquina', 'img/T-bar-row-1.svg', 'img/T-bar-row-2.svg', 'El T-Bar Row es un ejercicio de entrenamiento de fuerza que se enfoca en trabajar los mÃºsculos de la espalda, especÃ­ficamente los mÃºsculos de la parte superior de la espalda como el trapecio y los mÃºsculos del manguito rotador. El ejercicio se realiza con una barra colocada en un soporte en Ã¡ngulo, con un extremo de la barra colocado en el suelo y el otro extremo cargado con discos de peso. El usuario agarra la barra con ambas manos en un agarre cerrado y levanta la barra hacia el pecho, manteniendo los codos cerca del cuerpo y apretando los omÃ³platos. Este movimiento ayuda a fortalecer la espalda, mejorando la postura y la estabilidad del nÃºcleo.', 'Espalda', 'Musculacion', 'Principiante'),
(32, 'Supermans', 'img/Supermans-1.svg', 'img/Supermans-2.svg', 'Supermans es un ejercicio de fortalecimiento de la espalda y glÃºteos. Para realizarlo, se debe acostar boca abajo en el suelo, con los brazos extendidos hacia adelante y las piernas extendidas detrÃ¡s del cuerpo. Luego, se debe levantar simultÃ¡neamente los brazos, piernas y torso del suelo, manteniÃ©ndolos rectos y en lÃ­nea recta con el cuerpo. Una vez que se alcanza la posiciÃ³n mÃ¡s alta, se debe sostener durante unos segundos antes de volver a la posiciÃ³n inicial. El ejercicio debe realizarse lentamente y con control para evitar lesiones y maximizar los beneficios para la espalda y glÃºteos.', 'Core', 'Musculacion', 'Intermedio'),
(33, 'Curl de biceps de pie', 'img/Standing-biceps-curl-1.svg', 'img/Standing-biceps-curl-2.svg', 'La standing biceps curl, tambiÃ©n conocida como curl de pie, es un ejercicio de entrenamiento de fuerza que se enfoca en los mÃºsculos bÃ­ceps de los brazos. Para realizar este ejercicio, el usuario sostiene una barra con peso en posiciÃ³n de pie, con las palmas de las manos hacia arriba y las manos separadas al ancho de los hombros. Luego, con un movimiento controlado, flexiona los codos para levantar la barra hacia los hombros, manteniendo los codos pegados al cuerpo en todo momento. Finalmente, se baja la barra de manera controlada para completar una repeticiÃ³n. La standing biceps curl es un ejercicio popular entre los culturistas y los entusiastas del fitness debido a su capacidad para desarrollar y tonificar los mÃºsculos de los brazos.', 'Biceps', 'Musculacion', 'Principiante'),
(34, 'Sentadillas', 'img/Squats-1.svg', 'img/Squats-2-1.svg', 'Los squats libres, tambiÃ©n conocidos como sentadillas libres, son un ejercicio de entrenamiento de fuerza en el que se coloca una barra cargada sobre los hombros, se baja en una posiciÃ³n de cuclillas manteniendo la espalda recta y las rodillas apuntando hacia afuera, y luego se vuelve a la posiciÃ³n inicial. Este ejercicio trabaja principalmente los mÃºsculos de las piernas, incluyendo los cuÃ¡driceps, los glÃºteos y los isquiotibiales, asÃ­ como los mÃºsculos estabilizadores del nÃºcleo y la espalda. Es una tÃ©cnica de entrenamiento popular en el levantamiento de pesas y puede ser modificado para adaptarse a diferentes niveles de habilidad y objetivos de entrenamiento.', 'Cuadriceps', 'Musculacion', 'Avanzaado'),
(35, 'Extensiones triceps sentado', 'img/Seated-triceps-press-1.svg', 'img/Seated-triceps-press-2.svg', 'El ejercicio de triceps sentado es un ejercicio de entrenamiento de fuerza que se enfoca en los mÃºsculos trÃ­ceps. Se realiza sentado en un banco con una mancuerna o con un cable de resistencia detrÃ¡s de la cabeza, y el objetivo es extender los brazos hacia arriba para trabajar los mÃºsculos trÃ­ceps. Es importante mantener una buena postura y controlar el movimiento durante todo el ejercicio para evitar lesiones.', 'Triceps', 'Musculacion', 'Intermedio'),
(36, 'Reverse plate curls', 'img/Reverse-plate-curls-1.svg', 'img/Reverse-plate-curls-2.svg', 'Las reverse plate curls son un ejercicio de entrenamiento de fuerza para los brazos que se enfoca en los mÃºsculos del antebrazo. Para realizarlo, se sostiene una pesa con los dedos hacia abajo y se flexionan los brazos levantando la pesa hacia el cuerpo, manteniendo los codos cerca del torso. Luego, se baja la pesa lentamente hasta la posiciÃ³n inicial. Este ejercicio es ideal para desarrollar la fuerza y el tamaÃ±o de los mÃºsculos del antebrazo, lo que puede ayudar en una variedad de movimientos cotidianos y deportivos.', 'Biceps', 'Musculacion', 'Intermedio'),
(37, 'Predicador', 'img/Preacher-curl-3-1.svg', 'img/Preacher-curl-3-2.svg', 'El predicador bÃ­ceps es un ejercicio de entrenamiento de fuerza que se realiza con una barra EZ o una mancuerna, utilizando un banco predicador. El ejercicio se enfoca en los mÃºsculos del bÃ­ceps braquial, y se realiza con el objetivo de aumentar la fuerza y la masa muscular en los brazos.Para realizar el ejercicio, se debe colocar el pecho y los brazos sobre el banco predicador, con los pies firmemente plantados en el suelo. La barra o la mancuerna se sostienen con las manos, con los codos apoyados en el cojÃ­n del predicador. Desde esta posiciÃ³n, se debe levantar la barra o la mancuerna hasta la altura de los hombros, doblando los codos y contrayendo los mÃºsculos del bÃ­ceps. Luego, se baja lentamente la barra o la mancuerna hasta la posiciÃ³n inicial, manteniendo la contracciÃ³n en los mÃºsculos del bÃ­ceps durante todo el movimiento.Es importante realizar el ejercicio con una tÃ©cnica adecuada y con un peso adecuado a la capacidad del individuo, para evitar lesiones y obtener los resultados deseados.', 'Biceps', 'Musculacion', 'Intermedio'),
(38, 'Planchas laterales', 'img/Side-plank-1.svg', 'img/Side-plank-2.svg', 'El side plank, tambiÃ©n conocido como plancha lateral, es un ejercicio de entrenamiento de fuerza en el que se apoya el peso del cuerpo sobre un brazo mientras se levanta la cadera del suelo, manteniendo el cuerpo en una posiciÃ³n lateral. Este ejercicio se enfoca en los mÃºsculos del nÃºcleo, incluyendo los abdominales, la espalda y los glÃºteos, asÃ­ como en los mÃºsculos estabilizadores del hombro y las piernas. La plancha lateral tambiÃ©n es una excelente forma de mejorar la fuerza y la estabilidad de la parte superior del cuerpo.', 'Core', 'Musculacion', 'Avanzaado'),
(39, 'Elevaciones de talÃ³n en maquina', 'Standing-calf-raises-1.svg', 'img/Standing-calf-raises-2.svg', 'Las elevaciones de gemelos en mÃ¡quina son un ejercicio que se enfoca en fortalecer y tonificar los mÃºsculos de la pantorrilla. Para realizar este ejercicio, debes pararte en la plataforma de la mÃ¡quina con los hombros debajo de los cojines de los hombros y los pies en el borde inferior de la plataforma. Luego, levanta los talones mientras exhalas y mantÃ©n la posiciÃ³n por un segundo antes de bajar lentamente los talones hasta la posiciÃ³n inicial mientras inhalas. Es importante asegurarse de mantener una postura correcta y evitar curvar la espalda.', 'Gemelos', 'Musculacion', 'Intermedio'),
(40, 'Elevaciones talÃ³n', 'img/seatedRaises.svg', 'img/seatedRaises2.svg', 'La elevaciÃ³n de gemelos sentado es un ejercicio para trabajar los mÃºsculos de la pantorrilla. Para realizarlo, se debe sentar en una mÃ¡quina especÃ­fica con las rodillas dobladas y los pies apoyados en una plataforma. Luego, se debe levantar los talones lo mÃ¡s alto posible, contrayendo los mÃºsculos de la pantorrilla en la parte superior del movimiento. Se debe bajar lentamente los talones hasta que queden por debajo de la plataforma para completar una repeticiÃ³n. Es importante mantener la espalda recta durante todo el ejercicio y evitar hacer trampa moviendo la parte superior del cuerpo.', 'Gemelos', 'Musculacion', 'Intermedio');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `favoritos`
--

CREATE TABLE `favoritos` (
  `id` int(11) NOT NULL,
  `id_usuario` int(11) NOT NULL,
  `id_ejercicio` int(11) NOT NULL,
  `ejercicio` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

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
(1, 'Morad', 'El mourabit', 26, 76, 'moradelm1996@gmail.com', '$2b$10$NhV5bl17JJ0JyLbFjsn/p./HUixi.Ewqd3j2n02kDEu65AoNJ4BUO', 1);

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
  MODIFY `idEjercicio` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=41;

--
-- AUTO_INCREMENT de la tabla `favoritos`
--
ALTER TABLE `favoritos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `tipousuario`
--
ALTER TABLE `tipousuario`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

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
