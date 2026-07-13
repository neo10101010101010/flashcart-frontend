# FlashCart Frontend

Frontend desarrollado con **React + Vite** para la plataforma **FlashCart**, una aplicación de comercio electrónico que permite a los usuarios autenticarse, visualizar productos, administrar un carrito de compras y procesar pedidos consumiendo una API REST desarrollada en Spring Boot.

---

# Stack tecnológico

| Tecnología | Versión | Descripción |
|------------|---------|-------------|
| React | 19 | Biblioteca para construir interfaces de usuario |
| Vite | 7 | Herramienta de construcción y servidor de desarrollo |
| JavaScript (ES6+) | - | Lenguaje principal del proyecto |
| React Router DOM | 7 | Navegación entre páginas |
| Axios | Última | Cliente HTTP para consumir la API REST |
| Tailwind CSS | 4 | Framework CSS para estilos |
| React Hook Form *(si aplica)* | - | Manejo de formularios |
| JWT | - | Autenticación basada en tokens |
| LocalStorage | - | Persistencia de sesión |
| Vitest | Última | Framework de pruebas unitarias |
| React Testing Library | Última | Pruebas de componentes React |

---

# Arquitectura del proyecto

```
flashcart-frontend
│
├── public/
│
├── src/
│   ├── assets/
│   │
│   ├── components/
│   │      Navbar.jsx
│   │      ProtectedRoute.jsx
│   │
│   ├── pages/
│   │      Login.jsx
│   │      Register.jsx
│   │      Home.jsx
│   │      ProductoForm.jsx
│   │      Carrito.jsx
│   │
│   ├── services/
│   │      authService.js
│   │      productoService.js
│   │      carritoService.js
│   │
│   ├── store/
│   │      authStore.js
│   │
│   ├── test/
│   │      ProductoForm.test.jsx
│   │      Carrito.test.jsx
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── package.json
├── vite.config.js
├── README.md
└── .env
```

## Explicación de carpetas

### src/components

Componentes reutilizables utilizados por toda la aplicación.

Ejemplos:

- Navbar
- ProtectedRoute

---

### src/pages

Contiene las vistas principales.

- Login
- Registro
- Home
- Productos
- Carrito

---

### src/services

Centraliza todas las llamadas HTTP al backend.

Ejemplos:

- Login
- Registro
- Productos
- Carrito

---

### src/store

Contiene el manejo del estado global de autenticación.

Actualmente almacena:

- JWT
- username
- userId

---

### src/test

Contiene las pruebas unitarias realizadas con:

- Vitest
- React Testing Library

---

# Guía de inicio rápido

## 1. Clonar el proyecto

```bash
git clone https://github.com/TU_USUARIO/flashcart-frontend.git
```

---

## 2. Entrar al proyecto

```bash
cd flashcart-frontend
```

---

## 3. Instalar dependencias

```bash
npm install
```

---

## 4. Configurar variables de entorno

Crear un archivo

```
.env
```

---

## 5. Ejecutar la aplicación

```bash
npm run dev
```

El proyecto estará disponible en

```
http://localhost:5173
```

---

# Variables de entorno

Crear un archivo **.env**

Ejemplo:

```properties
VITE_API_URL=http://localhost:8090/api
```

## Variables

| Variable | Descripción |
|-----------|-------------|
| VITE_API_URL | URL base del backend Spring Boot |

---

# Scripts disponibles

Ejecutar proyecto

```bash
npm run dev
```

Compilar proyecto

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

# Funcionalidades

- Registro de usuarios
- Inicio de sesión con JWT
- Protección de rutas
- Listado de productos
- Crear productos
- Editar productos
- Eliminar productos
- Agregar productos al carrito
- Eliminar productos del carrito
- Procesar compra
- Persistencia de sesión mediante LocalStorage
- Consumo de API REST

---

# Seguridad

- Autenticación mediante JWT.
- Rutas protegidas.
- Persistencia del token en LocalStorage.
- Variables sensibles almacenadas en el archivo `.env`.

---