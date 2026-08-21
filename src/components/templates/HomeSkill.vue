<script setup lang="ts">
// Component
import HomeSkillCard from "@/components/atoms/HomeSkillCard.vue"
// Vue
import { onMounted, useTemplateRef, ref } from "vue"
// Gsap
import { gsap } from "gsap"
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin"
import { ScrollTrigger } from "gsap/ScrollTrigger"
// Type
import type { HomeSkillItem } from "@/types/type"
// conposables
import useAxios from "@/utils/useAxios"
const axios = useAxios()
import { useLoading } from "@/stores/useLoading"
const loading = useLoading()

gsap.registerPlugin(DrawSVGPlugin, ScrollTrigger)
const gsapBreakPoints = gsap.matchMedia()

const data = ref<HomeSkillItem[][]>([])

const getData = async () => {
    const res = await axios.get(`/HomeSkill`)

    const originArray: HomeSkillItem[] = res.data

    for (let i = 0; i < 3; i++) {
        const newArray = originArray.filter((item, index) => index % 3 === i)

        data.value.push(newArray)
    }
}

const homeSkillEle = useTemplateRef("home-skill")
const homeSkillArrayEle = useTemplateRef("home-skill-array")
const homeSkillLoadingPathEle = useTemplateRef("home-skill-loading")
const homeSkillLoadingPath = [
    "M 69.6 6.72 L 72.36 4.44 Q 75.24 2.16 77.1 1.32 Q 78.96 0.48 81.36 0.48 Q 84.24 0.48 85.92 1.74 Q 87.6 3 87.6 5.4 Q 87.6 6.36 87.24 7.44 L 82.2 24 Q 81.36 26.88 80.1 28.08 Q 78.84 29.28 76.32 29.28 Q 73.68 29.28 71.7 27.66 Q 69.72 26.04 65.52 21 Q 61.32 16.2 57.9 14.22 Q 54.48 12.24 50.88 12.24 Q 48.24 12.24 46.44 13.98 Q 44.64 15.72 44.64 18.24 Q 44.64 21.12 47.52 23.58 Q 50.4 26.04 56.52 29.76 Q 62.76 33.48 66.84 36.48 Q 70.92 39.48 73.8 43.92 Q 76.68 48.36 76.68 54.12 Q 76.68 57.84 75.48 61.56 Q 72.6 71.16 64.32 76.14 Q 56.04 81.12 45 81.12 Q 36.72 81.12 31.08 79.2 Q 25.44 77.28 19.56 72.72 L 15.24 76.32 Q 12.24 78.84 10.32 79.74 Q 8.4 80.64 6 80.64 Q 3.24 80.64 1.62 79.32 Q 0 78 0 75.72 Q 0 74.52 0.48 73.2 L 6.36 55.32 Q 7.32 52.2 9 50.88 Q 10.68 49.56 13.32 49.56 Q 16.08 49.56 18.3 51.48 Q 20.52 53.4 24.12 58.44 Q 27.96 63.96 31.26 66.12 Q 34.56 68.28 39.12 68.28 Q 42.36 68.28 44.1 67.26 Q 45.84 66.24 46.56 63.96 Q 46.8 63.36 46.8 62.16 Q 46.8 59.28 44.04 56.88 Q 41.28 54.48 35.52 51.12 Q 29.4 47.4 25.56 44.46 Q 21.72 41.52 18.9 37.08 Q 16.08 32.64 16.08 26.64 Q 16.08 22.44 17.4 18.36 Q 19.92 10.08 27.72 5.04 Q 35.52 0 45.6 0 Q 52.32 0 58.02 1.62 Q 63.72 3.24 69.6 6.72 Z",
    "M 158.88 21.12 L 148.56 29.76 L 160.2 64.2 Q 161.28 67.2 162.54 69 Q 163.8 70.8 165.6 72.6 Q 166.92 73.92 167.46 74.7 Q 168 75.48 168 76.56 Q 168 78.48 166.26 79.56 Q 164.52 80.64 160.2 80.64 L 144.48 80.64 Q 138.6 80.64 135.78 78.06 Q 132.96 75.48 131.16 69.48 L 125.16 49.32 L 121.68 52.2 L 117.72 66.48 Q 117.24 68.04 117.24 69.48 Q 117.24 70.92 117.66 71.88 Q 118.08 72.84 118.92 73.92 Q 120 75.48 120 76.44 Q 120 76.68 119.76 77.64 Q 119.28 79.32 117.6 79.98 Q 115.92 80.64 112.56 80.64 L 84.36 80.64 Q 81.84 80.64 80.46 79.8 Q 79.08 78.96 79.08 77.52 Q 79.08 76.8 79.44 75.96 Q 79.92 74.64 81 73.92 Q 82.08 73.2 82.32 73.08 Q 84.24 71.88 85.44 70.62 Q 86.64 69.36 87.48 66.48 L 102.12 14.76 Q 102.6 13.2 102.6 11.76 Q 102.6 10.44 102.18 9.54 Q 101.76 8.64 101.04 7.44 Q 99.96 5.88 99.96 4.92 Q 99.96 4.56 100.2 3.6 Q 100.68 2.04 102.3 1.38 Q 103.92 0.72 107.28 0.72 L 135.48 0.72 Q 138 0.72 139.38 1.5 Q 140.76 2.28 140.76 3.72 Q 140.76 4.32 140.4 5.28 Q 140.04 6.12 139.38 6.78 Q 138.72 7.44 138.18 7.74 Q 137.64 8.04 137.4 8.28 Q 135.48 9.36 134.28 10.68 Q 133.08 12 132.24 14.76 L 127.2 32.64 L 159 5.16 Q 162.12 2.52 164.64 1.38 Q 167.16 0.24 170.04 0.24 Q 175.08 0.24 178.44 3.48 Q 181.8 6.72 181.8 12.24 Q 181.8 18.48 178.08 22.32 Q 174.36 26.16 169.2 26.16 Q 165.84 26.16 163.44 24.96 Q 161.04 23.76 158.88 21.12 Z",
    "M 225.48 14.76 L 210.96 66.48 Q 210.48 68.04 210.48 69.48 Q 210.48 70.92 210.9 71.88 Q 211.32 72.84 212.16 73.92 Q 213.24 75.48 213.24 76.44 Q 213.24 76.68 213 77.64 Q 212.52 79.32 210.84 79.98 Q 209.16 80.64 205.8 80.64 L 177.6 80.64 Q 175.08 80.64 173.7 79.8 Q 172.32 78.96 172.32 77.52 Q 172.32 76.8 172.68 75.96 Q 173.16 74.64 174.24 73.92 Q 175.32 73.2 175.56 73.08 Q 177.48 71.88 178.68 70.62 Q 179.88 69.36 180.72 66.48 L 195.36 14.76 Q 195.84 13.2 195.84 11.76 Q 195.84 10.44 195.42 9.54 Q 195 8.64 194.28 7.44 Q 193.2 5.88 193.2 4.92 Q 193.2 4.56 193.44 3.6 Q 193.92 2.04 195.54 1.38 Q 197.16 0.72 200.52 0.72 L 228.72 0.72 Q 231.24 0.72 232.62 1.5 Q 234 2.28 234 3.72 Q 234 4.32 233.64 5.28 Q 233.28 6.12 232.62 6.78 Q 231.96 7.44 231.42 7.74 Q 230.88 8.04 230.64 8.28 Q 228.72 9.36 227.52 10.68 Q 226.32 12 225.48 14.76 Z",
    "M 302.76 57.36 L 298.8 71.4 Q 297.24 76.56 294.42 78.6 Q 291.6 80.64 286.08 80.64 L 229.68 80.64 Q 227.16 80.64 225.78 79.8 Q 224.4 78.96 224.4 77.52 Q 224.4 76.8 224.76 75.96 Q 225.12 75 225.96 74.34 Q 226.8 73.68 227.76 73.08 Q 229.68 71.88 230.88 70.62 Q 232.08 69.36 232.92 66.48 L 247.56 14.76 Q 248.04 13.2 248.04 11.76 Q 248.04 10.44 247.62 9.54 Q 247.2 8.64 246.48 7.44 Q 245.4 5.88 245.4 4.92 Q 245.4 4.56 245.64 3.6 Q 246.12 2.04 247.74 1.38 Q 249.36 0.72 252.72 0.72 L 280.92 0.72 Q 283.44 0.72 284.82 1.5 Q 286.2 2.28 286.2 3.72 Q 286.2 4.32 285.84 5.28 Q 285.48 6.12 284.82 6.78 Q 284.16 7.44 283.62 7.74 Q 283.08 8.04 282.84 8.28 Q 280.92 9.36 279.72 10.68 Q 278.52 12 277.68 14.76 L 262.2 69.12 L 269.64 69.12 Q 272.4 69.12 274.38 68.16 Q 276.36 67.2 278.52 64.56 L 286.8 54.72 Q 289.08 52.08 291.18 50.88 Q 293.28 49.68 296.28 49.68 Q 299.64 49.68 301.38 51.06 Q 303.12 52.44 303.12 54.96 Q 303.12 56.04 302.76 57.36 Z",
    "M 380.88 57.36 L 376.92 71.4 Q 375.36 76.56 372.54 78.6 Q 369.72 80.64 364.2 80.64 L 307.8 80.64 Q 305.28 80.64 303.9 79.8 Q 302.52 78.96 302.52 77.52 Q 302.52 76.8 302.88 75.96 Q 303.24 75 304.08 74.34 Q 304.92 73.68 305.88 73.08 Q 307.8 71.88 309 70.62 Q 310.2 69.36 311.04 66.48 L 325.68 14.76 Q 326.16 13.2 326.16 11.76 Q 326.16 10.44 325.74 9.54 Q 325.32 8.64 324.6 7.44 Q 323.52 5.88 323.52 4.92 Q 323.52 4.56 323.76 3.6 Q 324.24 2.04 325.86 1.38 Q 327.48 0.72 330.84 0.72 L 359.04 0.72 Q 361.56 0.72 362.94 1.5 Q 364.32 2.28 364.32 3.72 Q 364.32 4.32 363.96 5.28 Q 363.6 6.12 362.94 6.78 Q 362.28 7.44 361.74 7.74 Q 361.2 8.04 360.96 8.28 Q 359.04 9.36 357.84 10.68 Q 356.64 12 355.8 14.76 L 340.32 69.12 L 347.76 69.12 Q 350.52 69.12 352.5 68.16 Q 354.48 67.2 356.64 64.56 L 364.92 54.72 Q 367.2 52.08 369.3 50.88 Q 371.4 49.68 374.4 49.68 Q 377.76 49.68 379.5 51.06 Q 381.24 52.44 381.24 54.96 Q 381.24 56.04 380.88 57.36 Z",
]

