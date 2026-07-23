function Button(props) {
  return React.createElement("button", { onClick: props.onClick }, props.label);
}

const rootElement = document.getElementById('root');
ReactDOM.createRoot(rootElement).render(
    React.createElement(Button, {
        label: 'Haz Click Aqui',
        onClick: () => alert('¡boton clickeado!')
    })
)
