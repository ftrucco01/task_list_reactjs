import React, {useState} from "react";
import TaskForm from "./TaskForm";
import '../css/TaskList.css';
import Task from "./Task";
function TaskList()
{
	const [ tasks, setTask ] = useState([]);

	const addTask = (task) => {
		if( task.text.trim() !== '' ){
			const updatedTasks = [ task, ...tasks ];
			setTask(updatedTasks);
		}
  };

	const deleteTask = id => {
		const updatedTasks = tasks.filter( task => task.id !== id);
		setTask( updatedTasks );
	};
	
	const completeTask = id => {
		const updatedTasks = tasks.map(task => {
			if (task.id === id) {
				return { ...task, isCompleted: true };
			}
			return task;
		});
		setTask(updatedTasks);
	};

	return (
			<>
				<TaskForm onSubmit={addTask} />
				<div className="tareas-lista-contenedor">
					{
						tasks.map( (task) =>
							<Task
								id={task.id}
								key={task.id}
								text={task.text}
								isCompleted={task.isCompleted}
								deleteTask={deleteTask}
								completeTask={completeTask}
							/>
						)
					}
				</div>
			</>
	);
}

export default TaskList;