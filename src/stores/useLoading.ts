// Vue
import { ref } from "vue"
import { defineStore } from "pinia"

import { ScrollSmoother } from "gsap/ScrollSmoother"

export const useLoading = defineStore("useLoading", () => {
    const isLoading = ref<boolean>(false)
    const changeLoading = (status: boolean) => {
        const smoother = ScrollSmoother.get()

        isLoading.value = status
        smoother?.paused(status)
    }
    return {
        isLoading,
        changeLoading,
    }
})
