<script setup lang="ts">
// Component
import BaseLink from '@/components/atoms/BaseLink.vue';
import MainLink from '@/components/molecules/MainLink.vue';
import BaseIcon from '@/components/atoms/BaseIcon.vue';
import type { Footer } from "@/types/type";
// vue
import { onMounted, useTemplateRef } from 'vue';
// Gsap
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const props = defineProps<{
    footerData: Footer
    navbarData: Link[],
}>();
const footerEle = useTemplateRef("footer");

onMounted(() => {
    gsap.to(footerEle.value, {
        backgroundColor: "#323232",
        scrollTrigger: {
            trigger: "footer",
            scrub: 0.5,
            start: "25% bottom",
            end: "75% bottom",
        }
    });
});
</script>

<template>
    <footer class="" ref="footer">
        <div class="container sm:py-15 py-10">
            <div
                class="flex justify-between items-center sm:flex-row flex-col sm:gap-0 gap-4 sm:border-b-3 border-b border-white mb-10 sm:pb-10 pb-4">
                <h4 class="h1">{{ props.footerData.topTitle }}</h4>
                <MainLink :url="props.footerData.moreWorkLink.url" :text="props.footerData.moreWorkLink.text"
                    :is-external="props.footerData.moreWorkLink.isExternal" />
            </div>
            <div class="grid lg:grid-cols-[2fr_1fr_max-content] sm:grid-cols-[1fr_max-content] gap-10">
                <div class="lg:col-span-1 sm:col-span-2">
                    <h5 class="md:text-[36px]/[1] text-[30px]/[1] font-pacifico sm:mb-10 mb-4">{{ props.footerData.logo
                        }}</h5>
                    <h6 class="whitespace-pre-line">{{ props.footerData.aboutMe }}</h6>
                </div>
                <div class="flex flex-col sm:gap-4 gap-2 items-start">
                    <h3 class="pb-2 sm:border-b-2 border-b mb-2 w-full">導覽</h3>
                    <BaseLink v-for="nav in props.navbarData" :key="nav.id" :url="nav.url" :is-external="nav.isExternal"
                        class="text-white hover:text-primary-1 flex items-center gap-2 duration-300">
                        <BaseIcon icon="arrow-to-right" width="16" height="16" />
                        <h5 class="text-inherit">{{ nav.text }}</h5>
                    </BaseLink>
                </div>
                <div class="flex flex-col sm:gap-4 gap-2 items-start">
                    <h3 class="pb-2 sm:border-b-2 border-b mb-2 w-full">聯絡</h3>
                    <BaseLink v-for="item in props.footerData.contact" :key="item.id" :url="item.url"
                        :is-external="item.isExternal"
                        class="text-white hover:text-primary-1 flex items-center gap-2 duration-300">
                        <BaseIcon :icon="item.icon ?? ''" width="32" height="32" class="shrink-0" />
                        <h5 class="text-inherit">{{ item.text }}</h5>
                    </BaseLink>
                </div>
            </div>
            <div class="sm:border-t-3 border-t border-white mt-10 sm:pt-10 pt-4">
                <p class="text-center font-500">{{ props.footerData.copyright }}</p>
            </div>
        </div>
    </footer>
</template>

<style scoped></style>
