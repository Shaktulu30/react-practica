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