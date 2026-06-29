<script setup lang="ts">
import SplitTextTitle from '@/components/atoms/SplitTextTitle.vue';

import type { Portfolio } from "@/types/type";
const props = defineProps<{
    feature: Portfolio["feature"],
}>()
</script>

<template>
    <section class="container sm:py-25 py-15" id="portfolio-single-feature">
        <SplitTextTitle :trigger="'#portfolio-single-feature'" :ele="'h4'" :title="'Feature'" class="" />
        <SplitTextTitle :trigger="'#portfolio-single-feature'" :ele="'h2'" :title="'網站特色'" class="sm:mb-15 mb-10" />
        <div class="grid sm:grid-cols-12 gap-x-6 md:gap-y-25 sm:gap-y-15 gap-y-6 items-start">
            <template v-for="(item, index) in props.feature" :key="index">
                <div class="sm:col-span-4">
                    <p class="h5">{{ item.title }}</p>
                </div>
                <div class="sm:col-span-8 sm:mb-0 mb-9 portfolio-single-flex-content" v-html="item.content"></div>
            </template>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.portfolio-single-flex-content {
    * {
        color: white;
        white-space: pre-line;
    }

    code {
        background-color: rgba(50, 50, 50);
        padding: 5px;
        margin: 0 5px;
        font-size: 14px;
    }

    ol {
        list-style: decimal;
        padding-left: 1.25rem;
    }

    ul {
        list-style: disc;
        padding-left: 1.25rem;
    }
}
</style>
