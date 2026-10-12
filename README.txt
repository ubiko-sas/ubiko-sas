UBIKO — SITIO WEB MULTIPÁGINA

PÁGINAS
- index.html: Inicio y presentación de Ubiko.
- nosotros.html: Historia de la marca, valores y equipo.
- probar.html: Presentación del prototipo de la aplicación.

CÓMO ABRIR
1. Descomprimí Ubiko_sitio_web.zip.
2. Abrí index.html en Chrome, Edge o Firefox.
3. Para editar, abrí la carpeta ubiko_web en Visual Studio Code.

PERSONALIZACIONES PENDIENTES
- En probar.html, buscá https://www.figma.com/ y reemplazalo por el enlace público de tu prototipo.
- Editá los roles del equipo en nosotros.html para que coincidan con las tareas reales.
- La pantalla de carga con Kito dura aproximadamente un segundo y aparece al entrar a cada página.
- La tipografía Frankfurter está incluida localmente. Poppins se carga desde Google Fonts y requiere conexión para descargarse.

ESTRUCTURA
- index.html / nosotros.html / probar.html: páginas.
- styles.css: estilos, responsive, verde reforzado y animaciones.
- script.js: pantalla de carga, menú móvil y Kito interactivo.
- assets/: logos, mascota, paleta y tipografía.

RENDERS DE KITO
La carpeta assets incluye recortes transparentes de la hoja de personaje:
- kito-full.png: render principal con manos.
- kito-happy.png, kito-surprised.png, kito-doubt.png: expresiones.
- kito-wave.png, kito-phone.png, kito-thumbs-up.png: poses con gestos.
- kito-heart-hands.png, kito-open-hand.png, kito-point-hand.png: recursos de manos.
Estos renders se usan en el inicio, la carga, la página Sobre nosotros, la sección de prueba y el botón flotante de Kito.

CAMBIOS DE LA VERSIÓN ACTUAL
- Se quitó el Kito flotante pequeño de la página Inicio.
- La pantalla de carga usa assets/kito-loading-render.png, un render dedicado.
- Se quitaron las ruedas dibujadas de la pantalla de carga; Kito mantiene sus pequeños saltos y vibraciones.
\nIDENTIDAD DEL LOGO\nEl nombre Ubiko usa el orden de color de la referencia: u azul brillante (#1E88E5), b azul oscuro (#0D1B3D), i verde (#43A047), k azul oscuro (#0D1B3D), o azul brillante (#1E88E5). Aplicado en encabezado, pie y pantalla de carga.\n
AJUSTES v6
- Pie de página con fondo blanco y textos legibles.
- Se eliminó el Kito feliz pequeño del hero de Inicio.
- La pantalla de carga usa el render exclusivo assets/kito-loading-render.png, sin ruedas superpuestas.
- Los renders de Kito para las otras secciones se mantienen.

Actualización v7: se incorporó el fondo ilustrado de ciudad, costanera y automóvil en la sección principal de Inicio. El archivo está en assets/fondo-ciudad-auto.png y se adapta a pantallas de escritorio y celulares mediante CSS.
