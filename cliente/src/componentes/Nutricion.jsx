import React, { useEffect, useState } from "react";
import axios from "axios";
import "../css/nutricion.css";

function Nutricion() {
  const URL_PLATOS = `${process.env.REACT_APP_API_BASE_URL}/food`;

  const [foodName, setFoodName] = useState(""); // Estado para el nombre del alimento
  const [result, setResult] = useState(null); // Estado para el resultado de la búsqueda
  const [loading, setLoading] = useState(false); // Estado para indicar si se está cargando la búsqueda
  const [error, setError] = useState(null); // Estado para almacenar el error en caso de que ocurra

  // Función que se ejecuta al enviar el formulario
  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      // Realizar la petición POST al API con el nombre del alimento
      const response = await axios.post(URL_PLATOS, { foodName });

      // Guardar el resultado de la búsqueda en el estado
      setResult(response.data);
      setLoading(false);
    } catch (error) {
      console.error(error);
      // Imprimir el error en la consola para depuración
      // console.log('Error:', error.response.data);

      // Establecer el mensaje de error en caso de fallo en la búsqueda
      setError("Error al buscar el alimento. Intente de nuevo más tarde.");
      setLoading(false);
    }
  };

  // Función que se ejecuta al cambiar el valor del campo de entrada
  const handleInputChange = (event) => {
    setFoodName(event.target.value);
  };

  return (
    <div className="container-alimento mt-2">
      <div className="row justify-content-center  mb-3">
        <div className="col-sm-8 col-md-6 col-lg-4 mt-0">
          <h1 className="text-center mb-2">Buscar alimento</h1>
          <label htmlFor="foodName">Nombre del alimento: </label>
          <form onSubmit={handleSubmit} className="d-flex align-items-center">
            <input
              type="text"
              value={foodName}
              onChange={handleInputChange}
              className="form-control me-2"
              placeholder="Nombre del alimento Ej: manzana"
            />
            <button type="submit" className="btn btn-primary">
              Buscar
            </button>
          </form>

          {loading ? (
            <div className="text-center">
              <i className="fa fa-spinner fa-spin"></i>{" "}
              <strong>Cargando...</strong>
            </div>
          ) : error ? (
            <div className="alert alert-danger mt-4">{error}</div>
          ) : result ? (
            <div className="mt-4">
              <div className="row">
                <div className="col-md-12">
                  <div className="card-deck">
                    <div className="card-Alimento mb-4">
                      <img
                        className="card-img-top"
                        src={result.image}
                        alt={result.name}
                      />
                      <div className="card-body">
                        <h5 className="card-title">
                          <h6 className="text-center">
                            Valor nutricional por cada 100 gramos
                          </h6>
                          <strong>{result.name}</strong>
                        </h5>
                        <p className="card-text">
                          <strong>Calorías:</strong> {result.calories} kcal
                        </p>
                        <p className="card-text">
                          <strong>Carbohidratos:</strong> {result.carbs} g
                        </p>
                        <p className="card-text">
                          <strong>Grasas:</strong> {result.fat} g
                        </p>
                        <p className="card-text">
                          <strong>Proteínas:</strong> {result.protein} g
                        </p>
                        <p className="card-text">
                          <strong>Fibra:</strong> {result.fiber} g
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
export default Nutricion;
