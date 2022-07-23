import React from "react";
import "../HojasDeEstilos/Contador.css"

function Contador({ numeroClick }) {
    return(
        <div className="contador">
            {numeroClick}
        </div>
    );
}
export default Contador;