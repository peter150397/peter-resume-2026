<script setup lang="ts">
// Component
import BaseLink from "@/components/atoms/BaseLink.vue"
import MainLink from "@/components/molecules/MainLink.vue"
import BaseIcon from "@/components/atoms/BaseIcon.vue"
import type { Footer } from "@/types/type"
// vue
import { onMounted, ref, useTemplateRef } from "vue"
// Gsap
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
// conposables
import useAxios from "@/utils/useAxios"
const axios = useAxios()

gsap.registerPlugin(ScrollTrigger)

const footerData = ref<Footer | null>(null)
const footerContactData = ref<Link[]>([])
const navbarData = ref<Link[]>([])

const getFooter = async () => {
    const res = await axios.get(`/Footer`)

    footerData.value = {
        id: res.data[0].id,
        created_at: res.data[0].created_at,
        top_title: res.data[0].top_title,
        about_me: res.data[0].about_me,
        copyright: res.data[0].copyright,
        logo: res.data[0].logo,
        more_work: {
            is_external: res.data[0].more_work_is_external,
            text: res.data[0].more_work_text,
            url: res.data[0].more_work_url,
        },
    }
}
const getFooterContact = async () => {
    const res = await axios.get(`/FooterContact`)

    footerContactData.value = res.data
}
const getNavbar = async () => {
    const res = await axios.get(`/Navbar`)

    navbarData.value = res.data
}

const footerEle = useTemplateRef("footer")

onMounted(() => {
    getFooter()
    getFooterContact()
    getNavbar()

    if (footerData.value && footerContactData.value && navbarData.value) {
        gsap.to(footerEle.value, {
            backgroundColor: "#323232",
            scrollTrigger: {
                trigger: "footer",
                scrub: 0.5,
                start: "25% bottom",
                end: "75% bottom",
            },
        })
    }
})
</script>

<template>
    <footer class="" ref="footer" v-if="footerData && footerContactData && navbarData">
        <div class="container sm:py-15 py-10">
            <div
                class="flex justify-between items-center sm:flex-row flex-col sm:gap-0 gap-4 sm:border-b-3 border-b border-white mb-10 sm:pb-10 pb-4"
            >
                <h4 class="h1">{{ footerData.top_title }}</h4>
                <MainLink
                    :url="footerData.more_work.url"
                    :text="footerData.more_work.text"
                    :is-external="footerData.more_work.is_external"
                />
            </div>
            <div
                class="grid lg:grid-cols-[2fr_1fr_max-content] sm:grid-cols-[1fr_max-content] gap-10"
            >
                <div class="lg:col-span-1 sm:col-span-2">
                    <h5 class="md:text-[36px]/[1] text-[30px]/[1] font-pacifico sm:mb-10 mb-4">
                        {{ footerData.logo }}
                    </h5>
                    <h6 class="whitespace-pre-line">{{ footerData.about_me }}</h6>
                </div>
                <div class="flex flex-col sm:gap-4 gap-2 items-start">
                    <h3 class="pb-2 sm:border-b-2 border-b mb-2 w-full">導覽</h3>
                    <BaseLink
                        v-for="nav in navbarData"
                        :key="nav.id"
                        :url="nav.url"
                        :is-external="nav.is_external"
                        class="text-white hover:text-primary-1 flex items-center gap-2 duration-300"
                    >
                        <BaseIcon icon="arrow-to-right" width="16" height="16" />
                        <h5 class="text-inherit">{{ nav.text }}</h5>
                    </BaseLink>
                </div>
                <div class="flex flex-col sm:gap-4 gap-2 items-start">
                    <h3 class="pb-2 sm:border-b-2 border-b mb-2 w-full">聯絡</h3>
                    <BaseLink
                        v-for="item in footerContactData"
                        :key="item.id"
                        :url="item.url"
                        :is-external="item.is_external"
                        class="text-white hover:text-primary-1 flex items-center gap-2 duration-300"
                    >
                        <BaseIcon :icon="item.icon ?? ''" width="32" height="32" class="shrink-0" />
                        <h5 class="text-inherit">{{ item.text }}</h5>
                    </BaseLink>
                </div>
            </div>
            <div class="sm:border-t-3 border-t border-white mt-10 sm:pt-10 pt-4">
                <p class="text-center font-500">{{ footerData.copyright }}</p>
            </div>
        </div>
    </footer>
</template>

<style scoped></style>
