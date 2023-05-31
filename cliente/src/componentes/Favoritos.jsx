import React, { useCallback, useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { FaEnvelope, FaStar } from "react-icons/fa";
import {
  mostrarMensajeConfirmacion,
  mostrarMensajeErrorSweet,
  mostrarMensajeExitoSweet,
} from "../helpers/SweetAlert2";
import "../css/favoritos.css";
import axios from "axios";
import PantallaExportar from "./PantallaExportar";

function Favoritos() {

// Obtener el objeto de sesión del usuario conectado almacenado en el LocalStorage y convertirlo de nuevo en un objeto JavaScript
const objetoSesion = JSON.parse(localStorage.getItem("UsuarioConectado"));

// Obtener el ID de usuario del objeto de sesión
const userId = objetoSesion.id;

// Declarar estados utilizando el hook useState de React
const [favoritos, setFavoritos] = useState([]); // Estado para almacenar los favoritos del usuario
const [ejercicios, setEjercicios] = useState([]); // Estado para almacenar los ejercicios

//endpoints del backend utilizando variables de entorno (.env)
const URL_FAV = `${process.env.REACT_APP_API_BASE_URL}/favoritos-usuario/${userId}`; // Endpoint para obtener los favoritos del usuario
const URL_EJER = `${process.env.REACT_APP_API_BASE_URL}/ejercicios`; // Endpoint para obtener los ejercicios
const URL_FAVDEL = `${process.env.REACT_APP_API_BASE_URL}/favoritos`; // Endpoint para eliminar favoritos

// Función asincrónica para obtener los favoritos del usuario
const obtenerFavoritos = async () => {
  try {
    // Realizar una petición GET a la URL_FAV utilizando axios
    const response = await axios.get(URL_FAV);
    // Devolver los datos de respuesta obtenidos
    return response.data;
  } catch (error) {
    console.error(error);
    // En caso de error, devolver un array vacío
    return [];
  }
};

// Función asincrónica para obtener los ejercicios relacionados con los favoritos
const obtenerEjercicios = async () => {
  // Obtener los IDs de los ejercicios desde el estado "favoritos"
  const idsEjercicios = favoritos.map((favorito) => favorito.id_ejercicio);

  // Construir las URLs de los ejercicios utilizando los IDs obtenidos
  const urlsEjercicios = idsEjercicios.map((id) => `${URL_EJER}/${id}`);

  try {
    // Realizar múltiples peticiones GET a las URLs de los ejercicios utilizando axios.all
    const responses = await axios.all(urlsEjercicios.map((url) => axios.get(url)));

    // Mapear las respuestas obtenidas y agregar una propiedad adicional "selected" con valor "false" a cada ejercicio
    const ejercicios = responses.map((response) => ({
      ...response.data,
      selected: false,
    }));

    // Actualizar el estado "ejercicios" con los ejercicios obtenidos
    setEjercicios(ejercicios);
  } catch (error) {
    console.error(error);
    // En caso de error, establecer el estado "ejercicios" como un array vacío
    setEjercicios([]);
  }
};

// Declarar estado utilizando el hook useState de React
const [fetchingData, setFetchingData] = useState(true); // Estado para indicar si se está obteniendo datos

// Efecto secundario que se ejecuta cuando cambia el valor de "userId"
useEffect(() => {
  // Función asincrónica para obtener los favoritos y actualizar el estado "favoritos"
  const fetchFavoritos = async () => {
    const favoritos = await obtenerFavoritos(); // Obtener los favoritos del usuario
    setFavoritos(favoritos); // Actualizar el estado "favoritos" con los favoritos obtenidos
    setFetchingData(false); // Establecer "fetchingData" como falso para indicar que se han obtenido los datos
  };
  fetchFavoritos(); // Llamar a la función "fetchFavoritos" al montar el componente o cuando cambie "userId"
}, [userId]);

// Efecto secundario que se ejecuta cuando cambia el valor de "favoritos" o "fetchingData"
useEffect(() => {
  // Verificar si los datos ya se han obtenido ("fetchingData" es falso)
  if (!fetchingData) {
    obtenerEjercicios(); // Obtener los ejercicios relacionados con los favoritos
  }
}, [favoritos, fetchingData]);

// Declarar estado utilizando el hook useState de React
const [ejerciciosSeleccionados, setEjerciciosSeleccionados] = useState([]); // Estado para almacenar los ejercicios seleccionados

// Función para alternar el estado seleccionado de un ejercicio
const toggleEjercicio = (idEjercicio) => {
  setEjerciciosSeleccionados((prevEjerciciosSeleccionados) => {
    const isSelected = prevEjerciciosSeleccionados.includes(idEjercicio);
    return isSelected
      ? prevEjerciciosSeleccionados.filter((id) => id !== idEjercicio)
      : [...prevEjerciciosSeleccionados, idEjercicio];
  });
};

// Función para renderizar un mensaje cuando no hay favoritos guardados
const renderNoFavoritos = () => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="alert alert-info text-center">
        <h4>No hay favoritos guardados</h4>
        <p>Actualmente no tienes ningún favorito guardado en tu lista.</p>
      </div>
    </div>
  );
};

