function ContadorPresentacional (props) {
    return (
        <div>
            <h2>Contador: {props.valor}</h2>
            <button onClick={props.onIncrement}>Incrementar</button>
            <button onClick={props.onDecrement}>Decrementar</button>
            <button onClick={props.onReset}>Reseteo</button>

        </div>
    )
}
export default ContadorPresentacional;