<script setup lang="ts">
// Component
import BaseLink from '@/components/atoms/BaseLink.vue';
import HomePortfolioSwiper from '@/components/atoms/HomePortfolioSwiper.vue';
// Vue
import { onMounted, ref, useTemplateRef } from 'vue';
// Gsap
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Pinia
import { usePortfolioData } from '@/stores/usePortfolioData';

// type
import type { Portfolio } from "@/types/type";

gsap.registerPlugin(ScrollTrigger);

const props = defineProps<{
    homePortfolioID: string[]
}>()

const homePortfolioEle = useTemplateRef("home-portfolio");
const homePortfolioContainerEle = useTemplateRef("home-portfolio-container");

const portfolioData = usePortfolioData();
const allportfolioData = ref<Portfolio[]>([]);

props.homePortfolioID.forEach(id => {
    const item = portfolioData.getPortfolioDataById(id);
    if (item) allportfolioData.value.push(item);
})

onMounted(() => {
    if (!homePortfolioEle.value || !homePortfolioContainerEle.value) return
    const portfolioElWidth = homePortfolioEle.value.getBoundingClientRect().width - 48;
    const portfolioContainerElWinth = homePortfolioContainerEle.value.getBoundingClientRect().width;

    gsap.to(homePortfolioContainerEle.value, {
        x: portfolioElWidth - portfolioContainerElWinth,
        ease: "none",
        scrollTrigger: {
            trigger: homePortfolioEle.value,
            pin: true,
            scrub: 0.5,
            start: `top top`,
            end: () => `+=${portfolioContainerElWinth}`,
        }
    });
});
</script>

<template>
    <section class="overflow-hidden" id="home-portfolio">
        <div ref="home-portfolio" class="container py-15 h-screen">
            <div ref="home-portfolio-container"
                class="h-full grid lowerScreen:grid-rows-[calc(50vh-80px)_calc(50vh-80px)] lowerScreen:auto-cols-[calc(50vh-80px)] grid-rows-[calc(33.333vh-66.667px)_calc(33.333vh-66.667px)_calc(33.333vh-66.667px)] auto-cols-[calc(33.333vh-66.667px)] grid-flow-col gap-10 w-max">
                <div class=""></div>
                <template v-for="(portfolio, index) in allportfolioData" :key="portfolio.id">
                    <BaseLink :url="'/portfolio/' + portfolio.id" :is-external="false"
                        class="col-span-2 rounded-[20px] relative overflow-hidden">
                        <HomePortfolioSwiper :portfolio="portfolio" />
                    </BaseLink>
                    <div v-if="index === 0" class="lowerScreen:hidden"></div>
                </template>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped></style>
