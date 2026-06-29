<script setup lang="ts">
import PortfolioSingleBanner from '@/components/templates/portfolioSingleBanner.vue';
import PortfolioSingleScreenshot from '@/components/templates/portfolioSingleScreenshot.vue';
import PortfolioSingleFeature from '@/components/templates/portfolioSingleFeature.vue';
import PortfolioSingleSkills from '@/components/templates/portfolioSingleSkills.vue';
import PortfolioSingleImgs from '@/components/templates/portfolioSingleImgs.vue';

import { usePortfolioData } from '@/stores/usePortfolioData';
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';

import type { Portfolio } from "@/types/type";

const route = useRoute();
const portfolioData = usePortfolioData();


const currenData = ref<Portfolio>();

watch(() => route.params.id, (newVal) => {
    const currentId = Array.isArray(newVal) ? ref(newVal[0]) : ref(newVal);
    currenData.value = portfolioData.getPortfolioDataById(currentId.value);
}, {
    immediate: true
})
</script>

<template>
    <PortfolioSingleBanner v-if="currenData?.banner" :banner="currenData.banner" :title="currenData.title" />

    <PortfolioSingleScreenshot v-if="currenData?.screenShot" :screenShot="currenData.screenShot" />

    <PortfolioSingleFeature v-if="currenData?.feature" :feature="currenData.feature" />

    <PortfolioSingleSkills v-if="currenData?.skills" :skills="currenData.skills" />

    <PortfolioSingleImgs v-if="currenData?.imgs" :imgs="currenData.imgs" />
</template>


<style lang="scss"></style>
