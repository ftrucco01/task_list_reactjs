import './App.css';
import Logo from './components/Logo';
import TaskList from './components/TaskList';

function App() {
  return (
    <div className="aplicacion-tareas">
      <Logo />
      
      <div className='tareas-lista-principal'>
        <h1>Mis Tareas</h1>
        <TaskList/>
      </div>
    </div>
  );
}

export default App;
