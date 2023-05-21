import React from "react";
import { Modal, Button } from "react-bootstrap";

const CardModal = ({ card, isOpen, onRequestClose }) => {
  // Componente que muestra un modal para visualizar los detalles de una tarjeta

  return (
    <div
      className="modal show"
      style={{ display: "block", position: "initial" }}
    >
      {/* Componente Modal de react-bootstrap */}
      <Modal
        className="custom-modal"
        show={isOpen}
        onHide={onRequestClose}
        contentLabel="Example Modal"
        key={card.id}
      >
        <Modal.Header closeButton>
          {/* Título de la tarjeta */}
          <Modal.Title>{card.titulo}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Descripción de la tarjeta */}
          <p>{card.descripcion}</p>
        </Modal.Body>
        <Modal.Footer>
          {/* Botón de cierre */}
          <Button variant="secondary" onClick={onRequestClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default CardModal;
