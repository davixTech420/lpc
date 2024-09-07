const reglasDeValidacion = {
    usuarios: {
      nombre: (value) => /^[a-zA-ZáéíóúÁÉÍÓÚñÑ ]+$/.test(value),
      apellido: (value) => /^[a-zA-ZáéíóúÁÉÍÓÚñÑ ]+$/.test(value),
      identificacion: (value) => /^[0-9]+$/.test(value),
      telefono: (value) => /^[0-9]{10}$/.test(value),
      password: (value) => /^.{6,}$/.test(value),
    },
    pedidos: {
      nombre: (value) => /^[a-zA-ZáéíóúÁÉÍÓÚñÑ ]+$/.test(value),
      empleadosRequeridos: (value) => /^[0-9]{1,4}$/.test(value),
      cuposDisponibles:(value) => !!value,
      imagen: (value) => !!value,
      salaId: (value) => !!value,
      horaInicio: (value) => /^[0-9]{2}:[0-9]{2}$/.test(value),
      horaFin: (value) => /^[0-9]{2}:[0-9]{2}$/.test(value),
    },
  };
  
 export default function validarFormulario(formData, tabla) {
   
    const reglas = reglasDeValidacion[tabla];
    if (!reglas) {
      return "Tabla no encontrada";
    }
  
    const errores = [];
    Object.keys(reglas).forEach((campo) => {
      const valor = formData[campo];
      if (!reglas[campo](valor)) {
        errores.push(`Error en el campo ${campo}`);
      }
    });
  
    return errores.length > 0 ? errores : null;
  }