import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import CambiarContrasena from "./CambiarContraseña";

function ModalPassword() {
  const [showModal, setShowModal] = useState(false); // Estado para controlar la visibilidad del modal

  const handleShow = () => setShowModal(true); // Función para mostrar el modal estableciendo el estado showModal a true
  const handleClose = () => setShowModal(false); // Función para cerrar el modal estableciendo el estado showModal a false

  return (
    <>
      <Button onClick={handleShow}>Cambiar contraseña</Button> {/* Botón para abrir el modal al hacer clic, invoca la función handleShow */}

      <Modal show={showModal} onHide={handleClose}> {/* Componente Modal de react-bootstrap, se muestra si el estado showModal es true, se oculta si el usuario hace clic fuera del modal o en el botón de cerrar */}
        <Modal.Header closeButton>
          <Modal.Title>Cambiar contraseña</Modal.Title> {/* Título del modal */}
        </Modal.Header>
        <Modal.Body>
          <CambiarContrasena /> {/* Componente CambiarContrasena que se muestra dentro del cuerpo del modal */}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar {/* Botón de cerrar el modal, invoca la función handleClose */}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalPassword;
