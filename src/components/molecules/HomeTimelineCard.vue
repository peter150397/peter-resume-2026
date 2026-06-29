<script setup lang="ts">
// Component
import BaseIcon from '@/components/atoms/BaseIcon.vue';

const props = defineProps<{
    time: string,
    company: string,
    title: string,
    img: string,
}>()
</script>

<template>
    <div class="">
        <div class="absolute inset-[0_0_auto] -translate-y-full">
            <h4 class="text-center">{{ props.time }}</h4>
            <div class="grid duration-1000 swiper-content">
                <div class="overflow-hidden">
                    <div class="pt-3">
                        <p class="text-center">{{ props.company }}</p>
                        <h3 class="text-center">{{ props.title }}</h3>
                    </div>
                </div>
            </div>
            <BaseIcon icon="arrow-to-right" width="16" height="16" class="text-white mx-auto mt-3 rotate-90" />
        </div>
        <div class="my-4 relative">
            <div class="w-3.5 h-3.5 bg-white rounded-full mx-auto"></div>
        </div>
        <div class="px-4">
            <div class="swiper-img aspect-video duration-1000">
                <img :src="props.img" alt="" class="w-full h-full object-cover">
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>

</style>
