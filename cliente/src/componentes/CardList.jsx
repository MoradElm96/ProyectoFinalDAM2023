import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Card, Button, Modal } from "react-bootstrap";
import axios from "axios";
import { FaStar } from "react-icons/fa";
import { FcFilledFilter } from "react-icons/fc";
import CardModal from "./pantallaModal";
import {
  mostrarMensajeConfirmacion,
  mostrarMensajeExitoSweet,
  mostrarMensajeErrorSweet,
} from "../helpers/SweetAlert2";
import "../css/card.css";

function CardList(props) {
  const [cardData, setCardData] = useState([]); //Estado para almacenar los datos de las tarjetas
  const [currentCard, setCurrentCard] = useState(null); //Estado para almacenar la tarjeta actual seleccionada
  const [modalIsOpen, setModalIsOpen] = useState(false); //Estado para controlar si el modal está abierto o cerrado
  const [favoritos, setFavoritos] = useState({}); //Estado para almacenar los elementos favoritos
  const [currentPage, setCurrentPage] = useState(1); //Estado para almacenar la página actual en la paginación
  const [cardsPerPage, setCardsPerPage] = useState(8); //Estado para almacenar la cantidad de tarjetas por página en la paginación
  const [tipoEntrenamiento, setTipoEntrenamiento] = useState(""); // Estado para almacenar el tipo de entrenamiento seleccionado
  const [tipoNivel, setTipoNivel] = useState(""); //Estado para almacenar el tipo de nivel seleccionado
  const [grupoMuscular, setGrupoMuscular] = useState(""); //Estado para almacenar el grupo muscular seleccionado
  const [busqueda, setBusqueda] = useState(""); //Estado para almacenar el término de búsqueda
  

  // URL de los endpoint del server a utilizar
  const URL_EJER = `${process.env.REACT_APP_API_BASE_URL}/ejercicios`;
  const URL_FAV = `${process.env.REACT_APP_API_BASE_URL}/favoritos`;

  // Define un efecto que se ejecutará una sola vez al cargar el componente
  // y que obtendrá los datos de la API utilizando axios y los guardará en el estado cardData
  useEffect(() => {
    axios
      .get(URL_EJER)
      .then((response) => {
        setCardData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // Define dos funciones que actualizarán el estado modalIsOpen
  // para abrir y cerrar el modal para la informacion
  const openModal = useCallback(() => {
    setModalIsOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setModalIsOpen(false);
  }, []);

  // Función que actualizará el estado favoritos
  // para añadir o quitar una tarjeta de favoritos
  const toggleFavorito = async (cardId) => {
    try {
      setFavoritos((prevFavoritos) => {
        const updatedFavoritos = { ...prevFavoritos };
        updatedFavoritos[cardId] = !prevFavoritos[cardId];
       // console.log(cardId);
        return updatedFavoritos;
      });

      mostrarMensajeConfirmacion(
        "¿Quieres añadir este ejercicio a favoritos?",
        () => {
          guardarEjercicioEnFavoritos(cardId);
        }
      );
    } catch (error) {
      console.log(error);
    }
  };

  const guardarEjercicioEnFavoritos = async (cardId) => {
    // Obtengo el id del usuario que ha iniciado sesión
    const objetoSesion = JSON.parse(localStorage.getItem("UsuarioConectado"));
    const userId = objetoSesion.id;

    const card = cardsToShow.find((card) => card.idEjercicio === cardId);
    //console.log(card.titulo); // aquí se imprime el objeto completo en la consola

    try {
      // Guardo el ejercicio en la base de datos
      await axios.post(URL_FAV, {
        id_usuario: userId,
        id_ejercicio: cardId,
        ejercicio: card.titulo,
      });
      mostrarMensajeExitoSweet("Añadido a favoritos  correctamente");
    } catch (error) {
      console.log(error);
      mostrarMensajeErrorSweet("Error al añadir a favoritos");
    }
  };

  const nextPage = () => {
    // Compruebo si la página actual es menor que el número total de páginas necesarias para mostrar todas las tarjetas filtradas
    if (currentPage < Math.ceil(filteredCards.length / cardsPerPage)) {
      // Incrementa la página actual en 1
      setCurrentPage(currentPage + 1);
    }
  };
  
  const prevPage = () => {
    // Compruebo si la página actual es mayor que 1
    if (currentPage > 1) {
      // Decrementa la página actual en 1
      setCurrentPage(currentPage - 1);
    }
  };
  

  //función que devuelve un array de tarjetas a mostrar en la página actual
  const getCardsToShow = () => {
    const startIndex = (currentPage - 1) * cardsPerPage;
    const endIndex = startIndex + cardsPerPage;
    return filteredCards.slice(startIndex, endIndex);
  };

  //actualizarán los estados tipoEntrenamiento
  
  //Funciones para actualizar los estados tipoEntrenamiento, tipoNivel, grupoMuscular y busqueda al seleccionar una opción en los select
const handleTipoEntrenamientoChange = (event) => {
  setTipoEntrenamiento(event.target.value);
};

const handleTipoNivelChange = (event) => {
  setTipoNivel(event.target.value);
};

const handleGrupoMuscularChange = (event) => {
  setGrupoMuscular(event.target.value);
};

const handleBusquedaChange = (event) => {
  setBusqueda(event.target.value);
};

// Filtrado de las tarjetas en base a los estados seleccionados
const filteredCards = useMemo(() => {
  return cardData.filter(
    (card) =>
      (!tipoEntrenamiento || card.tipoEntrenamiento === tipoEntrenamiento) && // Filtra por tipo de entrenamiento si está seleccionado
      (!tipoNivel || card.tipoNivel === tipoNivel) && // Filtra por tipo de nivel si está seleccionado
      (!grupoMuscular || card.grupoMuscular === grupoMuscular) && // Filtra por grupo muscular si está seleccionado
      (!busqueda || // Filtra por búsqueda si se ha ingresado algún término de búsqueda
        card.titulo.toLowerCase().includes(busqueda.toLowerCase()) || // Filtra por título que coincida con la búsqueda
        card.descripcion.toLowerCase().includes(busqueda.toLowerCase())) // Filtra por descripción que coincida con la búsqueda
  );
}, [cardData, tipoEntrenamiento, tipoNivel, grupoMuscular, busqueda]);

const cardsToShow = getCardsToShow(); // Obtiene las tarjetas a mostrar según la paginación


  return (
    <>
    
      <div className="container-wrapper mt-3">
        <div className="container-fluid ">
          <div className="row">
            <div className="col-md-2  sidebar ">
              <form className="sidebar-form">
                <div className="form-group">
                  <label className="label">
                    <FcFilledFilter size={20} />
                    Filtra los ejercicios
                  </label>
                  <label className="label-busqueda" htmlFor="busqueda">
                    Búsqueda por coincidencia en titulo
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="busqueda"
                    value={busqueda}
                    onChange={handleBusquedaChange}
                    placeholder="Buscar ejercicios"
                  />
                  <label htmlFor="tipoEntrenamiento">
                    Tipo de entrenamiento
                  </label>
                  <select
                    className="form-control"
                    id="tipoEntrenamiento"
                    value={tipoEntrenamiento}
                    onChange={handleTipoEntrenamientoChange}
                  >
                    <option value="">Todos</option>
                    <option value="Musculacion">Musculacion</option>
                    <option value="Calistenia">Calistenia</option>
                    <option value="Cardiovascular">Cardiovascular</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="tipoNivel">Tipo de nivel</label>
                  <select
                    className="form-control"
                    id="tipoNivel"
                    value={tipoNivel}
                    onChange={handleTipoNivelChange}
                  >
                    <option value="">Todos</option>
                    <option value="Principiante">Principiante</option>
                    <option value="Intermedio">Intermedio</option>
                    <option value="Avanzado">Avanzado</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="grupoMuscular">Grupo muscular</label>
                  <select
                    className="form-control"
                    id="grupoMuscular"
                    value={grupoMuscular}
                    onChange={handleGrupoMuscularChange}
                  >
                    <option value="">Todos</option>
                    <option value="Pectorales">Pectorales</option>
                    <option value="Core">Core</option>
                    <option value="Espalda">Espalda</option>
                    <option value="Piernas">Piernas</option>
                    <option value="Hombros">Hombros</option>
                    <option value="Brazos">Brazos</option>
                  </select>
                </div>
              </form>
            </div>

            <div className="col-md-10">
              <div className="row">
                {getCardsToShow().map((card, index) => (
                  <div
                    className="col-lg-3 col-md-4 col-sm-6 col-xs-12"
                    key={index}
                  >
                    <Card className="mb-3 box-shadow card">
                      <Card.Img
                        variant="top"
                        className="card-img-custom"
                        src={card.imagen}
                        onMouseEnter={(e) => {
                          e.currentTarget.src = card.imagen2;
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.src = card.imagen;
                        }}
                      />
                      <Card.Body className="card-body">
                        <Card.Title className="card-titulo">
                          {card.titulo}
                        </Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">
                          {card.tipoNivel}
                        </Card.Subtitle>
                        <Card.Text className="card-descripcion">
                          {card.descripcion.substring(0, 75)}
                          <a
                            href="#"
                            onClick={() => {
                              setCurrentCard(card);
                              openModal();
                            }}
                          >
                            Leer más...
                          </a>
                        </Card.Text>

                        <Button
                          variant="primary"
                          className="btn-favoritos"
                          onClick={() => toggleFavorito(card.idEjercicio)}
                        >
                          {" "}
                          Añadir a favoritos{" "}
                          <FaStar
                            size={22}
                            color={
                              favoritos[card.idEjercicio] ? "yellow" : "white"
                            }
                          />
                        </Button>
                      </Card.Body>
                    </Card>
                  </div>
                ))}
              </div>
            </div>

            <div class="d-flex justify-content-center">
              <ul class="pagination">
                <li class="page-item">
                  <button
                    class="page-link"
                    onClick={prevPage}
                    disabled={currentPage === 1}
                  >
                    Anterior
                  </button>
                </li>
                <li class="page-item">
                  <button
                    class="page-link"
                    onClick={nextPage}
                    disabled={
                      currentPage === Math.ceil(cardData.length / cardsPerPage)
                    }
                  >
                    Siguiente
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/*llamo a pantalla modal desde otro componente */}
      {currentCard && (
        <CardModal
          card={currentCard}
          isOpen={modalIsOpen}
          onRequestClose={() => setCurrentCard(null)}
        />
      )}
    </>
  );
}

export default CardList;
