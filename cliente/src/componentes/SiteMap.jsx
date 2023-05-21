import React, { useEffect, useState } from "react";
import routes from "../helpers/routes";
import { Link } from "react-router-dom";
import axios from "axios";
import "../css/sitemap.css";
function SiteMap() {
  // Obtengo el id del usuario que ha iniciado sesión desde el localStorage
  const objetoSesion = JSON.parse(localStorage.getItem("UsuarioConectado"));
  const userId = objetoSesion.id;

  // Estado para almacenar el rol del usuario
  const [userRole, setUserRole] = useState(null);

  // URL para obtener los datos del usuario
  const URL_US = `${process.env.REACT_APP_API_BASE_URL}/users/${userId}`;

  // Función para obtener los datos del usuario
  const obtenerDatosUsuario = async () => {
    try {
      // Realizamos la petición GET para obtener los datos del usuario
      const response = await axios.get(URL_US);
      const { nombre, apellido, edad, peso, rol } = response.data;

      // Establecemos el rol del usuario en el estado
      setUserRole(rol);

      console.log(rol);

      return response.data;
    } catch (error) {
      console.log(error);
      console.log("error en la parte servidora al obtener los datos");
    }
  };

  // Se ejecuta la función obtenerDatosUsuario cuando el componente se monta
  useEffect(() => {
    obtenerDatosUsuario();
  }, []);

  return (
    <div className="container">
      <h2 className="text-center">Mapa del Sitio</h2>
      <div className="row justify-content-center text-center text-secondary">
        <div className="col-lg-4 col-md-6 col-sm-8">
          <h2 className="text-center">Utilidades</h2>
          <ul className="list-group">
            <li className="list-group-item">
              <Link to={routes.imcCalculator}>Calculadora IMC</Link>
            </li>
            <li className="list-group-item">
              <Link to={routes.calculacalorias}>Calculadora calorias</Link>
            </li>
          </ul>
        </div>

        <div className="col-lg-4 col-md-6 col-sm-8">
          <h2 className="text-center">Ejercicios y Nutricion</h2>
          <ul className="list-group">
            <li className="list-group-item">
              <Link to={routes.cardlist}>Ejercicios</Link>
            </li>
            <li className="list-group-item">
              <Link to={routes.favoritos}>Favoritos</Link>
            </li>

            <li className="list-group-item">
              <Link to={routes.planesentrenamiento}>Planes entrenamiento</Link>
            </li>

            <li className="list-group-item">
              <Link to={routes.pantallanutricion}>Nutricion y recetas</Link>
            </li>
          </ul>
        </div>

        <div className="col-lg-4 col-md-6 col-sm-8">
          <h2 className="text-center">Perfil</h2>
          <ul className="list-group">
            <li className="list-group-item">
              <Link to={routes.menu}>Inicio</Link>
            </li>
            <li className="list-group-item">
              <Link to={routes.perfil}>Configuracion perfil</Link>
            </li>

            {/* <li className='list-group-item'>
                 <Link to={routes.administracion}>Administrar cuentas</Link>
                </li> */}

            <li className="list-group-item">
              {userRole !== 2 ? (
                <Link to={routes.administracion}>Administrar cuentas</Link>
              ) : (
                <span>Link desabilitado</span>
              )}
            </li>
          </ul>
        </div>

        <div className="col-lg-4 col-md-6 col-sm-8">
          <h2 className="text-center">Contacto</h2>
          <ul className="list-group">
            <li className="list-group-item">
              <Link to={routes.contactme}>Contacto</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SiteMap;
