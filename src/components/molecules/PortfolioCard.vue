<script setup lang="ts">
// Component
import BaseLink from '@/components/atoms/BaseLink.vue';
import BaseIcon from '@/components/atoms/BaseIcon.vue';

const props = defineProps<{
    id: string,
    squareBg: string,
    title: string,
}>();
</script>

<template>
    <BaseLink :url="'/portfolio/' + props.id" :is-external="false" class="aspect-square relative z-1 group">
        <div
            class="absolute -z-1 -inset-1 pointer-events-none opacity-0 group-hover:opacity-100 group-hover:animate-scale duration-300">
            <BaseIcon icon="portfolio-deco" width="100%" height="100%" />
        </div>
        <img :src="props.squareBg" alt="" class="w-full h-full object-cover">
        <div
            class="absolute inset-0 bg-black/80 grid place-content-center opacity-0 group-hover:opacity-100 duration-300">
            <p class="h5 text-primary-1">{{ props.title }}</p>
        </div>
    </BaseLink>
</template>

<style lang="scss" scoped></style>
