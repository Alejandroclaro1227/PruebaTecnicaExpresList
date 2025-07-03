<template>
  <div class="flex items-center justify-center py-8">
    <div
      class="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-500"
    ></div>
    <span v-if="message" class="ml-3 text-gray-600">{{ message }}</span>
  </div>
</template>

<script setup lang="ts">
interface Props {
  message?: string;
}

withDefaults(defineProps<Props>(), {
  message: "Cargando...",
});
</script>
