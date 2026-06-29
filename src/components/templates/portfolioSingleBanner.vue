<script setup lang="ts">
import MainLink from '@/components/molecules/MainLink.vue';
import SplitTextTitle from '@/components/atoms/SplitTextTitle.vue';

import { onMounted, onUnmounted, useTemplateRef } from 'vue';

import { ScrollSmoother } from 'gsap/ScrollSmoother';

import type { Portfolio } from "@/types/type";
const props = defineProps<{
    banner: Portfolio["banner"],
    title: string
}>()

const portfolioParallaxEle = useTemplateRef("portfolio-parallax");
const smoother = ScrollSmoother.get();

onMounted(() => {
    if (!portfolioParallaxEle.value) return
    smoother?.effects(portfolioParallaxEle.value, {
        speed: "auto"
    });
});

onUnmounted(() => {
    smoother?.effects().forEach(t => t.kill());
});
</script>

<template>
    <section class="h-screen relative z-1 overflow-hidden" id="portfolio-single-banner">
        <img :src="props.banner.bg" alt="" ref="portfolio-parallax"
            class="absolute bottom-0 -z-1 w-full h-[120%] object-cover">
        <div
            class="bg-linear-180 from-black to-black/20 h-full flex flex-col justify-center items-center pt-(--navbar-height)">
            <SplitTextTitle :trigger="'#portfolio-single-banner'" :ele="'h1'" :title="props.title"
                class="text-center" />
            <SplitTextTitle :trigger="'#portfolio-single-banner'" :ele="'h4'" :title="props.banner.creationTime"
                class="text-center mb-6 mt-4" />

            <MainLink v-if="props.banner.link" :url="props.banner.link.url" :text="props.banner.link.text"
                :is-external="props.banner.link.isExternal" class="mx-auto" />
        </div>
        <!-- Scroll Down Icon -->
        <div class="absolute bottom-6 left-1/2 -translate-x-1/2 mix-blend-difference flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 30" width="20" height="30">
                <rect x="1" y="1" rx="10" ry="10" width="18" height="28" stroke="white" stroke-width="2" fill="none" />
                <circle fill="white" cx="10" cy="20" r="5">
                    <animate attributeName="opacity" values="0;1;1;0;0" keyTimes="0;0.2;0.6;0.8;1" dur="1.5s"
                        repeatCount="indefinite" />
                    <animate attributeName="cy" values="20;10;10" keyTimes="0;0.8;1" dur="1.5s"
                        repeatCount="indefinite" />
                </circle>
            </svg>
            <p class="font-500">Scroll To Explore</p>
        </div>
    </section>
</template>

<style lang="scss" scoped></style>
