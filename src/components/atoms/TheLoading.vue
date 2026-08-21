<script setup lang="ts">
import { useLoading } from "@/stores/useLoading"
const loading = useLoading()
</script>

<template>
    <Transition name="loading">
        <div
            class="fixed z-10 inset-0 bg-black/50 backdrop-blur-sm grid place-content-center duration-300"
            v-if="loading.isLoading"
        >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="150" height="150">
                <g fill="#4af626" stroke="#4af626" stroke-width="6">
                    <circle r="20" cx="140" cy="60">
                        <animateTransform
                            attributeName="transform"
                            type="translate"
                            calcMode="spline"
                            dur="3"
                            values="0 0;0 80;0 80;0 80;-80 80;"
                            keySplines=".5 0 .5 1;.5 0 .5 1;.5 0 .5 1;.5 0 .5 1"
                            repeatCount="indefinite"
                        ></animateTransform>
                    </circle>
                    <circle r="20" cx="60" cy="60">
                        <animateTransform
                            attributeName="transform"
                            type="translate"
                            calcMode="spline"
                            dur="3"
                            values="0 0;0 0;80 0;80 0;80 0;"
                            keySplines=".5 0 .5 1;.5 0 .5 1;.5 0 .5 1;.5 0 .5 1"
                            repeatCount="indefinite"
                        ></animateTransform>
                    </circle>
                    <circle r="20" cx="60" cy="140">
                        <animateTransform
                            attributeName="transform"
                            type="translate"
                            calcMode="spline"
                            dur="3"
                            values="0 0;0 0 ;0 0;0 -80;0 -80;"
                            keySplines=".5 0 .5 1;.5 0 .5 1;.5 0 .5 1;.5 0 .5 1"
                            repeatCount="indefinite"
                        ></animateTransform>
                    </circle>
                </g>
            </svg>
        </div>
    </Transition>
</template>

<style lang="scss" scoped>
.loading-enter-to,
.loading-leave-from {
    opacity: 1;
}

.loading-enter-from,
.loading-leave-to {
    opacity: 0;
}
</style>
