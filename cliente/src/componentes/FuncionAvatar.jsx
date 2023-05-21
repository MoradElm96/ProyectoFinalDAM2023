import Avatar from "react-avatar";

// El componente UserAvatar recibe una prop llamada "email"
function UserAvatar({ email }) {
  // Obtener las iniciales del email del usuario
  const iniciales = email ? email.trim().split("@")[0].substring(0, 2) : null;

  // Renderizar el componente Avatar con las propiedades configuradas
  return (
    <Avatar
      name={iniciales} // Establecer las iniciales del usuario como el nombre del Avatar
      size="32" // Establecer el tamaño del Avatar como 32
      round={true} // Establecer el Avatar como redondeado
      style={{ marginRight: "10px" }} // Establecer un estilo para el margen derecho del Avatar
    />
  );
}

export default UserAvatar;
