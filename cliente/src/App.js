import React from "react";
import { BrowserRouter } from "react-router-dom"; // Importamos el componente BrowserRouter de React Router
import AppRouter from "./routers/AppRouter"; // Importamos el componente AppRouter personalizado
import './css/body.css'; // Importamos un archivo CSS

function App() {
  // El componente principal de la aplicación

  return (
    <div>
      <BrowserRouter>
        {/* Envuelve la aplicación con el componente BrowserRouter para habilitar el enrutamiento */}
        <AppRouter />
        {/* Renderiza el componente AppRouter que contiene las rutas y el enrutamiento de la aplicación */}
      </BrowserRouter>
    </div>
  );
}

export default App;
// Exportamos el componente App para que pueda ser utilizado en otros archivos.
