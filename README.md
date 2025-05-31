# Portafolio Personal - Felipe Narváez Gómez

Este es mi portafolio personal que muestra mis proyectos, habilidades y servicios. El sitio está construido con HTML, CSS y JavaScript, con integración a Firebase para el almacenamiento dinámico de proyectos y mensajes de contacto.

## Características

- Diseño moderno y minimalista
- Totalmente responsivo (adaptable a móviles y escritorio)
- Animaciones suaves
- Integración con Firebase:
  - Base de datos para proyectos del portafolio
  - Almacenamiento de mensajes de contacto
- Loader animado al cargar
- Botón flotante de WhatsApp

## Estructura

- **Inicio**: Presentación con foto y frase inspiradora
- **Sobre mí**: Información personal, estudios y metas
- **Servicios**: Lista de servicios ofrecidos
- **Portafolio**: Proyectos cargados dinámicamente desde Firebase
- **Contacto**: Formulario funcional conectado a Firebase

## Configuración de Firebase

1. Crea un proyecto en [Firebase Console](https://console.firebase.google.com/)
2. Configura una base de datos Realtime Database
3. Actualiza las credenciales en `js/firebase-config.js`
4. Estructura de la base de datos:
   - `projects`: Lista de proyectos para el portafolio
   - `messages`: Mensajes recibidos del formulario de contacto

## Despliegue en GitHub Pages

1. Crea un repositorio en GitHub
2. Sube todos los archivos del proyecto
3. Ve a Settings > Pages
4. Selecciona la rama `main` y la carpeta `/ (root)`
5. Guarda los cambios

El sitio estará disponible en `https://[tu-usuario].github.io/[nombre-repositorio]/`