import React from 'react';

function TareaFormulario({ agregarTarea, nuevaTarea, handleInput, deshabilitado }) {
  return (
    <>                                                  
                                                                {/* FORMULARIO */}
      <div className='container'>
        <h1>Agenda</h1>
        <form onSubmit={agregarTarea}>
                                                                {/* INPUT DE NOMBRE */}
          <label htmlFor='nombre'>Nombre de la tarea:</label>
          <input
            type='text'
            id='nombre'
            name='nombre'
            placeholder='Agregue el nombre de la tarea.'
            value={nuevaTarea.nombre}
            onChange={handleInput}
          />
                                                                {/* INPUT DE DESCRIPCION */}
          <label htmlFor='descripcion'>Descripción de la tarea:</label>
          <input
            type='text'
            id='descripcion'
            name='descripcion'
            placeholder='Agregue la descripcion de la tarea.'
            value={nuevaTarea.descripcion}
            onChange={handleInput}
          />
                                                                {/* FECHA DE INICIO */}
          <label htmlFor='fechaInicio'>Fecha de inicio:</label>                                               
          <input
            type='date'
            id='fechaInicio'
            name='fechaInicio'
            placeholder='Fecha inicio.'
            value={nuevaTarea.fechaInicio}
            onChange={handleInput}
          />
                                                                {/* FECHA DE CIERRE */}
          <label htmlFor='fechaCierre'>Fecha de cierre:</label>
          <input
            type='date'
            id='fechaCierre'
            name='fechaCierre'
            placeholder='Fecha limite'
            value={nuevaTarea.fechaCierre}
            onChange={handleInput}
          />
                                                                {/* CREADOR */}
          <label htmlFor='creador'>Nombre y apellido del creador:</label>
          <input
            type='text'
            id='creador'
            name='creador'
            value={nuevaTarea.creador}
            onChange={handleInput}
          />
                                                                {/*BOTON DE AGREGAR*/}
          <button type='submit' className='btn btn-success' disabled={deshabilitado}>
            Agregar tarea
          </button>
          <button type='button' className='btn btn-success' onClick={agregarTarea} disabled={!deshabilitado}>
            Aceptar
          </button>
        </form>
      </div>
    </>
  );
}

export default TareaFormulario;