onMounted(async () => {
    loading.changeLoading(true)
    await getData()
    loading.changeLoading(false)

    if (!homeSkillEle.value || !homeSkillArrayEle.value) return

    const homeSkillEleHeight = homeSkillEle.value.getBoundingClientRect().height

    gsapBreakPoints.add(
        {
            isDesktop: "(min-width: 768px)",
            isMobile: "(max-width: 767px)",
        },
        (context) => {
            const distance = context.conditions?.isDesktop ? -125 : -200
            gsap.fromTo(
                homeSkillArrayEle.value,
                {
                    xPercent: (i) => (i % 2 === 0 ? 100 : distance),
                },
                {
                    xPercent: (i) => (i % 2 === 0 ? distance : 100),
                    scrollTrigger: {
                        trigger: homeSkillEle.value,
                        start: "top top",
                        end: () => `+=${homeSkillEleHeight * 2}`,
                        pin: true,
                        scrub: 1,
                    },
                },
            )
        },
    )
    gsap.from(homeSkillLoadingPathEle.value, {
        drawSVG: "0%",
        scrollTrigger: {
            trigger: homeSkillEle.value,
            start: "top center",
            end: () => `+=${homeSkillEleHeight}`,
            scrub: true,
        },
    })
})
</script>

<template>
    <section
        ref="home-skill"
        class="h-screen flex flex-col justify-evenly overflow-hidden relative"
    >
        <div class="absolute inset-0">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="80%"
                height="100%"
                viewBox="0 0 381.24 81.121"
                fill="none"
                class="mx-auto"
            >
                <path
                    v-for="(path, index) in homeSkillLoadingPath"
                    :key="'loading-path-' + index"
                    :d="path"
                    stroke="#4AF626"
                    stroke-width="1"
                    stroke-linecap="round"
                    ref="home-skill-loading"
                />
            </svg>
        </div>
        <div
            v-for="(skillArray, index) in data"
            :key="'skillArray-' + index"
            class="flex"
            ref="home-skill-array"
        >
            <HomeSkillCard
                v-for="skill in skillArray"
                :key="skill.id"
                :img="skill.image"
                :title="skill.title"
            />
        </div>
    </section>
</template>

<style lang="scss" scoped></style>
