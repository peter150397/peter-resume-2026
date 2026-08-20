<script setup lang="ts">
// Component
import BaseLink from "@/components/atoms/BaseLink.vue"
import MainLink from "@/components/molecules/MainLink.vue"
// Type
import type { Header } from "@/types/type"
// GSAP
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { onMounted, ref, useTemplateRef, watch } from "vue"
// conposables
import useAxios from "@/utils/useAxios"
const axios = useAxios()

const headerData = ref<Header | null>(null)
const navbarData = ref<Link[]>([])

const getHeader = async () => {
    const res = await axios.get(`/Header`)

    headerData.value = {
        id: res.data[0].id,
        created_at: res.data[0].created_at,
        logo: res.data[0].logo,
        more_work: {
            is_external: res.data[0].more_work_is_external,
            text: res.data[0].more_work_text,
            url: res.data[0].more_work_url,
        },
    }
}
const getNavbar = async () => {
    const res = await axios.get(`/Navbar`)

    navbarData.value = res.data
}

const headerEle = useTemplateRef("header")
const mobileNavbarEle = useTemplateRef("mobile-navbar")

gsap.registerPlugin(ScrollTrigger)

const isOpenMobileNavbar = ref(false)
const headerBurgerClass = ref("")

const openMobileNavbar = () => {
    if (headerBurgerClass.value === "active") {
        isOpenMobileNavbar.value = false
    } else {
        isOpenMobileNavbar.value = true
    }
}
const closeByClickOutside = (e: MouseEvent) => {
    if (mobileNavbarEle.value && !mobileNavbarEle.value.contains(e.target as Node)) {
        isOpenMobileNavbar.value = false
    }
}

watch(
    () => isOpenMobileNavbar.value,
    (newVal) => {
        if (newVal) {
            headerBurgerClass.value = "active"
            // smoother?.paused();
        } else {
            headerBurgerClass.value = "unactive"
        }
    },
)

onMounted(() => {
    getHeader()
    getNavbar()

    if (headerData.value && navbarData.value) {
        ScrollTrigger.create({
            onUpdate: (self) => {
                if (self.direction > 0) {
                    gsap.to(headerEle.value, {
                        yPercent: -100,
                        duration: 0.3,
                        ease: "power2.out",
                    })
                } else {
                    gsap.to(headerEle.value, {
                        yPercent: 0,
                        duration: 0.3,
                        ease: "power2.out",
                    })
                }
            },
        })
    }
})
</script>

<template>
    <header class="fixed top-0 z-3 w-full mix-blend-difference" ref="header" v-if="headerData">
        <div
            class="container md:py-6 py-8 grid md:grid-cols-[1fr_max-content_1fr] grid-cols-[1fr_1fr] items-center"
        >
            <h5 class="md:text-[36px]/[1] text-[30px]/[1] font-pacifico">
                {{ headerData.logo }}
            </h5>
            <div class="md:flex hidden gap-6 items-center">
                <BaseLink
                    v-for="nav in navbarData"
                    :key="nav.id"
                    :url="nav.url"
                    :is-external="nav.is_external"
                    class="h6 py-1 lg:px-6 px-2 border-b-2 border-transparent hover:text-primary-1 hover:border-primary-1 duration-300"
                >
                    {{ nav.text }}
                </BaseLink>
            </div>
            <MainLink
                :url="headerData.more_work.url"
                :text="headerData.more_work.text"
                :is-external="headerData.more_work.is_external"
                class="ml-auto md:block hidden"
            />
            <div class="md:hidden">
                <button
                    type="button"
                    class="ml-auto w-10 h-10 group"
                    :class="headerBurgerClass"
                    @click="openMobileNavbar"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="100%"
                        height="100%"
                        viewBox="0 0 40 40"
                        fill="none"
                    >
                        <path
                            d="M4 14L36 14"
                            stroke="#FFF"
                            fill="none"
                            stroke-width="2"
                            class="origin-center group-[.active]:animate-[burger-top-active_1s_forwards] group-[.unactive]:animate-[burger-top-active-reverse_1s_forwards]"
                        />
                        <path
                            d="M4 26L36 26"
                            stroke="#FFF"
                            fill="none"
                            stroke-width="2"
                            class="origin-center group-[.active]:animate-[burger-bottom-active_1s_forwards] group-[.unactive]:animate-[burger-bottom-active-reverse_1s_forwards]"
                        />
                    </svg>
                </button>
            </div>
        </div>
    </header>
    <Transition name="mobile-navbar" v-if="headerData">
        <div
            class="fixed z-2 inset-0 bg-black/50 duration-1000"
            @click="closeByClickOutside"
            v-if="isOpenMobileNavbar"
        >
            <div
                class="flex flex-col gap-6 items-start bg-white w-1/2 h-full ml-auto pt-(--navbar-height) px-6 duration-1000"
                ref="mobile-navbar"
            >
                <BaseLink
                    v-for="nav in navbarData"
                    :key="nav.id"
                    :url="nav.url"
                    :is-external="nav.is_external"
                    @click="isOpenMobileNavbar = false"
                    class="h4 text-black"
                >
                    {{ nav.text }}
                </BaseLink>
                <BaseLink
                    :url="headerData.more_work.url"
                    :is-external="headerData.more_work.is_external"
                    @click="isOpenMobileNavbar = false"
                    class="h4 text-black text-center mt-6 py-1.5 border-b-2 border-black self-stretch"
                >
                    {{ headerData.more_work.text }}
                </BaseLink>
            </div>
        </div>
    </Transition>
</template>

<style scoped>
.mobile-navbar-enter-to,
.mobile-navbar-leave-from {
    background-color: color-mix(in oklab, var(--color-black) 50%, transparent);
}

.mobile-navbar-enter-from,
.mobile-navbar-leave-to {
    background-color: color-mix(in oklab, var(--color-black) 0%, transparent);
}

.mobile-navbar-enter-from > div,
.mobile-navbar-leave-to > div {
    transform: translateX(100%);
}
</style>
