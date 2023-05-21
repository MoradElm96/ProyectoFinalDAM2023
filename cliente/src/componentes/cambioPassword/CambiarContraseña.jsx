import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import {
  mostrarMensajeConfirmacion, mostrarMensajeErrorSweet, mostrarMensajeExitoSweet,
} from "../../helpers/SweetAlert2";
import { useNavigate } from "react-router-dom";
import routes from "../../helpers/routes";


function CambiarContrasena() {
  const [contrasenaActual, setContrasenaActual] = useState(""); // Estado para almacenar la contraseña actual
  const [nuevaPassword, setNuevaPassword] = useState(""); // Estado para almacenar la nueva contraseña
  const [confirmNuevaPassword, setConfirmNuevaPassword] = useState(""); // Estado para almacenar la confirmación de la nueva contraseña
  
  const handleContrasenaActual = (event) => {
    setContrasenaActual(event.target.value); // Manejador de evento para actualizar el estado de la contraseña actual cuando cambia el valor del campo de entrada
  };
  
  const handleNuevaPassword = (event) => {
    setNuevaPassword(event.target.value); // Manejador de evento para actualizar el estado de la nueva contraseña cuando cambia el valor del campo de entrada
  };
  
  const handleConfirmNuevaPassword = (event) => {
    setConfirmNuevaPassword(event.target.value); // Manejador de evento para actualizar el estado de la confirmación de la nueva contraseña cuando cambia el valor del campo de entrada
  };
  
  const [showPassword, setShowPassword] = useState(false); // Estado para controlar si se muestra o no la contraseña
  
  function verContrasena() {
    setShowPassword(!showPassword); // Función para alternar el estado de visualización de la contraseña
  }
  
  const [passwordsMatch, setPasswordsMatch] = useState(false); // Estado para almacenar si las contraseñas coinciden o no
  const [passwordError, setPasswordError] = useState(""); // Estado para almacenar el mensaje de error de las contraseñas
  
  useEffect(() => {
    if (nuevaPassword !== "" && confirmNuevaPassword !== "") {
      if (nuevaPassword === confirmNuevaPassword) {
        setPasswordError("");
        setPasswordsMatch(true);
      } else {
        // setPasswordError("La nueva contraseña y la confirmación no coinciden");
        setPasswordsMatch(false);
      }
    }
  }, [nuevaPassword, confirmNuevaPassword]); // Efecto que se ejecuta cuando cambian las contraseñas para verificar si coinciden
  
  const objetoSesion = JSON.parse(localStorage.getItem("UsuarioConectado")); // Obtener el objeto de sesión del almacenamiento local
  const userId = objetoSesion.id; // Obtener el ID del usuario de la sesión
  
  const URL_US = `${process.env.REACT_APP_API_BASE_URL}/users/${userId}`; // URL para actualizar la contraseña del usuario
  const URL_COMPARE = `${process.env.REACT_APP_API_BASE_URL}/compararClave/${userId}`; // URL para comparar la contraseña actual del usuario
  
  const navigate = useNavigate(); // Hook de enrutamiento para la navegación
  const cerrarSession = () => {
    localStorage.clear();
    navigate(routes.home);
  }; // Función para cerrar sesión y redirigir al inicio
  
  const compararContrasenaActual = async () => {
    try {
      const response = await axios.post(URL_COMPARE, {
        password: contrasenaActual,
      }); // Enviar una solicitud POST para comparar la contraseña actual del usuario con la almacenada en el servidor
      console.log(response);
  
      return true;
    } catch (error) {
      console.error(error.response.data.message);
      mostrarMensajeErrorSweet(error.response.data.message); // Mostrar un mensaje de error en caso de que falle la comparación de contraseñas
      return false;
    }
  };
  
  const cambiarContrasenaPorId = async (nueva) => {
    try {
      const response = await axios.put(URL_US, { contrasena: nueva }); // Enviar una solicitud PUT para cambiar la contraseña del usuario por su ID
      console.log(response.data);
      console.log(response);
      mostrarMensajeExitoSweet(
        "Contraseña cambiada con éxito, vuelve a iniciar sesión"
      ); // Mostrar un mensaje de éxito indicando que la contraseña se cambió correctamente y se debe iniciar sesión nuevamente
      cerrarSession(); // Cerrar sesión y redirigir al inicio de sesión
    } catch (error) {
      console.error(error.response.data.message);
      mostrarMensajeErrorSweet(
        "No se pudo cambiar contraseña, contacta con el administrador"
      ); // Mostrar un mensaje de error en caso de que falle el cambio de contraseña
    }
  };
  
  console.log(contrasenaActual);
  const handleCambiarContrasenaSubmit = async (event) => {
    event.preventDefault();
    const contrasenaActualCorrecta = await compararContrasenaActual(); // Verificar si la contraseña actual es correcta llamando a la función compararContrasenaActual
    if (!contrasenaActualCorrecta) {
      mostrarMensajeErrorSweet("La contraseña actual es incorrecta"); // Mostrar un mensaje de error si la contraseña actual no es correcta
      return;
    }
  
    if (!passwordsMatch) {
      mostrarMensajeErrorSweet(passwordError); // Mostrar un mensaje de error si las contraseñas no coinciden
      return;
    }
  
    try {
      mostrarMensajeConfirmacion(
        "¿Estás seguro de que quieres cambiar tu contraseña?",
        async () => {
          await cambiarContrasenaPorId(nuevaPassword); // Mostrar un mensaje de confirmación preguntando si el usuario está seguro de cambiar la contraseña y, si confirma, llamar a la función cambiarContrasenaPorId para realizar el cambio
        }
      );
  
      setContrasenaActual("");
      setNuevaPassword("");
      setConfirmNuevaPassword("");
    } catch (error) {
      console.error(error.response.data.message);
      mostrarMensajeErrorSweet("No se pudo cambiar la contraseña"); // Mostrar un mensaje de error si no se puede cambiar la contraseña
    }
  };
  

  return (
    <form onSubmit={handleCambiarContrasenaSubmit}>
      <div className="form-group mb-3">
        <label htmlFor="old-password">Contraseña actual:</label>
        <div className="input-group">
          <input
            className="form-control bg-light"
            type={showPassword ? "text" : "password"}
            id="old-password"
            value={contrasenaActual}
            onChange={handleContrasenaActual}
            required
          />
        </div>
      </div>

      <div className="form-group mb-3">
        <label htmlFor="new-password">Nueva contraseña:</label>
        <div className="input-group">
          <input
            className="form-control bg-light"
            type={showPassword ? "text" : "password"}
            id="new-password"
            value={nuevaPassword}
            onChange={handleNuevaPassword}
            required
          />
        </div>
      </div>

      <div className="form-group mb-3">
        <label htmlFor="confirm-new-password">
          Confirmar nueva contraseña:
        </label>
        <div className="input-group">
          <input
            className="form-control bg-light"
            type={showPassword ? "text" : "password"}
            id="confirm-new-password"
            value={confirmNuevaPassword}
            onChange={handleConfirmNuevaPassword}
            required
          />
        </div>
      </div>

      <div className="input-group-append d-flex justify-content-end">
        <p>Mostrar contraseña</p>
        <span
          className="input-group-text bg-light border-0 border-bottom"
          style={{ padding: "0.45rem 0.5rem", marginLeft: "0.5rem" }}
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? <FaEyeSlash /> : <FaEye />}
        </span>
      </div>
      {passwordError && (
        <p style={{ color: "red", fontWeight: "bold" }}>{passwordError}</p>
      )}
      {passwordsMatch ? (
        <p style={{ color: "green" }}>Contraseñas coinciden </p>
      ) : (
        <p style={{ color: "red" }}>Las contraseñas no coinciden</p>
      )}

      <div className="text-center mb-3">
        <button type="submit" className="btn btn-primary mt-2">
          Cambiar Contraseña
        </button>
      </div>
    </form>
  );
}


export default CambiarContrasena;
