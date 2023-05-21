import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import routes from "../helpers/routes";

export default function NotFound() {
  useEffect(() => {
    // Limpiamos el localStorage al mostrar el componente, el usuario tendrá que iniciar sesión
    localStorage.clear();
  }, []);

  return (
    <div className="vh-100 d-flex align-items-center justify-content-center">
      <div className="text-center">
        {/* Imagen de "Página no encontrada" */}
        <img
          src="img/notfound.png"
          className="img-fluid"
          style={{ width: "400px", height: "400px" }}
          alt="Página no encontrada"
        />
        <p className="mt-2">No se encontró la página que buscabas</p>
        <div className="d-grid gap-2 col-6 mx-auto mt-2">
          {/* Enlace al inicio (Home) */}
          <Link to={routes.home}>
            <button className="btn btn-outline-success btn-lg" type="button">
              Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
