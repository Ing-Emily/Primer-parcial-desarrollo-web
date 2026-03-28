# Aplicación Web Modularizada - Primer Parcial Desarrollo Web

## Descripción del Proyecto
Esta es una aplicación web estática desarrollada como parte del primer parcial de desarrollo web. La aplicación demuestra conceptos de modularización, carga dinámica de componentes, uso de plantillas y web components personalizados.

## Características Principales
- **Modularización**: La aplicación está dividida en componentes reutilizables como header, footer y sidebar.
- **Carga Dinámica**: Los fragmentos HTML se cargan usando fetch desde archivos externos.
- **Plantillas Dinámicas**: Uso de elementos `<template>` para renderizar productos de manera dinámica.
- **Web Components**: Implementación de un componente personalizado con Shadow DOM.
- **Sistema de Login**: Validación básica en JavaScript (no recomendado para producción).
- **Página de Contacto**: Formulario de contacto con estilos personalizados.
- **Gestión de Productos**: Datos de productos almacenados en JSON y renderizados dinámicamente.

## Estructura del Proyecto
```
index.html              # Página principal
login.html              # Página de inicio de sesión
contacto.html           # Página de contacto
README.md               # Documentación del proyecto
components/             # Componentes modulares
├── Footer/
│   ├── footer.css
│   └── footer.html
├── Header/
│   ├── header.css
│   └── header.html
└── Sidebar/
    ├── sidebar.css
    └── sidebar.html
css/                    # Estilos CSS
├── login.css
└── style.css
data/                   # Datos JSON
└── productos.json
img/                    # Imágenes
js/                     # Scripts JavaScript
├── login.js
└── main.js
```

## Tecnologías Utilizadas
- **HTML5**: Estructura de las páginas
- **CSS3**: Estilos y diseño responsivo
- **JavaScript (ES6+)**: Lógica de la aplicación, carga dinámica y validaciones
- **Web Components**: Componentes personalizados con Shadow DOM
- **Fetch API**: Carga asíncrona de fragmentos HTML

## Cómo Ejecutar la Aplicación
1. Clona o descarga el repositorio en tu máquina local.
2. Abre el archivo `index.html` en un navegador web moderno (Chrome, Firefox, Edge, etc.).
3. Navega entre las páginas usando los enlaces proporcionados.

No se requiere instalación de dependencias ni servidor local, ya que es una aplicación estática.

## Funcionalidades
- **Página Principal (index.html)**: Muestra productos dinámicos y componentes modulares.
- **Login (login.html)**: Formulario de inicio de sesión con validación básica.
- **Contacto (contacto.html)**: Formulario de contacto con estilos personalizados.

## Buenas Prácticas Implementadas
- Separación de responsabilidades (HTML, CSS, JS).
- Nombres de archivos y variables claros y descriptivos.
- Código organizado y comentado.
- Uso de plantillas para contenido dinámico.
- Componentes reutilizables.

## Notas Importantes
- El sistema de login es solo para fines demostrativos y no es seguro para uso en producción.
- La aplicación está optimizada para navegadores modernos que soportan Web Components y Fetch API.

## Autor
Jhoan Esteban Baena. Codigo: 192451
Emily Gregoria Picon Rincon. Codigo: 192653.