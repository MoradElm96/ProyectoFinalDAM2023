import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import routes from "../../helpers/routes";
import axios from "axios";
import { mostrarMensajeErrorSweet } from "../../helpers/SweetAlert2";
import "../../css/navbar.css";

import UserAvatar from "../FuncionAvatar";


function Navigation() {
  const usuario = JSON.parse(localStorage.getItem("UsuarioConectado"));

  const navigate = useNavigate();

  const cerrarSession = () => {
    localStorage.clear();
    navigate(routes.home);
  };

  // Obtengo el id del usuario que ha iniciado sesión
  const objetoSesion = JSON.parse(localStorage.getItem("UsuarioConectado"));
  const userId = objetoSesion.id;

  const [userRole, setUserRole] = useState(null);

  const URL_US = `${process.env.REACT_APP_API_BASE_URL}/users/${userId}`;

  //funcion para obtener el id de usuario
  const obtenerDatosUsuario = async () => {
    try {
      const response = await axios.get(URL_US);
      const { nombre, apellido, edad, peso, rol } = response.data;
      setUserRole(rol);
      return response.data;
    } catch (error) {
      console.log(error);
      // Manejar el error de alguna manera
      console.log("error en la parte servidora al obtener los datos");
    }
  };



  useEffect(() => {
    obtenerDatosUsuario();
  
  }, []);








  return (
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary"
      style={{ backgroundColor: "#5fb1a7" }}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to={routes.menu}>
          Healthy Web Morad
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href=""
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Utilidades
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link className="dropdown-item" to={routes.imcCalculator}>
                  Calcular IMC
                </Link>
                <Link className="dropdown-item" to={routes.calculacalorias}>
                  Calcular calorías
                </Link>
              </div>
            </li>

            <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                to={routes.cardlist}
              >
                Ejercicios
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                to={routes.favoritos}
              >
                Favoritos
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                to={routes.pantallanutricion}
              >
                Nutrición
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                to={routes.planesentrenamiento}
              >
                Planes Entrenamiento
              </Link>
            </li>
       

            
          </ul>

          <ul className="navbar-nav mb-2 mb-lg-0">

    
   
        

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href=""
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <UserAvatar email={usuario.email} />
                {usuario.email}
              </a>


              <ul className="dropdown-menu dropdown-menu-end">

              
                <li>
                  <Link className="dropdown-item" to={routes.perfil}>
                    Perfil
                  </Link>
                </li>

                <li>
                  <Link
                    className={`dropdown-item ${
                      userRole !== 1 ? "disabled" : ""
                    }`}
                    to={routes.administracion}
                    disabled={userRole !== 1}
                  >
                    Panel de administración
                  </Link>
                </li>

                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a
                    className="dropdown-item cerrar"
                    href=""
                    onClick={cerrarSession}
                  >
                    Cerrar sesión
                  </a>
                </li>
              </ul>
            </li>
          </ul>

      
        </div>
      </div>
     
    </nav>
  );
}

export default Navigation;
