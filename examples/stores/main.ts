import {ref} from 'vue'
import {defineStore} from "pinia"

export const useStore = defineStore('main', () => {
    const isLogin = ref(false)

    function logout() {
        //todo
    }

    return {isLogin, logout}
})
