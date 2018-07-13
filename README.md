# Q-Nutrition Social Network 


## INTRODUCCIÓN

### UX

La comida es esencial para nuestra supervivencia y ¿A quién no le gusta la comida?, muchos solemos compartir cada día  videos y fotos en redes sociales de recetas, lo que comemos a diario o si vamos a un restaurant es típico tomar foto del plato y subirla en Facebook o Instagram  ¡Es la Moda!.
La comida actúa como lenguaje universal y la búsqueda por comidas y alimentos cada vez más saludables han derivado en una tendencia que apuesta por lo vegetal y natural. 

### Benchmarking

Como guía para el diseño de nuestro producto tomamos en cuenta a las grandes redes sociales como pinterest en el Login, Facebook en su estructura postear, como instagram para registro, en la busqueda de paginas afines con nuestro contenido logramos ver que existen muchas similares que ofrecen servicios de delivery de comida o directorios de restaurantes saludables, más no específicamente una red social de comida saludable, aun así listamos algunas otras del medio que tienen contenido, mucho tráfico y seguidores.
*Alimenta: web de nutricionistas que comparten dietas, asesorías, fotos y tips de comida saludable es la unica web en español que encontramos de consejos y tips mas esta no permite la interacción entre usuarios o poder postear. 

*Choosemyplate: una iniciativa del gobierno norteamericano contiene información de alimentos y comida saludable, así como porciones en los platos, el contenido en inglés y español te permite suscribirte para recibir boletines, la interacción de usuarios de la red se da solo por otros canales como facebook etc 


### Entregables

#### 1) Definición del producto

Q- Nutrition apunta a ser una red social sumamente visitada con miles de usuarios y con contenido dinámico, los amantes de la comida saludable lo convertirán en su hogar en línea. Entre las características de nuestro producto están el poder registrarse  y postear tips, recetas, restaurantes a fines, servicios, fotos, dar y contar likes, definir la privacidad de lo que publica, editar y eliminar post  y en un futuro poder seguir a otros usuarios, crear colecciones de fotos, tener un perfil y chatear con otros usuarios.  

¿Cuáles son los elementos básicos que tiene una red social?
Lo básico para que una red social funcione es tener usuarios interesados en la información que contenga la misma, que tenga un login, un perfil, que se pueda postear, dar likes, compartir y comentar.
¿Quiénes son los principales usuarios de producto?
Según los resultados de nuestra encuesta, nuestros usuarios son personas en su mayoria de 20 a 30 años, amantes de la vida sana y los deportes, entre ellos estudiantes, atletas, personas aficionadas al gimnasio, madres de familia y personas en general preocupadas por llevar una alimentación saludable en base de frutas y verduras en su menú diario.
¿Cómo descubriste las necesidades de los usuarios?
En la búsqueda de información descubrimos que no existen redes sociales que se enfoquen únicamente en un tipo de alimentación, sin embargo muchos usuarios quisieran tener un lugar donde compartir dudas, postear sobre menús, platillos saludables, recetas en un panel  que muestre de manera amigable y responsive estos datos . 


#### 2) Diseño de la Interfaz de Usuario (prototipo de alta fidelidad)

