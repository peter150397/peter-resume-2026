<script setup lang="ts">
import { onMounted, onUnmounted, useTemplateRef } from 'vue';
import { ScrollSmoother } from 'gsap/ScrollSmoother';

import type { Portfolio } from "@/types/type";
const props = defineProps<{
    screenShot: Portfolio["screenShot"],
}>()

const smoother = ScrollSmoother.get();
const portfolioImgsBackwardEle = useTemplateRef("portfolio-imgs-backward");
const portfolioImgsForwardEle = useTemplateRef("portfolio-imgs-forward");

const oddScreenShotImgs = props.screenShot.filter((item, index) => index % 2 === 0);
const evenScreenShotImgs = props.screenShot.filter((item, index) => index % 2 === 1)

onMounted(() => {
    if (!portfolioImgsBackwardEle.value || !portfolioImgsForwardEle.value) return
    // window.addEventListener("resize", () => {
    //     if (window.innerWidth > 575) {
    //     }
    // })
    smoother?.effects(portfolioImgsBackwardEle.value, {
        speed: window.innerWidth > 575 ? 1.2 : 0.8,
    });
    smoother?.effects(portfolioImgsForwardEle.value, {
        speed: 0.8,
    });
});
onUnmounted(() => {
    smoother?.effects().forEach(t => t.kill());
});
</script>

<template>
    <section class="overflow-hidden md:py-[100vh] sm:py-[50vh] py-[25vh]">
        <div class="sm:h-screen flex items-center justify-center sm:flex-row flex-col md:gap-10 sm:gap-6 gap-2">
            <div class="flex flex-col gap-[inherit]" ref="portfolio-imgs-backward">
                <img v-for="(img, index) in oddScreenShotImgs" :key="'oddScreenShot-' + index" :src="img" alt=""
                    class="">
            </div>
            <div class="flex flex-col gap-[inherit]" ref="portfolio-imgs-forward">
                <img v-for="(img, index) in evenScreenShotImgs" :key="'evenScreenShot-' + index" :src="img" alt=""
                    class="">
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped></style>
