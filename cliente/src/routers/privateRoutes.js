import React from "react";
import { Navigate, Outlet } from "react-router-dom"; // Importamos los componentes necesarios de React Router
import routes from "../helpers/routes"; // Importamos un archivo que contiene las rutas de la aplicación
import Layout from "../componentes/Layout/Layout"; // Importamos un componente Layout personalizado

const PrivateRoute = ({ component: Component, ...rest }) => {
  // El componente PrivateRoute recibe props (parámetros) en forma de "rest" (desestructuración de props)
  // También recibe el prop "component" que se renombra como "Component" utilizando la sintaxis de desestructuración

  const isAuthenticated = localStorage.getItem("UsuarioConectado");
  // Verificamos si existe un "UsuarioConectado" en el almacenamiento local (localStorage)

  return isAuthenticated ? (
    // Si existe un usuario autenticado
    <Layout>
      {/* Renderizamos el componente Layout, que envolverá el contenido de la ruta */}
      <Outlet />
      {/* Renderizamos el contenido de la ruta actual utilizando el componente Outlet de React Router */}
    </Layout>
  ) : (
    // Si no hay un usuario autenticado
    <Navigate to={routes.login} replace />
    // Redireccionamos al usuario a la ruta de inicio de sesión utilizando el componente Navigate de React Router.
    // La opción "replace" reemplaza la entrada de historial actual en lugar de agregar una nueva.
  );
};

export default PrivateRoute;
// Exportamos el componente PrivateRoute para que pueda ser utilizado en otros archivos.
