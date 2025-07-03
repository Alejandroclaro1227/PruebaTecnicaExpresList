<template>
  <div
    class="bg-white p-4 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200"
    :class="{ 'opacity-75': task.completed }"
  >
    <div class="flex items-start space-x-3">
      <!-- Checkbox -->
      <button
        @click="$emit('toggle', task.id)"
        :disabled="loading"
        class="flex-shrink-0 mt-1 w-5 h-5 rounded border-2 border-gray-300 flex items-center justify-center transition-colors duration-200 hover:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-1"
        :class="{
          'bg-primary-500 border-primary-500': task.completed,
          'opacity-50 cursor-not-allowed': loading,
        }"
      >
        <svg
          v-if="task.completed"
          class="w-3 h-3 text-white"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fill-rule="evenodd"
            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
            clip-rule="evenodd"
          />
        </svg>
      </button>

      <!-- Contenido de la tarea -->
      <div class="flex-1 min-w-0">
        <h3
          class="text-sm font-medium text-gray-900 mb-1"
          :class="{ 'line-through text-gray-500': task.completed }"
        >
          {{ task.title }}
        </h3>

        <p
          v-if="task.description"
          class="text-sm text-gray-600 mb-2"
          :class="{ 'line-through': task.completed }"
        >
          {{ task.description }}
        </p>

        <div class="flex items-center text-xs text-gray-500 space-x-4">
          <span>Creada: {{ formatDate(task.createdAt) }}</span>
          <span v-if="task.updatedAt.getTime() !== task.createdAt.getTime()">
            Actualizada: {{ formatDate(task.updatedAt) }}
          </span>
        </div>
      </div>

      <!-- Acciones -->
      <div class="flex-shrink-0 flex items-center space-x-2">
        <button
          @click="$emit('edit', task)"
          class="p-2 text-gray-400 hover:text-primary-500 transition-colors duration-200 rounded-md hover:bg-gray-100"
          title="Editar tarea"
        >
          <svg
            class="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
            />
          </svg>
        </button>

        <button
          @click="confirmDelete"
          class="p-2 text-gray-400 hover:text-red-500 transition-colors duration-200 rounded-md hover:bg-red-50"
          title="Eliminar tarea"
        >
          <svg
            class="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Task } from "../types/Task";

// Props
interface Props {
  task: Task;
  loading?: boolean;
}

const props = defineProps<Props>();

// Emits
interface Emits {
  toggle: [id: string];
  edit: [task: Task];
  delete: [id: string];
}

const emit = defineEmits<Emits>();

// Formatear fecha
const formatDate = (date: Date): string => {
  return new Intl.DateTimeFormat("es-ES", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(date);
};

// Confirmar eliminación
const confirmDelete = () => {
  if (confirm("¿Estás seguro de que quieres eliminar esta tarea?")) {
    emit("delete", props.task.id);
  }
};
</script>
