import { computed, ref } from "vue";
import type {
  CreateTaskDto,
  FilterType,
  Task,
  UpdateTaskDto,
} from "../types/Task";

const API_BASE_URL = "http://localhost:3000/api";

export function useTasks() {
  const tasks = ref<Task[]>([]);
  const loading = ref(false);
  const error = ref<string | null>(null);
  const filter = ref<FilterType>("all");

  // Computed para tareas filtradas
  const filteredTasks = computed(() => {
    switch (filter.value) {
      case "completed":
        return tasks.value.filter((task) => task.completed);
      case "pending":
        return tasks.value.filter((task) => !task.completed);
      default:
        return tasks.value;
    }
  });

  // Estadísticas
  const stats = computed(() => ({
    total: tasks.value.length,
    completed: tasks.value.filter((task) => task.completed).length,
    pending: tasks.value.filter((task) => !task.completed).length,
  }));

  // Manejar errores y loading
  const handleAsync = async <T>(
    operation: () => Promise<T>
  ): Promise<T | null> => {
    loading.value = true;
    error.value = null;

    try {
      const result = await operation();
      return result;
    } catch (err) {
      console.error("Error en operación:", err);
      if (err instanceof Error) {
        error.value = err.message;
      } else {
        error.value = "Ocurrió un error inesperado";
      }
      return null;
    } finally {
      loading.value = false;
    }
  };

  // Obtener todas las tareas
  const fetchTasks = async (): Promise<void> => {
    await handleAsync(async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/tasks`);

        if (!response.ok) {
          throw new Error(
            `Error ${response.status}: No se pudieron cargar las tareas`
          );
        }

        const data = await response.json();

        // Convertir fechas string a Date objects
        tasks.value = data.map((task: any) => ({
          ...task,
          createdAt: new Date(task.createdAt),
          updatedAt: new Date(task.updatedAt),
        }));

        return data;
      } catch (fetchError) {
        // Si hay error de conexión, mostrar mensaje específico
        if (fetchError instanceof TypeError) {
          throw new Error(
            "No se pudo conectar al servidor. Asegúrate de que el backend esté ejecutándose en http://localhost:3000"
          );
        }
        throw fetchError;
      }
    });
  };

  // Crear nueva tarea
  const createTask = async (taskData: CreateTaskDto): Promise<boolean> => {
    const result = await handleAsync(async () => {
      const response = await fetch(`${API_BASE_URL}/tasks`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(taskData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || `Error ${response.status}`);
      }

      const newTask = await response.json();

      // Convertir fechas y agregar a la lista
      const taskWithDates = {
        ...newTask,
        createdAt: new Date(newTask.createdAt),
        updatedAt: new Date(newTask.updatedAt),
      };

      tasks.value.unshift(taskWithDates);
      return newTask;
    });

    return result !== null;
  };

  // Actualizar tarea
  const updateTask = async (
    id: string,
    updates: UpdateTaskDto
  ): Promise<boolean> => {
    const result = await handleAsync(async () => {
      const response = await fetch(`${API_BASE_URL}/tasks/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updates),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || `Error ${response.status}`);
      }

      const updatedTask = await response.json();

      // Actualizar en la lista local
      const index = tasks.value.findIndex((task) => task.id === id);
      if (index !== -1) {
        tasks.value[index] = {
          ...updatedTask,
          createdAt: new Date(updatedTask.createdAt),
          updatedAt: new Date(updatedTask.updatedAt),
        };
      }

      return updatedTask;
    });

    return result !== null;
  };

  // Alternar estado completado
  const toggleTaskCompletion = async (id: string): Promise<boolean> => {
    const task = tasks.value.find((t) => t.id === id);
    if (!task) return false;

    return await updateTask(id, { completed: !task.completed });
  };

  // Eliminar tarea
  const deleteTask = async (id: string): Promise<boolean> => {
    const result = await handleAsync(async () => {
      const response = await fetch(`${API_BASE_URL}/tasks/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || `Error ${response.status}`);
      }

      // Remover de la lista local
      tasks.value = tasks.value.filter((task) => task.id !== id);
      return true;
    });

    return result !== null;
  };

  // Limpiar error
  const clearError = () => {
    error.value = null;
  };

  // Cambiar filtro
  const setFilter = (newFilter: FilterType) => {
    filter.value = newFilter;
  };

  return {
    // Estado
    tasks: filteredTasks,
    allTasks: tasks,
    loading,
    error,
    filter,
    stats,

    // Acciones
    fetchTasks,
    createTask,
    updateTask,
    toggleTaskCompletion,
    deleteTask,
    clearError,
    setFilter,
  };
}
