## TEMA 1
1. ¿Porque React es una biblioteca y no un framework? Es biblioteca por que es una caja de herramientas donde nosotros buscamos lo que necesitamos, cuando queramos y podemos manejarla. Un framework es una estructura que te dice como organizar tu proyecto entero.

2. Tenés dos proyectos: el sitio institucional del gimnasio (horarios, dirección, un texto de "quiénes somos") y un panel donde vos y tus clientes ven y actualizan rutinas en tiempo real. ¿En cuál usarías React y por qué? En el segundo, porque React esta hecho para aquellos casos donde se utiliza informacion y hace que la interfaz cambie seguido sea por tiempo real o por el propio uso del usuario.

3. ¿Qué es un componente y qué problema concreto resuelve? Es una pieza reutilizable de interfaz (encapsula 3 cosas, como se ve, como se comporta y que datos maneja). Un componente resuelve dos problemas: reutilización (escribo la estructura una vez y la uso muchas veces con datos distintos) y mantenimiento (si algo falla o cambia, lo toco en un solo lugar y se aplica en todos lados).

## TEMA 2
4. ¿Cuál es la diferencia entre código imperativo y declarativo? Una o dos oraciones, sin ejemplos.
Codigo imperativo, escribo en cada linea instruccion por instruccion de manera detallada, en el declarativo se describe el resultado y deja que el sistema resuelva el procedimiento.

5. Señalá en tu propio código cuál es la parte imperativa y explicá por qué lo es.

  const nuevoElemento = document.createElement("li");
  nuevoElemento.textContent = texto; 

  lista.appendChild(nuevoElemento); //linea 5 6 y 8 codigo imperativo puro

Indico paso a paso en app js como quiero que los elementos se muestren. 

6. Alguien te dice: "el código declarativo es mejor porque es menos código". ¿Es esa la razón principal? Justificá.
No es que sea menos codigo, sino que es mas facil de manejar y mantener. Permite adaptarse ademas a los cambios constantes de la interfaz o la app.

## TEMA 3
7. ¿Por qué manejarClick se pasa sin paréntesis? ¿Qué pasaría si le pusieras manejarClick()?
Si le pongo parentesis ejecuta la funcion y me muestra el resultado de la misma. Va sin parentesis porque es la funcion que deberia ejecutar, queda escuchando esperando a que el evento pase. 

8. Nombrá las dos líneas de tu código que desaparecen en la versión de React y explicá qué pasó con su trabajo. ¿Dejó de hacerse?
No hay getElementById. No hay addEventListener. Esas dos líneas en React no existen.
No dejo de hacerse, en el codigo se declara el evento sobre el boton, no tiene los pasos de a donde ir y con que conectar. En este caso el trabajo lo hace React

9. Mirando tu app.js: ¿es código imperativo o declarativo? Justificá con una línea concreta del archivo.
const boton = document.getElementById("miboton"); ==> es imperativo, ya con esta linea le indico a que elemento tiene que buscar y despues en otras lineas que funcion ejecutar cuando ocurra ese evento. 

## TEMA 4
10. ¿Qué es el Virtual DOM y por qué existe? Dos oraciones.
El Virtual DOM es una representación liviana del DOM real que React mantiene en memoria. Existe porque modificar el DOM real es costoso —obliga al navegador a recalcular y redibujar—, y trabajar sobre una copia permite calcular primero el mínimo de cambios necesarios y recién después aplicarlos.

11. Explicá los cuatro pasos de la reconciliación con tus palabras. Sin mirar arriba.
-1 Cambia el estado o propiedades del componente: Ocurre algun cambio, por ejemplo el cliente agrega un producto al carrito.
-2 React crea un nuevo DOM virtual: Como se deberia ver todo con ese cambio que ocurrio.
-3 Comparacion: React Compara Virtual DOM nuevo con el que tiene y busca diferencias. Esto es diffing.
-4 Aplica solo esos cambios al DOM real. 

12. Un compañero te dice: "React es rápido porque el Virtual DOM es más rápido que el DOM". ¿Qué le corregirías?
No es que sea rapido sino que react te brinda actualizaciones rapidas y no te cuesta esfuerzo de programacion (es decir escribir codigo manual) y te permite escribirlo a vos de forma más simple. 

## Práctica TEMA 5

Todavía no podés ejecutar nada —eso llega en el Tema 7—, así que esto es un ejercicio de escritura. Hacelo en tu apuntes.md, en un bloque de código.

Escribí un componente llamado Producto que reciba dos props, nombre y precio, y devuelva un <div> con el nombre en un <h2> y el precio en un <p>.

Abajo, escribí tres líneas usando ese componente con tres productos distintos.

Guiate por el ejemplo de Saludo. No lo copies: fijate qué partes cambian y cuáles no.

1. Respuesta

function Producto (props) {
    return (
        <div>
        <h2>{props.nombre}</h2>
        <p>{props.precio}</p>
        </div>); // todo lo que esta dentro es JSX todo el div
}
// uso
<Producto nombre="Coca Cola" precio={5} />
<Producto nombre="Fanta" precio={4} />
<Producto nombre="Sprite" precio={4} />

13. ¿Podés explicar qué es un componente en React?
Un componente de react es una unidad reutilizable que tiene estructura (lo visible), comportamiento (una respuesta) y en ciertos casos estado (datos internos) de una parte de la interfaz. Cada componente tiene una responsibilidad clara y se comunica con otros. 

