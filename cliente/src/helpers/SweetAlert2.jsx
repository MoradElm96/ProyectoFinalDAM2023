import Swal from "sweetalert2";

//funcion de sweetalert para mostrar mensaje de error, recibe el mensaje por parametro
export const mostrarMensajeErrorSweet = (mensaje) => {
  Swal.fire({
    icon: 'error',
    title: 'Error',
    text: mensaje,
    confirmButtonColor: '#d33',
    confirmButtonText: 'Ok',
  });
};
//funcion de sweetalert para mostrar mensaje de exito, recibe el mensaje por parametro
export const mostrarMensajeExitoSweet = (mensaje) => {
  Swal.fire({
    icon: 'success',
    title: 'Éxito',
    text: mensaje,
    confirmButtonColor: '#3085d6',
    confirmButtonText: 'Ok',
  });
};

//funcion de sweetalert para mostrar el dato de IMC de mi componente imc, se le pasa el bmi por parametro
export const mostrarIMCSweet = (bmi) => {
  Swal.fire({
    icon: 'info',
    title: 'Indice de masa corporal',
    text: `${bmi}`,
    confirmButtonColor: '#3085d6',
    confirmButtonText: 'Ok',
  });
};
//sweetalert para mensaje de confirmacion, recibe el mensaje y la funcion a realizar
export const mostrarMensajeConfirmacion = (mensaje, funcionConfirmar) => {
    Swal.fire({
      icon: 'question',
      title: 'Confirmar',
      text: mensaje,
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Confirmar',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        funcionConfirmar();
      }
    });
  };
