<script setup lang="ts">
// Component
import BaseIcon from "@/components/atoms/BaseIcon.vue"
import SplitTextTitle from "@/components/atoms/SplitTextTitle.vue"
import HomeTimelineCard from "@/components/molecules/HomeTimelineCard.vue"
// Vue
import { onMounted, useTemplateRef, ref } from "vue"
// Gsap
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
// Swiper
import { Swiper, SwiperSlide } from "swiper/vue"
import { Navigation } from "swiper/modules"
import type { SwiperModule } from "swiper/types"
// Type
import type { HomeTimelineItem } from "@/types/type"
// conposables
import useAxios from "@/utils/useAxios"
const axios = useAxios()

gsap.registerPlugin(ScrollTrigger)

const data = ref<HomeTimelineItem[]>([])
const getData = async () => {
    const res = await axios.get(`/HomeTimeline`)

    data.value = res.data
}

const homeTimelineModules: SwiperModule[] = [Navigation]
const homeExperienceSwiperEle = useTemplateRef("home-experience-swiper")

onMounted(async () => {
    await getData()

    if (!homeExperienceSwiperEle.value) return

    ScrollTrigger.create({
        trigger: "#home-experience",
        start: "40% bottom",
        onEnter: () => {
            if (
                homeExperienceSwiperEle.value &&
                !homeExperienceSwiperEle.value.classList.contains("active")
            ) {
                homeExperienceSwiperEle.value.classList.add("active")
            }
        },
        onLeaveBack: () => {
            if (
                homeExperienceSwiperEle.value &&
                homeExperienceSwiperEle.value.classList.contains("active")
            ) {
                homeExperienceSwiperEle.value.classList.remove("active")
            }
        },
    })
})
</script>

<template>
    <section class="sm:py-25 py-15" id="home-experience" v-if="data">
        <div class="container">
            <SplitTextTitle
                trigger="#home-experience"
                ele="h4"
                title="Work Experience"
                class="text-center"
            />
            <SplitTextTitle
                trigger="#home-experience"
                ele="h2"
                title="工作經驗"
                class="text-center mb-10"
            />

            <div class="pt-37.5 px-10 relative">
                <div class="absolute top-43 left-10 right-10 h-0.5 bg-white"></div>
                <div class="home-experience-swiper" ref="home-experience-swiper">
                    <swiper
                        :modules="homeTimelineModules"
                        :slides-per-view="1"
                        :speed="1000"
                        :centered-slides="true"
                        :navigation="{
                            prevEl: '.home-timeline-prev',
                            nextEl: '.home-timeline-next',
                        }"
                        :allow-touch-move="false"
                        :initial-slide="3"
                        :breakpoints="{
                            1024: {
                                slidesPerView: 3,
                            },
                            768: {
                                slidesPerView: 2,
                            },
                        }"
                        class="overflow-x-clip! overflow-y-visible!"
                    >
                        <swiper-slide v-for="item in data" :key="item.id" class="">
                            <HomeTimelineCard
                                :time="item.time"
                                :company="item.company"
                                :title="item.title"
                                :img="item.image"
                            />
                        </swiper-slide>
                    </swiper>
                </div>
                <button
                    type="button"
                    class="home-timeline-prev absolute z-1 top-39 left-0 text-white hover:text-primary-1 duration-300 rotate-180 [&.swiper-button-disabled]:opacity-0 [&.swiper-button-disabled]:pointer-events-none"
                >
                    <BaseIcon icon="arrow-to-right" width="32" height="32" />
                </button>
                <button
                    type="button"
                    class="home-timeline-next absolute z-1 top-39 right-0 text-white hover:text-primary-1 duration-300 [&.swiper-button-disabled]:opacity-0 [&.swiper-button-disabled]:pointer-events-none"
                >
                    <BaseIcon icon="arrow-to-right" width="32" height="32" />
                </button>
            </div>
        </div>
    </section>
</template>

<style lang="scss">
.home-experience-swiper {
    .swiper-content {
        grid-template-rows: 0fr;
    }

    .swiper-img {
        filter: grayscale(100%) blur(4px);
    }

    &.active .swiper-slide-active {
        .swiper-content {
            grid-template-rows: 1fr;
        }

        .swiper-img {
            filter: grayscale(0%) blur(0px);
        }
    }
}
</style>
