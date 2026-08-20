<script setup lang="ts">
// Components
import PortfolioSingleBanner from "@/components/templates/portfolioSingleBanner.vue"
import PortfolioSingleScreenshot from "@/components/templates/portfolioSingleScreenshot.vue"
import PortfolioSingleFeature from "@/components/templates/portfolioSingleFeature.vue"
import PortfolioSingleSkills from "@/components/templates/portfolioSingleSkills.vue"
import PortfolioSingleImgs from "@/components/templates/portfolioSingleImgs.vue"
// Vue
import { ref, watch } from "vue"
import { useRoute } from "vue-router"
const route = useRoute()
// Pinia
import { usePortfolioData } from "@/stores/usePortfolioData"
const portfolioData = usePortfolioData()
// Type
import type { Portfolio } from "@/types/type"

const currentPortfolio = ref<Portfolio | null>(null)

watch(
    () => route.params.id,
    async (newVal) => {
        const currentId = ref(Array.isArray(newVal) ? newVal[0] : newVal)

        if (currentId.value) {
            currentPortfolio.value = await portfolioData.getSinglePortfolio(currentId.value)
        }
    },
    {
        immediate: true,
    },
)
</script>

<template>
    <PortfolioSingleBanner
        v-if="currentPortfolio?.banner && currentPortfolio?.title"
        :banner="currentPortfolio?.banner"
        :title="currentPortfolio?.title"
    />

    <PortfolioSingleScreenshot
        v-if="currentPortfolio?.screen_shot"
        :screenShot="currentPortfolio.screen_shot"
    />

    <PortfolioSingleFeature v-if="currentPortfolio?.feature" :feature="currentPortfolio.feature" />

    <PortfolioSingleSkills v-if="currentPortfolio?.skills" :skills="currentPortfolio.skills" />

    <PortfolioSingleImgs v-if="currentPortfolio?.images" :images="currentPortfolio.images" />
</template>

<style lang="scss"></style>
