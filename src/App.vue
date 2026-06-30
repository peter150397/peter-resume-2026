<script setup lang="ts">
// Component
import TheFooter from '@/components/organisms/TheFooter.vue';
import TheHeader from '@/components/organisms/TheHeader.vue';
// Vue
import { onMounted } from 'vue';
// Pinia
import { useGlobalData } from '@/stores/useGlobalData';
// Gsap
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";


const globalData = useGlobalData();

onMounted(() => {
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

    ScrollSmoother.create({
        smooth: 2,
        smoothTouch: 0.1,
        effects: true,
    });
});
</script>

<template>
    <div class="fixed top-0 left-0 w-screen h-screen">
        <img src="@/assets/default/website-bg.jpg" alt="" class="w-full h-full object-cover object-top">
    </div>
    <TheHeader :headerData="globalData.header" :navbarData="globalData.navbar"></TheHeader>
    <main id="smooth-content" class="bg-black/75">
        <router-view></router-view>
        <TheFooter :footerData="globalData.footer" :navbarData="globalData.navbar"></TheFooter>
    </main>
</template>

<style scoped></style>
