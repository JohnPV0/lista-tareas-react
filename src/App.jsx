import logo from './logo.svg';
import './App.css';
import ListaTareas from './componentes/ListaTareas';

function App() {

  return (
    <div className='aplicacion-tareas'>
      <div className='logo-contenedor'>
        <img 
          src={logo} 
          className='logo' />
      </div>
      <div className='tareas-lista-principal'>
        <h1>Mis tareas</h1>
          <ListaTareas />
      </div>
    </div>
  );
}

export default App;
