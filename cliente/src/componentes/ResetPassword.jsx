import { React, useEffect, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import routes from "../helpers/routes";
import "../css/loginYregistro.css";
import axios from "axios";
import {
  mostrarMensajeErrorSweet,
  mostrarMensajeExitoSweet,
} from "../helpers/SweetAlert2";

function ResetPassword(props) {
  // Estado para controlar la visibilidad de la contraseña
  const [showPassword, setShowPassword] = useState(false);

  // Función para alternar la visibilidad de la contraseña
  function verContrasena() {
    setShowPassword(!showPassword);
  }

  // Estado para controlar la visibilidad de la segunda contraseña
  const [showPassword2, setShowPassword2] = useState(false);

  // Función para alternar la visibilidad de la segunda contraseña
  function ver2Contrasena() {
    setShowPassword2(!showPassword2);
  }

  // Importación del hook useNavigate de React Router
  const navigate = useNavigate();

  // Estado para controlar los errores de la contraseña
  const [passwordError, setPasswordError] = useState("");

  // Estados para controlar las contraseñas
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordsMatch, setPasswordsMatch] = useState(false);

  // Función para manejar el cambio de la contraseña
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  // Función para manejar el cambio de la confirmación de la contraseña
  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  // Efecto para comprobar si las contraseñas coinciden
  useEffect(() => {
    setPasswordsMatch(password === confirmPassword && password !== "");
  }, [password, confirmPassword]);

  // Estado para almacenar el ID del usuario
  const [userId, setUserId] = useState("");

  // Función para mostrar un mensaje de error
  const mostrarMensajeError = (mensaje) => {
    const contenidoHTML = `<h3>${mensaje}</h3>`;
    const divError = document.getElementById("alerta");
    divError.innerHTML = contenidoHTML;
    divError.classList.add("alert-danger");
  };

  // Función para mostrar un mensaje de éxito
  const mostrarMensajeExito = (mensaje) => {
    const contenidoHTML = `<h3>${mensaje}</h3>`;
    const divExito = document.getElementById("alerta");
    divExito.innerHTML = contenidoHTML;
    divExito.classList.add("alert-success");
  };

  // Importación del hook useParams de React Router
  const params = useParams();

  // Obtenemos el valor del parámetro "id" de la URL
  const { id } = params;

  // Función para obtener el token de la URL
  function getTokenFromUrl() {
    const search = window.location.search;
    const params = new URLSearchParams(search);
    return params.get("token");
  }

  // Obtenemos el token de la URL
  const token = getTokenFromUrl();

  // Función para manejar el cambio de contraseña
  const handleChangePassword = async (event) => {
    event.preventDefault();
    setUserId(id);

    // Comprobamos si las contraseñas coinciden
    if (password !== confirmPassword) {
      setPasswordError("Las contraseñas no coinciden, revísalas.");
      return;
    } else {
      setPasswordError("");
    }

    // URL para cambiar la contraseña
    const URL_NEWPASS = `${process.env.REACT_APP_API_BASE_URL}/resetpassword/${id}?token=${token}`;

    try {
      // Realizamos la petición PUT para cambiar la contraseña
      const response = await axios.put(URL_NEWPASS, {
        userId: userId,
        token: token,
        contrasena: password,
      });

      if (response && response.data) {
        // Mostramos mensaje de éxito
        mostrarMensajeExito(
          "Contraseña cambiada con éxito, vuelve a iniciar sesión"
        );
        mostrarMensajeExitoSweet(
          "Contraseña cambiada con éxito, vuelve a iniciar sesión"
        );

        // Navegamos a la página de inicio de sesión
        navigate(routes.login);
      } else {
        // Mostramos mensaje de error si no se pudo cambiar la contraseña
        mostrarMensajeError("Error al cambiar la contraseña");
        mostrarMensajeErrorSweet("Error al cambiar la contraseña");
      }
    } catch (error) {
      console.log("error al cambiar contraseña");
      console.error(error.response.data.message);

      const mensaje = error.response.data.message;
      mostrarMensajeError(mensaje);
    }
  };

  return (
    <div className="formulariosIniciales">
      <div className="container">
        <div className="row justify-content-center mt-5">
          <div className="col-sm-10 col-md-8 col-lg-6">
            <div className="card-form">
              <div class="card-form-body">
                <form onSubmit={handleChangePassword}>
                  <h3 className="card-title text-center">Nueva contraseña</h3>
                  {/* contraseña */}
                  <div className="input-group mb-3 mt-2">
                    <input
                      type={showPassword ? "text" : "password"}
                      className="form-control border-0 border-bottom bg-light border-top-0 border-primary rounded"
                      placeholder="contraseña"
                      aria-label="contraseña"
                      aria-describedby="basic-addon6"
                      required
                      minLength={4}
                      maxLength={10}
                      id="password"
                      value={password}
                      onChange={handlePasswordChange}
                    />

                    {/* ojo de der ver contraseña o no */}
                    <div className="input-group-append">
                      <span
                        className="input-group-text bg-light border-0 border-bottom"
                        onClick={verContrasena}
                      >
                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                      </span>
                    </div>
                  </div>

                  {/* repetir contraseña */}
                  <div className="input-group mb-3">
                    <input
                      type={showPassword2 ? "text" : "password"}
                      className="form-control border-0 border-bottom bg-light border-top-0 border-primary rounded"
                      placeholder="repite contraseña"
                      aria-label="repite contraseña"
                      aria-describedby="basic-addon7"
                      required
                      minLength={4}
                      maxLength={10}
                      id="confirm-password"
                      value={confirmPassword}
                      onChange={handleConfirmPasswordChange}
                    />

                    {/* ojo de der ver contraseña o no */}
                    <div className="input-group-append">
                      <span
                        className="input-group-text bg-light border-0 border-bottom"
                        onClick={ver2Contrasena}
                      >
                        {showPassword2 ? <FaEyeSlash /> : <FaEye />}
                      </span>
                    </div>
                  </div>
                  {passwordError && (
                    <p style={{ color: "red", fontWeight: "bold" }}>
                      {passwordError}
                    </p>
                  )}
                  {passwordsMatch ? (
                    <p style={{ color: "green" }}>Contraseñas coinciden </p>
                  ) : (
                    <p style={{ color: "red" }}>Las contraseñas no coinciden</p>
                  )}

                  {/*-----------------*/}
                  <div className="text-center">
                    <button
                      type="submit"
                      className="btn btn-success btn-sm mx-2 mb-2 text-center"
                    >
                      Enviar
                    </button>
                  </div>
                </form>
                <div id="alerta" className="alert" role="alert"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ResetPassword;
