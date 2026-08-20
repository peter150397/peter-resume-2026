<script setup lang="ts">
import SplitTextTitle from '@/components/atoms/SplitTextTitle.vue'

import type { Portfolio } from '@/types/type'
const props = defineProps<{
    skills: Portfolio['skills']
}>()
</script>

<template>
    <section class="container sm:py-25 py-15" id="portfolio-single-skills">
        <SplitTextTitle trigger="#portfolio-single-skills" ele="h4" title="Skills" class="" />
        <SplitTextTitle
            trigger="#portfolio-single-skills"
            ele="h2"
            title="使用技術"
            class="sm:mb-15 mb-10"
        />
        <div class="flex flex-wrap gap-6 relative">
            <p
                v-for="(item, index) in props.skills"
                :key="index"
                class="h5 hover:text-primary-1 md:px-6 px-4 md:py-2 py-1.5 md:border-3 border-2 border-white hover:border-primary-1 duration-300 cursor-default portfolio-single-skill"
            >
                {{ item }}
            </p>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.portfolio-single-skill {
    clip-path: polygon(
        10px 0,
        10px 4px,
        calc(100% - 10px) 4px,
        calc(100% - 10px) 0,
        100% 0,
        100% 10px,
        calc(100% - 4px) 10px,
        calc(100% - 4px) calc(100% - 10px),
        100% calc(100% - 10px),
        100% 100%,
        calc(100% - 10px) 100%,
        calc(100% - 10px) calc(100% - 4px),
        10px calc(100% - 4px),
        10px 100%,
        0 100%,
        0 calc(100% - 10px),
        4px calc(100% - 10px),
        4px 10px,
        0 10px,
        0 0
    );
}

.portfolio-single-skill:hover {
    clip-path: polygon(
        50% 0,
        50% 4px,
        50% 4px,
        50% 0,
        100% 0,
        100% 50%,
        calc(100% - 4px) 50%,
        calc(100% - 4px) 50%,
        100% 50%,
        100% 100%,
        50% 100%,
        50% calc(100% - 4px),
        50% calc(100% - 4px),
        50% 100%,
        0 100%,
        0 50%,
        4px 50%,
        4px 50%,
        0 50%,
        0 0
    );
}
</style>
