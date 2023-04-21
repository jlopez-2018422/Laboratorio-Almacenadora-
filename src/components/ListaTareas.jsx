
import React, { useState } from 'react';
import TareaFormulario from './TareaFormulario';
import TareaLista from './TareaLista';

function ListaTareas() {
  const [tareas, setTareas] = useState([]);
  const [nuevaTarea, setNuevaTarea] = useState({
    id: null, // Agregar un campo id para identificar la tarea que se está editando
    nombre: '',
    descripcion: '',
    fechaInicio: '',
    fechaCierre: '',
    estado: 'incompleta',
    creador: '',
  });

  const [tareaEditando, setTareaEditando] = useState(null); // Variable de estado para indicar si se está editando una tarea

  const agregarTarea = (e) => {
    e.preventDefault();
    if (nuevaTarea.id !== null) {
      // Si se está editando una tarea, buscarla por su id y actualizar sus propiedades
      setTareas(
        tareas.map((tarea) => {
          if (tarea.id === nuevaTarea.id) {
            return { ...tarea, ...nuevaTarea };
          }
          return tarea;
        })
      );
    } else {
      // Si no se está editando ninguna tarea, agregar una nueva tarea
      setTareas([...tareas, { ...nuevaTarea, id: tareas.length }]);
    }
    // Reiniciar el objeto nuevaTarea
    setNuevaTarea({
      id: null,
      nombre: '',
      descripcion: '',
      fechaInicio: '',
      fechaCierre: '',
      estado: 'incompleta',
      creador: '',
    });
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setNuevaTarea({ ...nuevaTarea, [name]: value });
  };


                                                                // FUNCION PARA ELIMINAR TAREA
  const eliminarTarea = (id) => {
    setTareas(tareas.filter((tarea, index) => index !== id));
  };
                                                                // FUNCION PARA EDITAR TAREA
  const editarTarea = (id, tarea) => {
    setNuevaTarea({ ...tarea, id }); // Actualizar el objeto nuevaTarea con los valores de la tarea que se va a editar
    setTareaEditando(id); // Indicar que se está editando una tarea
  };

                                                                //FUNCION PARA completar
  function completarTarea(id) {
    const nuevasTareas = tareas.map((tarea) => {
      if (tarea.id === id) {
        return { ...tarea, completada: true };
      } else {
        return tarea;
      }
    });
    setTareas(nuevasTareas);
  }

  return (
    <div>
      <TareaFormulario
        agregarTarea={agregarTarea}
        nuevaTarea={nuevaTarea}
        handleInput={handleInput}
      />
      <TareaLista
        tareas={tareas}
        eliminarTarea={eliminarTarea}
        editarTarea={editarTarea}
        completarTarea={completarTarea}
        deshabilitado={tareaEditando !== null}
      />
    </div>
  );
}

export default ListaTareas;
