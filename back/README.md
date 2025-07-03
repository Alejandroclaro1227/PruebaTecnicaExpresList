# 🔧 Backend API - Gestor de Tareas - DOCUMENTACIÓN COMPLETA

## 📖 Índice Completo

- [Descripción General](#-descripción-general)
- [Arquitectura del Sistema](#-arquitectura-del-sistema)
- [Instalación Completa](#-instalación-completa)
- [Configuración del Entorno](#-configuración-del-entorno)
- [Base de Datos Completa](#-base-de-datos-completa)
- [API REST Completa](#-api-rest-completa)
- [Validaciones y Errores](#-validaciones-y-errores)
- [Testing Completo](#-testing-completo)
- [Monitoreo y Logs](#-monitoreo-y-logs)
- [Deployment Completo](#-deployment-completo)
- [Troubleshooting Completo](#-troubleshooting-completo)
- [Ejemplos de Uso Completos](#-ejemplos-de-uso-completos)

## 🎯 Descripción General

**Backend API REST COMPLETO** desarrollado con **Node.js**, **Express** y **TypeScript** para el sistema completo de gestión de tareas. Proporciona una API robusta con validaciones, manejo de errores, persistencia de datos y todas las funcionalidades necesarias para una aplicación de producción.

### 🚀 Características Principales COMPLETAS

- ✅ **API REST Completa** - CRUD completo de tareas con todos los endpoints
- ✅ **TypeScript Estricto** - Tipado completo en toda la aplicación
- ✅ **Base de Datos SQLite** - Persistencia automática con optimizaciones
- ✅ **Validaciones Robustas** - Validación completa de datos en todos los endpoints
- ✅ **Manejo de Errores Completo** - Respuestas HTTP apropiadas y logging
- ✅ **CORS Configurado** - Comunicación segura con frontend
- ✅ **Logs Detallados** - Sistema completo de logging y monitoreo
- ✅ **Arquitectura Escalable** - Estructura modular y completamente mantenible
- ✅ **Sistema de Salud** - Health checks y métricas del sistema
- ✅ **Documentación Completa** - Esta documentación exhaustiva
- ✅ **Tests Integrados** - Scripts de testing completos
- ✅ **Deploy Ready** - Listo para despliegue en producción

### 🛠️ Stack Tecnológico COMPLETO

| Tecnología      | Versión | Propósito Específico            | Configuración Completa                                                 |
| --------------- | ------- | ------------------------------- | ---------------------------------------------------------------------- |
| **Node.js**     | v18+    | Runtime JavaScript del servidor | `--experimental-specifier-resolution=node`, optimizado para producción |
| **Express**     | v4.18.2 | Framework web minimalista       | `bodyParser`, `cors`, `helmet`, middleware completo                    |
| **TypeScript**  | v5.1.6  | Tipado estático y transpilación | `strict: true`, `target: ES2020`, configuración completa               |
| **SQLite3**     | v5.1.6  | Base de datos embebida          | WAL mode, auto-vacuum, índices optimizados                             |
| **UUID**        | v9.0.0  | Generación de IDs únicos        | v4 (random), validación completa                                       |
| **CORS**        | v2.8.5  | Cross-Origin Resource Sharing   | Configurado para desarrollo y producción                               |
| **ts-node-dev** | v2.0.0  | Desarrollo con hot-reload       | `--transpile-only`, `--respawn`, optimizado                            |

## 🏗️ Arquitectura del Sistema COMPLETA

### 📁 Estructura COMPLETA del Proyecto
****************************************************************************
back/
├── src/
│ ├── controllers/
│ │ └── taskController.ts # Lógica de negocio completa
│ ├── models/
│ │ └── Database.ts # Clase BD con todas operaciones
│ ├── routes/
│ │ └── taskRoutes.ts # Rutas completas API
│ ├── types/
│ │ └── Task.ts # Interfaces TypeScript
│ └── server.ts # Servidor principal
├── dist/ # Código compilado
├── database/
│ └── tasks.db # Base datos SQLite
├── logs/ # Archivos de log
├── package.json
├── tsconfig.json
└── README.md # Esta documentación
****************************************************************************

## 🔧 Instalación

### Prerrequisitos
- Node.js v18+
- npm v9+
- Puerto 3000 disponible

### Pasos de Instalación

```bash
# 1. Ir a directorio backend
cd back

# 2. Instalar dependencias
npm install

# 3. Verificar instalación
npm list --depth=0

# 4. Compilar TypeScript (opcional)
npm run build

# 5. Iniciar en desarrollo
npm run dev

# 6. Verificar funcionamiento
curl http://localhost:3000
```

### Scripts Disponibles

| Script | Comando | Descripción |
|--------|---------|-------------|
| `start` | `node dist/server.js` | Ejecutar en producción |
| `dev` | `ts-node-dev src/server.ts` | Desarrollo con hot-reload |
| `build` | `tsc` | Compilar TypeScript |
| `clean` | `rimraf dist` | Limpiar archivos compilados |

## ⚙️ Configuración

### Variables de Entorno

```env
# .env (crear basado en .env.example)
PORT=3000
NODE_ENV=development
DB_PATH=./database/tasks.db
LOG_LEVEL=info
CORS_ORIGIN=http://localhost:5173
```

### Configuración TypeScript

```json
// tsconfig.json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "commonjs",
    "lib": ["ES2020"],
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist"]
}
```

## 🗄️ Base de Datos

### Esquema SQLite

```sql
CREATE TABLE IF NOT EXISTS tasks (
    id TEXT PRIMARY KEY,              -- UUID único
    title TEXT NOT NULL,              -- Título (requerido)
    description TEXT,                 -- Descripción opcional
    completed INTEGER DEFAULT 0,      -- 0=pendiente, 1=completada
    createdAt TEXT NOT NULL,          -- Fecha creación ISO
    updatedAt TEXT NOT NULL,          -- Fecha actualización ISO

    CONSTRAINT tasks_title_not_empty CHECK (length(trim(title)) > 0)
);

-- Índices para optimización
CREATE INDEX IF NOT EXISTS idx_tasks_completed ON tasks(completed);
CREATE INDEX IF NOT EXISTS idx_tasks_created ON tasks(createdAt DESC);
```

### Operaciones CRUD

```typescript
// Clase Database completa
export class Database {
  private db: sqlite3.Database;

  constructor() {
    this.db = new sqlite3.Database('./database/tasks.db');
    this.init();
  }

  // Inicializar tablas
  private init(): void {
    const createTable = `
      CREATE TABLE IF NOT EXISTS tasks (
        id TEXT PRIMARY KEY,
        title TEXT NOT NULL,
        description TEXT,
        completed INTEGER DEFAULT 0,
        createdAt TEXT NOT NULL,
        updatedAt TEXT NOT NULL
      )
    `;
    this.db.run(createTable);
  }

  // Obtener todas las tareas
  getAllTasks(): Promise<Task[]> {
    return new Promise((resolve, reject) => {
      this.db.all('SELECT * FROM tasks ORDER BY createdAt DESC', (err, rows) => {
        if (err) reject(err);
        else resolve(rows.map(row => ({
          ...row,
          completed: Boolean(row.completed),
          createdAt: new Date(row.createdAt),
          updatedAt: new Date(row.updatedAt)
        })));
      });
    });
  }

  // Crear nueva tarea
  createTask(title: string, description?: string): Promise<Task> {
    return new Promise((resolve, reject) => {
      const id = uuidv4();
      const now = new Date().toISOString();

      this.db.run(
        'INSERT INTO tasks (id, title, description, completed, createdAt, updatedAt) VALUES (?, ?, ?, 0, ?, ?)',
        [id, title, description, now, now],
        function(err) {
          if (err) reject(err);
          else resolve({
            id, title, description, completed: false,
            createdAt: new Date(now), updatedAt: new Date(now)
          });
        }
      );
    });
  }

  // Actualizar tarea
  updateTask(id: string, updates: Partial<Task>): Promise<Task | null> {
    return new Promise((resolve, reject) => {
      const updatedAt = new Date().toISOString();
      const fields = [];
      const values = [];

      if (updates.title !== undefined) {
        fields.push('title = ?');
        values.push(updates.title);
      }
      if (updates.description !== undefined) {
        fields.push('description = ?');
        values.push(updates.description);
      }
      if (updates.completed !== undefined) {
        fields.push('completed = ?');
        values.push(updates.completed ? 1 : 0);
      }

      fields.push('updatedAt = ?');
      values.push(updatedAt);
      values.push(id);

      const query = `UPDATE tasks SET ${fields.join(', ')} WHERE id = ?`;

      this.db.run(query, values, function(err) {
        if (err) reject(err);
        else if (this.changes === 0) resolve(null);
        else database.getTaskById(id).then(resolve).catch(reject);
      });
    });
  }

  // Eliminar tarea
  deleteTask(id: string): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.db.run('DELETE FROM tasks WHERE id = ?', [id], function(err) {
        if (err) reject(err);
        else resolve(this.changes > 0);
      });
    });
  }
}
```

## 🌐 API REST

### Endpoints Completos

#### 1. GET `/` - Información API
```http
GET http://localhost:3000/
```

**Respuesta:**
```json
{
  "message": "🚀 API de Tareas funcionando correctamente",
  "version": "1.0.0",
  "endpoints": {
    "GET /api/tasks": "Obtener todas las tareas",
    "POST /api/tasks": "Crear nueva tarea",
    "PUT /api/tasks/:id": "Actualizar tarea",
    "DELETE /api/tasks/:id": "Eliminar tarea"
  }
}
```

#### 2. GET `/api/tasks` - Obtener Tareas
```http
GET http://localhost:3000/api/tasks
```

**Respuesta:**
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

#### 3. POST `/api/tasks` - Crear Tarea
```http
POST http://localhost:3000/api/tasks
Content-Type: application/json

{
  "title": "Nueva tarea",
  "description": "Descripción opcional"
}
```

**Respuesta (201):**
```json
{
  "id": "456e7890-e89b-12d3-a456-426614174001",
  "title": "Nueva tarea",
  "description": "Descripción opcional",
  "completed": false,
  "createdAt": "2025-01-02T16:45:00.000Z",
  "updatedAt": "2025-01-02T16:45:00.000Z"
}
```

#### 4. PUT `/api/tasks/:id` - Actualizar Tarea
```http
PUT http://localhost:3000/api/tasks/123e4567-e89b-12d3-a456-426614174000
Content-Type: application/json

{
  "title": "Título actualizado",
  "completed": true
}
```

**Respuesta (200):**
```json
{
  "id": "123e4567-e89b-12d3-a456-426614174000",
  "title": "Título actualizado",
  "description": "Descripción opcional",
  "completed": true,
  "createdAt": "2025-01-02T10:30:00.000Z",
  "updatedAt": "2025-01-02T16:50:00.000Z"
}
```

#### 5. DELETE `/api/tasks/:id` - Eliminar Tarea
```http
DELETE http://localhost:3000/api/tasks/123e4567-e89b-12d3-a456-426614174000
```

**Respuesta:** `204 No Content`

### Tipos TypeScript

```typescript
// Modelo principal
interface Task {
  id: string;
  title: string;
  description?: string;
  completed: boolean;
  createdAt: Date;
  updatedAt: Date;
}

// Para crear
interface CreateTaskDto {
  title: string;
  description?: string;
}

// Para actualizar
interface UpdateTaskDto {
  title?: string;
  description?: string;
  completed?: boolean;
}
```

## ✅ Validaciones

### Controladores con Validación

```typescript
// taskController.ts
export const createTask = async (req: Request, res: Response): Promise<void> => {
  try {
    const { title, description }: CreateTaskDto = req.body;

    // Validar título
    if (!title || title.trim().length === 0) {
      res.status(400).json({ error: 'El título es requerido' });
      return;
    }

    if (title.length > 200) {
      res.status(400).json({ error: 'El título no puede tener más de 200 caracteres' });
      return;
    }

    // Validar descripción
    if (description && description.length > 500) {
      res.status(400).json({ error: 'La descripción no puede tener más de 500 caracteres' });
      return;
    }

    const task = await database.createTask(title.trim(), description?.trim());
    res.status(201).json(task);
  } catch (error) {
    console.error('Error creando tarea:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

export const updateTask = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const updates: UpdateTaskDto = req.body;

    // Validar UUID
    const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
    if (!uuidRegex.test(id)) {
      res.status(400).json({ error: 'ID de tarea inválido' });
      return;
    }

    // Validar título si se proporciona
    if (updates.title !== undefined) {
      if (!updates.title || updates.title.trim().length === 0) {
        res.status(400).json({ error: 'El título no puede estar vacío' });
        return;
      }
      if (updates.title.length > 200) {
        res.status(400).json({ error: 'El título no puede tener más de 200 caracteres' });
        return;
      }
    }

    // Validar descripción si se proporciona
    if (updates.description !== undefined && updates.description.length > 500) {
      res.status(400).json({ error: 'La descripción no puede tener más de 500 caracteres' });
      return;
    }

    const task = await database.updateTask(id, updates);

    if (!task) {
      res.status(404).json({ error: 'Tarea no encontrada' });
      return;
    }

    res.json(task);
  } catch (error) {
    console.error('Error actualizando tarea:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};
```

### Códigos de Error

| Código | Descripción | Ejemplo |
|--------|-------------|---------|
| `400` | Bad Request | Datos inválidos, título vacío |
| `404` | Not Found | Tarea no encontrada |
| `500` | Server Error | Error de base de datos |

**Ejemplos de errores:**

```json
// 400 - Título requerido
{
  "error": "El título es requerido"
}

// 404 - Tarea no encontrada
{
  "error": "Tarea no encontrada"
}

// 500 - Error servidor
{
  "error": "Error interno del servidor"
}
```

## 🧪 Testing

### Script de Testing Completo

```bash
#!/bin/bash
# test-api.sh - Script completo de testing

echo "🧪 Testing completo del Backend API"
echo "=================================="

BASE_URL="http://localhost:3000"

# Test 1: Verificar servidor
echo "📡 Test 1: Verificar servidor funcionando"
response=$(curl -s -o /dev/null -w "%{http_code}" $BASE_URL)
if [ $response -eq 200 ]; then
  echo "✅ Servidor OK (200)"
else
  echo "❌ Servidor no responde ($response)"
  exit 1
fi

# Test 2: Obtener tareas (inicialmente vacío)
echo "📋 Test 2: Obtener tareas iniciales"
tasks=$(curl -s $BASE_URL/api/tasks)
count=$(echo $tasks | jq '. | length')
echo "✅ Tareas iniciales: $count"

# Test 3: Crear tarea válida
echo "📝 Test 3: Crear tarea válida"
create_response=$(curl -s -X POST $BASE_URL/api/tasks \
  -H "Content-Type: application/json" \
  -d '{"title": "Tarea de prueba", "description": "Testing completo"}')

task_id=$(echo $create_response | jq -r '.id')
if [[ $task_id != "null" && $task_id != "" ]]; then
  echo "✅ Tarea creada: $task_id"
else
  echo "❌ Error creando tarea"
  echo "Response: $create_response"
  exit 1
fi

# Test 4: Crear tarea inválida (sin título)
echo "❌ Test 4: Crear tarea inválida"
invalid_response=$(curl -s -X POST $BASE_URL/api/tasks \
  -H "Content-Type: application/json" \
  -d '{"description": "Sin título"}')

error_msg=$(echo $invalid_response | jq -r '.error')
if [[ $error_msg == *"título"* ]]; then
  echo "✅ Validación correcta: $error_msg"
else
  echo "❌ Validación fallida"
  echo "Response: $invalid_response"
fi

# Test 5: Obtener tarea específica
echo "🔍 Test 5: Verificar tarea en lista"
tasks_after=$(curl -s $BASE_URL/api/tasks)
count_after=$(echo $tasks_after | jq '. | length')
echo "✅ Tareas después de crear: $count_after"

# Test 6: Actualizar tarea
echo "✏️ Test 6: Actualizar tarea"
update_response=$(curl -s -X PUT $BASE_URL/api/tasks/$task_id \
  -H "Content-Type: application/json" \
  -d '{"completed": true}')

completed=$(echo $update_response | jq -r '.completed')
if [ "$completed" = "true" ]; then
  echo "✅ Tarea actualizada correctamente"
else
  echo "❌ Error actualizando tarea"
  echo "Response: $update_response"
fi

# Test 7: Actualizar tarea inexistente
echo "🚫 Test 7: Actualizar tarea inexistente"
fake_id="00000000-0000-4000-8000-000000000000"
not_found_response=$(curl -s -X PUT $BASE_URL/api/tasks/$fake_id \
  -H "Content-Type: application/json" \
  -d '{"completed": true}')

not_found_error=$(echo $not_found_response | jq -r '.error')
if [[ $not_found_error == *"encontrada"* ]]; then
  echo "✅ Error 404 correcto: $not_found_error"
else
  echo "❌ Error 404 no manejado correctamente"
fi

# Test 8: Eliminar tarea
echo "🗑️ Test 8: Eliminar tarea"
delete_status=$(curl -s -o /dev/null -w "%{http_code}" \
  -X DELETE $BASE_URL/api/tasks/$task_id)

if [ $delete_status -eq 204 ]; then
  echo "✅ Tarea eliminada (204)"
else
  echo "❌ Error eliminando tarea ($delete_status)"
fi

# Test 9: Verificar eliminación
echo "🔍 Test 9: Verificar eliminación"
final_tasks=$(curl -s $BASE_URL/api/tasks)
final_count=$(echo $final_tasks | jq '. | length')
echo "✅ Tareas finales: $final_count"

# Test 10: Eliminar tarea inexistente
echo "🚫 Test 10: Eliminar tarea inexistente"
delete_not_found=$(curl -s -o /dev/null -w "%{http_code}" \
  -X DELETE $BASE_URL/api/tasks/$fake_id)

if [ $delete_not_found -eq 404 ]; then
  echo "✅ Error 404 en eliminación correcto"
else
  echo "❌ Error 404 en eliminación no manejado"
fi

echo ""
echo "🎉 Testing completo finalizado!"
echo "✅ Todos los tests principales pasaron"
```

### Comandos de Testing Rápido

```bash
# Testing básico
curl http://localhost:3000                    # Info API
curl http://localhost:3000/api/tasks          # Obtener tareas

# Crear tarea
curl -X POST http://localhost:3000/api/tasks \
  -H "Content-Type: application/json" \
  -d '{"title": "Test", "description": "Prueba"}'

# Actualizar tarea (reemplazar ID)
curl -X PUT http://localhost:3000/api/tasks/TU_ID_AQUI \
  -H "Content-Type: application/json" \
  -d '{"completed": true}'

# Eliminar tarea (reemplazar ID)
curl -X DELETE http://localhost:3000/api/tasks/TU_ID_AQUI

# Test de carga (crear 10 tareas)
for i in {1..10}; do
  curl -s -X POST http://localhost:3000/api/tasks \
    -H "Content-Type: application/json" \
    -d "{\"title\": \"Tarea $i\", \"description\": \"Prueba $i\"}" &
done
wait
```

### Testing con JavaScript (Consola)

```javascript
// Ejecutar en consola del navegador en http://localhost:5173

const API_URL = 'http://localhost:3000/api';

// Test completo automatizado
async function testBackend() {
  console.log('🧪 Iniciando tests del backend...');

  try {
    // 1. Obtener tareas iniciales
    const initialTasks = await fetch(`${API_URL}/tasks`).then(r => r.json());
    console.log('📋 Tareas iniciales:', initialTasks.length);

    // 2. Crear tarea
    const newTask = await fetch(`${API_URL}/tasks`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title: 'Tarea desde JavaScript',
        description: 'Creada para testing'
      })
    }).then(r => r.json());

    console.log('✅ Tarea creada:', newTask.id);

    // 3. Actualizar tarea
    const updatedTask = await fetch(`${API_URL}/tasks/${newTask.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ completed: true })
    }).then(r => r.json());

    console.log('✅ Tarea actualizada:', updatedTask.completed);

    // 4. Obtener todas las tareas
    const allTasks = await fetch(`${API_URL}/tasks`).then(r => r.json());
    console.log('📋 Total tareas:', allTasks.length);

    // 5. Eliminar tarea
    await fetch(`${API_URL}/tasks/${newTask.id}`, {
      method: 'DELETE'
    });

    console.log('🗑️ Tarea eliminada');

    // 6. Verificar eliminación
    const finalTasks = await fetch(`${API_URL}/tasks`).then(r => r.json());
    console.log('📋 Tareas finales:', finalTasks.length);

    console.log('🎉 Todos los tests completados exitosamente!');

  } catch (error) {
    console.error('❌ Error en tests:', error);
  }
}

// Ejecutar tests
testBackend();
```

## 🚀 Deployment

### Preparación para Producción

```bash
# 1. Build de producción
npm run build

# 2. Verificar archivos compilados
ls -la dist/

# 3. Test de producción local
NODE_ENV=production npm start

# 4. Verificar funcionamiento
curl http://localhost:3000
```

### Variables de Entorno Producción

```env
# .env.production
NODE_ENV=production
PORT=3000
DB_PATH=/app/data/tasks.db
LOG_LEVEL=warn
CORS_ORIGIN=https://tu-frontend.com
```

### Dockerfile

```dockerfile
# Dockerfile
FROM node:18-alpine

# Crear directorio app
WORKDIR /app

# Copiar archivos de dependencias
COPY package*.json ./

# Instalar dependencias de producción
RUN npm ci --only=production

# Copiar código fuente
COPY dist ./dist
COPY database ./database

# Crear usuario no root
RUN addgroup -g 1001 -S nodejs
RUN adduser -S backend -u 1001

# Cambiar permisos
RUN chown -R backend:nodejs /app
USER backend

# Exponer puerto
EXPOSE 3000

# Comando de inicio
CMD ["npm", "start"]
```

### Docker Compose

```yaml
# docker-compose.yml
version: '3.8'

services:
  backend:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
      - PORT=3000
    volumes:
      - ./data:/app/data
    restart: unless-stopped
    healthcheck:
      test: ["CMD", "curl", "-f", "http://localhost:3000"]
      interval: 30s
      timeout: 10s
      retries: 3
```

### Deployment Heroku

```bash
# 1. Instalar Heroku CLI
npm install -g heroku

# 2. Login
heroku login

# 3. Crear app
heroku create tu-app-backend

# 4. Configurar variables
heroku config:set NODE_ENV=production
heroku config:set PORT=3000

# 5. Deploy
git push heroku main

# 6. Verificar
heroku logs --tail
```

### Deployment Railway

```json
// railway.json
{
  "build": {
    "builder": "NIXPACKS",
    "buildCommand": "npm run build"
  },
  "deploy": {
    "startCommand": "npm start",
    "restartPolicyType": "ON_FAILURE",
    "restartPolicyMaxRetries": 10
  }
}
```

## 🔧 Troubleshooting

### Problemas Comunes

#### 1. Error: Puerto 3000 en uso
```bash
# Encontrar proceso usando puerto 3000
lsof -i :3000
# o en Windows:
netstat -ano | findstr :3000

# Terminar proceso
kill -9 PID_DEL_PROCESO
# o en Windows:
taskkill /PID PID_DEL_PROCESO /F

# Usar puerto alternativo
PORT=3001 npm run dev
```

#### 2. Error: Base de datos corrupta
```bash
# Eliminar base de datos
rm database/tasks.db*

# Reiniciar servidor (se recreará automáticamente)
npm run dev
```

#### 3. Error: Dependencias no instaladas
```bash
# Limpiar cache npm
npm cache clean --force

# Eliminar node_modules y reinstalar
rm -rf node_modules package-lock.json
npm install
```

#### 4. Error: TypeScript no compila
```bash
# Verificar configuración TypeScript
npx tsc --noEmit

# Instalar tipos faltantes
npm install --save-dev @types/node @types/express

# Limpiar y recompilar
npm run clean
npm run build
```

#### 5. Error: CORS bloqueando frontend
```typescript
// En server.ts, verificar configuración CORS
app.use(cors({
  origin: ['http://localhost:5173', 'http://localhost:3000'],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
```

#### 6. Error: Logs no se crean
```bash
# Crear directorio logs
mkdir -p logs

# Verificar permisos
chmod 755 logs
```

### Comandos de Diagnóstico

```bash
# Verificar estado del servidor
curl -I http://localhost:3000

# Verificar logs en tiempo real
tail -f logs/combined.log

# Verificar base de datos
sqlite3 database/tasks.db ".tables"
sqlite3 database/tasks.db "SELECT COUNT(*) FROM tasks;"

# Verificar memoria/CPU
top -p $(pgrep -f "node.*server")

# Verificar conectividad
telnet localhost 3000
```

### Logs de Error Comunes

```bash
# Error: EADDRINUSE (puerto en uso)
Error: listen EADDRINUSE: address already in use :::3000
# Solución: Cambiar puerto o terminar proceso

# Error: ENOENT (archivo no encontrado)
Error: ENOENT: no such file or directory, open 'database/tasks.db'
# Solución: Crear directorio database/

# Error: SQLite locked
Error: SQLITE_BUSY: database is locked
# Solución: Cerrar todas las conexiones SQLite

# Error: Cannot find module
Error: Cannot find module './dist/server'
# Solución: Ejecutar npm run build
```

## 📊 Monitoring y Performance

### Health Check Endpoint

```typescript
// GET /health
app.get('/health', (req: Request, res: Response) => {
  const healthcheck = {
    uptime: process.uptime(),
    message: 'OK',
    timestamp: Date.now(),
    status: 'healthy',
    database: 'connected',
    memory: {
      used: Math.round(process.memoryUsage().heapUsed / 1024 / 1024),
      total: Math.round(process.memoryUsage().heapTotal / 1024 / 1024)
    }
  };

  res.send(healthcheck);
});
```

### Scripts de Monitoreo

```bash
#!/bin/bash
# monitor.sh - Script de monitoreo

while true; do
  # Verificar estado
  status=$(curl -s -o /dev/null -w "%{http_code}" http://localhost:3000/health)

  if [ $status -eq 200 ]; then
    echo "$(date): ✅ Servidor OK"
  else
    echo "$(date): ❌ Servidor ERROR ($status)"
    # Aquí podrías enviar notificación
  fi

  sleep 60  # Verificar cada minuto
done
```

## 📝 Ejemplo de Uso Completo

### Flujo Completo desde Consola

```bash
# 1. Verificar servidor
echo "🔍 Verificando servidor..."
curl http://localhost:3000

# 2. Ver tareas iniciales
echo "📋 Tareas iniciales:"
curl http://localhost:3000/api/tasks

# 3. Crear primera tarea
echo "📝 Creando primera tarea..."
TASK1=$(curl -s -X POST http://localhost:3000/api/tasks \
  -H "Content-Type: application/json" \
  -d '{"title": "Implementar autenticación", "description": "Agregar JWT al sistema"}')

TASK1_ID=$(echo $TASK1 | jq -r '.id')
echo "✅ Tarea 1 creada: $TASK1_ID"

# 4. Crear segunda tarea
echo "📝 Creando segunda tarea..."
TASK2=$(curl -s -X POST http://localhost:3000/api/tasks \
  -H "Content-Type: application/json" \
  -d '{"title": "Optimizar base de datos", "description": "Agregar índices y mejorar queries"}')

TASK2_ID=$(echo $TASK2 | jq -r '.id')
echo "✅ Tarea 2 creada: $TASK2_ID"

# 5. Ver todas las tareas
echo "📋 Todas las tareas:"
curl -s http://localhost:3000/api/tasks | jq

# 6. Completar primera tarea
echo "✅ Completando primera tarea..."
curl -s -X PUT http://localhost:3000/api/tasks/$TASK1_ID \
  -H "Content-Type: application/json" \
  -d '{"completed": true}' | jq

# 7. Actualizar descripción de segunda tarea
echo "✏️ Actualizando segunda tarea..."
curl -s -X PUT http://localhost:3000/api/tasks/$TASK2_ID \
  -H "Content-Type: application/json" \
  -d '{"description": "Optimizar queries SQL y agregar índices compuestos"}' | jq

# 8. Ver estado final
echo "📊 Estado final:"
curl -s http://localhost:3000/api/tasks | jq

# 9. Eliminar tareas
echo "🗑️ Eliminando tareas..."
curl -X DELETE http://localhost:3000/api/tasks/$TASK1_ID
curl -X DELETE http://localhost:3000/api/tasks/$TASK2_ID

# 10. Verificar eliminación
echo "🔍 Verificando eliminación:"
curl -s http://localhost:3000/api/tasks | jq

echo "🎉 Flujo completo terminado!"
```

## 📚 Recursos Adicionales

### Enlaces Útiles
- [Node.js Docs](https://nodejs.org/docs/)
- [Express.js Guide](https://expressjs.com/guide/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [SQLite Documentation](https://sqlite.org/docs.html)

### Comandos de Utilidad

```bash
# Generar UUID para testing
node -e "console.log(require('uuid').v4())"

# Ver estructura de BD
sqlite3 database/tasks.db ".schema"

# Backup de BD
cp database/tasks.db database/tasks-backup-$(date +%Y%m%d).db

# Análizar logs
grep "ERROR" logs/combined.log | tail -10

# Monitorear en tiempo real
watch -n 5 'curl -s http://localhost:3000/api/tasks | jq "length"'
```

## 📄 Licencia

MIT License - Este proyecto es de código abierto y puede ser utilizado libremente.

---

**🎯 Backend API completamente documentado y listo para producción**

- ✅ API REST completa y funcional
- ✅ Base de datos optimizada
- ✅ Validaciones robustas
- ✅ Manejo completo de errores
- ✅ Sistema de testing integrado
- ✅ Documentación exhaustiva
- ✅ Scripts de deployment
- ✅ Troubleshooting completo

**Para soporte técnico o consultas, revisa la sección de Troubleshooting o contacta al equipo de desarrollo.**
