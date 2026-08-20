<script setup lang="ts">
// Vue
import { ref } from "vue"
// Swiper
import { Swiper, SwiperSlide } from "swiper/vue"
import { Autoplay, EffectFade } from "swiper/modules"
import "swiper/css"
import "swiper/css/effect-fade"
import type { SwiperModule, Swiper as SwiperClass } from "swiper/types"
// type
import type { Portfolio } from "@/types/type"

const homePortfolioModules: SwiperModule[] = [Autoplay, EffectFade]
const swiperInstances = ref<SwiperClass>()

const props = defineProps<{
    screenShot: Portfolio["screen_shot"]
}>()

const initSwiper = (swiper: SwiperClass) => {
    swiperInstances.value = swiper
    swiper.autoplay.stop()
}
const enterSwiper = () => {
    swiperInstances.value?.autoplay.start()
}
const leaveSwiper = () => {
    swiperInstances.value?.autoplay.stop()
    swiperInstances.value?.slideToLoop(0, 500)
}
</script>

<template>
    <swiper
        :modules="homePortfolioModules"
        :speed="500"
        :space-between="40"
        :loop="true"
        :autoplay="{ delay: 100 }"
        :allow-touch-move="false"
        :effect="'fade'"
        @swiper="
            (swiper) => {
                initSwiper(swiper)
            }
        "
        @mouseenter="enterSwiper"
        @mouseleave="leaveSwiper"
        class="h-full"
    >
        <swiper-slide
            v-for="(img, index) in props.screenShot"
            :key="'screenShot-' + index"
            class=""
        >
            <img :src="img" alt="" class="w-full h-full object-cover" />
        </swiper-slide>
    </swiper>
</template>

<style lang="scss" scoped></style>
