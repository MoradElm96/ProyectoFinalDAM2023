import { React, useEffect, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import routes from "../helpers/routes";
import "../css/loginYregistro.css";
import axios from "axios";
import {
  mostrarMensajeErrorSweet,
  mostrarMensajeExitoSweet,
} from "../helpers/SweetAlert2";

const URL_REGISTER = `${process.env.REACT_APP_API_BASE_URL}/register`;

function Register(props) {
  // Estado para controlar si se muestra la contraseña o no
  const [showPassword, setShowPassword] = useState(false);

  // Función para alternar la visibilidad de la contraseña
  function verContrasena() {
    setShowPassword(!showPassword);
  }

  // Estado para controlar si se muestra la segunda contraseña o no
  const [showPassword2, setShowPassword2] = useState(false);

  // Función para alternar la visibilidad de la segunda contraseña
  function ver2Contrasena() {
    setShowPassword2(!showPassword2);
  }

  // Función proporcionada por React Router para la navegación
  const navigate = useNavigate();

  // Estado para almacenar el mensaje de error de la contraseña
  const [passwordError, setPasswordError] = useState("");

  // Estados para almacenar los valores de los campos del formulario
  const [nombre, setNombre] = useState("");
  const [apellidos, setApellidos] = useState("");
  const [edad, setEdad] = useState("");
  const [peso, setPeso] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // Estado para controlar si las contraseñas coinciden o no
  const [passwordsMatch, setPasswordsMatch] = useState(false);

  // Funciones de cambio de estado para los campos del formulario
  const handleNombreChange = (event) => {
    setNombre(event.target.value);
  };
  const handleApellidosChange = (event) => {
    setApellidos(event.target.value);
  };
  const handleEdadChange = (event) => {
    setEdad(event.target.value);
  };
  const handlePesoChange = (event) => {
    setPeso(event.target.value);
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  // Efecto para comprobar si las contraseñas coinciden
  useEffect(() => {
    setPasswordsMatch(password === confirmPassword && password !== "");
  }, [password, confirmPassword]);

  // Función para manejar el registro del usuario
  const handleRegister = async (event) => {
    event.preventDefault();

    //creo objeto con los datos
    const data = {
      nombre: nombre,
      apellido: apellidos,
      edad: edad,
      peso: peso,
      email: email,
      contrasena: password,
    };

    //Compruebo que todos los campos están completados
    const todosLosCamposCompletados = Object.values(data).every(
      (valor) => !!valor
    );

    if (!todosLosCamposCompletados) {
      toast.error("Por favor, complete todos los campos.");
      return;
    }

    if (password !== confirmPassword) {
      setPasswordError("Las contraseñas no coinciden, revisalas.");
      return;
    } else {
      setPasswordError("");
    }
    //  console.log(data);

    try {
      const response = await axios.post(URL_REGISTER, data);

      mostrarMensajeExitoSweet(
        "Usuario registrado con exito, pulsa aceptar e inicia sesion"
      );
      //hacer algo mas si se quiere, lo redirigiremos al login para que se autentifique otra vez
      navigate(routes.login);
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
    <div className="formulariosIniciales">
      <div className="container">
        <div className="row justify-content-center mt-5">
          <div className="col-sm-10 col-md-8 col-lg-6">
            <div className="card-form">
              <div class="card-form-body">
                <form onSubmit={handleRegister}>
                  <h3 className="card-title text-center">💾Registro💾</h3>

                  {/* Nombre */}
                  <div className="input-group mb-3 mt-2">
                    <input
                      type="text"
                      className="form-control border-0 border-bottom bg-light border-top-0 border-primary rounded"
                      placeholder="Nombre"
                      aria-label="Nombre"
                      aria-describedby="basic-addon1"
                      required
                      minLength={1}
                      maxLength={10}
                      id="nombre"
                      value={nombre}
                      onChange={handleNombreChange}
                    />
                  </div>

                  {/* Apellido */}
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      className="form-control border-0 border-bottom bg-light border-top-0 border-primary rounded"
                      placeholder="Apellido"
                      aria-label="Apellido"
                      aria-describedby="basic-addon2"
                      required
                      minLength={4}
                      maxLength={20}
                      id="apellidos"
                      value={apellidos}
                      onChange={handleApellidosChange}
                    />
                  </div>

                  {/* Edad */}
                  <div className="input-group mb-3">
                    <input
                      type="number"
                      className="form-control border-0 border-bottom bg-light border-top-0 border-primary rounded"
                      placeholder="Edad"
                      aria-label="Edad"
                      aria-describedby="basic-addon3"
                      required
                      id="edad"
                      value={edad}
                      onChange={handleEdadChange}
                    />
                  </div>

                  {/* Peso */}
                  <div className="input-group mb-3">
                    <input
                      type="number"
                      className="form-control border-0 border-bottom bg-light border-top-0 border-primary rounded"
                      placeholder="Peso en Kilogramos"
                      aria-label="Peso"
                      aria-describedby="basic-addon4"
                      required
                      id="peso"
                      value={peso}
                      onChange={handlePesoChange}
                    />
                  </div>

                  {/* email */}
                  <div className="input-group mb-3">
                    <input
                      type="email"
                      className="form-control border-0 border-bottom bg-light border-top-0 border-primary rounded"
                      placeholder="email"
                      aria-label="email"
                      aria-describedby="basic-addon5"
                      maxLength={25}
                      required
                      value={email}
                      onChange={handleEmailChange}
                      id="email"
                    />
                  </div>

                  {/* contraseña */}
                  <div className="input-group mb-3">
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
                      Registrarse
                    </button>
                  </div>
                </form>
                <div id="alerta" className="alert" role="alert"></div>

                {/* ya tengo cuenta */}
                <div className="card-footer text-center">
                  <span>Ya tengo cuenta</span>{" "}
                  <Link to={routes.login}>Ir al login</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Register;
