# FlashCart Frontend

Frontend desarrollado con **React + Vite** para la plataforma **FlashCart**, una aplicación de comercio electrónico que consume una API REST desarrollada con Spring Boot.

Permite a los usuarios:

- Registrarse
- Iniciar sesión mediante JWT
- Consultar productos
- Administrar un carrito de compras
- Procesar pedidos
- Mantener la sesión mediante LocalStorage

---

# Tecnologías

| Tecnología | Versión | Uso |
|------------|----------|-------------------------------|
| React | 19 | Desarrollo de interfaces |
| Vite | 7 | Bundler |
| JavaScript ES6+ | - | Lenguaje principal |
| React Router DOM | 7 | Navegación |
| Axios | Última | Consumo API REST |
| Tailwind CSS | 4 | Estilos |
| JWT | - | Autenticación |
| LocalStorage | - | Persistencia de sesión |
| Vitest | Última | Pruebas unitarias |
| React Testing Library | Última | Testing de componentes |

---

# Arquitectura

```
Usuario
     │
     ▼
React
     │
     ▼
Pages
     │
     ▼
Components
     │
     ▼
Services (Axios)
     │
     ▼
Spring Boot API
     │
     ▼
PostgreSQL
```

---

# Estructura del proyecto

```
flashcart-frontend
│
├── public
│
├── src
│   ├── assets
│   ├── components
│   ├── pages
│   ├── services
│   ├── store
│   ├── test
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── package.json
├── vite.config.js
├── README.md
└── .env
```

---

# Explicación de carpetas

## assets

Contiene imágenes, íconos y recursos estáticos utilizados por la aplicación.

---

## components

Componentes reutilizables utilizados en múltiples vistas.

Ejemplos:

- Navbar
- ProtectedRoute

---

## pages

Contiene las pantallas principales.

- Login
- Registro
- Home
- Productos
- Carrito

---

## services

Centraliza todas las llamadas HTTP al backend mediante Axios.

Ejemplos:

- authService
- productoService
- carritoService

---

## store

Gestiona el estado global de autenticación.

Almacena:

- Token JWT
- Username
- UserId

---

## test

Contiene las pruebas unitarias desarrolladas con:

- Vitest
- React Testing Library

---

# Flujo de autenticación

La aplicación utiliza autenticación basada en JWT.

```
Usuario
      │
      ▼
Formulario Login
      │
      ▼
Backend Spring Boot
      │
      ▼
JWT
      │
      ▼
LocalStorage
      │
      ▼
ProtectedRoute
      │
      ▼
Pantallas protegidas
```

El JWT se envía automáticamente en las solicitudes protegidas mediante el encabezado:

```
Authorization: Bearer <token>
```

---

# Variables de entorno

## Desarrollo

```properties
VITE_API_URL=http://localhost:8090/api
```

## Producción

```properties
VITE_API_URL=https://flashcart-backend-lbkd.onrender.com/api
```

---

# Instalación

Clonar repositorio

```bash
git clone https://github.com/TU_USUARIO/flashcart-frontend.git
```

Entrar al proyecto

```bash
cd flashcart-frontend
```

Instalar dependencias

```bash
npm install
```

Ejecutar

```bash
npm run dev
```

La aplicación estará disponible en

```
http://localhost:5173
```

---

# Comunicación con el Backend

Todas las peticiones HTTP se realizan mediante Axios.

Servicios implementados:

- authService
- productoService
- carritoService

Estos servicios centralizan la comunicación con la API REST y separan la lógica de negocio de la interfaz de usuario.

---

# Protección de rutas

La aplicación utiliza un componente **ProtectedRoute**.

Su función es:

- Verificar si existe un JWT válido.
- Permitir únicamente el acceso a usuarios autenticados.
- Redireccionar al Login cuando no exista sesión.

---

# Manejo del estado

La autenticación mantiene la información del usuario mediante LocalStorage.

Información almacenada:

- Token JWT
- Username
- UserId

Esto permite conservar la sesión incluso después de recargar la página.

---

# Scripts

Ejecutar proyecto

```bash
npm run dev
```

Compilar producción

```bash
npm run build
```

Vista previa

```bash
npm run preview
```

Ejecutar pruebas

```bash
npm test
```

o

```bash
npx vitest
```

---

# Pruebas

El proyecto utiliza:

- Vitest
- React Testing Library

Actualmente existen pruebas para:

- Formulario de productos
- Carrito de compras

Las pruebas verifican:

- Renderizado de componentes
- Eventos del usuario
- Validación de formularios
- Llamadas a servicios

---

# Despliegue

Frontend:

- Vercel

Backend:

- Spring Boot desplegado en Render

Base de datos:

- PostgreSQL (Supabase)

---

# Funcionalidades

- Registro de usuarios
- Inicio de sesión con JWT
- Cierre de sesión
- Protección de rutas privadas
- Persistencia mediante LocalStorage
- Listado de productos
- Crear productos
- Editar productos
- Eliminar productos
- Agregar productos al carrito
- Actualizar cantidades del carrito
- Eliminar productos del carrito
- Procesar compra
- Consumo de API REST mediante Axios
- Componentes reutilizables
- Arquitectura modular
- Pruebas unitarias

---

# Seguridad

La aplicación implementa las siguientes medidas de seguridad:

- Autenticación mediante JWT.
- Protección de rutas privadas.
- Persistencia segura del token en LocalStorage.
- Comunicación con endpoints protegidos mediante Bearer Token.
- Variables sensibles configuradas mediante archivos `.env`.

---

# Mejoras futuras

- Historial de compras
- Paginación
- Búsqueda de productos
- Filtros por categoría
- Panel de administración
- Roles de usuario
- Recuperación de contraseña
- Pruebas End-to-End
- Pipeline CI/CD para el frontend

---
