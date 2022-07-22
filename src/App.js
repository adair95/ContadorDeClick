import './App.css';
import freecodecamp from "../src/Imagenes/FreeCodeCamp_logo.svg.png";
import Boton  from './Componentes/Boton';
function App() {

  const manejarClic = () => {
    console.log("click");
  }

  return (
    <div className="App">
      <div className="freecodecamp-logo-contador">
        <img 
          className="freecodecamp-logo"
          src = {freecodecamp}
          alt="Logo de freecodecamp" /> 
      </div>
        <div className = "contenedor-principal">
            <Boton
              texto = "Click"
              esBotonDeClic = {true}
              manejarClick = {manejarClic}
            />
            <Boton
            texto = "Reiniciar"
            esBotonDeClic = {false}
            manejarClick = {manejarClic}
            />
        </div>
    </div>
  );
}

export default App;
