import React from "react";
import { Navigate, Outlet } from "react-router-dom"; // Importamos los componentes necesarios de React Router
import routes from "../helpers/routes"; // Importamos un archivo que contiene las rutas de la aplicación

const ResetRoutes = ({ ...rest }) => {
  // El componente ResetRoutes recibe props (parámetros) en forma de "rest" (desestructuración de props)

  const token = new URLSearchParams(window.location.search).get("token");
  // Extraemos el parámetro "token" de la URL actual utilizando el objeto URLSearchParams

  if (!token) {
    // Si no se encuentra el parámetro "token" en la URL
    return <Navigate to={routes.login} replace />;
    // Redireccionamos a la ruta de "login" utilizando el componente Navigate de React Router.
    // La opción "replace" reemplaza la entrada de historial actual en lugar de agregar una nueva.
  }

  return <Outlet {...rest} />;
  // Si se encuentra el parámetro "token", renderizamos el componente Outlet de React Router
  // y pasamos todas las props recibidas al componente Outlet utilizando el operador spread {...rest}.
};

export default ResetRoutes;
// Exportamos el componente ResetRoutes para que pueda ser utilizado en otros archivos.
