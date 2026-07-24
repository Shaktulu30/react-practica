# Checklist de revisión

Antes de dar un código por terminado, cinco pasadas.
Una regla por pasada. No busques "algo raro": buscá UNA cosa.
si algo falla, consola primero. Si no hay error pero el comportamiento está mal, checklist.

## 1. Mayúsculas
- [ ] Cada componente empieza con mayúscula, donde se define y donde se usa
- [ ] Las etiquetas HTML van en minúscula

## 2. Paréntesis en funciones
- [ ] ¿La estoy pasando o ejecutando?
- [ ] Dentro de onClick, addEventListener o un prop: SIN paréntesis

## 3. Nombres de props
- [ ] Por cada prop que mando, lo busco adentro del componente
- [ ] El nombre coincide de los dos lados

## 4. El return
- [ ] Uno solo por componente
- [ ] Devuelve un solo elemento (si hay hermanos, contenedor)

## 5. Cierres
- [ ] Cada etiqueta que abre, cierra
- [ ] Las que no llevan contenido, con />

## 6. Datos incrustados
- [ ] ¿Este valor es siempre igual, o cambia según quién use el componente?
- [ ] Si cambia, tiene que venir de props, no estar escrito a mano