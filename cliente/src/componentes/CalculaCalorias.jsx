import axios from "axios";
import React, { useEffect, useState } from "react";
import "../css/calculadorCalorias.css";
import { Button } from "react-bootstrap";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BsPlus } from "react-icons/bs";
import { FaPlus } from "react-icons/fa";
import ModalInfo from "./Modalinfo";

function CalculaCalorias() {

  const [caloriesBurned, setCaloriesBurned] = useState(null); // Estado para almacenar las calorías quemadas
  const [activityLevel, setActivityLevel] = useState("sedentary"); // Estado para almacenar el nivel de actividad
  const [alturaUsuario, setAlturaUsuario] = useState(null); // Estado para almacenar la altura del usuario
  
  const [pesoUsuario, setPesoUsuario] = useState(""); // Estado para almacenar el peso del usuario
  const [edadUsuario, setEdadUsuario] = useState(""); // Estado para almacenar la edad del usuario
  const [nombre, setNombre] = useState(""); // Estado para almacenar el nombre del usuario
  const [apellido, setApellido] = useState(""); // Estado para almacenar el apellido del usuario
  
  const [showModal, setShowModal] = useState(false); // Estado para controlar la visibilidad de un modal
  const [informacion, setInformacion] = useState(""); // Estado para almacenar información adicional
  

  const handleButtonClick = () => {
    setInformacion(
      <div>
        <ul>
          <li>
            <strong>Sedentario:</strong> esta categoría incluye a personas que
            realizan muy poca actividad física en su día a día, como aquellas
            que tienen un trabajo de oficina y pasan la mayor parte del día
            sentadas o aquellas que hacen tareas domésticas ligeras.
          </li>
          <li>
            <strong>Actividad ligera:</strong> esta categoría incluye a personas
            que realizan actividades físicas leves durante el día, como caminar
            a diario o hacer tareas domésticas un poco más intensas.
          </li>
          <li>
            <strong>Actividad moderada:</strong> esta categoría incluye a
            personas que realizan actividades físicas moderadas durante el día,
            como correr o hacer deportes de forma regular.
          </li>
          <li>
            <strong>Actividad intensa:</strong> esta categoría incluye a
            personas que realizan actividades físicas intensas durante el día,
            como levantamiento de pesas, entrenamientos de alta intensidad o
            deportes muy exigentes.
          </li>
          <li>
            <strong>Actividad muy intensa:</strong> esta categoría incluye a
            personas que realizan actividades físicas extremadamente intensas
            durante el día, como atletas de alto rendimiento o personas que
            practican deportes de alto impacto con frecuencia.
          </li>
        </ul>
      </div>
    );

    setShowModal(true);
  };


//Función que maneja el cambio en el nivel de actividad y actualiza el estado activityLevel
const handleActivityLevel = (event) => {
  setActivityLevel(event.target.value);
};

//Función que maneja el cambio en la altura del usuario y actualiza el estado alturaUsuario
const handleAlturaUsuario = (event) => {
  setAlturaUsuario(event.target.value);
};

//Función que maneja el cambio en la edad del usuario y actualiza el estado edadUsuario
const handleEdadUsuario = (event) => {
  setEdadUsuario(event.target.value);
};

//Función que maneja el cambio en el peso del usuario y actualiza el estado pesoUsuario
const handlePesoUsuario = (event) => {
  setPesoUsuario(event.target.value);
};

//Estado para controlar el resaltado de algún elemento de la interfaz
const [highlight, setHighlight] = useState(false);

//Efecto que activa el resaltado cuando se actualiza el estado caloriesBurned
useEffect(() => {
  if (caloriesBurned) {
    setHighlight(true);
    setTimeout(() => {
      setHighlight(false);
    }, 2000);// Después de 2 segundos, se desactiva el resaltado
  }
}, [caloriesBurned]);


//Se obtiene el id del usuario almacenado en el local storage y se muestra en la consola
const objetoSesion = JSON.parse(localStorage.getItem("UsuarioConectado"));
const userId = objetoSesion.id;
console.log(userId);

//URL enpoint server node para obtener los datos del usuario mediante su id
const URL_US = `${process.env.REACT_APP_API_BASE_URL}/users/${userId}`;


const obtenerDatosUsuario = async () => {
  try {
    const response = await axios.get(URL_US);
    const { email, nombre, apellido, peso, edad } = response.data;
    setNombre(nombre);
    setApellido(apellido);
    setEdadUsuario(edad);
    setPesoUsuario(peso);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
    // Manejar el error de alguna manera
    console.log("error en la parte servidora al obtener los datos");
  }
};
// Función asincrónica para obtener los datos del usuario y actualizar los estados correspondientes

const gender = "male";
// Género del usuario (valor fijo en este caso)

useEffect(() => {
  obtenerDatosUsuario();
}, []);
// Efecto que se ejecuta al montar el componente y llama a la función obtenerDatosUsuario
// para obtener los datos del usuario


  // Función para calcular las calorías quemadas
  function calculateCalories() {
    let bmr; // Tasa metabólica basal

    if (gender === "male") {
      bmr =
        88.362 +
        13.397 * pesoUsuario +
        4.799 * alturaUsuario -
        5.677 * edadUsuario;
    } else {
      bmr =
        447.593 +
        9.247 * pesoUsuario +
        3.098 * alturaUsuario -
        4.33 * edadUsuario;
    }

    // Aplicar factor de actividad física
    let activityFactor;
    switch (activityLevel) {
      case "Sedentario":
        activityFactor = 1.2;
        break;
      case "Ligeramente_activo":
        activityFactor = 1.375;
        break;
      case "Actividad_moderada":
        activityFactor = 1.55;
        break;
      case "Muy_activo":
        activityFactor = 1.725;
        break;
      case "Extra_activo":
        activityFactor = 1.9;
        break;
      default:
        activityFactor = 1.2;
    }

    // Calcular calorías quemadas
    const calorias = Math.round(bmr * activityFactor);
    setCaloriesBurned(calorias);
  }

  return (
    <div className="container">
      <div className="row no-gutters row-eq-height custom-cabecera">
        <div className="text-center cabecera" style={{ maxWidth: "100vw" }}>
          <h1 className="display-6 mb-4">Calculadora de calorías quemadas</h1>
          <h2 className="mb-4">
            ¡Hola {nombre} {apellido}!
          </h2>
        </div>
      </div>

      <div className="row custom-columnn">
        <div className="col-md-4 ">
          <p className="parrafo">
            El calculador de calorías es una herramienta que permite estimar la
            cantidad de calorías que una persona quema durante sus actividades
            diarias. Esta herramienta tiene en cuenta factores como la edad, el
            peso, la altura y el nivel de actividad física de la persona para
            hacer el cálculo. La información recopilada es utilizada para
            calcular la tasa metabólica basal (BMR) y el factor de actividad
            física, los cuales son utilizados para estimar la cantidad de
            calorías que se queman durante el día. Esta información puede ser
            muy útil para aquellas personas que desean controlar su peso y
            llevar un estilo de vida más saludable.
          </p>
        </div>

        <div className="col-md-8 mb-2 custom-columnn">
          <h5 className="mb-3">
            Tus datos actuales para calcular tus calorías diarias recomendadas
            son:
          </h5>
         
          <div className="card border-0">
            <div className="card-body">
              <p className="card-text mb-2 font-size-lg">
                Edad: {edadUsuario} años
              </p>
              <p className="card-text font-size-lg">
                Peso: {pesoUsuario} kg
             </p>
             <label>Prueba con otros</label>

              <div className="form-group mb-4">
                <label htmlFor="edad">Edad:</label>
                <select
                  type="number"
                  id="edad"
                  className="form-control"
                  defaultValue={edadUsuario}
                  value={edadUsuario}
                  onChange={handleEdadUsuario}
                >
                  {[...Array(84)].map((_, i) => (
                    <option key={i} value={i + 16}>
                      {i + 16} años
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-group mb-4">
                <label htmlFor="peso">Peso (kg):</label>
                <select
                  type="number"
                  id="peso"
                  className="form-control"
                  min="40"
                  max="200"
                  defaultValue={pesoUsuario}
                  value={pesoUsuario}
                  onChange={handlePesoUsuario}
                >
                  {" "}
                  {[...Array(181)].map((_, i) => (
                    <option key={i} value={i + 20}>
                      {i + 20} kg
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <div className="form-group mb-4">
            <label htmlFor="height">Altura (cm):</label>
            <input
              type="number"
              id="height"
              className="form-control"
              min="150"
              max="230"
              defaultValue="175"
              value={alturaUsuario}
              onChange={handleAlturaUsuario}
            />
            <label htmlFor="activityLevel">Nivel de actividad física:</label>
            <select
              id="activityLevel"
              className="form-control"
              value={activityLevel}
              onChange={handleActivityLevel}
            >
              <option value="Sedentario">Sedentario</option>
              <option value="Lligeramente_activo">Actividad ligera</option>
              <option value="Actividad_moderada">Actividad moderada</option>
              <option value="Muy_activo">Actividad intensa</option>
              <option value="Extra_activo">Actividad muy intensa</option>
            </select>
            <Button
              className="small-button"
              variant="info"
              onClick={handleButtonClick}
            >
              <FaPlus />
              Seleccionar otros valores{" "}
            </Button>
          </div>
          <div className="form-group mb-4 d-flex justify-content-center">
            <Button className="btn btn-primary" onClick={calculateCalories}>
              Calcular calorías quemadas
            </Button>
          </div>

          <p className={`calories-burned ${highlight ? "highlight" : ""}`}>
            Calorías quemadas diarias: {caloriesBurned} kcal
          </p>
        </div>
      </div>
      <ModalInfo
        informacion={informacion}
        showModal={showModal}
        setShowModal={setShowModal}
      />
    </div>
  );
}

export default CalculaCalorias;
