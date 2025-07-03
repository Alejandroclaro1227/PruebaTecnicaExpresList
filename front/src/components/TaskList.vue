<template>
  <div class="space-y-4">
    <!-- Estado vacío -->
    <div v-if="!loading && tasks.length === 0" class="text-center py-12">
      <div class="text-gray-400 text-6xl mb-4">📝</div>
      <h3 class="text-xl font-medium text-gray-600 mb-2">
        {{ getEmptyMessage() }}
      </h3>
      <p class="text-gray-500">
        {{
          filter === "all"
            ? "Crea tu primera tarea para comenzar"
            : "Prueba con otro filtro"
        }}
      </p>
    </div>

    <!-- Lista de tareas -->
    <TransitionGroup name="task" tag="div" class="space-y-3">
      <TaskItem
        v-for="task in tasks"
        :key="task.id"
        :task="task"
        :loading="loadingTaskId === task.id"
        @toggle="handleToggle"
        @edit="handleEdit"
        @delete="handleDelete"
      />
    </TransitionGroup>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import TaskItem from "./TaskItem.vue";
import type { Task, FilterType } from "../types/Task";

// Props
interface Props {
  tasks: Task[];
  loading?: boolean;
  filter: FilterType;
}

const props = withDefaults(defineProps<Props>(), {
  loading: false,
});

// Emits
interface Emits {
  toggle: [id: string];
  edit: [task: Task];
  delete: [id: string];
}

const emit = defineEmits<Emits>();

// Estado para tracking de operaciones
const loadingTaskId = ref<string | null>(null);

// Handlers
const handleToggle = async (id: string) => {
  loadingTaskId.value = id;
  emit("toggle", id);
  // El loading se limpia desde el parent cuando termina la operación
  setTimeout(() => {
    loadingTaskId.value = null;
  }, 300);
};

const handleEdit = (task: Task) => {
  emit("edit", task);
};

const handleDelete = (id: string) => {
  emit("delete", id);
};

// Mensaje para estado vacío
const getEmptyMessage = (): string => {
  switch (props.filter) {
    case "completed":
      return "No hay tareas completadas";
    case "pending":
      return "No hay tareas pendientes";
    default:
      return "No hay tareas";
  }
};
</script>

<style scoped>
.task-enter-active,
.task-leave-active {
  transition: all 0.3s ease;
}

.task-enter-from {
  opacity: 0;
  transform: translateY(-20px);
}

.task-leave-to {
  opacity: 0;
  transform: translateX(20px);
}

.task-move {
  transition: transform 0.3s ease;
}
</style>
