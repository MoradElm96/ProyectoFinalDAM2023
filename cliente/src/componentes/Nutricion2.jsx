import React, { useState } from "react";
import axios from "axios";

function Nutricion2() {
  const URL_RECETAS = `${process.env.REACT_APP_API_BASE_URL}/recipe`;

  const [foodName, setFoodName] = useState(""); // Estado para el nombre del alimento
  const [recipes, setRecipes] = useState([]); // Estado para almacenar las recetas obtenidas
  const [loading, setLoading] = useState(false); // Estado para indicar si se está cargando la búsqueda
  const [error, setError] = useState(null); // Estado para almacenar el error en caso de que ocurra
  const [currentPage, setCurrentPage] = useState(1); // Estado para almacenar la página actual
  const [cardsPerPage, setCardsPerPage] = useState(8); // Estado para definir la cantidad de tarjetas por página

  // Función que se ejecuta al enviar el formulario
  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);

    axios
      .post(URL_RECETAS, { foodName })
      .then((response) => {
        // Guardar las recetas obtenidas en el estado
        setRecipes(response.data);
        setLoading(false);
        setCurrentPage(1); // Restablecer la página a 1 después de una nueva búsqueda
      })
      .catch((error) => {
        console.error(error);
        // Establecer el mensaje de error en caso de fallo en la búsqueda
        setError("Error al buscar el alimento. Intente de nuevo más tarde.");
        setLoading(false);
      });
  };

  // Función que se ejecuta al cambiar el valor del campo de entrada
  const handleInputChange = (event) => {
    setFoodName(event.target.value);
  };

  // Cálculo de los índices de las tarjetas a mostrar en la página actual
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = recipes.slice(indexOfFirstCard, indexOfLastCard);

  // Función que se ejecuta al hacer clic en una página específica
  const handlePageClick = (pageNumber) => {
    if (recipes.length > 0) {
      setCurrentPage(pageNumber);
    }
  };

  // Función para ir a la siguiente página
  const nextPage = () => {
    if (
      recipes.length > 0 &&
      currentPage < Math.ceil(recipes.length / cardsPerPage)
    ) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Función para ir a la página anterior
  const prevPage = () => {
    if (recipes.length > 0 && currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="container-alimento mt-2">
      <div className="container-fluid">
        <div className="row justify-content-center  mb-3">
          <div className="col-sm-8 col-md-6 col-lg-4 mt-0 mb-4">
            <h1 className="text-center mb-2">Buscar recetas </h1>
            <label htmlFor="foodName">Nombre del ingrediente: </label>
            <form onSubmit={handleSubmit} className="d-flex align-items-center">
              <input
                type="text"
                value={foodName}
                onChange={handleInputChange}
                className="form-control me-2"
                placeholder="Introduce un ingrediente Ej: manzana"
              />
              <button type="submit" className="btn btn-primary">
                Buscar
              </button>
            </form>
          </div>
        </div>
        {loading ? (
          <p className="text-center">Cargando...</p>
        ) : error ? (
          <p className="text-center">{error}</p>
        ) : (
          <>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
              {currentCards.map((recipe) => (
                <div className="col" key={recipe.url}>
                  <div className="card h-100">
                    <img
                      src={recipe.image}
                      alt={recipe.label}
                      className="card-img-top"
                    />
                    <div className="card-body">
                      <h5 className="card-title">{recipe.label}</h5>
                      <p className="card-text">
                        {recipe.calories.toFixed(2)} calorías
                      </p>
                      <p className="card-text">{recipe.servings} porciones</p>
                      <a href={recipe.url} className="btn btn-primary">
                        Ver receta
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {recipes.length > 0 && (
              <div className="d-flex justify-content-center mt-3">
                <ul className="pagination">
                  <li className="page-item">
                    <button
                      className="page-link"
                      onClick={prevPage}
                      disabled={currentPage === 1}
                    >
                      Anterior
                    </button>
                  </li>
                  <li className="page-item">
                    <button
                      className="page-link"
                      onClick={nextPage}
                      disabled={
                        currentPage === Math.ceil(recipes.length / cardsPerPage)
                      }
                    >
                      Siguiente
                    </button>
                  </li>
                </ul>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default Nutricion2;
