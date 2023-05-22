import { React, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import routes from "../helpers/routes";
import "../css/loginYregistro.css";
import axios from "axios";
import Swal from "sweetalert2";
import {
  mostrarMensajeErrorSweet,
  mostrarMensajeExitoSweet,
} from "../helpers/SweetAlert2";


function ForgotPassword() {
  const [emailError, setEmailError] = useState(false);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const mostrarMensajeError = (mensaje) => {
    const contenidoHTML = `<h3>${mensaje}</h3>`;
    const divError = document.getElementById("alerta");
    divError.innerHTML = contenidoHTML;
    divError.classList.add("alert-danger");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!email) {
      const errorEmail = "El campo de correo electrónico está vacío";
      mostrarMensajeError(errorEmail);

      return;
    }
    
const URL_ComprobarMail = `${process.env.REACT_APP_API_BASE_URL}/forgotpassword`;

    try {
      const response = await axios.post(URL_ComprobarMail, { email });

      // todo
      //console.log("puedo hacer el to do");
      mostrarMensajeExitoSweet("Email enviado, revisa tu bandeja de correo");
      setEmail("");
      //ver si redirigir o no
      //navigate(routes.menu);
    } catch (error) {
      console.error(error.response.data.message);
      const mensaje = error.response.data.message;
      mostrarMensajeError(mensaje);
      mostrarMensajeErrorSweet(mensaje);
      setEmail("");
    }
  };

  return (
    <div className="formulariosIniciales">
      <div className="container">
        <div className="row justify-content-center mt-5">
        <div className="col-sm-10 col-md-8 col-lg-6">
            <div className="card-form">
              <div class="card-form-body">
                <form onSubmit={handleSubmit}>
                  <h3 className="card-title text-center">Recuperar cuenta</h3>

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

                    <div className="text-center">
                      <button
                        type="submit"
                        className="btn btn-success btn-sm mx-2 mb-2 text-center"
                      >
                        Enviar
                      </button>
                    </div>
                  </div>

                  <div id="alerta" className="alert" role="alert">
                    {" "}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
