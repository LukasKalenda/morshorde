import { computed, ref, watch } from 'vue'
import { defineStore } from 'pinia'

export const useAuthenticationStore = defineStore('authentication', () => {
    const token = ref(localStorage.getItem("token") ? localStorage.getItem("token") : undefined);

    // function setToken(newToken) {
    //     token.value = newToken;
    //     localStorage.setItem("token", newToken);
    // }

    watch(() => token.value, (newValue, oldValue) => {
        if(newValue != oldValue) {
            localStorage.setItem("token", newValue);
        }
    });

    return { 
        token,
        //setToken
    }
})
