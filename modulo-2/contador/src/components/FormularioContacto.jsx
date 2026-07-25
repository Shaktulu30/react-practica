import { useState, useRef } from "react";

function FormularioContacto() {
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const nombreRef = useRef(null);
    const manejarCambio = (event) => {
        setNombre(event.target.value);
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        if (nombre.trim() === '') {
            setError('El nombre es obligatorio');
            nombreRef.current.focus();
            return;
        }
        setError('');
        alert('Nombre: ' + nombre + ' Email: ' + email);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={nombre} onChange={manejarCambio} ref={nombreRef} />
            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
            <button type="submit">Enviar</button>
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </form>
    );
}

export default FormularioContacto;

//input controlado de cuestionario