import axios from "axios";
import React, { useEffect, useState } from "react";
import "../css/administracion.css";
import {
  mostrarMensajeConfirmacion,
  mostrarMensajeErrorSweet,
} from "../helpers/SweetAlert2";

function Administracion() {
  const [users, setUsers] = useState([]); // Estado para almacenar la lista de usuarios

  const [error, setError] = useState(null); // Estado para almacenar el error en caso de que ocurra
  const [selectedUser, setSelectedUser] = useState(null); // Estado para almacenar el usuario seleccionado
  const [rol, setRol] = useState(""); // Estado para almacenar el rol

  const URL_US = `${process.env.REACT_APP_API_BASE_URL}/users/`; // URL base para las solicitudes a la API

  const obtenerUsuarios = async () => {
    try {
      const response = await axios.get(URL_US); // Realiza una solicitud GET a la URL_US

      const { data } = response;
      setUsers(data); // Actualiza el estado users con los datos de los usuarios obtenidos

      // Recorre el array de usuarios para verificar si es administrador
      const usuariosAdmin = response.data.map((user) => ({
        ...user,
        isAdmin: user.rol === 1,
      }));

      setUsers(usuariosAdmin); // Actualiza el estado users con los usuarios modificados que incluyen la propiedad isAdmin
    } catch (error) {
      setError(error.response.data.message); // En caso de error, establece el estado error con el mensaje de error recibido
    }
  };

  useEffect(() => {
    obtenerUsuarios(); // Se ejecuta al cargar el componente para obtener la lista de usuarios
  }, []);

  const URL_USid = `${process.env.REACT_APP_API_BASE_URL}/users/`; // URL base para las solicitudes de eliminación de usuarios

  const deleteUser = async (id) => {
    try {
      await axios.delete(URL_USid + `${id}`); // Realiza una solicitud DELETE a la URL_USid con el ID del usuario a eliminar
      setUsers(users.filter((user) => user.id !== id)); // Actualiza el estado users eliminando el usuario con el ID especificado
    } catch (error) {
      setError(error.response.data.message); // En caso de error, establece el estado error con el mensaje de error recibido
    }
  };

  const handleDeleteUser = async (id) => {
    const userToDelete = users.find((user) => user.id === id); // Busca el usuario a eliminar en la lista de usuarios

    if (userToDelete.isAdmin) {
      mostrarMensajeErrorSweet(
        "No puedes eliminar tu cuenta, eres el administrador"
      ); // Muestra un mensaje de error si se intenta eliminar una cuenta de administrador
    } else {
      mostrarMensajeConfirmacion(
        "¿Estás seguro de que quieres eliminar al usuario?",
        async () => {
          await deleteUser(id); // Muestra un mensaje de confirmación y, si se confirma, elimina el usuario llamando a la función deleteUser
        }
      );
    }
  };

  // Función para editar un usuario
  const handleEditUser = (user) => {
    setSelectedUser(user);
    setRol(user.rol);
  };

  // Función para actualizar el usuario con el nuevo rol
  const updateRolUser = async (id, updatedData) => {
    const URL_UPDATE = `${process.env.REACT_APP_API_BASE_URL}/users/update/${id}`;

    try {
      const response = await axios.post(URL_UPDATE, updatedData);
      return response.data;
    } catch (error) {
      throw new Error("Error al actualizar el usuario");
    }
  };

  // Función para actualizar el rol de un usuario
  const handleUpdateRol = async (id) => {
    try {
      // Realizar la llamada a la API para actualizar el usuario con el nuevo rol
      mostrarMensajeConfirmacion(
        "¿Estás seguro de que quieres actulizar el rol?",

        async () => {
          await updateRolUser(id, { rol: rol });
          // Recargar la página
          window.location.reload();
        }
      );
      // Actualizar el estado de los usuarios con el nuevo rol
      setUsers((prevUsers) =>
        prevUsers.map((user) => (user.id === id ? { ...user, rol: rol } : user))
      );

      // Limpiar el estado seleccionado
      setSelectedUser(null);
      setRol("");
    } catch (error) {
      // Manejar el error en caso de que ocurra
      console.error("Error al actualizar el usuario:", error);
      mostrarMensajeErrorSweet("Error al actualizar rol");
    }
  };

  return (
    <div className="tablausuarios-container">
      <div className="text-center">
        <h1>Usuarios</h1>
        <table className="tablausuarios-table">
          <thead className="tablausuarios-thead">
            <tr>
              <th scope="col">Nombre</th>
              <th scope="col">Apellido</th>
              <th scope="col">Edad</th>
              <th scope="col">Peso</th>
              <th scope="col">Email</th>
              <th scope="col">Rol</th>
              <th scope="col">Eliminar</th>
              <th scope="col">Cambiar rol</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td className="tablausuarios-td">{user.nombre}</td>
                <td className="tablausuarios-td">{user.apellido}</td>
                <td className="tablausuarios-td">{user.edad}</td>
                <td className="tablausuarios-td">{user.peso}</td>
                <td className="tablausuarios-td">{user.email}</td>
                <td className="tablausuarios-td">{user.rol}</td>
                <td className="tablausuarios-td">
                  <button
                    type="button"
                    className="tablausuarios-btn-eliminar btn btn-danger"
                    onClick={() => handleDeleteUser(user.id)}
                  >
                    Eliminar
                  </button>
                </td>
                <td className="tablausuarios-td">
                  {selectedUser && selectedUser.id === user.id ? (
                    <>
                      <select
                        value={rol}
                        onChange={(e) => setRol(e.target.value)}
                      >
                        <option value="">Seleccionar rol</option>
                        <option value="1">Admin</option>
                        <option value="2">Normal</option>
                      </select>
                      <button
                        type="button"
                        className="tablausuarios-btn-actualizar btn btn-primary"
                        onClick={() => handleUpdateRol(user.id)}
                      >
                        Actualizar
                      </button>
                    </>
                  ) : (
                    <button
                      type="button"
                      className="tablausuarios-btn-editar btn btn-warning"
                      onClick={() => handleEditUser(user)}
                    >
                      Editar
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Administracion;
