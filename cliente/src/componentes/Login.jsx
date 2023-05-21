import { React, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import routes from "../helpers/routes";
import "../css/loginYregistro.css";
import axios from "axios";

function Login(props) {
  const URL_LOGIN = `${process.env.REACT_APP_API_BASE_URL}/login`; // URL endpoint para el inicio de sesión
  const URL_US = `${process.env.REACT_APP_API_BASE_URL}/usuario`; // URL endpoint para obtener información del usuario

  const [emailError, setEmailError] = useState(false); // Estado para indicar si hay un error en el campo de correo electrónico
  const [passwordError, setPasswordError] = useState(false); // Estado para indicar si hay un error en el campo de contraseña
  const navigate = useNavigate(); // Hook de navegación utilizado para redirigir a otras páginas

  // Función para alternar la visibilidad de la contraseña
  const [showPassword, setShowPassword] = useState(false);
  function verContrasena() {
    setShowPassword(!showPassword);
  }

  const [email, setEmail] = useState(""); // Estado para almacenar el valor del campo de correo electrónico
  const [password, setPassword] = useState(""); // Estado para almacenar el valor del campo de contraseña

  const handleEmailChange = (event) => {
    setEmail(event.target.value); // Actualizar el estado del correo electrónico cuando cambia el campo
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value); // Actualizar el estado de la contraseña cuando cambia el campo
  };

  const mostrarMensajeError = (mensaje) => {
    const contenidoHTML = `<h3>${mensaje}</h3>`;
    const divError = document.getElementById("alerta");
    divError.innerHTML = contenidoHTML;
    divError.classList.add("alert-danger");
  };
  // Función para mostrar un mensaje de error en la página

  const obtenerIdUsuario = async (email) => {
    try {
      const response = await axios.get(URL_US, {
        params: { email },
      });
      return response.data.id; // Obtener el ID de usuario a partir del correo electrónico
    } catch (error) {
      console.log(error);
      // Manejar el error de alguna manera
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault(); // Evitar el comportamiento de envío predeterminado del formulario

    if (!email) {
      const errorEmail = "El campo de correo electrónico está vacío";
      mostrarMensajeError(errorEmail);
      return;
    }
    if (!password) {
      const errorPasswordVacia = "El campo de contraseña está vacío";
      mostrarMensajeError(errorPasswordVacia);
      return;
    }

    try {
      const response = await axios.post(URL_LOGIN, {
        email,
        password,
      });

      const idUsuario = await obtenerIdUsuario(email); // Obtener el ID del usuario a partir del correo electrónico
      const objetoSesion = {
        id: idUsuario, // Guardar el ID del usuario en el objeto de sesión
        email: email, // Guardar el correo electrónico también
      };

      localStorage.setItem("UsuarioConectado", JSON.stringify(objetoSesion)); // Guardar el objeto de sesión en el almacenamiento local

      navigate(routes.menu); // Redirigir a la página del menú principal
    } catch (error) {
      console.error(error.response.data.message); // Mostrar en la consola el mensaje de error de credenciales incorrectas

      const mensaje = error.response.data.message; // Obtener el mensaje de error del servidor
      mostrarMensajeError(mensaje); // Mostrar el mensaje de error en la página
    }
  };

  return (
    <div className="formulariosIniciales">
      <div className="container formincial">
        <div className="row justify-content-center mt-5">
          <div className="col-sm-10 col-md-8 col-lg-6">
            <div className="card-form">
              <div class="card-form-body">
                <form onSubmit={handleSubmit}>
                  <h3 className="card-title text-center">🏋️Login🤸</h3>

                  {/*Email*/}
                  <div className="card-form-body">
                    <div className="input-group mb-3">
                      <div className="input-group-prepend">
                        <span className="input-group-text " id="basic-addon1">
                          📧
                        </span>
                      </div>

                      {/* <label htmlFor="email">Email:</label>*/}
                      <input
                        type="email"
                        className={`form-control border-0 border-bottom bg-light border-top-0 border-primary rounded ${
                          emailError ? "is-invalid" : ""
                        }`}
                        id="email"
                        placeholder="email"
                        aria-label="email"
                        aria-describedby="basic-addon1"
                        maxLength={25}
                        required
                        value={email}
                        onChange={handleEmailChange}
                        onKeyDown={(event) => {
                          if (event.key === "Enter") {
                            handleSubmit(event);
                          }
                        }}
                      />
                    </div>

                    {/*contraseña*/}
                    <div className="input-group mb-3">
                      <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon2">
                          🔒
                        </span>
                      </div>
                      {/* <label htmlFor="password">Contraseña:</label>*/}
                      <input
                        type={showPassword ? "text" : "password"}
                        className={`form-control border-0 border-bottom bg-light border-top-0 border-primary rounded ${
                          passwordError ? "is-invalid" : ""
                        }`}
                        placeholder="contraseña"
                        aria-label="contraseña"
                        aria-describedby="basic-addon2"
                        required
                        minLength={4}
                        maxLength={10}
                        id="password"
                        value={password}
                        onChange={handlePasswordChange}
                        onKeyDown={(event) => {
                          if (event.key === "Enter") {
                            handleSubmit(event);
                          }
                        }}
                      />

                      {/*ojo de der ver contraseña o no*/}
                      <div className="input-group-append">
                        <span
                          className="input-group-text border-bottom"
                          onClick={verContrasena}
                        >
                          {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </span>
                      </div>
                    </div>

                    <div className="text-center">
                      <button
                        type="submit"
                        className="btn btn-success btn-sm mx-2 mb-2 text-center"
                      >
                        Aceptar
                      </button>
                    </div>
                  </div>

                  <div id="alerta" className="alert" role="alert">
                    {" "}
                  </div>
                </form>

                <div className="card-form-footer text-center">
                  <span>¿Has olvidado la contraseña?</span>{" "}
                  <Link to={routes.forgotpassword}>Recuperar</Link>
                </div>

                {/* ya tengo cuenta */}
                <div className="card-form-footer text-center">
                  <span>No tengo cuenta</span>{" "}
                  <Link to={routes.register}>Ir a Registrarse</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
