<script setup lang="ts">
import { onMounted, onUnmounted, useTemplateRef } from "vue"

import { ScrollSmoother } from "gsap/ScrollSmoother"

import type { Portfolio } from "@/types/type"
const props = defineProps<{
    images: Portfolio["images"]
}>()

const portfolioParallaxEle = useTemplateRef("portfolio-parallax")
const smoother = ScrollSmoother.get()

onMounted(() => {
    if (!portfolioParallaxEle.value) return
    smoother?.effects(portfolioParallaxEle.value, {
        speed: "auto",
    })
})

onUnmounted(() => {
    smoother?.effects().forEach((t) => t.kill())
})
</script>

<template>
    <section class="flex flex-col items-start sm:gap-[50vh] gap-[25vh] sm:my-[50vh] my-[25vh]">
        <div
            v-for="(item, index) in props.images"
            :key="index"
            class="h-[80vh] sm:w-4/5 w-full overflow-hidden relative"
            :class="index % 2 === 1 ? 'self-end' : ''"
        >
            <img
                :src="item"
                alt=""
                class="h-5/4 w-full object-cover absolute bottom-0"
                ref="portfolio-parallax"
            />
        </div>
    </section>
</template>

<style lang="scss" scoped></style>

<!-- 80 * x = 100 -->
