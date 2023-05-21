import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import {
  mostrarMensajeErrorSweet,
  mostrarMensajeExitoSweet,
  mostrarIMCSweet,
} from "../helpers/SweetAlert2";
import "../css/imc.css";

function IMCCalculator() {
  const [weight, setWeight] = useState(""); // Estado para almacenar el peso
  const [height, setHeight] = useState(""); // Estado para almacenar la altura
  const [result, setResult] = useState(""); // Estado para almacenar el resultado del IMC
  const [weightError, setWeightError] = useState(false); // Estado para almacenar si hay un error en el peso
  const [heightError, setHeightError] = useState(false); // Estado para almacenar si hay un error en la altura

  const mostrarMensajeError = (mensaje) => {
    // Función para mostrar un mensaje de error
    const contenidoHTML = `<h3>${mensaje}</h3>`;
    const divError = document.getElementById("alerta"); // Obtener el elemento con el id "alerta"
    divError.innerHTML = contenidoHTML; // Establecer el contenido HTML del elemento con el mensaje de error
    divError.classList.add("alert-danger"); // Agregar la clase CSS "alert-danger" al elemento para mostrarlo en rojo
  };

  const handleWeight = (event) => {
    // Función para manejar el cambio en el peso
    setWeight(event.target.value); // Actualizar el estado "weight" con el valor del campo de peso
  };

  const handleHeight = (event) => {
    // Función para manejar el cambio en la altura
    setHeight(event.target.value); // Actualizar el estado "height" con el valor del campo de altura
  };

  function calculateIMC() {
    // Función para calcular el IMC
    const bmi = (weight / Math.pow(height, 2)).toFixed(2); // Calcular el IMC utilizando la fórmula peso / (altura^2) y redondear a 2 decimales

    let mensaje;
    // Asignar un mensaje basado en el valor del IMC
    if (bmi < 18.5) {
      mensaje = `Tu IMC es ${bmi}. Si tu IMC fuera un examen, ¡te habrías pasado de la raya! Estás por debajo del peso normal.🍔🍟🍕🤤`;
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      mensaje = `Tu IMC es ${bmi}. Felicidades, tu IMC está en el rango normal, ¡sigue así! Estás en el rango de peso normal. 🥗🍎🥦😃`;
    } else if (bmi >= 25 && bmi <= 29.9) {
      mensaje = `Tu IMC es ${bmi}. Ups, parece que estás llevando algo de "equipaje extra". Tienes sobrepeso. 🚶‍♂️💨🏃‍♂️😅`;
    } else if (bmi >= 30 && bmi <= 34.9) {
      mensaje = `Tu IMC es ${bmi}. ¿Te has dado cuenta de que has aumentado de peso? Tienes obesidad grado 1. 🍔🍟🍕🚫🤢`;
    } else if (bmi >= 35 && bmi <= 39.9) {
      mensaje = `Tu IMC es ${bmi}. ¡Hora de ponerse en serio! Tienes obesidad grado 2. 🚴‍♀️💨🏃‍♀️💪`;
    } else {
      mensaje = `Tu IMC es ${bmi}. Si tu IMC fuera un ascensor, estarías en el piso más alto de obesidad. Tienes obesidad grado 3. 🚨🚑🏥👨‍⚕️`;
    }
    setResult(mensaje);
    mostrarIMCSweet(mensaje);
  }

  const handleSubmit = async (event) => {
    event.preventDefault(); // Evitar el comportamiento por defecto del evento submit

    if (!weight) {
      const errorWeightVacio = "El peso es requerido"; // Mensaje de error si el peso está vacío
      mostrarMensajeError(errorWeightVacio); // Mostrar mensaje de error
      return; // Detener la ejecución del código
    }
    if (!height) {
      const errorHeightVacio = "La altura es requerida"; // Mensaje de error si la altura está vacía
      mostrarMensajeError(errorHeightVacio); // Mostrar mensaje de error
      return; // Detener la ejecución del código
    }

    calculateIMC(); // Calcular el IMC
    // Limpiar los campos de peso y altura
    //setWeight("");
    //setHeight("");
  };

  return (
    <div>
      <div className="row  justify-content-center custom-columnnImc">
        <div className="col-sm-8 col-md-6 col-lg-4  mt-0">
          <h2 className="text-center ">Calculadora de IMC</h2>

          <p className="parrafo">
            El IMC es una medida utilizada para evaluar el peso corporal en
            relación con la altura y proporciona una indicación de si el peso de
            una persona está en un rango saludable. Ingresa tu peso y altura a
            continuación para conocer tu IMC y descubre si estás en un rango
            saludable o si necesitas hacer cambios en tu estilo de vida
          </p>

          <form onSubmit={handleSubmit}>
            <div className="mb-1">
              <label htmlFor="input-weight" className="form-label">
                Peso (kg):
              </label>

              <input
                type="number"
                className="form-control"
                placeholder="introduce tu peso en kilogramos"
                id="input-weight"
                value={weight}
                onChange={handleWeight}
                onKeyDown={(event) => {
                  if (event.key === "Enter") {
                    handleSubmit(event);
                  }
                }}
                required
              />
              {weightError && (
                <div className="invalid-feedback">El peso es requerido.</div>
              )}
            </div>

            <div className="mb-3">
              <label htmlFor="input-height" className="form-label">
                Altura (m):
              </label>
              <input
                type="number"
                step="0.01"
                placeholder="introduce tu altura en metros"
                className="form-control"
                id="input-height"
                value={height}
                onChange={handleHeight}
                onKeyDown={(event) => {
                  if (event.key === "Enter") {
                    handleSubmit(event);
                  }
                }}
                required
              />
              {heightError && (
                <div className="invalid-feedback">La altura es requerida.</div>
              )}
            </div>

            <div className="text-center ">
              <button className="btn btn-primary mb-3" type="submit">
                Calcular
              </button>
            </div>
            <div className="text-center">
              <p>
                Formula: <h3>IMC = peso (en kg) / altura² (en metros)</h3>{" "}
              </p>
            </div>

            <div id="alerta" className="alert " role="alert">
              {" "}
            </div>
          </form>
          <div className="result-div">
            {result && (
              <div className="alert alert-info " role="alert">
                <p>Peso = {weight}kg </p>
                <p>Altura = {height}m </p>
                {result}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default IMCCalculator;
