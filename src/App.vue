<script setup>
import { RouterLink, RouterView } from 'vue-router'

import {useAuthenticationStore} from "./stores/auth";

const authStore = useAuthenticationStore();

</script>

<template>
    <input type="password" v-model="authStore.token">

    <RouterView />
</template>

<style scoped>
</style>
