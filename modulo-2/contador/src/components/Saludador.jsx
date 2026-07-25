import { useState } from "react";

function Saludador() {
    const [saludador, setSaludador] = useState('');
    const manejarCambio = (event) => {
        setSaludador(event.target.value);
    };

    return (
        <form>
            <input type="text" value={saludador} onChange={manejarCambio} />
            <p>Hola, {saludador}</p>
        </form>
    );
}

export default Saludador;

//input controlado