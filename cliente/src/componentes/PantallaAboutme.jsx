import React from "react";
import { Modal, Button } from "react-bootstrap";
import { BiMap } from "react-icons/bi";
import { SiMinutemailer } from "react-icons/si";

function PantallaAboutme({ visible, onClose }) {

  const mensaje = `¡Hola! Soy Morad El Mourabit, un desarrollador web apasionado por la tecnología y el deporte.
    Me estoy graduando en Desarrollo de Aplicaciones Multiplataforma y actualmente me encuentro en la recta final de mi grado en Desarrollo de Aplicaciones Web.
    He desarrollado este sitio web para ayudar a los usuarios a tener la información del entrenamiento a rápido alcance y ahorrarles tiempo de búsqueda por internet. 
    Espero que te guste mi proyecto.
    ¡Gracias por visitar mi sitio web y espero poder ayudarte a alcanzar tus objetivos de entrenamiento!`;

    //retorno una pantalla modal con mi informacion y varios links 
  return (
    <Modal show={visible} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Sobre mi</Modal.Title>
      </Modal.Header>

      <Modal.Body>{mensaje}</Modal.Body>

      <Modal.Body>
        <p>
          <SiMinutemailer size={24} /> Email:
          <a href="mailto:moradelm1996@gmail.com" target="blank">
            moradelm1996@gmail.com
          </a>
        </p>
        <p>
          <BiMap size={24} />
          Ubicación:{" "}
          <a href="https://goo.gl/maps/iKSBSXTRUHYHRVmi9" target="blank">
            Madrid, España
          </a>{" "}
        </p>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Cerrar
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default PantallaAboutme;
