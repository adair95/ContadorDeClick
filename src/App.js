import './App.css';
import freecodecamp from "../src/Imagenes/FreeCodeCamp_logo.svg.png";
import Boton  from './Componentes/Boton';
import Contador from './Componentes/Contador';
import { useState } from 'react';

function App() {

  const [numeroClick, setNumeroClick] = useState(0);

  const manejadorDeClick = () => {
   setNumeroClick(numeroClick + 1);
  }

  const reiniciarContador = () => {
    setNumeroClick(0);
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
           <Contador 
              numeroClick = {numeroClick}      
            />
            <Boton
              texto = "Click"
              esBotonDeClic = {true}
              manejarClick = {manejadorDeClick}
            />
            <Boton
              texto = "Reiniciar"
              esBotonDeClic = {false}
              manejarClick = {reiniciarContador}
            />
            
        </div>
    </div>
  );
}

export default App;
