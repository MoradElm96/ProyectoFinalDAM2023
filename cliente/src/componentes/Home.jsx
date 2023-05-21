import { React, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Carousel, Container, Row, Col } from "react-bootstrap";
import "../css/home.css";
import routes from "../helpers/routes";

export default function Home() {
  // Declarar estado utilizando el hook useState de React
  const [index, setIndex] = useState(0); // Estado para almacenar el índice

  // Función para manejar la selección de un índice
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex); // Actualizar el estado "index" con el índice seleccionado
  };
  
  return (
    <div className="welcome-screen d-flex justify-content-center align-items-center vh-100 bg-success">
      <div className="row justify-content-center">
        <div className="col-12 col-md-10">
          <div className="welcome-container bg-light  p-5 rounded mx-auto text-center">
            <h2>Proyecto de fin de grado de DAM 2023</h2>

            <div className="d-flex align-items-center justify-content-center mb-2">
              <div className="ml-3">
                <h1 className="display-4 mb-0">
                  <strong>Entrenamiento y Nutrición con Morad</strong>
                </h1>
              </div>
              <div>
                <img
                  src="img/iconoMorad.png"
                  alt="Descripción de la imagen"
                  width="100"
                  height="100"
                />
              </div>
            </div>

            <p className="lead">
              Bienvenido a nuestro sitio web de bienestar y salud! Aquí podrás
              encontrar una amplia variedad de recetas saludables y ejercicios
              de entrenamiento para llevar una vida más activa y saludable.
              Además, podrás calcular tu índice de masa corporal (IMC) y las
              calorías quemadas segun tus caracteristicas para ayudarte a
              alcanzar tus objetivos de bienestar. Únete a nuestra comunidad y
              comienza a cuidarte hoy mismo
            </p>
            <div className="mt-4">
              <Link to={routes.register}>
                <Button variant="success" size="lg" className="mx-3">
                  Regístrate
                </Button>
              </Link>
              <Link to={routes.login}>
                <Button variant="outline-success" size="lg">
                  Iniciar Sesión
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
