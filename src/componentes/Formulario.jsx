import React, { useState } from 'react';
import '../estilos/Formulario.css';
import { v4 as uuidv4 } from 'uuid';

function TareaFormulario(props) {

  const [input, setInput] = useState('');


  const manejarCambio = evt => {
    setInput(evt.target.value);
  }

  const manejarEnvio = evt => {
    evt.preventDefault();
    const tareaNueva = {
      id: uuidv4(),
      texto: input,
      completada: false
    };

    props.onSubmit(tareaNueva);
  };

  return (  
    <form 
      className='tarea-formulario' 
      onSubmit={manejarEnvio}>
      <input 
        className='tarea-input'
        type='text'
        placeholder='Escribe aqui tu tarea'
        name='texto'
        onChange={manejarCambio}
        required
      />
      <button className='tarea-boton'>Agregar Tarea</button>
    </form>
  );
}

export default TareaFormulario;