14. ¿Sabés cómo se usa JSX para definir la interfaz?
JSX es sintaxis parecida al html que va dentro de un return y sirve para describir como se ve el componente. Es javascript que react interpreta. 

15. ¿Podés describir cómo un componente recibe datos mediante props?
El componente padre le pasa los datos como atributos al usarlo, esos datos llegan como parámetro de la función, y adentro se acceden con props. function Producto (props) 1era parte, 2da parte todo lo que esta entre {} tercera parte el //uso

## Dos reglas para anotar aparte, porque son las que te tropezaron hoy:

Un componente devuelve un solo elemento. Si hay varios, van adentro de un contenedor.
En JSX: comillas para texto, llaves para JavaScript. Y className, no class.

## TEMA 6
Volvé a tu componente Producto del tema anterior y ampliá el ejercicio en apuntes.md.

Parte A. Escribí un componente BotonComprar que reciba una prop llamada onComprar y devuelva un <button> que la ejecute al hacer clic. El texto del botón que diga "Comprar".

Parte B. Modificá Producto para que, además del nombre y el precio, muestre adentro un BotonComprar. Por ahora pasale una función definida dentro de Producto que haga un alert con el nombre del producto.

Guiate por el ejemplo Padre/Hijo. Fijate qué rol cumple cada uno de tus dos componentes: cuál es el padre y cuál el hijo.

1. Respuesta

function BotonComprar(props) {
  return (
    <button onClick={props.onComprar}>
      Comprar
    </button>
  );
}

function Producto(props) {

  function comprar() {
    alert('Compraste ' + props.nombre);
  }

  return (
    <div>
      <h2>{props.nombre}</h2>
      <p>{props.precio}</p>
      <BotonComprar onComprar={comprar} />
    </div>
  );
}

// uso
<Producto nombre="Coca Cola" precio={5} />
<Producto nombre="Fanta" precio={4} />
<Producto nombre="Sprite" precio={4} />

function BotonComprar (props) {
  return (
    <button onClick={props.onComprar}>
    Comprar
    </button>
  );
}


function Padre() {

  function saludar() {                    // 1. define la función
    alert('Hola desde el componente padre');
  }

  return <Hijo onClick={saludar} />;      // 2. se la pasa al hijo
}

## TEMA 8 y 9

Node permite ejecutar las herramientas que construyen y sirven tu aplicación. Tu app corre en el navegador; las herramientas corren sobre Node.
NPM permite la gestion de dependencias a traves de package.json, es el que registra datos puntuales como la version usada, ya a traves del comando npm install la persona que vea mi repo puede instalar el node_modules con los elementos exactos que yo use. 
Console — mensajes y errores del código
Elements — el DOM real, tal como quedó en la página
Components — el árbol de componentes React y los props de cada uno

## Evaluacion Modulo 1

1. Explicá la diferencia entre código imperativo y declarativo, sin dar ejemplos de código.
Codigo imperativo son las instrucciones detalladas paso a paso el como para que te devuelva el resultado, codigo declarativo, describis lo que queres y el sistema resuelve el procedimiento. 

2. ¿React es una biblioteca o un framework? Justificá.
React es una biblioteca considera un caja de herramientas donde nosotros sacamos lo que necesitamos cuando queremos y lo manipulamos. 

3. Durante la reconciliación, ¿qué compara React exactamente? Sé preciso.
React compara virtual DOM que tiene con el virtual DOM nuevo, analizando los cambios que hay.

4. ¿Por qué el nombre de un componente tiene que empezar con mayúscula?
Tiene que estar en mayuscula porque es asi como se declara el Componente en React, sino js lo interpreta como etiqueta de HTML y no lo ejecuta. 

5. Tenés <Boton onClick={saludar()} />. ¿Qué va a pasar cuando cargue la página y qué va a pasar cuando el usuario haga clic? Explicá por qué.
Con parentesis la funcion que pido se ejecuta ni bien cargue la pagina y muestra su resultado pero saludar no devuelve nada queda con undefined y no devuelve nada si se clickea.

6. ¿Qué es JSX y por qué el navegador no puede ejecutarlo directamente?
JSX no es Javascript, el navegador solo entiende este ultimo y es por ello que JSX necesita traductor se traduce en llamadas a traves de babel haciendo traspiling (proceso de traduccion)

7. Si tu aplicación React corre en el navegador, ¿para qué necesitás Node.js?
Necesito Node.js porque la aplicacion se sirve de las herramientas que corre en el para funcionar.

8. Tu repositorio no incluye node_modules. ¿Cómo hace otra persona que lo clona para terminar con las mismas bibliotecas que vos?
Lo que hace la otra persona cuando clona mi repo es utilizar npm install (siempre en cuando este package.json) para instalar todo node_modules que utilice en la app

## Correcion de Errores
function Boton(props) {
  return (
    <button onClick={props.onBorrar}>
      Borrar
    </button>
  );
}

function Tarjeta(props) {

  function borrar() {
    alert('Borraste ' + props.titulo);
  }

  return (
    <div>
    <h3>{props.titulo}</h3>
    <Boton onBorrar={borrar} />
    </div>
  );
} 

## Escribir function Alumno
function Alumno(props) {
    return (
        <div>
        <h2>{props.nombre}</h2>
        <p>{props.edad}</p>
        </div>
    );
}

// uso
<Alumno nombre="Juan" edad={16} />
<Alumno nombre="Juana" edad={17} />