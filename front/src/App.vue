<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Header -->
    <header class="bg-white shadow-sm">
      <div class="max-w-4xl mx-auto px-4 py-6">
        <h1 class="text-3xl font-bold text-gray-900">📝 Gestor de Tareas</h1>
        <p class="text-gray-600 mt-2">
          Organiza y gestiona tus tareas de manera eficiente
        </p>
      </div>
    </header>

    <!-- Contenido principal -->
    <main class="max-w-4xl mx-auto px-4 py-8">
      <!-- Alert de error -->
      <ErrorAlert v-if="error" :message="error" @close="clearError" />

      <!-- Formulario de tarea -->
      <TaskForm
        :editing-task="editingTask"
        :loading="loading"
        @submit="handleTaskSubmit"
        @cancel="cancelEdit"
      />

      <!-- Filtros y estadísticas -->
      <TaskFilters
        :current-filter="filter"
        :stats="stats"
        @filter-change="setFilter"
      />

      <!-- Loading inicial -->
      <LoadingSpinner
        v-if="loading && allTasks.length === 0"
        message="Cargando tareas..."
      />

      <!-- Lista de tareas -->
      <TaskList
        v-else
        :tasks="tasks"
        :loading="loading"
        :filter="filter"
        @toggle="handleToggleTask"
        @edit="handleEditTask"
        @delete="handleDeleteTask"
      />
    </main>

    <!-- Footer -->
    <footer class="bg-white border-t border-gray-200 mt-16">
      <div class="max-w-4xl mx-auto px-4 py-6">
        <p class="text-center text-gray-500 text-sm">
          Prueba Técnica Full Stack - Vue 3 + TypeScript + Express
        </p>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useTasks } from "./composables/useTasks";
import TaskForm from "./components/TaskForm.vue";
import TaskList from "./components/TaskList.vue";
import TaskFilters from "./components/TaskFilters.vue";
import LoadingSpinner from "./components/LoadingSpinner.vue";
import ErrorAlert from "./components/ErrorAlert.vue";
import type { Task, CreateTaskDto } from "./types/Task";

// Composable para manejo de tareas
const {
  tasks,
  allTasks,
  loading,
  error,
  filter,
  stats,
  fetchTasks,
  createTask,
  updateTask,
  toggleTaskCompletion,
  deleteTask,
  clearError,
  setFilter,
} = useTasks();

// Estado para edición
const editingTask = ref<Task | null>(null);

// Cargar tareas al montar el componente
onMounted(() => {
  fetchTasks();
});

// Manejar envío del formulario
const handleTaskSubmit = async (taskData: CreateTaskDto) => {
  if (editingTask.value) {
    // Actualizar tarea existente
    const success = await updateTask(editingTask.value.id, taskData);
    if (success) {
      editingTask.value = null;
    }
  } else {
    // Crear nueva tarea
    await createTask(taskData);
  }
};

// Manejar toggle de tarea
const handleToggleTask = async (id: string) => {
  await toggleTaskCompletion(id);
};

// Iniciar edición
const handleEditTask = (task: Task) => {
  editingTask.value = task;
  // Scroll al formulario suavemente
  window.scrollTo({ top: 0, behavior: "smooth" });
};

// Cancelar edición
const cancelEdit = () => {
  editingTask.value = null;
};

// Manejar eliminación
const handleDeleteTask = async (id: string) => {
  // Si estamos editando la tarea que se va a eliminar, cancelar edición
  if (editingTask.value?.id === id) {
    editingTask.value = null;
  }
  await deleteTask(id);
};
</script>
