import React from 'react';
import { Outlet } from 'react-router-dom'; // Importamos el componente Outlet de React Router
import Layout from '../componentes/Layout'; // Importamos el componente Layout personalizado

export default function PrivateLayout({ children }) {
  // El componente PrivateLayout recibe el prop "children" que representa el contenido a renderizar dentro del componente

  return (
    <>
      <Layout>
        {/* Renderizamos el componente Layout, que envolverá el contenido de la ruta */}
        <Outlet />
        {/* Renderizamos el contenido de la ruta actual utilizando el componente Outlet de React Router */}
      </Layout>

      {children}
      {/* Renderizamos el contenido adicional pasado como prop "children" */}
    </>
  );
};


