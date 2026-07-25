import Card from './components/Card';
import ContadorContenedor from "./components/ContadorContenedor";

function App() {
  return (
    <div>
      <h1>Mi aplicación con contador</h1>
      <ContadorContenedor />
      <Card title="PrimerCard" subtitle="Subtitulo">
        <p>Primer Parrafo</p>
        <p>Segundo Parrafo</p>
        <button>Un boton</button>
      </Card>
    </div>
  );
}

export default App;