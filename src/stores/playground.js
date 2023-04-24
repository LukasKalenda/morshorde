import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
import { useAuthenticationStore } from './auth';

export const usePlaygroundStore = defineStore('playground', () => {
    const authStore = useAuthenticationStore();

  const playgrounds = ref([]);

  async function load() {
    const response = await fetch('https://morsmordre.cajthaml.eu/playground', {
      method: "GET",
      headers: {
        "X-Auth": authStore.token
      }
    }).then(res => res.json());

    playgrounds.value = response.data.playground.filter(f => f.user == 8);
    console.log(response);
  }

  async function create(data) {
    const response = await fetch('https://morsmordre.cajthaml.eu/playground', {
      method: "POST",
      headers: {
        "X-Auth": authStore.token,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    }).then(res => res.json());
  }

  return { 
    playgrounds,
    load,
    create
  }
})
