<script setup lang="ts">
// Component
import SplitTextTitle from '@/components/atoms/SplitTextTitle.vue';
import PortfolioCard from '@/components/molecules/PortfolioCard.vue';
import ThePagination from '@/components/organisms/PaginationComponent.vue';
// Pinia
import { usePortfolioData } from '@/stores/usePortfolioData';
// Vue
import { ref, watch } from 'vue';
// Type
import type { Portfolio } from "@/types/type";


import { useRoute } from 'vue-router';

const route = useRoute();

const portfolioData = usePortfolioData();
const currentPage = ref(1);
const portfolioList = ref<Portfolio[]>([]);

watch(
    () => route.query.page,
    (newVal) => {
        currentPage.value = newVal ? Number(newVal) : 1;
        portfolioList.value = portfolioData.getPortfolioDataByPage(currentPage.value);

    }, {
    immediate: true,
}
);
</script>

<template>
    <section
        class="container md:pt-[calc(var(--navbar-height)+100px)] pt-[calc(var(--navbar-height)+40px)] sm:mb-25 mb-15"
        id="portfolio-archive">
        <SplitTextTitle :trigger="'#portfolio-archive'" :ele="'h4'" :title="'Portfolios'" class="" />
        <SplitTextTitle :trigger="'#portfolio-archive'" :ele="'h2'" :title="'根據客戶打造精美的網頁作品'" class="mb-15" />
        <div class="grid gap-15 grid-cols-[repeat(auto-fill,minmax(300px,1fr))]">
            <PortfolioCard v-for="item in portfolioList" :key="item.id" :id="item.id" :squareBg="item.squareBg"
                :title="item.title" />
        </div>
    </section>
    <ThePagination :total-page="portfolioData.totalPage" :current-page="currentPage"></ThePagination>
</template>

<style lang="scss"></style>