Debes definir cuál será el flujo que seguirá el usuario dentro de tu producto y
con eso deberás diseñar la Interfaz de Usuario (UI - por sus siglas en inglés) de
esta red social que siga este flujo. Para esto debes utilizar la herramienta de
diseño visual de tu preferencia. Nosotros te recomendamos [Figma](https://www.figma.com/) dado que es una
herramienta que funciona en el navegador y puedes crear una cuenta gratis. Sin
embargo, eres libre de utilizar otros editores gráficos como Adobe XD, Illustrator,
Photoshop, PowerPoint, Keynote, etc.

Este diseño debe representar la solución que se implementará finalmente en
código. 

Tu diseño debe seguir los fundamentos de visual design, como: contraste,
alineación, jerarquía, entre otros. Tip: revisa el contenido de UX de la unidad
de visual design.

#### 3) Implementación de la Interfaz de Usuario

La idea para este proyecto es que el producto a desarrollar siga los
lineamientos propuestos en el diseño de la interfaz de usuario. Asegúrate a lo
largo de la implementación que los elementos propuestos están siendo
implementados correctamente. (Hint: testing)

## Evaluación

### Tech

| Habilidad | Nivel esperado |
|-----------|----------------|
| **JavaScript** | |
| Estilo | 3
| Nomenclatura/semántica | 3
| Funciones/modularidad | 2
| Estructuras de datos | 2
| Tests | 2
| **HTML** | |
| Validación | 3
| Estilo | 3
| Semántica | 3
| SEO | n/a
| **CSS** | |
| DRY | 3
| Responsive | 3
| **SCM** | |
| Git | 3
| GitHub | 3
| **CS** | |
| Lógica | 2
| Arquitectura | 2
| Patrones/paradigmas | n/a

### UX

| Habilidad | Nivel esperado |
|-----------|----------------|
| User Centricity | 3
| Entrevistas | 2 |
| Testing | 2
| User Flow | 2
| Jerarquía | 3
| Alineación | 3
| Contraste | 3
| Color | 3
| Tipografía | 3

### Habilidades Blandas

Para este proyecto esperamos que ya hayas alcanzado el nivel 3 en todas tus
habilidades blandas. Te aconsejamos revisar la rúbrica:

| Habilidad | Nivel esperado |
|-----------|----------------|
| Planificación y organización | 3
| Autoaprendizaje | 3
| Solución de Problemas | 3
| Dar y recibir feedback | 3
| Adaptabilidad | 3
| Trabajo en equipo (trabajo colaborativo y responsabilidad) | 3
| Comunicación eficaz | 3
| Presentaciones | 3

***

## Pistas / Tips / Lecturas complementarias

### Mobile first

El concepto de [_mobile first_](https://www.mediaclick.es/blog/diseno-web-responsive-design-y-la-importancia-del-mobile-first/)
hace referencia a un proceso de diseño y desarrollo donde partimos de cómo se ve
y cómo funciona la aplicación en un dispositivo móvil primero, y más adelante se
ve cómo adaptar la aplicación a pantallas progresivamente grandes y
características específicas del entorno desktop. Esto es en contraposición al
modelo tradicional, donde primero se diseñaban los websites (o webapps) para
desktop y después se trataba de _arrugar_ el diseño para que entre en pantallas
más chicas. La clave acá es asegurarse de que desde el principio diseñan usando
la vista _responsive_ de las herramientas de desarrollador (developer tools) del
navegador. De esa forma, partimos de cómo se ve y comporta la aplicación en una
pantalla y entorno móvil.

### Múltiples vistas

En proyectos anteriores nuestras aplicaciones habían estado compuestas de una
sola _vista_ principal (una sóla _página_). En este proyecto se introduce la
necesidad de tener que dividir nuestra interfaz en varias _vistas_ o _páginas_
y ofrecer una manera de navegar entre estas vistas. Este problema se puede
afrontar de muchas maneras: con archivos HTML independientes (cada uno con su
URL) y links tradicionales, manteniendo estado en memoria y rederizando
condicionalmente (sin refrescar la página), [manipulando el historial del
navegador](https://developer.mozilla.org/es/docs/DOM/Manipulando_el_historial_del_navegador)
con [`window.history`](https://developer.mozilla.org/es/docs/Web/API/Window/history),
usando una librería (por ejemplo [`react-router`](https://github.com/ReactTraining/react-router)
o [`vue-router`](https://router.vuejs.org/)). En este proyecto te invitamos a
explorar opciones y decidir una opción de implementación.

### Escritura de datos

En los proyectos anteriores hemos consumido (leído) datos, pero todavía no
habíamos escrito datos (guardar cambios, crear datos, borrar, ...). En este
proyecto tendrás que crear (guardar) nuevos datos, así como leer, actualizar y
modificar datos existentes. Estos datos se podrán guardar localmente usando
[`localStorage`](https://developer.mozilla.org/es/docs/Web/API/Window/localStorage)
o de forma remota usando [Firebase](https://firebase.google.com/).

### Historias de usuario

En el proyecto "Data Dashboard", la primera historia "épica" podría haber sido:

Yo, como **Training Manager** quiero poder **ver el progreso de solución de
ejercicios de JS de las estudiantes de mi(s) cohort(s)** para **entender
cuánto están practicando y qué tan bien les está yendo**.

Esta la podríamos haber dividido en algunas más pequeñas, por ejemplo:

1. Yo, como **Training Manager** quiero poder **seleccionar cada uno de los
   cohorts de mi ciudad** para **ver un listado de todas las estudiantes de ese
   cohort, y que incluya el % de progreso de solución de ejercicios de cada una
   de ellas**
2. Yo, como **Training Manager** quiero poder **seleccionar a una estudiante en
   particular** para **ver el % de progreso de solución de todos los ejercicios
   y el resultado decada uno de ellos**

Como ves, dividirla en 1 y 2, hace que sea mucho más fácil imaginar y entender
lo que el equipo tiene que conseguir para completarla.

Otras:

estudiar

* [Diseño web, responsive design y la importancia del mobile first - Media Click](https://www.mediaclick.es/blog/diseno-web-responsive-design-y-la-importancia-del-mobile-first/)
* [Mobile First: el enfoque actual del diseño web móvil - 1and1](https://www.1and1.es/digitalguide/paginas-web/diseno-web/mobile-first-la-nueva-tendencia-del-diseno-web/)
* [Mobile First - desarrolloweb.com](https://desarrolloweb.com/articulos/mobile-first-responsive.html)
* [Mobile First - ZURB](https://zurb.com/word/mobile-first)
* [Mobile First Is NOT Mobile Only - Nielsen Norman Group](https://www.nngroup.com/articles/mobile-first-not-mobile-only/)
* [Offline first manifesto](http://offlinefirst.org/)

***

## Checklist

### General

* [ ] Producto final sigue los lineamientos del diseño.

### `README.md`

* [ ] Definición del producto:
  * [ ] Cuáles son los elementos básicos que tiene una red social.
  * [ ] Quiénes son los principales usuarios de producto.
  * [ ] Cómo descubriste las necesidades de los usuarios.
  * [ ] Qué problema resuelve el producto para estos usuarios.
  * [ ] Cuáles son los objetivos de estos usuarios en relación con el producto.
  * [ ] Cuáles son las principales funcionalidades del producto y cuál es su prioridad.
  * [ ] Cómo verificaste que el producto les está resolviendo sus problemas.
  * [ ] Cómo te asegurarás que estos usuarios usen este producto.
* [ ] Benchmark de las principales redes sociales.
* [ ] Resumen de entrevistas con usuarios.
* [ ] Link/screenshots del prototipo de alta fidelidad.
* [ ] Conclusiones de testing con el prototipo de alta fidelidad con usuarios.
* [ ] Conclusiones de testing con el producto en HTML.

### Pruebas / tests

* [ ] Tests unitarios cubren un mínimo del 70% de statements, functions, lines y branches.
* [ ] Pasa tests (y linters) (`npm test`).

### Creación de cuenta (sign up)

* [ ] Permite crear cuenta.
* [ ] Valida email.
* [ ] Valida password.
* [ ] Muestra mensajes de error.

### Inicio de sesión (sign in)

* [ ] Permite iniciar sesión.
* [ ] Valida email.
* [ ] Valida password.
* [ ] Muestra mensajes de error.

### Muro (wall/feed)

* [ ] Muestra _muro_.
* [ ] Permite publicar nuevos posts.
* [ ] Permite eliminar posts.
* [ ] Pide confirmación antes de borrar posts.
* [ ] Permite editar posts (in place).
* [ ] Permite publicar y filtrar posts por público/yo.
* [ ] Permite dar _like_ a los posts y llevar un conteo de ellos.
