<template>
  <div class="bg-white p-4 rounded-lg shadow-sm border border-gray-200 mb-6">
    <div
      class="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0"
    >
      <!-- Estadísticas -->
      <div class="flex items-center space-x-6 text-sm text-gray-600">
        <div class="flex items-center space-x-2">
          <span class="font-medium">Total:</span>
          <span class="bg-gray-100 px-2 py-1 rounded-full">{{
            stats.total
          }}</span>
        </div>
        <div class="flex items-center space-x-2">
          <span class="font-medium">Completadas:</span>
          <span class="bg-green-100 text-green-800 px-2 py-1 rounded-full">{{
            stats.completed
          }}</span>
        </div>
        <div class="flex items-center space-x-2">
          <span class="font-medium">Pendientes:</span>
          <span class="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full">{{
            stats.pending
          }}</span>
        </div>
      </div>

      <!-- Filtros -->
      <div class="flex space-x-2">
        <button
          v-for="filterOption in filterOptions"
          :key="filterOption.value"
          @click="$emit('filter-change', filterOption.value)"
          class="px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200"
          :class="getFilterButtonClass(filterOption.value)"
        >
          {{ filterOption.label }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { FilterType } from "../types/Task";

// Props
interface Props {
  currentFilter: FilterType;
  stats: {
    total: number;
    completed: number;
    pending: number;
  };
}

const props = defineProps<Props>();

// Emits
interface Emits {
  "filter-change": [filter: FilterType];
}

defineEmits<Emits>();

// Opciones de filtro
const filterOptions = [
  { value: "all" as FilterType, label: "Todas" },
  { value: "pending" as FilterType, label: "Pendientes" },
  { value: "completed" as FilterType, label: "Completadas" },
];

// Clases del botón de filtro
const getFilterButtonClass = (filterValue: FilterType): string => {
  if (props.currentFilter === filterValue) {
    return "bg-primary-500 text-white";
  }

  return "bg-gray-100 text-gray-700 hover:bg-gray-200";
};
</script>
