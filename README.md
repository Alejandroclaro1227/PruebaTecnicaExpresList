# 📝 To-Do App Full Stack - Documentación Completa
Duracion de la prueba 4 horas con 22 minuntos

> **Aplicación completa de gestión de tareas** desarrollada con Vue 3 + TypeScript en el frontend y Node.js + Express en el backend.

[![Vue 3](https://img.shields.io/badge/Vue-3.3-4FC08D?logo=vue.js)](https://vuejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.1-3178C6?logo=typescript)](https://www.typescriptlang.org/)
[![Node.js](https://img.shields.io/badge/Node.js-18+-339933?logo=node.js)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express-4.18-000000?logo=express)](https://expressjs.com/)

## 📖 Índice Completo

- [Descripción del Proyecto](#-descripción-del-proyecto)
- [Stack Tecnológico](#️-stack-tecnológico)
- [Arquitectura del Proyecto](#-arquitectura-del-proyecto)
- [Instalación Completa](#-instalación-completa)
- [Cómo Usar la Aplicación](#-cómo-usar-la-aplicación)
- [Funcionalidades](#-funcionalidades)
- [API REST](#-api-rest)
- [Testing](#-testing)
- [Deployment](#-deployment)
- [Troubleshooting](#-troubleshooting)
- [Contribución](#-contribución)

## 🎯 **Descripción del Proyecto**

**Sistema completo de gestión de tareas** que permite a los usuarios crear, organizar, editar y eliminar tareas de manera eficiente. La aplicación está dividida en dos partes principales que trabajan juntas para ofrecer una experiencia completa:

### 🖥️ **Frontend (Interfaz de Usuario)**

Aplicación web moderna y responsiva que proporciona la interfaz visual con la que interactúan los usuarios. Desarrollada como SPA (Single Page Application) para una experiencia fluida y rápida.

### 🔧 **Backend (Servidor API)**

Servidor REST API que maneja toda la lógica de negocio, validaciones, almacenamiento de datos y comunicación con la base de datos. Proporciona endpoints seguros para todas las operaciones CRUD.

### ✨ **Características Principales**

- 🚀 **SPA Moderna** - Single Page Application con Vue 3 y Composition API
- 🔄 **API REST Completa** - CRUD completo de tareas con validaciones robustas
- 💾 **Persistencia** - Base de datos SQLite con optimizaciones automáticas
- 🎨 **UI/UX Moderno** - Diseño responsivo con TailwindCSS y animaciones suaves
- ⚡ **Tiempo Real** - Actualizaciones instantáneas sin recargar página
- 🔒 **Tipado Estricto** - TypeScript en frontend y backend para prevenir errores
- 📱 **Responsive** - Compatible con móvil, tablet y desktop
- 🔍 **Filtros Dinámicos** - Sistema completo de filtrado de tareas
- 📊 **Estadísticas** - Métricas en tiempo real del progreso de tareas
- ⚠️ **Manejo de Errores** - Sistema robusto de error handling
- 🧪 **Testing Integrado** - Scripts de testing para verificar funcionamiento

## 🛠️ **Stack Tecnológico**

### Frontend

| Tecnología  | Versión | Propósito                                  |
| ----------- | ------- | ------------------------------------------ |
| Vue 3       | 3.3.4   | Framework principal para SPA               |
| TypeScript  | 5.1.6   | Tipado estático y prevención de errores    |
| TailwindCSS | 3.3.3   | Framework CSS para diseño responsivo       |
| Vite        | 4.4.5   | Build tool rápido y servidor de desarrollo |

### Backend

| Tecnología | Versión | Propósito                          |
| ---------- | ------- | ---------------------------------- |
| Node.js    | 18+     | Runtime JavaScript del servidor    |
| Express    | 4.18.2  | Framework web minimalista y rápido |
| TypeScript | 5.1.6   | Tipado estático en el servidor     |
| SQLite     | 5.1.6   | Base de datos embebida y ligera    |
| CORS       | 2.8.5   | Manejo de peticiones cross-origin  |



**Explicación del flujo**:
1. **Usuario interactúa** con la interfaz Vue 3 en el navegador
2. **Frontend envía peticiones** HTTP al backend usando fetch API
3. **Backend procesa** las peticiones, valida datos y ejecuta lógica
4. **Base de datos** almacena/recupera información de forma persistente
5. **Backend responde** con JSON al frontend
6. **Frontend actualiza** la interfaz automáticamente (reactive)

## 🚀 **Instalación Completa**

### 📋 **Prerrequisitos del Sistema**

**Requisitos Obligatorios**:
- **Node.js**: Versión 18.0.0 o superior (LTS recomendado)
- **npm**: Versión 9.0.0 o superior (incluido con Node.js)
- **Git**: Para clonar el repositorio
- **Navegador moderno**: Chrome 90+, Firefox 88+, Safari 14+, Edge 90+

**Verificación de prerrequisitos**:
```bash
node --version    # Debe mostrar v18.x.x+
npm --version     # Debe mostrar 9.x.x+
git --version     # Cualquier versión reciente
```

### 📥 **Instalación Paso a Paso**

#### 1. **Clonar el Repositorio**
```bash
# Opción 1: HTTPS
git clone https://github.com/Alejandroclaro1227/PruebaTecnicaExpresList.git
cd todo-app

# Opción 2: SSH (si tienes configurado)
git clone git@github.com:tu-usuario/todo-app.git
cd todo-app

# Opción 3: Descargar ZIP desde GitHub
```

#### 2. **Instalar Backend**
```bash
# Navegar al directorio backend
cd back

# Instalar todas las dependencias
npm install

# Verificar instalación correcta
npm list --depth=0
```

#### 3. **Instalar Frontend**
```bash
# Navegar al directorio frontend
cd ../front

# Instalar todas las dependencias
npm install

# Verificar instalación correcta
npm list --depth=0
```

### ▶️ **Ejecución en Desarrollo**

#### **Ejecutar Backend** (Terminal 1)
```bash
cd back
npm run dev
```
✅ **Backend ejecutándose en**: http://localhost:3000

#### **Ejecutar Frontend** (Terminal 2)
```bash
cd front
npm run dev
```
✅ **Frontend ejecutándose en**: http://localhost:5173

### 🔍 **Verificación de Instalación**

1. **Verificar Backend**:
   - Abrir http://localhost:3000 en navegador
   - Debe mostrar JSON con información de la API

2. **Verificar Frontend**:
   - Abrir http://localhost:5173 en navegador
   - Debe cargar la aplicación de tareas

3. **Verificar Comunicación**:
   - Crear una tarea en el frontend
   - Debe aparecer inmediatamente en la lista

## 🎮 **Cómo Usar la Aplicación**

### 👤 **Para Usuarios Finales**

#### **1. Acceder a la Aplicación**
- Abrir navegador web
- Ir a http://localhost:5173 (desarrollo) o URL de producción
- La aplicación carga automáticamente

#### **2. Crear Nueva Tarea**
- **Título**: Escribir título descriptivo (obligatorio)
- **Descripción**: Agregar detalles opcionales (hasta 500 caracteres)
- **Guardar**: Hacer clic en "Crear Tarea"
- La tarea aparece inmediatamente en la lista

#### **3. Gestionar Tareas Existentes**
- **Marcar Completada**: Hacer clic en checkbox al lado de la tarea
- **Editar**: Hacer clic en ícono de lápiz para modificar
- **Eliminar**: Hacer clic en ícono de papelera (pide confirmación)

#### **4. Filtrar y Organizar**
- **Ver Todas**: Muestra todas las tareas creadas
- **Solo Pendientes**: Filtra tareas sin completar
- **Solo Completadas**: Filtra tareas terminadas
- **Estadísticas**: Ver contadores en tiempo real

#### **5. Interfaz Responsiva**
- **Móvil**: Layout optimizado para pantallas pequeñas
- **Tablet**: Diseño híbrido adaptado
- **Desktop**: Experiencia completa con todas las funciones

### 👨‍💻 **Para Desarrolladores**

#### **Estructura de Desarrollo**
- **Frontend**: Desarrollo con hot-reload en puerto 5173
- **Backend**: API en puerto 3000 con auto-restart
- **Base de Datos**: SQLite se crea automáticamente en primera ejecución

#### **Scripts de Desarrollo Disponibles**

**Backend**:
```bash
npm run dev     # Desarrollo con hot-reload
npm run build   # Compilar TypeScript
npm start       # Ejecutar versión compilada
npm run clean   # Limpiar archivos compilados
```

**Frontend**:
```bash
npm run dev     # Servidor desarrollo con HMR
npm run build   # Build optimizado para producción
npm run preview # Previsualizar build de producción
```

## ✨ **Funcionalidades Detalladas**

### 📝 **Gestión Completa de Tareas**

#### **Crear Tareas**
- **Formulario intuitivo** con validación en tiempo real
- **Título obligatorio** con mínimo 1 carácter, máximo 200
- **Descripción opcional** con máximo 500 caracteres
- **Sanitización automática** de datos antes de guardar
- **Feedback visual** inmediato al usuario
- **Limpieza automática** del formulario tras crear

#### **Editar Tareas**
- **Edición inline** desde la lista de tareas
- **Formulario pre-rellenado** con datos actuales
- **Validación consistente** igual que en creación
- **Cancelación sin cambios** vuelve al estado original
- **Actualización instantánea** en la interfaz

#### **Completar/Pendiente**
- **Checkbox visual** con animación de cambio de estado
- **Cambio instantáneo** de apariencia (tachado, opacidad)
- **Toggle reversible** - se puede marcar/desmarcar
- **Actualización inmediata** de estadísticas
- **Persistencia garantizada** en base de datos

#### **Eliminar Tareas**
- **Confirmación obligatoria** para evitar eliminaciones accidentales
- **Eliminación instantánea** de la interfaz tras confirmar
- **Actualización automática** de contadores y estadísticas
- **Operación irreversible** (no hay papelera de reciclaje)

### 🔍 **Sistema de Filtros Avanzado**

#### **Filtro "Todas las Tareas"**
- **Vista completa** de todas las tareas creadas
- **Ordenación** por fecha de creación (más recientes primero)
- **Conteo total** visible en estadísticas
- **Filtro por defecto** al cargar la aplicación

#### **Filtro "Solo Pendientes"**
- **Tareas incompletas** únicamente
- **Útil para** enfocarse en trabajo pendiente
- **Conteo dinámico** actualizado en tiempo real
- **Estado visual** diferenciado

#### **Filtro "Solo Completadas"**
- **Tareas terminadas** únicamente
- **Útil para** revisar trabajo completado
- **Sense of accomplishment** - ver progreso
- **Historial visual** de tareas finalizadas

### 📊 **Estadísticas en Tiempo Real**

#### **Contadores Automáticos**
- **Total de Tareas**: Número total de tareas en el sistema
- **Tareas Completadas**: Cuántas están marcadas como terminadas
- **Tareas Pendientes**: Cuántas faltan por completar
- **Porcentaje de Progreso**: Cálculo automático del % completado

#### **Visualización de Progreso**
- **Barra de progreso animada** que muestra % de completado
- **Colores significativos** (verde=completado, amarillo=pendiente)
- **Iconografía intuitiva** para cada tipo de estadística
- **Actualización instantánea** al cambiar estado de tareas

### 🎨 **Experiencia de Usuario (UX)**

#### **Diseño Responsivo**
- **Mobile First**: Optimizado primero para móviles
- **Breakpoints**: Adaptación automática a tablet y desktop
- **Touch Friendly**: Botones y áreas de toque optimizadas
- **Navegación Intuitiva**: Flujo natural entre funciones

#### **Feedback Visual**
- **Estados de Loading**: Spinners durante operaciones
- **Animaciones Suaves**: Transiciones CSS en cambios de estado
- **Color Coding**: Verde=éxito, rojo=error, azul=acción
- **Iconografía Consistente**: Íconos reconocibles para cada acción

#### **Manejo de Errores**
- **Mensajes Claros**: Explicaciones en español comprensibles
- **Recuperación Graceful**: La app sigue funcionando tras errores
- **Alertas No Intrusivas**: Notificaciones que no bloquean uso
- **Auto-dismiss**: Errores temporales se ocultan automáticamente

## 🌐 **API REST Completa**

### 📍 **Endpoints Disponibles**

| Método | URL | Propósito | Autenticación |
|--------|-----|-----------|---------------|
| `GET` | `/` | Información general de la API | No requerida |
| `GET` | `/api/tasks` | Obtener todas las tareas | No requerida |
| `POST` | `/api/tasks` | Crear nueva tarea | No requerida |
| `PUT` | `/api/tasks/:id` | Actualizar tarea existente | No requerida |
| `DELETE` | `/api/tasks/:id` | Eliminar tarea | No requerida |

### 📋 **Especificaciones de la API**

#### **GET `/api/tasks` - Obtener Tareas**
**Propósito**: Recuperar todas las tareas almacenadas en la base de datos

**Parámetros**: Ninguno

**Respuesta Exitosa (200)**:
```json
[
  {
    "id": "123e4567-e89b-12d3-a456-426614174000",
    "title": "Completar documentación",
    "description": "Escribir README detallado",
    "completed": false,
    "createdAt": "2025-01-02T10:30:00.000Z",
    "updatedAt": "2025-01-02T10:30:00.000Z"
  }
]
```

#### **POST `/api/tasks` - Crear Tarea**
**Propósito**: Crear una nueva tarea en el sistema

**Body Requerido**:
```json
{
  "title": "Título de la tarea",
  "description": "Descripción opcional"
}
```

**Validaciones**:
- `title`: Obligatorio, mínimo 1 carácter, máximo 200 caracteres
- `description`: Opcional, máximo 500 caracteres

**Respuesta Exitosa (201)**: Objeto tarea creada con ID y timestamps

#### **PUT `/api/tasks/:id` - Actualizar Tarea**
**Propósito**: Modificar una tarea existente

**Parámetros URL**:
- `id`: UUID de la tarea a actualizar

**Body (todos los campos opcionales)**:
```json
{
  "title": "Nuevo título",
  "description": "Nueva descripción",
  "completed": true
}
```

**Respuesta Exitosa (200)**: Objeto tarea actualizada

#### **DELETE `/api/tasks/:id` - Eliminar Tarea**
**Propósito**: Eliminar permanentemente una tarea

**Parámetros URL**:
- `id`: UUID de la tarea a eliminar

**Respuesta Exitosa (204)**: Sin contenido (solo status code)

### 🚨 **Manejo de Errores de la API**

| Código | Significado | Cuándo Ocurre |
|--------|-------------|---------------|
| `400` | Bad Request | Datos inválidos, validaciones fallidas |
| `404` | Not Found | Tarea no existe con ese ID |
| `500` | Server Error | Error interno del servidor o base de datos |

### 🔒 **Validaciones Implementadas**

#### **Validaciones de Título**
- **Requerido**: No puede estar vacío o undefined
- **Longitud**: Entre 1 y 200 caracteres
- **Sanitización**: Se eliminan espacios al inicio y final
- **Caracteres**: No se permiten caracteres especiales peligrosos

#### **Validaciones de Descripción**
- **Opcional**: Puede estar vacía o undefined
- **Longitud**: Máximo 500 caracteres
- **Sanitización**: Se eliminan espacios al inicio y final

#### **Validaciones de ID**
- **Formato**: Debe ser UUID válido v4
- **Existencia**: Se verifica que la tarea existe antes de operar

## 🧪 **Testing Completo**

### 🔬 **Testing del Sistema Completo**

#### **Test de Integración Frontend-Backend**
**Propósito**: Verificar que ambas partes funcionan juntas correctamente

**Pasos del test**:
1. **Iniciar Backend**: Verificar que API responde en puerto 3000
2. **Iniciar Frontend**: Verificar que SPA carga en puerto 5173
3. **Crear Tarea**: Usar interfaz para crear tarea y verificar en base de datos
4. **Obtener Tareas**: Verificar que frontend muestra tareas del backend
5. **Actualizar Tarea**: Cambiar estado y verificar persistencia
6. **Eliminar Tarea**: Borrar desde interfaz y verificar eliminación

#### **Scripts de Testing Automatizado**

**Testing Backend** (desde directorio `back/`):
```bash
# Script completo de testing de API
chmod +x test-api.sh
./test-api.sh
```

**Testing Frontend** (usando navegador):
```javascript
// Ejecutar en consola del navegador (F12)
// Script completo que prueba todas las funcionalidades
```

### 🔍 **Testing Manual Paso a Paso**

#### **Test 1: Flujo Completo de Usuario**
1. **Acceso inicial**: Abrir http://localhost:5173
2. **Estado inicial**: Verificar que muestra "No hay tareas" y estadísticas en 0
3. **Crear primera tarea**: Título "Mi primera tarea", sin descripción
4. **Verificar creación**: Debe aparecer en lista instantáneamente
5. **Crear segunda tarea**: Con título y descripción completa
6. **Probar filtros**: Cambiar entre "Todas", "Pendientes", "Completadas"
7. **Completar tarea**: Marcar primera tarea como completada
8. **Verificar estadísticas**: Números deben actualizarse automáticamente
9. **Editar tarea**: Modificar título de segunda tarea
10. **Eliminar tarea**: Borrar una tarea con confirmación

#### **Test 2: Validaciones y Errores**
1. **Crear sin título**: Intentar enviar formulario vacío → debe mostrar error
2. **Título muy largo**: Escribir más de 200 caracteres → debe limitar
3. **Descripción muy larga**: Escribir más de 500 caracteres → debe mostrar contador
4. **Backend desconectado**: Parar backend y probar operaciones → debe mostrar error de conexión

#### **Test 3: Responsividad**
1. **Vista Desktop**: Verificar layout completo en pantalla grande
2. **Vista Tablet**: Cambiar a resolución media, verificar adaptación
3. **Vista Móvil**: Cambiar a resolución pequeña, verificar usabilidad
4. **Orientación**: Probar portrait y landscape en móvil

### 📊 **Testing de Performance**

#### **Métricas a Verificar**
- **Tiempo de carga inicial**: < 2 segundos
- **Tiempo de respuesta API**: < 100ms para operaciones básicas
- **Uso de memoria**: Estable durante uso prolongado
- **Responsividad UI**: Sin lag en interacciones

#### **Test de Carga**
```bash
# Crear múltiples tareas simultáneamente
for i in {1..50}; do
  curl -X POST http://localhost:3000/api/tasks \
    -H "Content-Type: application/json" \
    -d "{\"title\": \"Tarea $i\"}" &
done
wait
```

## 🚀 **Deployment (Puesta en Producción)**

### 🏗️ **Preparación para Deploy**

#### **Backend - Build de Producción**
```bash
cd back
npm run build          # Compila TypeScript a JavaScript
npm run test          # Ejecuta tests (si existen)
```

#### **Frontend - Build de Producción**
```bash
cd front
npm run build         # Compila Vue/TypeScript, optimiza assets
npm run preview       # Previsualizar build localmente
```

### ☁️ **Opciones de Deployment**

#### **🔧 Backend Deployment**

**Railway** (Recomendado para Backend):
1. **Conectar repositorio** desde dashboard de Railway
2. **Configurar variables** de entorno necesarias
3. **Deploy automático** en cada push a main branch

**Heroku**:
1. **Instalar Heroku CLI**: `npm install -g heroku`
2. **Login**: `heroku login`
3. **Crear app**: `heroku create tu-app-backend`
4. **Deploy**: `git push heroku main`

**DigitalOcean App Platform**:
1. **Conectar repositorio** desde panel de control
2. **Configurar build**: Detecta automáticamente Node.js
3. **Variables de entorno**: Configurar en dashboard

#### **🎨 Frontend Deployment**

**Netlify** (Recomendado para Frontend):
1. **Conectar GitHub**: Vincular repositorio desde dashboard
2. **Configurar build**:
   - Build command: `npm run build`
   - Publish directory: `dist`
3. **Deploy automático**: En cada push a main

**Vercel**:
1. **Importar proyecto**: Desde GitHub en dashboard de Vercel
2. **Configuración automática**: Detecta Vue.js automáticamente
3. **Domain personalizado**: Configurar si se desea

**GitHub Pages**:
1. **Build local**: `npm run build`
2. **Deploy**: Push carpeta `dist` a rama `gh-pages`
3. **Configurar**: Habilitar GitHub Pages en configuración del repo

### ⚙️ **Variables de Entorno para Producción**

#### **Backend (.env)**
```env
NODE_ENV=production
PORT=3000
DB_PATH=/app/data/tasks.db
CORS_ORIGIN=https://tu-frontend.netlify.app
LOG_LEVEL=warn
```

#### **Frontend (.env.production)**
```env
VITE_API_URL=https://tu-backend.railway.app/api
VITE_APP_TITLE=Gestor de Tareas
```

### 🔒 **Configuraciones de Seguridad**

#### **Backend Security**
- **CORS**: Configurado solo para dominios autorizados
- **Helmet**: Headers de seguridad (si se implementa)
- **Rate Limiting**: Límite de peticiones por IP (futuro)
- **Input Validation**: Sanitización de todos los inputs

#### **Frontend Security**
- **HTTPS**: Forzar conexiones seguras en producción
- **CSP**: Content Security Policy headers
- **Environment Variables**: Nunca exponer secrets en frontend

### 📊 **Monitoreo en Producción**

#### **Health Checks**
- **Backend**: Endpoint `/health` para verificar estado
- **Database**: Verificación de conexión automática
- **Frontend**: Service Workers para monitoreo (futuro)

#### **Logging**
- **Backend**: Logs estructurados en formato JSON
- **Errores**: Logging automático de errores no manejados
- **Métricas**: Tracking de uso y performance

## 🔧 **Troubleshooting (Solución de Problemas)**

### 🚨 **Problemas Comunes de Instalación**

#### **Error: Node.js versión incorrecta**
**Síntoma**: Error al ejecutar `npm install`
**Solución**:
```bash
# Verificar versión actual
node --version

# Si es menor a v18, actualizar Node.js:
# 1. Descargar desde https://nodejs.org/
# 2. O usar nvm (Linux/Mac):
nvm install 18
nvm use 18
```

#### **Error: Puerto 3000 ya en uso**
**Síntoma**: `EADDRINUSE: address already in use :::3000`
**Solución**:
```bash
# Encontrar proceso usando puerto 3000
lsof -i :3000
# o en Windows:
netstat -ano | findstr :3000

# Terminar proceso
kill -9 PID_DEL_PROCESO
# o cambiar puerto:
PORT=3001 npm run dev
```

#### **Error: Cannot find module**
**Síntoma**: Error de módulo no encontrado tras `npm install`
**Solución**:
```bash
# Limpiar cache y reinstalar
rm -rf node_modules package-lock.json
npm cache clean --force
npm install
```

### 🌐 **Problemas de Comunicación Frontend-Backend**

#### **Error: Network Error / CORS**
**Síntoma**: Frontend no puede conectar con backend
**Diagnóstico**:
1. **Verificar backend**: `curl http://localhost:3000` debe responder
2. **Verificar CORS**: Revisar configuración en servidor
3. **Verificar URL**: Comprobar URL de API en frontend

**Solución**:
```typescript
// En backend/src/server.ts verificar configuración CORS
app.use(cors({
  origin: ['http://localhost:5173', 'http://localhost:3000'],
  methods: ['GET', 'POST', 'PUT', 'DELETE']
}));
```

#### **Error: 404 en rutas de API**
**Síntoma**: `404 Not Found` en peticiones a `/api/tasks`
**Solución**:
1. **Verificar rutas**: Confirmar que rutas están registradas
2. **Verificar URL**: Asegurar que URL coincide exactamente
3. **Verificar middleware**: Confirmar que rutas están montadas

### 💾 **Problemas de Base de Datos**

#### **Error: Database locked**
**Síntoma**: `SQLITE_BUSY: database is locked`
**Solución**:
```bash
# Cerrar todas las conexiones a la base de datos
# Reiniciar el servidor backend
# Si persiste, eliminar archivo de bloqueo:
rm database/tasks.db-wal database/tasks.db-shm
```

#### **Error: Base de datos corrupta**
**Síntoma**: Errores aleatorios de SQLite
**Solución**:
```bash
# Backup de datos (si es posible)
cp database/tasks.db database/tasks-backup.db

# Recrear base de datos
rm database/tasks.db*
npm run dev  # Se creará automáticamente
```

### 🎨 **Problemas de Frontend**

#### **Error: Página en blanco**
**Síntoma**: Frontend carga pero muestra página vacía
**Diagnóstico**:
1. **Abrir DevTools** (F12) y revisar Console
2. **Verificar errores** JavaScript
3. **Revisar Network** tab para peticiones fallidas

**Soluciones comunes**:
- **Error de sintaxis**: Revisar último código agregado
- **Error de importación**: Verificar rutas de imports
- **Error de TypeScript**: Ejecutar `npm run type-check`

#### **Error: Estilos no cargan**
**Síntoma**: Aplicación funciona pero sin estilos
**Solución**:
```bash
# Verificar que TailwindCSS está instalado
npm list tailwindcss

# Reinstalar dependencias de desarrollo
npm install --save-dev tailwindcss postcss autoprefixer

# Verificar configuración
npx tailwindcss init -p
```

### 🧪 **Problemas de Testing**

#### **Error: Tests fallan**
**Síntoma**: Scripts de testing no funcionan
**Solución**:
1. **Verificar servidores**: Backend y frontend deben estar ejecutándose
2. **Verificar conexión**: Probar URLs manualmente en navegador
3. **Revisar scripts**: Verificar que scripts tienen permisos de ejecución

### 📱 **Problemas de Performance**

#### **Síntoma: Aplicación lenta**
**Diagnóstico**:
1. **Network tab**: Verificar tiempo de peticiones HTTP
2. **Performance tab**: Analizar renderizado de componentes
3. **Memory tab**: Verificar uso de memoria

**Soluciones**:
- **Optimizar images**: Comprimir assets grandes
- **Lazy loading**: Implementar carga bajo demanda
- **Debouncing**: Reducir frecuencia de peticiones

### 🆘 **Cómo Obtener Ayuda**

#### **Logs de Diagnóstico**
```bash
# Backend logs
cd back
npm run dev 2>&1 | tee backend.log

# Frontend logs
cd front
npm run dev 2>&1 | tee frontend.log

# System info
node --version > system-info.txt
npm --version >> system-info.txt
git --version >> system-info.txt
```

#### **Información Útil para Reportar Problemas**
1. **Versión Node.js**: `node --version`
2. **Sistema Operativo**: Windows/Mac/Linux + versión
3. **Navegador**: Chrome/Firefox/Safari + versión
4. **Pasos para reproducir**: Secuencia exacta de acciones
5. **Logs de error**: Copiar errores completos de consola
6. **Screenshots**: Imágenes del problema si es visual

## 🤝 **Contribución al Proyecto**

### 📋 **Cómo Contribuir**

#### **1. Fork y Clone**
```bash
# Fork del repositorio en GitHub
# Luego clonar tu fork:
git clone https://github.com/TU-USUARIO/todo-app.git
cd todo-app
```

#### **2. Configurar Entorno**
```bash
# Instalar dependencias
cd back && npm install
cd ../front && npm install

# Crear branch para tu feature
git checkout -b feature/nueva-funcionalidad
```

#### **3. Desarrollo**
- **Seguir convenciones** de código establecidas
- **Agregar tests** para nuevas funcionalidades
- **Documentar cambios** en código y README si es necesario
- **Probar exhaustivamente** antes de commit

#### **4. Pull Request**
```bash
# Commit con mensaje descriptivo
git add .
git commit -m "feat: agregar funcionalidad X"

# Push a tu fork
git push origin feature/nueva-funcionalidad

# Crear Pull Request en GitHub
```

### 📝 **Convenciones de Código**

#### **Nombres y Estructura**
- **Componentes Vue**: PascalCase (`TaskForm.vue`)
- **Variables**: camelCase (`taskList`, `isLoading`)
- **Constantes**: UPPER_SNAKE_CASE (`API_BASE_URL`)
- **Archivos**: kebab-case (`task-controller.ts`)

#### **Commits**
```bash
feat: nueva funcionalidad
fix: corrección de bug
docs: actualización de documentación
style: cambios de formato (no afectan lógica)
refactor: refactorización de código
test: agregar o modificar tests
chore: tareas de mantenimiento
```

#### **TypeScript**
- **Tipado estricto**: Todos los parámetros y retornos tipados
- **Interfaces**: Definir para todos los objetos complejos
- **Enums**: Usar para valores constantes relacionados
- **Generics**: Cuando sea apropiado para reutilización

### 🧪 **Testing de Contribuciones**

#### **Antes de Pull Request**
```bash
# Backend
cd back
npm run build    # Debe compilar sin errores
npm run test     # Todos los tests deben pasar

# Frontend
cd front
npm run build    # Debe compilar sin errores
npm run type-check  # Sin errores de TypeScript
```

#### **Testing Manual Requerido**
1. **Crear tarea**: Verificar que funciona correctamente
2. **Editar tarea**: Probar modificación de datos
3. **Eliminar tarea**: Confirmar eliminación
4. **Filtros**: Probar todos los filtros
5. **Responsivo**: Verificar en móvil y desktop

### 🏆 **Reconocimientos**

#### **Tipos de Contribuciones Valoradas**
- **Nuevas funcionalidades**: Features que mejoren la experiencia
- **Corrección de bugs**: Fixes de problemas existentes
- **Mejoras de UI/UX**: Optimizaciones de interfaz
- **Optimizaciones**: Mejoras de performance
- **Documentación**: Mejoras en README y comentarios
- **Testing**: Agregar tests automatizados
- **Accessibility**: Mejoras de accesibilidad

#### **Proceso de Review**
1. **Review automático**: GitHub Actions (si configurado)
2. **Review manual**: Maintainer revisa código
3. **Testing**: Verificación de funcionalidad
4. **Merge**: Integración a rama principal
5. **Deploy**: Actualización automática en producción

## 📄 **Licencia y Derechos**

### 📜 **Licencia MIT**

Este proyecto está licenciado bajo la Licencia MIT - ver archivo `LICENSE` para detalles.

**Resumen de permisos**:
- ✅ **Uso comercial**: Permitido usar en proyectos comerciales
- ✅ **Modificación**: Permitido modificar el código
- ✅ **Distribución**: Permitido distribuir copias
- ✅ **Uso privado**: Permitido uso en proyectos privados

**Condiciones**:
- 📋 **Incluir licencia**: Debe incluirse en todas las copias
- 📋 **Incluir copyright**: Mantener notice de copyright original

**Limitaciones**:
- ❌ **Sin garantía**: Software proporcionado "as is"
- ❌ **Sin responsabilidad**: Autores no responsables por daños

### 👥 **Créditos y Reconocimientos**

#### **Tecnologías Utilizadas**
- **Vue.js**: Framework JavaScript reactivo
- **TypeScript**: Lenguaje con tipado estático
- **TailwindCSS**: Framework CSS utilitario
- **Express**: Framework web para Node.js
- **SQLite**: Base de datos embebida
- **Vite**: Build tool y servidor de desarrollo

#### **Recursos y Referencias**
- **Iconografía**: Heroicons (https://heroicons.com/)
- **Paleta de colores**: TailwindCSS default palette
- **Fuentes**: Inter font family
- **Documentación**: Inspirado en mejores prácticas de docs

---

## 🎯 **Resumen Ejecutivo**

### ✅ **Lo que Tienes Funcionando**

- **✅ Frontend Completo**: SPA Vue 3 con TypeScript y TailwindCSS
- **✅ Backend Robusto**: API REST con Express, TypeScript y SQLite
- **✅ CRUD Completo**: Crear, leer, actualizar y eliminar tareas
- **✅ Filtros Dinámicos**: Todas, pendientes, completadas
- **✅ Estadísticas**: Contadores en tiempo real
- **✅ Diseño Responsivo**: Funciona en móvil, tablet y desktop
- **✅ Validaciones**: Frontend y backend
- **✅ Manejo de Errores**: Sistema robusto de error handling
- **✅ Documentación**: READMEs completos y detallados
- **✅ Testing**: Scripts de verificación manual
- **✅ Deploy Ready**: Configurado para despliegue en producción

### 🎖️ **Logros Técnicos**

- **Arquitectura Full Stack** moderna y escalable
- **Tipado TypeScript** completo en frontend y backend
- **Performance optimizada** con Vite y optimizaciones de bundle
- **Experiencia de usuario** fluida con animaciones y feedback
- **Código mantenible** con estructura modular y documentación
- **Práticas de desarrollo** siguiendo estándares de la industria

### 🚀 **Listo Para Usar**

**Esta aplicación está completamente funcional y lista para:**
- ✅ **Desarrollo**: Continuar agregando funcionalidades
- ✅ **Producción**: Desplegar en servidores reales
- ✅ **Portfolio**: Mostrar como proyecto demostración
- ✅ **Base**: Usar como punto de partida para proyectos más grandes
- ✅ **Aprendizaje**: Estudiar implementación de tecnologías modernas

---

<div align="center">

**🎉 ¡Proyecto completado exitosamente! 🎉**

**Desarrollado con ❤️ usando Vue 3, TypeScript, Express y SQLite**

</div>
"# PruebaTecnicaExpresList"  
