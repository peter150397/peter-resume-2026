<script setup lang="ts">
// Component
import BaseLink from "@/components/atoms/BaseLink.vue"
import HomePortfolioSwiper from "@/components/atoms/HomePortfolioSwiper.vue"
// Vue
import { onMounted, ref, useTemplateRef } from "vue"
// Gsap
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
// conposables
import useAxios from "@/utils/useAxios"
const axios = useAxios()

// Pinia
import { usePortfolioData } from "@/stores/usePortfolioData"
const portfolioData = usePortfolioData()

// type
import type { Portfolio } from "@/types/type"

gsap.registerPlugin(ScrollTrigger)

const homePortfolioEle = useTemplateRef("home-portfolio")
const homePortfolioContainerEle = useTemplateRef("home-portfolio-container")

const data = ref<Portfolio[]>([])
const getData = async () => {
    const res = await axios.get(`/HomePortfolio`)

    const promises = res.data.map((data: { id: string; created_at: string }) => {
        return portfolioData.getSinglePortfolio(data.id)
    })

    data.value = await Promise.all(promises)
}

onMounted(async () => {
    await getData()

    if (!homePortfolioEle.value || !homePortfolioContainerEle.value) return
    const portfolioElWidth = homePortfolioEle.value.getBoundingClientRect().width - 48
    const portfolioContainerElWinth = homePortfolioContainerEle.value.getBoundingClientRect().width

    gsap.to(homePortfolioContainerEle.value, {
        x: portfolioElWidth - portfolioContainerElWinth,
        ease: "none",
        scrollTrigger: {
            trigger: homePortfolioEle.value,
            pin: true,
            scrub: 0.5,
            start: `top top`,
            end: () => `+=${portfolioContainerElWinth}`,
        },
    })
})
</script>

<template>
    <section class="overflow-hidden" id="home-portfolio">
        <div ref="home-portfolio" class="container py-15 h-screen">
            <div
                ref="home-portfolio-container"
                class="h-full grid lowerScreen:grid-rows-[calc(50vh-80px)_calc(50vh-80px)] lowerScreen:auto-cols-[calc(50vh-80px)] grid-rows-[calc(33.333vh-66.667px)_calc(33.333vh-66.667px)_calc(33.333vh-66.667px)] auto-cols-[calc(33.333vh-66.667px)] grid-flow-col gap-10 w-max"
            >
                <div class=""></div>
                <template v-for="(portfolio, index) in data" :key="portfolio.id">
                    <BaseLink
                        :url="'/portfolio/' + portfolio.id"
                        :is-external="false"
                        class="col-span-2 rounded-[20px] relative overflow-hidden"
                    >
                        <HomePortfolioSwiper :screenShot="portfolio.screen_shot" />
                    </BaseLink>
                    <div v-if="index === 0" class="lowerScreen:hidden"></div>
                </template>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped></style>
