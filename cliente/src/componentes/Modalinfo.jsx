import React from "react";
import { Modal, Button } from "react-bootstrap";

function ModalInfo({ informacion, showModal, setShowModal }) {
  return (
    <Modal show={showModal} onHide={() => setShowModal(false)}>
      {/* Encabezado del modal */}
      <Modal.Header closeButton>
        <Modal.Title>Información sobre el factor de actividad</Modal.Title>
      </Modal.Header>
      {/* Cuerpo del modal */}
      <Modal.Body>
        <p>{informacion}</p>
      </Modal.Body>
      {/* Pie del modal */}
      <Modal.Footer>
        {/* Botón para cerrar el modal */}
        <Button variant="secondary" onClick={() => setShowModal(false)}>
          Cerrar
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalInfo;