// Efecto secundario que se ejecuta cuando cambia el valor de "userId"
useEffect(() => {
  // Función asincrónica para obtener los favoritos y actualizar el estado "favoritos"
  const fetchFavoritos = async () => {
    const favoritos = await obtenerFavoritos(); // Obtener los favoritos del usuario
    setFavoritos(favoritos); // Actualizar el estado "favoritos" con los favoritos obtenidos
  };

  fetchFavoritos(); // Llamar a la función "fetchFavoritos" al montar el componente o cuando cambie "userId"
}, [userId]);

// Efecto secundario que se ejecuta cuando cambia el valor de "favoritos"
useEffect(() => {
  obtenerEjercicios(); // Obtener los ejercicios relacionados con los favoritos
}, [favoritos]);

// Declarar estado utilizando el hook useState de React
const [loading, setLoading] = useState(false); // Estado para indicar si se está cargando


  const eliminarFavoritos = async () => {
    setLoading(true);
    // Verifica que favoritos sea un array
    if (!Array.isArray(favoritos)) {
      return renderNoFavoritos();
    }
    //obtener el id favorito segun el id_ejercicio
    const favoritosAEliminar = favoritos
      .filter((favorito) =>
        ejerciciosSeleccionados.includes(favorito.id_ejercicio)
      )
      .map((favorito) => favorito.id);
  //  console.log(favoritosAEliminar);
    const confirmacion = await mostrarMensajeConfirmacion(
      "¿Estás seguro que deseas eliminar este favorito?",
      async () => {
        try {
          const response = await axios.delete(URL_FAVDEL, {
            data: { favoritosAEliminar },
          });
        //  console.log(response.data);
          //mensaje de confirmación de la eliminación de favoritos
          mostrarMensajeExitoSweet("Se eliminó el favorito correctamente.");
          window.location.reload();
          // Resetea la lista de ejercicios seleccionados
          setEjerciciosSeleccionados([]);
          const nuevosFavoritos = await obtenerFavoritos();
          setFavoritos(nuevosFavoritos);
          //  actualizarEjercicios();
        } catch (error) {
          console.error(error);
          mostrarMensajeErrorSweet("Hubo un error al eliminar el favorito.");
        }
      }
    );
    setLoading(false);
  };

  //para hacer desactivar al boton
  const disabled = ejerciciosSeleccionados.length === 0;

  //para manejar la ventana modal
  const [modalVisible, setModalVisible] = useState(false);
  const handleExportar = () => {
  //acciones cuando se presiona el botón "Exportar"
   //console.log("Exportando ejercicios...");
  };

  
  const handleEnviar = async () => {
  //debug
  //console.log("Enviando ejercicios...");
  };

  return (
    <>
     
      <div className="container mt-1 mb-3">
        <div className="table-responsive">
          <h2>
            <FaStar size={24} color={"#FFD124"} /> Mis ejercicios guardados{" "}
            <FaStar size={24} color={"#FFD124"} />
          </h2>
          <div className="table-wrapper">
            <table className="table table-striped table-sm   ">
              <thead>
                <tr>
                  <th>Seleccionar</th>
                  <th>Imagen</th>
                  <th>Título</th>
                  <th>Tipo de nivel</th>
                  <th>Descripción</th>
                  <th>Grupo Muscular</th>
                  <th>Entrenamiento</th>
                  <th>Nivel</th>
                </tr>
              </thead>
              {ejercicios.length > 0 ? (
                <tbody className="scrollable-table ">
                  {ejercicios
                    .flatMap((ejercicio) => ejercicio)
                    .map((ejercicio) => (
                      <tr key={ejercicio.idEjercicio}>
                        <td>
                          <input
                            type="checkbox"
                            id={ejercicio.idEjercicio}
                            onChange={() =>
                              toggleEjercicio(ejercicio.idEjercicio)
                            }
                          />
                        </td>
                        <td className="imagen-miniatura">
                          <img
                            className="miniatura"                                    
                            alt={ejercicio.titulo}
                            src={ejercicio.imagen}
                            onMouseLeave={(e) => {
                              e.currentTarget.src = ejercicio.imagen;
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.src = ejercicio.imagen2;
                            }}
                            
                          />
                        </td>

                        <td>{ejercicio.titulo}</td>
                        <td>{ejercicio.tipoNivel}</td>
                        <td>{ejercicio.descripcion.substring(0, 75)}</td>
                        <td>{ejercicio.grupoMuscular}</td>
                        <td>{ejercicio.tipoEntrenamiento}</td>
                        <td>{ejercicio.tipoNivel}</td>
                      </tr>
                    ))}
                </tbody>
              ) : (
                <tbody>
                  <tr>
                    <td colSpan="8">
                      No hay ejercicios guardados en favoritos.
                    </td>
                  </tr>
                </tbody>
              )}
            </table>
          </div>
        </div>

        <div className="d-flex justify-content: center mt-3">
          <Button
            variant="danger"
            onClick={eliminarFavoritos}
            disabled={disabled}
            className="mr-2"
          >
            Eliminar seleccionados
          </Button>

          <div className="ml-2">
            <Button
              className="btn-secondary"
              disabled={ejercicios.length === 0}
              onClick={() => setModalVisible(true)}
            >
              Exportar a Pdf
            </Button>
            <PantallaExportar
              ejercicios={ejercicios}
              visible={modalVisible}
              onClose={() => setModalVisible(false)}
              onExportar={handleExportar}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Favoritos;
