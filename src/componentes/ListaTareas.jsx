import React, { useState } from 'react';
import TareaFormulario from './Formulario';
import '../estilos/ListaTareas.css';
import Tarea from './Tarea';
import Cookies from 'universal-cookie';


function ListaTareas() {

  const cookies = new Cookies();

  const [tareas, setTareas] = useState(cookies.get('lista-tareas'));
  
  const agregarTarea = tarea => {
    if(tarea.texto.trim() !== '') {
      tarea.texto = tarea.texto.trim();
      const tareasActualizadas = [tarea, ...tareas];
      setTareas(tareasActualizadas);
      cookies.set('lista-tareas', tareasActualizadas, {path: '/'});
    }
  };

  const completarTarea = id => {
    const tareasActualizadas = tareas.map(tarea => {
      if (tarea.id === id){
        tarea.completada = !tarea.completada;
      }
      return tarea;
    });
    setTareas(tareasActualizadas);
    cookies.set('lista-tareas', tareasActualizadas, {path: '/'});
  };

  const eliminarTarea = id => {
    const tareasActualizadas = tareas.filter(tarea => tarea.id !== id); //Se filtran las tareas y se agregan al arreglo las tareas que cumplan con la condición
    setTareas(tareasActualizadas);
    cookies.set('lista-tareas', tareasActualizadas, {path: '/'});
  };

  return (
    <>
      <TareaFormulario onSubmit={agregarTarea}/>
      <div className='tareas-lista-contenedor'>
        {
          tareas.map(tarea => 
            <Tarea 
              key={tarea.id}
              id={tarea.id}
              texto={tarea.texto}
              completada={tarea.completada}
              completarTarea={completarTarea}
              eliminarTarea={eliminarTarea} />
          )
        }
      </div>
    </>
  );
}

export default ListaTareas;