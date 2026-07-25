## Biblioteca 
— código que vos llamás y controlás.

## Framework 
— estructura que te llama a vos y define cómo organizar el proyecto.

## Inversión de control 
— el nombre técnico de esa diferencia.

## Interfaz de usuario (UI) 
— la parte de la aplicación que el usuario ve y toca.

## Componente 
— pieza reutilizable de interfaz; encapsula apariencia, comportamiento y datos.

## Imperativo
Escribir instrucción por instrucción el CÓMO llegar a un resultado.

## Declarativo
Describir el QUÉ se quiere obtener y dejar que el sistema resuelva el cómo.

## DOM
Estructura de la página que el navegador arma y que se puede modificar desde JS.

## Evento 
— algo que ocurre en la interfaz y el navegador detecta (clic, tecla, movimiento del mouse).

## Event handler / manejador de eventos 
— la función que se ejecuta como respuesta a un evento.

## addEventListener 
— método que asocia un tipo de evento de un elemento con una función.

## Callback (extra, no del curso) 
— función que se le pasa a otra para que la ejecute más tarde.

## Disparar un evento 
— provocarlo. Lo hace el usuario o el navegador, no tu código.

## Escuchar un evento 
— quedar a la espera de que ocurra para ejecutar una función. Eso es lo que hace addEventListener.

## Virtual DOM
- Representación liviana del DOM real que React mantiene en memoria. Existe porque modificar el DOM real es costoso: obliga al navegador a recalcular posiciones y redibujar. Trabajar sobre la copia permite averiguar primero el mínimo de cambios necesarios.

## Reconciliación
- Proceso por el cual React compara el Virtual DOM nuevo con el anterior para determinar qué partes del DOM real necesitan actualizarse.

## Componente funcional 
— función de JavaScript que retorna JSX. Su nombre va en mayúscula para que React lo distinga de una etiqueta HTML.
## JSX 
— sintaxis parecida a HTML que se escribe dentro de JavaScript para describir la interfaz. No es HTML: React la interpreta.
## Props 
— datos que un componente recibe de su padre. Son como los parámetros de una función, pero para componentes.
## Componente padre / hijo 
— el que contiene y el contenido. Los datos viajan de padre a hijo mediante props.
Árbol de componentes — la jerarquía completa de una aplicación React.

Glosario del Tema 6

## PascalCase 
— convención de nombres donde cada palabra empieza con mayúscula y no hay separadores: BotonComprar, ProductList. Se usa para componentes y para sus archivos.

## Responsabilidad única 
— cada componente hace una sola cosa.

## Función como prop 
— un padre puede pasarle una función a un hijo, no solo datos. El hijo la ejecuta sin saber qué hace.

## Y la regla que te trabó hoy, que conviene anotar con esas palabras:

En un elemento HTML el nombre del evento lo impone el navegador (onClick). En un componente propio el nombre de la prop lo elegís vos (onComprar).

Glosario del Tema 7

## React.createElement(tipo, props, contenido) 
— crea un elemento de React. Es en lo que se convierte el JSX.

## ReactDOM.createRoot(elemento).render(...) 
— le entrega un nodo del DOM a React para que lo gestione.
Función flecha — () => { ... }, forma corta de escribir una función, útil para definirla en el lugar.

## Babel / transpiling (adelanto del Módulo 2) 
— la herramienta y el proceso que traducen JSX a JavaScript que el navegador entiende.

## MODULO 2

1. JSX (JavaScript XML) 
— extensión de la sintaxis de JavaScript para escribir estructuras similares a HTML. Se transpila a llamadas a React.createElement.
2. Azúcar sintáctico 
— sintaxis más cómoda de escribir que no agrega capacidades nuevas; por debajo produce lo mismo.
3. Children 
— los elementos o el texto que van dentro de una etiqueta JSX.
4. Expresión 
— algo que produce un valor. Es lo único que puede ir dentro de las llaves {} en JSX.
htmlFor — el reemplazo de for en JSX, porque for es palabra reservada.

## TEMA 2
5. Componente presentacional 
— solo se ocupa de mostrar. Recibe datos y funciones por props, no maneja estado ni lógica.
6. Componente contenedor 
— maneja lógica, estado y acciones. Consigue los datos y se los pasa a los presentacionales.
7. Función pura 
— con la misma entrada devuelve siempre lo mismo y no modifica nada externo.

Y el criterio, que es más útil que las definiciones:

¿Consigue los datos o los recibe ya listos?

## TEMA 3
8. Estado local 
— datos que un componente mantiene y puede modificar. A diferencia de los props, no vienen de afuera y sí se pueden cambiar.
9. Hook 
— función especial de React que agrega capacidades a un componente funcional. useState es el primero que ves.
10. useState 
— devuelve el valor actual y una función para actualizarlo. Actualizar provoca un re-render.
11. Destructuring de array 
— const [a, b] = array, saca elementos de un array y les da nombre en una línea.
12. Operador ternario 
— condición ? a : b. Condicional que produce un valor, por eso sirve dentro de JSX.
13. Re-render 
— React vuelve a ejecutar el componente y actualiza lo que haya cambiado.

## TEMA 6&5
14. Transpiling 
— transformar código moderno a una versión que los navegadores entiendan.
15. Babel 
— la herramienta que lo hace. Convierte JSX a createElement y ES6+ a ES5.
16. ES5 / ES6 
— versiones del estándar ECMAScript. ES6 (2015) trajo const, let, flechas, destructuring y módulos.
17. Vite 
— servidor de desarrollo y build tool.
18. HMR 
— actualización del módulo modificado sin recargar la página entera.
19. Minificación 
— comprimir el código para producción quitando espacios y acortando nombres.

## TEMA 7
20. Retrocompatibilidad 
— que el código funcione en navegadores o versiones antiguas.
21. Polyfill 
— código que implementa una funcionalidad que el entorno no tiene.
22. API 
— una herramienta que el entorno provee (Promise, fetch). Existe o no existe.
23. Sintaxis 
— la forma de escribir. Se puede reescribir de otra manera equivalente.
24. core-js 
— librería de polyfills.

## TEMA 8
25. Array.prototype 
— el lugar compartido donde viven los métodos de todos los arrays. Agregar algo ahí lo habilita para todos.
26. this 
— dentro de un método, el objeto sobre el que se llamó (el que está antes del punto).
27. Guarda 
— el if (!...) que instala el polyfill solo si el método no existe ya.

## MODULO 3 TEMA 3
La distinción para el glosario
	           useState	                    useRef
Al cambiar	 re-renderiza	            no re-renderiza

Para qué    datos que se ven	       valores que se recuerdan pero no se muestran, o referencias a elementos del DOM

Cómo se lee	    nombre	                    ref.current

Glosario del Tema 3
1. Input controlado 
— un campo cuyo valor lo manda el estado de React (value={estado}), y cada cambio actualiza ese estado.
2. onChange 
— evento que se dispara cuando cambia el contenido de un campo.
3. evento.target.value 
— lo que el usuario escribió en el elemento que disparó el evento.
4. useRef 
— hook que guarda un valor persistente sin re-renderizar. Se accede con .current. Su uso típico es referenciar un elemento del DOM.
