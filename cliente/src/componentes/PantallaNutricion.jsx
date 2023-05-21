import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Nutricion from "./Nutricion";
import Nutricion2 from "./Nutricion2";


function TabbedActivity() {
  // Componente que muestra pestañas con diferentes contenidos
  const [tabIndex, setTabIndex] = useState(0); // Estado para controlar el índice de la pestaña activa

  const handleTabSelect = (index) => {
    setTabIndex(index);
  };

  
  return (
    <>
      {/* Contenedor de las pestañas */}
      <div className="container-tabs mt-4 text-center">
        {/* Componente Tabs de react-tabs */}
        <Tabs selectedIndex={tabIndex} onSelect={handleTabSelect}>
          {/* Lista de pestañas */}
          <TabList>
            <Tab>Buscar alimentos individuales</Tab>
            <Tab>Busqueda platos segun categoria</Tab>
          </TabList>

          {/* Paneles de contenido de las pestañas */}
          <TabPanel>
            {/* Contenido de la primera pestaña */}
            <Nutricion2 />
          </TabPanel>
          <TabPanel>
            {/* Contenido de la segunda pestaña */}
            <Nutricion />
          </TabPanel>
        </Tabs>
      </div>
    </>
  );
}

export default TabbedActivity;
