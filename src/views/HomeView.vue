<script setup>
import {onMounted} from "vue";
import {useDateStore} from "../stores/date.js"
import {usePlaygroundStore} from "../stores/playground.js"

const dateStore = useDateStore();
const playgroundStore = usePlaygroundStore();

onMounted(() => {
    dateStore.load();
    playgroundStore.load();
});
</script>

<template>
  <main>
   {{dateStore.date ? dateStore.formatted : "Lmao nemam"}}

   {{ playgroundStore.playgrounds }}
  </main>
</template>
