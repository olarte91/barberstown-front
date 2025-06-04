# BarberstownFront

BarberstownFront es la interfaz web desarrollada con Angular para el sistema de gestión de citas de barberías Barberstown. Permite a los usuarios reservar, modificar y gestionar citas de manera sencilla e intuitiva.

## Tabla de contenidos

- [Descripción](#descripción)
- [Características principales](#características-principales)
- [Tecnologías](#tecnologías)
- [Requisitos](#requisitos)
- [Instalación](#instalación)
- [Desarrollo](#desarrollo)
- [Construcción y despliegue](#construcción-y-despliegue)
- [Pruebas](#pruebas)
- [Integración con backend](#integración-con-backend)
- [Contribución](#contribución)
- [Licencia](#licencia)

## Descripción

BarberstownFront es el frontend de una solución integral para la gestión de citas en barberías. Está diseñado para ofrecer una experiencia de usuario fluida y eficiente, facilitando la interacción con el sistema de gestión de citas backend.

## Características principales

- **Reserva de citas:** Los usuarios pueden crear, modificar y cancelar citas fácilmente.
- **Gestión de clientes:** Registro y consulta de información de clientes.
- **Interfaz intuitiva:** Diseño moderno y accesible, pensado para facilitar la navegación.
- **Integración con backend:** Comunicación segura y eficiente con el API REST de Barberstown.
- **Validación de formularios:** Validación en tiempo real de los datos ingresados por el usuario.

## Tecnologías

- **Framework:** Angular 19
- **Lenguaje:** TypeScript
- **Herramientas:** Angular CLI, npm
- **Estilos:** Tailwind CSS
- **Integración:** API REST, CORS

## Requisitos

- **Node.js** (última versión LTS recomendada)
- **npm** o **yarn**
- **Angular CLI** (opcional, pero recomendado para desarrollo)

## Instalación

1. Clona el repositorio:
git clone https://github.com/olarte91/barberstown-front.git

2. Accede al directorio del proyecto:
cd barberstown-front

3. Instala las dependencias:
npm install

4. Configura las variables de entorno si es necesario (por ejemplo, la URL del backend).

## Desarrollo

Para iniciar el servidor de desarrollo, ejecuta:
ng serve -o

Abre tu navegador y navega a `http://localhost:4200/`. La aplicación se recargará automáticamente al realizar cambios en el código[1].

## Construcción y despliegue

Para compilar el proyecto y generar los archivos de producción:

ng build

Los archivos generados se almacenan en la carpeta `dist/barberstown-front`. Puedes desplegar estos archivos en cualquier servidor web estático.

## Pruebas

- **Pruebas unitarias:** Ejecuta `ng test` para lanzar las pruebas con Karma.
- **Pruebas end-to-end:** Ejecuta `ng e2e` para pruebas e2e (asegúrate de tener configurado un framework como Cypress o Protractor).

## Integración con backend

BarberstownFront está diseñado para comunicarse con el backend de Barberstown desarrollado en Spring Boot. Asegúrate de que el backend esté en funcionamiento y configurar correctamente la URL base en el archivo de entorno de Angular.


## Licencia

Este proyecto está bajo la licencia MIT. Consulta el archivo [LICENSE](./LICENSE) para más detalles.