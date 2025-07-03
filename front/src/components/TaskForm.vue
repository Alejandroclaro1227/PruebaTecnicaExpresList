<template>
  <form
    @submit.prevent="handleSubmit"
    class="bg-white p-6 rounded-lg shadow-md mb-6"
  >
    <h2 class="text-xl font-semibold text-gray-800 mb-4">
      {{ editingTask ? "Editar Tarea" : "Nueva Tarea" }}
    </h2>

    <div class="space-y-4">
      <!-- Campo título -->
      <div>
        <label for="title" class="block text-sm font-medium text-gray-700 mb-1">
          Título *
        </label>
        <input
          id="title"
          v-model="formData.title"
          type="text"
          required
          class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          placeholder="Escribe el título de la tarea..."
          :class="{ 'border-red-500': titleError }"
        />
        <p v-if="titleError" class="text-red-500 text-sm mt-1">
          {{ titleError }}
        </p>
      </div>

      <!-- Campo descripción -->
      <div>
        <label
          for="description"
          class="block text-sm font-medium text-gray-700 mb-1"
        >
          Descripción (opcional)
        </label>
        <textarea
          id="description"
          v-model="formData.description"
          rows="3"
          class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
          placeholder="Agrega una descripción..."
        ></textarea>
      </div>

      <!-- Botones -->
      <div class="flex space-x-3">
        <button
          type="submit"
          :disabled="loading || !formData.title.trim()"
          class="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <span v-if="loading">Guardando...</span>
          <span v-else>{{ editingTask ? "Actualizar" : "Crear Tarea" }}</span>
        </button>

        <button
          v-if="editingTask"
          type="button"
          @click="cancelEdit"
          class="btn-secondary"
        >
          Cancelar
        </button>
      </div>
    </div>
  </form>
</template>

<script setup lang="ts">
import { ref, reactive, watch } from "vue";
import type { Task, CreateTaskDto } from "../types/Task";

// Props
interface Props {
  editingTask?: Task | null;
  loading?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  editingTask: null,
  loading: false,
});

// Emits
interface Emits {
  submit: [data: CreateTaskDto];
  cancel: [];
}

const emit = defineEmits<Emits>();

// Estado reactivo del formulario
const formData = reactive<CreateTaskDto>({
  title: "",
  description: "",
});

const titleError = ref<string>("");

// Resetear formulario - declarada antes del watcher
const resetForm = () => {
  formData.title = "";
  formData.description = "";
  titleError.value = "";
};

// Watcher para cargar datos cuando se edita
watch(
  () => props.editingTask,
  (task) => {
    if (task) {
      formData.title = task.title;
      formData.description = task.description || "";
    } else {
      resetForm();
    }
  },
  { immediate: true }
);

// Validar título
const validateTitle = (): boolean => {
  titleError.value = "";

  if (!formData.title.trim()) {
    titleError.value = "El título es requerido";
    return false;
  }

  if (formData.title.trim().length < 3) {
    titleError.value = "El título debe tener al menos 3 caracteres";
    return false;
  }

  return true;
};

// Manejar envío del formulario
const handleSubmit = () => {
  if (!validateTitle()) return;

  const submitData: CreateTaskDto = {
    title: formData.title.trim(),
    description: formData.description?.trim() || undefined,
  };

  emit("submit", submitData);

  if (!props.editingTask) {
    resetForm();
  }
};

// Cancelar edición
const cancelEdit = () => {
  emit("cancel");
  resetForm();
};
</script>
