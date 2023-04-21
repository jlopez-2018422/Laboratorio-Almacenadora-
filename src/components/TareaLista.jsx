import React from 'react';
import './lista.css'

function TareaLista({ tareas, eliminarTarea, editarTarea, completarTarea }) {
    return (
        <>
            <div className='container'>
                <div className="card" >
                    <div className="card-body">
                        {tareas.map((tarea, index) => (
                            <div className="list-item" key={index}  >
                                                                    {/* DATOS DE TAREA */}
                                <p
                                    style={{
                                        textDecoration: tarea.completada ? 'line-through' : 'none',
                                    }}
                                >
                                                                    {/* NOMBRE */}
                                    Nombre: {tarea.nombre}
                                </p>
                                <p
                                    style={{
                                        textDecoration: tarea.completada ? 'line-through' : 'none',
                                    }}
                                >
                                                                    {/* DESCRIPCION */}
                                    Descripción: {tarea.descripcion}
                                </p>
                                <p
                                    style={{
                                        textDecoration: tarea.completada ? 'line-through' : 'none',
                                    }}
                                >
                                                                    {/* FECHA DE INICIO */}
                                    Fecha de inicio: {tarea.fechaInicio}
                                </p>
                                <p
                                    style={{
                                        textDecoration: tarea.completada ? 'line-through' : 'none',
                                    }}
                                >
                                                                     {/* FECHA DE CIERRE */}
                                    Fecha de cierre: {tarea.fechaCierre}
                                </p>
                                <p
                                    style={{
                                        textDecoration: tarea.completada ? 'line-through' : 'none',
                                    }}
                                >
                                                                    {/* ESTADO */}
                                    Estado: {tarea.estado}
                                </p>
                                <p
                                    style={{
                                        textDecoration: tarea.completada ? 'line-through' : 'none',
                                    }}
                                >
                                                                     {/* CREADOR */}
                                    Creador: {tarea.creador}
                                </p>
                                                                     {/* BOTON ELIMINAR */}
                                <button className="eliminar" onClick={() => eliminarTarea(index)}>Eliminar</button>
                                                                     {/* BOTON EDITAR */}
                                <button className="editar" onClick={() => editarTarea(index, tarea.descripcion)}>Editar</button>
                                                                     {/* BOTON PARA COMPLETAR */}
                                {!tarea.completada && (
                                    <button className="completar" onClick={() => completarTarea(tarea.id)}>
                                        Completar tarea
                                    </button>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default TareaLista;