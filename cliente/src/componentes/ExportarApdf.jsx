import React, { useState } from "react";
import { jsPDF } from "jspdf";
import "jspdf-autotable";
import { Button } from "react-bootstrap";
import axios from "axios";

function ExportarApdf({ data, filename }) {

  const objetoSesion = JSON.parse(localStorage.getItem("UsuarioConectado"));
  const userId = objetoSesion.id;
 // console.log(userId);
  const URL_US = `${process.env.REACT_APP_API_BASE_URL}/users/${userId}`;
  //funcion para obtener el id de usuario
  const obtenerDatosUsuario = async () => {
    try {
      const response = await axios.get(URL_US);
      return response.data;
    } catch (error) {
      console.log(error);
      // Manejar el error de alguna manera
      console.log("error en la parte servidora al obtener los datos");
    }
  };

  const handleExportPdf = async () => {
    const doc = new jsPDF();
    const tableRows = [];

    // Crea una fila por cada objeto del array de datos
    data.forEach((item, index) => {
      const rowData = [
        index + 1,
        item.titulo,
        item.descripcion,
        item.grupoMuscular,
        item.tipoEntrenamiento,
      ];
      tableRows.push(rowData);
    });

    // Define las columnas de la tabla
    const tableColumns = [
      "#",
      "Título",
      "Descripción",
      "Grupo Muscular",
      "Tipo de Entrenamiento",
    ];
    // Obtiene los datos del usuario

    const response = await obtenerDatosUsuario();
    if (response) {
      const { email, nombre, apellido, peso, edad } = response;
      doc.text(`Nombre del usuario: ${nombre} ${apellido}`, 14, 10);
      doc.text(`Peso: ${peso} kg`, 14, 20);
      doc.text(`Edad: ${edad}`, 14, 30);
      doc.text(`Correo electrónico: ${email}`, 14, 40);
    } else {
      //  Manejar el caso en que no se pudo obtener los datos del usuario
      console.error("No se pudo obtener los datos del usuario");
    }

    //  Agrega la tabla al documento
    doc.autoTable({
      head: [tableColumns],
      body: tableRows,
      bodyStyles: {
        lineWidth: 0.05,
        halign: "justify",
      },
    });

    // Descarga el archivo
    doc.save(`${filename}.pdf`);
  };

  return (
    <Button variant="primary" onClick={handleExportPdf}>
      Descargar
    </Button>
  );
}

export default ExportarApdf;

