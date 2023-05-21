import axios from "axios";
import React, { useEffect, useState } from "react";
import routes from "../helpers/routes";
import { Link, useNavigate } from "react-router-dom";
import {
  mostrarMensajeErrorSweet,
  mostrarMensajeExitoSweet,
} from "../helpers/SweetAlert2";
import { toast } from "react-toastify";
import "../css/contactMe.css";

function ContactMe() {
  
  const URL_CONTACT = `${process.env.REACT_APP_API_BASE_URL}/contacto`; // URL de contacto

  const navigate = useNavigate(); // Función de navegación (probablemente de React Router)
  
  const [nombre, setNombre] = useState(""); // Estado para el campo "nombre"
  const [numero, setNumero] = useState(""); // Estado para el campo "numero"
  const [email, setEmail] = useState(""); // Estado para el campo "email"
  const [asunto, setAsunto] = useState(""); // Estado para el campo "asunto"
  const [mensaje, setMensaje] = useState(""); // Estado para el campo "mensaje"
  
  // Funciones para manejar los cambios en cada campo
  const handleNombreChange = (event) => {
    setNombre(event.target.value);
  };
  
  const handleNumeroChange = (event) => {
    setNumero(event.target.value);
  };
  
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  
  const handleAsuntoChange = (event) => {
    setAsunto(event.target.value);
  };
  
  const handleMensajeChange = (event) => {
    setMensaje(event.target.value);
  };
  
  const handleRegister = async (event) => {
    event.preventDefault();
  
    // Crear un objeto con los datos ingresados por el usuario
    const data = {
      nombre: nombre,
      numero: numero,
      email: email,
      asunto: asunto,
      mensaje: mensaje,
    };
  
    // Comprobar que todos los campos están completados
    const todosLosCamposCompletados = Object.values(data).every(
      (valor) => !!valor
    );

    if (!todosLosCamposCompletados) {
      toast.error("Por favor, complete todos los campos.");
      return;
    }
    //console.log(data);

    try {
      const response = await axios.post(URL_CONTACT, data);
      mostrarMensajeExitoSweet(
        "Mensaje enviado con exito!, Gracias por compartir con nosotros tus dudas y sugerencias."
      );
      navigate(routes.menu);
    } catch (error) {
      console.error(error.response.data.message);

      let mensaje = error.response.data.message;
      let contenidoHTML = `<h3>${mensaje}</h3>`;

      var divError = document.getElementById("alerta");
      divError.innerHTML = contenidoHTML;
      divError.classList.add("alert-danger");
      mostrarMensajeErrorSweet(mensaje);
    }
  };

  return (
    <div className="container text-center">
      <h2 className="my-4 text-center mt-1">Formulario de contacto</h2>
      <p>
        Envianos tus sugerencias y reporta los problemas que hayas encontrado.
        ¡Completa el formulario de contacto y hablemos!
      </p>

      <div className="row justify-content-center mt-4">
        <div className="col-sm-12 col-md-8 col-lg-6">
          <form onSubmit={handleRegister}>
            {/* Nombre */}
            <div className="mb-3">
              <label htmlFor="nombre" className="form-label">
                Nombre
              </label>
              <input
                type="text"
                className="form-control bg-light"
                placeholder="Nombre"
                aria-label="Nombre"
                aria-describedby="basic-addon1"
                required
                minLength={1}
                maxLength={10}
                id="nombre"
                value={nombre}
                onChange={handleNombreChange}
              />
            </div>

            {/* Numero */}
            <div className="mb-3">
              <label htmlFor="numero" className="form-label">
                Numero
              </label>
              <input
                type="text"
                className="form-control bg-light"
                placeholder="Numero de telefono"
                aria-label="Numero de telefono"
                aria-describedby="numero"
                required
                minLength={9}
                maxLength={9}
                id="numero"
                value={numero}
                onChange={handleNumeroChange}
              />
            </div>

            {/* Email */}
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="text"
                className="form-control bg-light"
                placeholder="Introduce tu email"
                aria-label="Email"
                aria-describedby="basic-addon3"
                required
                id="email"
                value={email}
                onChange={handleEmailChange}
              />
            </div>

            {/* Asunto */}
            <div className="mb-3">
              <label htmlFor="asunto" className="form-label">
                Asunto
              </label>
              <input
                type="text"
                className="form-control bg-light"
                placeholder="Asunto"
                aria-label="Asunto"
                aria-describedby="basic-addon4"
                required
                id="asunto"
                value={asunto}
                onChange={handleAsuntoChange}
              />
            </div>

            {/* Mensaje */}
            <div className="mb-3">
              <label htmlFor="mensaje" className="form-label">
                Mensaje
              </label>
              <textarea
                type="mensaje"
                className="form-control bg-light"
                placeholder="mensaje"
                aria-label="Escribe tu mensaje"
                aria-describedby="basic-addon5"
                maxLength={150}
                rows="3"
                required
                value={mensaje}
                onChange={handleMensajeChange}
                id="mensaje"
              />
            </div>

            {/*-----------------*/}
            <div className="text-center">
              <button
                type="submit"
                className="btn btn-success btn-lg mx-2 mb-2 text-center"
              >
                Enviar
              </button>
            </div>
          </form>

          <div id="alerta" className="alert" role="alert"></div>
        </div>
      </div>
    </div>
  );
}

export default ContactMe;
