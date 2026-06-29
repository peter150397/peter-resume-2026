<template>
    <HomeBanner :homeBanner="homeData.homeBanner" />

    <HomeService :homeService="homeData.homeService" />

    <HomeSkill :homeSkill="homeData.homeSkill" />

    <HomeTimeline :homeTimeline="homeData.homeTimeline" />

    <HomePortfolio :homePortfolioID="homeData.homePortfolioID" />
</template>

<script setup lang="ts">
// Template
import HomeBanner from '@/components/templates/HomeBanner.vue';
import HomeService from '@/components/templates/HomeService.vue';
import HomeSkill from '@/components/templates/HomeSkill.vue';
import HomeTimeline from '@/components/templates/HomeTimeline.vue';
import HomePortfolio from '@/components/templates/HomePortfolio.vue';

// Pinia
import { useHomeData } from '@/stores/useHomeData';
const homeData = useHomeData();
</script>

<style scoped></style>
