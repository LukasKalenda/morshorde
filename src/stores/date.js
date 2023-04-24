import { computed, ref } from 'vue'
import { defineStore } from 'pinia'

export const useDateStore = defineStore('date', () => {
  const date = ref(undefined);

  async function load() {
    const response = await fetch('https://morsmordre.cajthaml.eu/datetime', {
      method: "GET"
    }).then(res => res.json());

    date.value = new Date(response.data.iso);
  }

  const formatted = computed(() => {
    return date.value.toLocaleString();
  });

  return { 
    date,
    load,
    formatted
  }
})
