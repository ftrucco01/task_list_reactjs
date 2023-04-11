import React from "react";
import '../css/Task.css';
import { AiFillCloseCircle } from 'react-icons/ai';

function Task( {id, text, isCompleted, completeTask, deleteTask} )
{
	return (
			<div className={ (isCompleted) ? 'tarea-contenedor completada': 'tarea-contenedor' }>
					<div 
							className="tarea-texto"
							onClick={() => completeTask(id)}
					>
							{text}
					</div>
					<div 
							className="tarea-contenedor-iconos"
							onClick={() => deleteTask(id)} >
						<AiFillCloseCircle 
							className="tarea-icono"/>
					</div>
			</div>
	);
}

export default Task;