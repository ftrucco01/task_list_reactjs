import React, {useState} from "react";
import '../css/TaskForm.css';

import { v4 as uuidv4 } from 'uuid';

function TaskForm(props)
{
  const [ input, setInput ] = useState([]);
  const handleFormOnChange = e => {
    setInput(e.target.value);
  };

  const handleFormOnSubmit = e => {
    e.preventDefault();

    const newTask = {
      id: uuidv4(),
      text: input,
      isCompleted: false
    };

    props.onSubmit(newTask);
  }
  return (
      <form onSubmit={handleFormOnSubmit} className="tarea-formulario">
          <input 
            className="tarea-input" 
            type="text" 
            placeholder="Escribe una tarea"
            onChange={handleFormOnChange}
            />
            <button className="tarea-boton">
              Agregar Tarea
            </button>
      </form>
  );
}

export default TaskForm;