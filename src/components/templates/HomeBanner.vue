<script setup lang="ts">
import MainLink from "@/components/molecules/MainLink.vue"
// Vue
import { onMounted, useTemplateRef, ref } from "vue"
// Gsap
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { TextPlugin } from "gsap/TextPlugin"
// Type
import type { HomeBanner } from "@/types/type"
// conposables
import useAxios from "@/utils/useAxios"
const axios = useAxios()
import { useLoading } from "@/stores/useLoading"
const loading = useLoading()

gsap.registerPlugin(ScrollTrigger, TextPlugin)

const data = ref<HomeBanner | null>(null)
const getData = async () => {
    const res = await axios.get(`/HomeBanner`)

    data.value = {
        id: res.data[0].id,
        created_at: res.data[0].created_at,
        content: res.data[0].content,
        image: res.data[0].image,
        more_work: {
            is_external: res.data[0].more_work_is_external,
            text: res.data[0].more_work_text,
            url: res.data[0].more_work_url,
        },
        cursor: [...res.data[0].cursor],
    }
}

const homeBannerEle = useTemplateRef("home-banner")
const homeBannerChangeTextEle = useTemplateRef("home-banner-change-text")

onMounted(async () => {
    loading.changeLoading(true)
    await getData()
    loading.changeLoading(false)

    if (data.value) {
        gsap.to(homeBannerEle.value, {
            scrollTrigger: {
                trigger: homeBannerEle.value,
                start: "25% top",
                end: "center top",
                scrub: 1,
            },
            opacity: 0,
        })
        const tl = gsap.timeline({ repeat: -1 })
        data.value.cursor.forEach((text) => {
            tl.to(homeBannerChangeTextEle.value, {
                duration: () => {
                    return text.length * 0.2
                },
                ease: "none",
                text: {
                    value: text,
                },
            })
                .to(
                    {},
                    {
                        duration: 3,
                        ease: "none",
                    },
                )
                .to(homeBannerChangeTextEle.value, {
                    duration: () => {
                        return text.length * 0.2
                    },
                    ease: "none",
                    text: {
                        value: "",
                        rtl: true,
                    },
                })
        })
    }
})
</script>

<template>
    <section
        class="md:pt-[calc(var(--navbar-height)+40px)] pt-[calc(var(--navbar-height))] min-h-screen mb-[25vh]"
        ref="home-banner"
        v-if="data"
    >
        <div
            class="grid md:grid-cols-[auto_auto] sm:grid-cols-[3fr_2fr] grid-cols-1 gap-10 items-center md:w-[90%] md:h-[calc(100vh-40px-var(--navbar-height))] h-[calc(100vh-var(--navbar-height))] mx-auto md:pl-0 pl-6 sm:pr-0 pr-6 relative z-1"
        >
            <div class="">
                <h1 class="sm:mb-10 mb-6">
                    我是
                    <span class="text-primary-1 relative">陳政傑</span>
                    <br />
                    一位
                    <span
                        class="text-primary-1 relative after:w-0.5 after:h-full after:bg-white after:absolute after:top-0 after:-right-0.5 after:animate-[cursor-effect_step-end_1s_infinite]"
                        ref="home-banner-change-text"
                    ></span>
                </h1>
                <h5 class="sm:mb-10 mb-6">{{ data.content }}</h5>
                <MainLink
                    :url="data.more_work.url"
                    :text="data.more_work.text"
                    :is-external="data.more_work.is_external"
                />
            </div>
            <div
                class="h-[inherit] md:w-auto w-7/10 md:static absolute right-0 -z-1 sm:block hidden"
            >
                <img
                    :src="data.image"
                    alt=""
                    class="w-full h-full sm:object-contain object-cover object-bottom drop-shadow-[4px_4px_10px_rgba(0,0,0,0.5)] grayscale"
                />
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped></style>
