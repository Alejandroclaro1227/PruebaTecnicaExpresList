import cors from "cors";
import express from "express";
import taskRoutes from "./routes/taskRoutes";

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(
  cors({
    origin: ["http://localhost:5173", "http://localhost:3000"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(express.json());

// Rutas
app.use("/api", taskRoutes);

// Ruta de prueba
app.get("/", (req, res) => {
  res.json({
    message: "🚀 API de Tareas funcionando correctamente",
    version: "1.0.0",
    endpoints: {
      "GET /api/tasks": "Obtener todas las tareas",
      "POST /api/tasks": "Crear nueva tarea",
      "PUT /api/tasks/:id": "Actualizar tarea",
      "DELETE /api/tasks/:id": "Eliminar tarea",
    },
  });
});

// Manejo de errores 404
app.use("*", (req, res) => {
  res.status(404).json({ error: "Ruta no encontrada" });
});

app.listen(PORT, () => {
  console.log(`🚀 Servidor ejecutándose en puerto ${PORT}`);
  console.log(`📊 API disponible en: http://localhost:${PORT}`);
  console.log(`📝 Documentación en: http://localhost:${PORT}`);
});
