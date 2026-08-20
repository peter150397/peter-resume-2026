<script setup lang="ts">
// Vue
import { onMounted, useTemplateRef } from "vue"
// Gsap
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { SplitText } from "gsap/SplitText"

gsap.registerPlugin(ScrollTrigger, SplitText)

const props = defineProps<{
    trigger: string
    title: string
    ele: string
}>()

const splitTextTitleEle = useTemplateRef<HTMLElement>("splitText-title")

onMounted(() => {
    document.fonts.ready.then(() => {
        if (!splitTextTitleEle.value) return

        const split = SplitText.create(splitTextTitleEle.value, {
            type: "chars",
        })

        gsap.from(split.chars, {
            y: 100,
            stagger: {
                amount: 0.5,
            },
            scrollTrigger: {
                trigger: props.trigger,
                start: "top 80%",
                toggleActions: "play none none reverse",
            },
        })
    })
})
</script>

<template>
    <component :is="props.ele" ref="splitText-title" class="overflow-hidden">{{
        props.title
    }}</component>
</template>

<style lang="scss" scoped></style>
