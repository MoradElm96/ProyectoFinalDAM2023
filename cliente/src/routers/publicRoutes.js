import React from "react";
import { Navigate, Outlet, Route } from "react-router-dom"; // Importamos los componentes necesarios de React Router
import routes from "../helpers/routes"; // Importamos un archivo que contiene las rutas de la aplicación

const PublicRoutes = ({ component: Component, ...rest }) => {
  // El componente PublicRoutes recibe props (parámetros) en forma de "rest" (desestructuración de props)
  // También recibe el prop "component" que se renombra como "Component" utilizando la sintaxis de desestructuración

  const isAuthenticated = localStorage.getItem("UsuarioConectado");
  // Verificamos si existe un "UsuarioConectado" en el almacenamiento local (localStorage)

  if (isAuthenticated) {
    // Si existe un usuario autenticado
    return <Navigate to={routes.menu} replace />;
    // Redireccionamos a la ruta del menú utilizando el componente Navigate de React Router.
    // La opción "replace" reemplaza la entrada de historial actual en lugar de agregar una nueva.
  }
  return <Outlet />;
  // Si no hay un usuario autenticado, mostramos el contenido de la ruta actual utilizando el componente Outlet de React Router.
};

export default PublicRoutes;
// Exportamos el componente PublicRoutes para que pueda ser utilizado en otros archivos.
