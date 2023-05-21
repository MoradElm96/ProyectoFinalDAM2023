import React, { useState, useEffect, useRef } from "react";
import _ from "lodash";
import jsPDF from "jspdf";
import "jspdf-autotable";
import axios from "axios";

function PlanesEntrenamiento() {
  const [filtro, setFiltro] = useState("bajar-peso");
  const [rutinas, setRutinas] = useState([]);
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");

  // Obtener el objeto de sesión del usuario del almacenamiento local
  const objetoSesion = JSON.parse(localStorage.getItem("UsuarioConectado"));
  const userId = objetoSesion.id; // Obtener el ID del usuario de la sesión

  const URL_US = `${process.env.REACT_APP_API_BASE_URL}/users/${userId}`;

  // Función para obtener los datos del usuario desde el servidor
  const obtenerDatosUsuario = async () => {
    try {
      const response = await axios.get(URL_US);
      const { nombre, apellido } = response.data;
      setNombre(nombre);
      setApellido(apellido);
      // console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error);
      // Manejar el error de alguna manera
      console.log("error en la parte servidora al obtener los datos");
    }
  };

  useEffect(() => {
    obtenerDatosUsuario(); // Obtener los datos del usuario al cargar el componente
  }, []);

  const URL_RUTINAS = `${process.env.REACT_APP_API_BASE_URL}/rutinas/${filtro}`;

  // Función para obtener las rutinas de entrenamiento desde el servidor
  const obtenerRutinas = async (filtro) => {
    try {
      const response = await axios.get(URL_RUTINAS);
      setRutinas(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  // Ejecuta obtenerRutinas al cambiar el filtro
  useEffect(() => {
    obtenerRutinas(filtro);
  }, [filtro]);

  // Manejar el cambio del filtro seleccionado
  const handleFiltroChange = (event) => {
    setFiltro(event.target.value);
  };

  // Agrupar las rutinas por día de la semana usando la librería lodash
  const rutinasPorDiaSemana = _.groupBy(rutinas, "dia_semana");

  const tableRef = useRef(null);

  // Función para exportar las rutinas a un archivo PDF
  const handleExportPDF = () => {
    const pdf = new jsPDF();
    const marginX = 10;
    const marginY = 3;
    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();

    let startY = marginY + 5;
    let nombreImpreso = false; // Variable para controlar si el nombre ya se imprimió en la página actual

    // Recorrer las rutinas por día de la semana
    Object.keys(rutinasPorDiaSemana).forEach((diaSemana, index) => {
      const rutinasData = rutinasPorDiaSemana[diaSemana].map((rutina) => [
        rutina.objetivo,
        rutina.ejercicio,
        rutina.repeticiones,
        rutina.sets,
      ]);

      const tableHeaders = [["Objetivo", "Ejercicio", "Repeticiones", "Sets"]];

      const tableData = tableHeaders.concat(rutinasData);

      const tableHeight = tableData.length * 5;

      if (startY + tableHeight + 10 > pageHeight) {
        pdf.addPage();
        startY = marginY + 5;
        nombreImpreso = false; // Reinicia la variable para la nueva página
      }

      if (index > 0) {
        startY += 15; // Agrega más espacio entre las tablas
      }

      // Imprimir nombre, apellidos y objetivo en la cabecera
      if (!nombreImpreso) {
        const objetivo = rutinasPorDiaSemana[diaSemana][0].objetivo; // Obtiene el objetivo de las rutinas
        const nombreObjetivo = `Usuario: ${nombre} ${apellido} Objetivo: ${objetivo}`; // Genera el nombre del archivo PDF basado en el objetivo
        pdf.text(`${nombreObjetivo}`, marginX, startY + 6); // Agrega el nombre y apellidos en la cabecera
        nombreImpreso = true;
        startY += 10; // Ajusta el valor de separación entre el nombre y el título
      }

      pdf.text(`Rutinas para ${diaSemana}`, marginX, startY + 5);

      pdf.autoTable({
        startY: startY + 7, // Ajusta el valor de separación entre el título y la tabla
        head: tableHeaders,
        body: rutinasData,
        theme: "striped",
        styles: { overflow: "linebreak", columnWidth: "auto" },
      });

      startY += tableHeight + 20;
    });

    const objetivo =
      rutinasPorDiaSemana[Object.keys(rutinasPorDiaSemana)[0]][0].objetivo; // Obtiene el objetivo de las rutinas
    const nombreArchivo = `rutinas_${objetivo}.pdf`; // Genera el nombre del archivo PDF basado en el objetivo
    pdf.save(nombreArchivo);
  };

  return (
    <div className="container text-center">
      <div className="d-flex justify-content-center align-items-center">
        <h2 className="mr-3 mt-2">Selecciona tu objetivo:</h2>
        <div>
          <button
            type="button"
            className="btn btn-outline-secondary mx-2"
            onClick={() =>
              handleFiltroChange({ target: { value: "bajar-peso" } })
            }
          >
            <b>Bajar Peso</b>
          </button>
          <button
            type="button"
            className="btn btn-outline-secondary mx-2"
            onClick={() =>
              handleFiltroChange({ target: { value: "subir-peso" } })
            }
          >
            <b>Subir Peso</b>
          </button>
          <button
            type="button"
            className="btn btn-outline-secondary mx-2"
            onClick={() =>
              handleFiltroChange({ target: { value: "mantenimiento" } })
            }
          >
            <b>Mantenimiento</b>
          </button>
        </div>
      </div>

      <div className="d-flex justify-content-center align-items-center">
        <h4 style={{ marginBottom: "5px" }}>Rutinas entrenamiento semanal</h4>
        <button
          type="button"
          className="btn btn-success"
          onClick={handleExportPDF}
          style={{ fontSize: "13px", padding: "4px 6px" }}
        >
          Exportar a PDF
        </button>
      </div>

      {Object.keys(rutinasPorDiaSemana).map((diaSemana) => (
        <div key={diaSemana}>
          <h5>{diaSemana}</h5>
          <div className="table-responsive" ref={tableRef}>
            <table className="table table-striped table-hover table-sm table-info table-bordered mx-auto">
              <thead>
                <tr>
                  <th>Objetivo</th>
                  <th>Ejercicio</th>
                  <th>Repeticiones</th>
                  <th>Sets</th>
                </tr>
              </thead>
              <tbody>
                {rutinasPorDiaSemana[diaSemana].map((rutina) => (
                  <tr key={rutina.id}>
                    <td>{rutina.objetivo}</td>
                    <td>{rutina.ejercicio}</td>
                    <td>{rutina.repeticiones}</td>
                    <td>{rutina.sets}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PlanesEntrenamiento;
