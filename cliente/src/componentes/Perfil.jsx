import React, { useEffect, useState } from "react";
import "../css/perfil.css";
import {
  mostrarMensajeConfirmacion,
  mostrarMensajeErrorSweet,
  mostrarMensajeExitoSweet,
} from "../helpers/SweetAlert2";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import routes from "../helpers/routes";
import ModalPassword from "./cambioPassword/modalPassword";
import UserAvatar from "./FuncionAvatar";

function Perfil() {

  const cerrarSession = () => {
    // Función para cerrar la sesión del usuario
    localStorage.clear(); // Limpiar el almacenamiento local
    navigate(routes.home); // Redirigir a la página de inicio
  };
  
  // Referencias de useState para diferentes campos de usuario
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [edad, setEdad] = useState("");
  const [peso, setPeso] = useState("");
  const [rol, setRol] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [deleteAccountChecked, setDeleteAccountChecked] = useState(false);
  
  // Obtener el objeto de sesión del usuario del almacenamiento local
  const objetoSesion = JSON.parse(localStorage.getItem("UsuarioConectado"));
  const userId = objetoSesion.id; // Obtener el ID del usuario de la sesión
  
  const URL_US = `${process.env.REACT_APP_API_BASE_URL}/users/${userId}`;
  
  // Función para obtener los datos del usuario desde el servidor
  const obtenerDatosUsuario = async () => {
    try {
      const response = await axios.get(URL_US);
      const { nombre, apellido, edad, peso, rol, email } = response.data;
      setNombre(nombre);
      setApellido(apellido);
      setEdad(edad);
      setPeso(peso);
      setRol(rol);
      setEmail(email);
      // console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error);
      // Manejar el error de alguna manera
      console.log("error en la parte servidora al obtener los datos");
    }
  };
  


  useEffect(() => {
    obtenerDatosUsuario(); // Obtener los datos del usuario al cargar el componente
  }, []);
  
  // Funciones para manejar cambios en los campos del formulario
  const handleEdadChange = (event) => {
    setEdad(event.target.value); // Actualizar el estado de la edad con el valor del campo
  };
  
  const handlePesoChange = (event) => {
    setPeso(event.target.value); // Actualizar el estado del peso con el valor del campo
  };
  
  const handlePasswordChange = (event) => {
    setPassword(event.target.value); // Actualizar el estado de la contraseña con el valor del campo
  };
  
  const handleDeleteAccountChange = (event) => {
    setDeleteAccountChecked(event.target.checked); // Actualizar el estado de eliminar cuenta con el valor del campo
  };
  
  // Función para eliminar la cuenta del usuario por ID
  const eliminarUsuarioPorId = async () => {
    try {
      const response = await axios.delete(URL_US);
      // console.log(response.data); // Agrega esta línea para imprimir la respuesta en la consola
  
      mostrarMensajeExitoSweet("Cuenta eliminada con éxito"); // Mostrar mensaje de éxito
      cerrarSession(); // Cerrar la sesión del usuario
    } catch (error) {
      console.error(error.response.data.message); // Imprimir el mensaje de error en la consola
      mostrarMensajeErrorSweet(
        "No se pudo eliminar tu cuenta, contacta con el administrador"
      ); // Mostrar mensaje de error en SweetAlert
    }
  };
  
// URL para comparar la contraseña del usuario
const URL_COMPARE = `${process.env.REACT_APP_API_BASE_URL}/compararClave/${userId}`;

// Función para manejar el envío del formulario de eliminación de cuenta
const handleDeleteAccountSubmit = async (event) => {
  event.preventDefault();

  if (rol === 1) {
    mostrarMensajeErrorSweet(
      "No puedes eliminar tu cuenta, eres el administrador"
    ); // Mostrar mensaje de error si el usuario es administrador
  } else {
    try {
      const response = await axios.post(URL_COMPARE, { password });
      // console.log(response); // Agrega esta línea para imprimir la respuesta en la consola

      mostrarMensajeConfirmacion(
        "¿Estás seguro de que quieres eliminar tu cuenta?",
        async () => {
          eliminarUsuarioPorId(); // Llamar a la función que elimina la cuenta del usuario
        }
      ); // Mostrar mensaje de confirmación con opción de eliminar cuenta
    } catch (error) {
      console.error(error.response.data.message); // Imprimir el mensaje de error en la consola
      let mensaje = error.response.data.message;
      let contenidoHTML = `<h3>${mensaje}</h3>`;
      var divError = document.getElementById("alerta");
      divError.innerHTML = contenidoHTML;
      divError.classList.add("alert-danger");
      mostrarMensajeErrorSweet(mensaje); // Mostrar mensaje de error en SweetAlert
    }
  }
};


  const navigate = useNavigate();
  const URL_UPDATE = `${process.env.REACT_APP_API_BASE_URL}/users/update/${userId}`;

  const handleSubmit = async (event) => {
    event.preventDefault();
    //creo objeto con los datos
    const data = {
      edad: edad,
      peso: peso,
    };

    //Compruebo que todos los campos están completados
    const todosLosCamposCompletados = Object.values(data).every(
      (valor) => !!valor
    );

    if (!todosLosCamposCompletados) {
      // toast.error("Por favor, complete todos los campos.");
      return;
    }
   //console.log(data);

    try {
      const response = await axios.post(URL_UPDATE, data);
     // console.log(data);
      mostrarMensajeExitoSweet("Datos actualizados");
    } catch (error) {
      console.error(error.response.data.message);

      let mensaje = error.response.data.message;
      let contenidoHTML = `<h3>${mensaje}</h3>`;

      var divError = document.getElementById("alerta");
      divError.innerHTML = contenidoHTML;
      divError.classList.add("alert-danger");
      mostrarMensajeErrorSweet(mensaje);
    }
  };



  return (
    <div className="container-perfil">
      <div className="d-flex align-items-center justify-content-between">
        <div>
          <h3>Configuración del perfil</h3>
        </div>
        <div>
          <UserAvatar email={email} />
        </div>
      </div>

      <div>
        <h6>
          {" "}
          Usuario: {nombre} {apellido}{" "}
        </h6>
        <h6> Email: {email} </h6>
      </div>

      <form onSubmit={handleSubmit}>
        {/* Edad */}
        <div className="input-group mb-3 mt-3">
          <label htmlFor="edad">Edad:</label>
          <select
            className="form-select rounded bg-light"
            id="edad"
            value={edad}
            onChange={handleEdadChange}
            defaultValue={edad}
            required
          >
            {[...Array(111)].map((_, i) => (
              <option key={i} value={i}>
                {i} años
              </option>
            ))}
          </select>
        </div>

        {/* Peso */}
        <div className="input-group mb-3 mt-3">
          <label htmlFor="peso">Peso:</label>
          <select
            className="form-select rounded bg-light"
            id="peso"
            value={peso}
            onChange={handlePesoChange}
            defaultValue={peso}
            required
          >
            {[...Array(181)].map((_, i) => (
              <option key={i} value={i + 20}>
                {i + 20} kg
              </option>
            ))}
          </select>
        </div>

        {/*boton*/}
        <div className="text-center">
          <button
            type="submit"
            className="btn btn-success btn-sm mx-2 mb-2 text-center btn-lg "
          >
            Actualizar
          </button>
        </div>
        <div></div>
      </form>

      <div id="alerta" className="alert" role="alert"></div>
      <hr />

      {/* abre la pantalla modal  que contiene actualizar contraseña*/}
      <ModalPassword />

      <hr />
      <form onSubmit={handleDeleteAccountSubmit}>
        <div className="form-group ">
          <label htmlFor="delete-account ">
            <input
              type="checkbox"
              id="delete-account"
              checked={deleteAccountChecked}
              onSubmit={handleDeleteAccountSubmit}
              onChange={handleDeleteAccountChange}
            />{" "}
            Eliminar mi cuenta
          </label>
        </div>

        {deleteAccountChecked && (
          <div className="form-group row">
            <label
              htmlFor="delete-account-password"
              className="col-sm-6 col-form-label"
            >
              Por favor, escriba su contraseña para confirmar la eliminación de
              su cuenta:
            </label>
            <div className="col-sm-6">
              <input
                className="form-control bg-light"
                type="password"
                id="delete-account-password"
                value={password}
                onChange={handlePasswordChange}
                required
              />
            </div>
            <div className="text-center mb-3">
              <button type="submit" className="btn btn-danger mt-2">
                Eliminar cuenta
              </button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
}

export default Perfil;
