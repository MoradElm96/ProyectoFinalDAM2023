import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import routes from "../helpers/routes";
import "../css/menu.css";

export default function Menu() {
  //volver aqui
  const usuario = JSON.parse(localStorage.getItem("UsuarioConectado")); // Obtiene el objeto de sesión del almacenamiento local y lo convierte en un objeto JavaScript

  const navigate = useNavigate(); // Hook utilizado para la navegación entre páginas

  const cerrarSession = () => {
    localStorage.clear(); // Elimina todos los datos del almacenamiento local, incluido el objeto de sesión
    navigate(routes.login); // Redirige al usuario a la página de inicio de sesión
  };

  //ver meter token, de inicio de sesion en el front ese token lo almaceno en el base de datos, y lo mando en la cabecera de las peticiones al back , se llama autorization
  //para meter seguridad
  // console.log(usuario.email);

  return (
    <>
      <div className="text-center">
        <h2 className="mt-3">🥑Healthy Web Morad🤸🏽‍♀️</h2>
      </div>

      <div style={{ marginTop: "5vh" }}>
        <div
          id="carouselExampleControls"
          className="carousel slide  "
          data-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                className="d-block w-100"
                src="img/iconoMorad.png"
                alt="First slide"
              />
            </div>
            <div className="carousel-item">
              <img
                className="d-block w-100"
                src="img/frutass.png"
                alt="Second slide"
              />
            </div>
            <div className="carousel-item">
              <img
                className="d-block w-100"
                src="img/food.jpg"
                alt="Third slide"
              />
            </div>
            <div className="carousel-item">
              <img
                className="d-block w-100"
                src="img/iconsGym.png"
                alt="Third slide"
              />
            </div>
            <div className="carousel-item">
              <img
                className="d-block w-100"
                src="img/fut.png"
                alt="Third slide"
              />
            </div>

            <a
              className="carousel-control-prev"
              href="#carouselExampleControls"
              role="button"
              data-slide="prev"
            >
              <span
                className="carousel-control-prev-icon  bg-dark mx-2"
                aria-hidden="true"
              ></span>
              <span className="sr-only text-dark">Anterior</span>
            </a>
            <a
              className="carousel-control-next "
              href="#carouselExampleControls"
              role="button"
              data-slide="next"
            >
              <span className="sr-only text-dark">Siguiente</span>
              <span
                className="carousel-control-next-icon bg-dark mx-2"
                aria-hidden="true"
              ></span>
            </a>
          </div>
        </div>
      </div>
      {/*<InstalarPWA/>*/}
    </>
  );
}
