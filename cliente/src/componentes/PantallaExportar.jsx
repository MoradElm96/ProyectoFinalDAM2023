import React from "react";
import { Modal, Button } from "react-bootstrap";
import ExportarApdf from "./ExportarApdf";

const PantallaExportar = ({ ejercicios, visible, onClose, onExportar }) => {
  // Componente funcional que muestra una ventana modal para exportar ejercicios
  
  return (
    <Modal show={visible} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Ejercicios a exportar</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* Muestra los ejercicios a exportar */}
        {ejercicios.map((ejercicio) => (
          <p key={ejercicio.id}>{ejercicio.titulo}</p>
        ))}
      </Modal.Body>
      <Modal.Footer>
        {/* Componente para exportar a PDF */}
        <ExportarApdf
          onClick={onExportar}
          data={ejercicios}
          filename="misEjerciciosfavoritos"
        />
        {/* Botón para cerrar la ventana modal */}
        <Button variant="secondary" onClick={onClose}>
          Cerrar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default PantallaExportar;
