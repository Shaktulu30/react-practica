import { useState } from 'react';
import ContadorPresentacional from './ContadorPresentacional';

function ContadorContenedor() {

  const [contador, setContador] = useState(0);

  function incrementar() {
    setContador(contador + 1);
  }

  function decrementar() {
    if (contador > 0) {
    setContador(contador - 1);
    }
  }

  function reiniciar() {
    setContador(0);
  }

  return (
    <ContadorPresentacional
      valor={contador}
      onIncrement={incrementar}
      onDecrement={decrementar}
      onReset={reiniciar}
    />
  );
}

export default ContadorContenedor;