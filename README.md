# Sistema de Gestión - Segunda Compañía de Bomberos de Puente Alto

Este proyecto es la plataforma digital oficial de la Segunda Compañía del Cuerpo de Bomberos de Puente Alto. Consiste en una página web pública ("Landing Page") y un sistema de gestión interna (Intranet) para la administración de personal, inventario, bitácoras y boletines informativos.

## 🚀 Tecnologías

El proyecto está construido sobre un stack moderno y robusto:

- **Backend**: [Laravel 11](https://laravel.com/) (PHP Framework)
- **Frontend**: [React](https://react.dev/) con [Inertia.js](https://inertiajs.com/)
- **Estilos**: [Tailwind CSS](https://tailwindcss.com/)
- **Componentes UI**: [Shadcn UI](https://ui.shadcn.com/)
- **Base de Datos**: MySQL

## 📋 Requisitos Previos

Asegúrate de tener instalado lo siguiente en tu entorno de desarrollo:

- [PHP 8.2+](https://www.php.net/)
- [Composer](https://getcomposer.org/)
- [Node.js y NPM](https://nodejs.org/)
- [MySQL](https://www.mysql.com/)

## 🛠️ Instalación y Configuración

1.  **Clonar el repositorio**

    ```bash
    git clone <url-del-repositorio>
    cd landing-segunda
    ```

2.  **Instalar dependencias de PHP**

    ```bash
    composer install
    ```

3.  **Instalar dependencias de JavaScript**

    ```bash
    npm install
    ```

4.  **Configurar variables de entorno**
    Copia el archivo de ejemplo y configura tu base de datos:

    ```bash
    cp .env.example .env
    ```

    Edita el archivo `.env` y ajusta `DB_DATABASE`, `DB_USERNAME`, y `DB_PASSWORD`.

5.  **Generar clave de aplicación**

    ```bash
    php artisan key:generate
    ```

6.  **Ejecutar migraciones y seeders**
    Esto creará las tablas y usuarios iniciales.
    ```bash
    php artisan migrate --seed
    ```

## ▶️ Ejecución

Para levantar el entorno de desarrollo, necesitas ejecutar dos terminales:

1.  **Servidor Laravel**

    ```bash
    php artisan serve
    ```

2.  **Compilación de Assets (Vite)**
    ```bash
    npm run dev
    ```

El sitio estará disponible en `http://localhost:8000`.

## 🌟 Características Principales

### Página Pública

- Información institucional (Historia, Oficialidad, Material Mayor).
- Sección de noticias y comunicados.
- Información de contacto y ubicación.

### Intranet (Gestión Interna)

- **Dashboard**: Resumen de actividad y módulos accesibles según rol.
- **Boletín**: Generador de boletines mensuales (PDF) con gestión de actos, artículos y estadísticas.
- **Personal**: Gestión de voluntarios y hoja de vida.
- **Inventario**: Control de Material Mayor y Menor.
- **Bitácoras**: Registro de movimientos de unidades.
