<script setup lang="ts">
import BaseIcon from '@/components/atoms/BaseIcon.vue';
import SplitTextTitle from '@/components/atoms/SplitTextTitle.vue';
// Vue
import { onMounted, useTemplateRef } from 'vue';
// Gsap
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
// Type
import type { HomeServiceItem } from "@/types/type";


gsap.registerPlugin(ScrollTrigger, SplitText);

const props = defineProps<{
    homeService: HomeServiceItem[]
}>()

const homeServiceFrameEle = useTemplateRef('home-service-frame');
const homeServiceItemsEle = useTemplateRef('home-service-item');
const homeServiceItemsContainerEle = useTemplateRef('home-service-item-container');


ScrollTrigger.config({
    ignoreMobileResize: true,
})
onMounted(() => {
    if (!homeServiceItemsEle.value || !homeServiceFrameEle.value || !homeServiceItemsContainerEle.value) return

    // ScrollTrigger.create({
    //     trigger: homeServiceItemsEle.value[0],
    //     start: "top top",
    //     end: () => `+=${window.innerHeight * 9}`,
    //     pin: homeServiceFrameEle.value,
    //     pinSpacing: false,
    // });

    homeServiceItemsEle.value.forEach((item, index) => {
        const contentTl = gsap.timeline({
            scrollTrigger: {
                trigger: item,
                start: "top top",
                end: () => `+=${index === 1 ? window.innerHeight * 3 : window.innerHeight * 2}`,
                scrub: true,
                pin: true,
            }
        });
        const homeServiceItemContent = SplitText.create(".home-service-item-content-" + index, {
            type: "lines",
        });

        const imgScaleConfig = () => {
            return {
                scale: 0.75,
                duration: 0.5,
                ease: "none",
            }
        };
        const SplitTextConfig = (isPause: boolean) => {
            return {
                yPercent: isPause ? 0 : 100,
                duration: isPause ? 1 : 0.5,
                ease: "none",
                stagger: {
                    amount: 0.5,
                }
            }
        };

        if (index === 0) {
            contentTl
                .to(homeServiceItemContent.lines, SplitTextConfig(true))
                .to(homeServiceItemContent.lines, SplitTextConfig(false))
                .to(item.querySelector("& img"), imgScaleConfig())
        } else if (index === 1) {
            contentTl
                .from(item.querySelector("& img"), imgScaleConfig())
                .from(homeServiceItemContent.lines, SplitTextConfig(false))
                .to(homeServiceItemContent.lines, SplitTextConfig(true))
                .to(homeServiceItemContent.lines, SplitTextConfig(false))
                .to(item.querySelector("& img"), imgScaleConfig())
        } else if (index === 2) {
            contentTl
                .from(item.querySelector("& img"), imgScaleConfig())
                .from(homeServiceItemContent.lines, SplitTextConfig(false))
                .to(homeServiceItemContent.lines, SplitTextConfig(true))
        }


    })

    const frameWidth = homeServiceFrameEle.value.getBoundingClientRect().width;
    const itemsContainerWidth = homeServiceItemsContainerEle.value.getBoundingClientRect().width;
    const isDesktop = window.innerWidth > 575

    const frameTl = gsap.timeline({
        scrollTrigger: {
            trigger: homeServiceFrameEle.value,
            start: (self) => {
                const selfHeight = self.trigger ? self.trigger.getBoundingClientRect().height : 0;
                const windowHeight = window.visualViewport ? window.visualViewport.height : window.innerHeight;
                const topPosition = (windowHeight - selfHeight) / 2;

                return `top ${isDesktop ? topPosition : 104}`;
            },
            end: () => {
                const windowHeight = window.innerHeight;

                return `+=${windowHeight * 9}`
            },
            scrub: true,
            pin: true,
            pinSpacing: false,
        }
    });

    const frameConfig = (duration: number, scale?: number, x?: number) => {
        return {
            duration,
            ease: "none",
            ...(x !== undefined && { x }),
            ...(scale !== undefined && { scale }),
        }
    };



    frameTl
        .to(homeServiceFrameEle.value, frameConfig(1.5, 1, undefined))
        .to(homeServiceFrameEle.value, frameConfig(0.5, 0.75, undefined))
        .to(homeServiceFrameEle.value, frameConfig(1, undefined, isDesktop ? itemsContainerWidth - frameWidth : 0))
        .to(homeServiceFrameEle.value, frameConfig(0.5, 1, undefined))
        .to(homeServiceFrameEle.value, frameConfig(2, 1, undefined))
        .to(homeServiceFrameEle.value, frameConfig(0.5, 0.75, undefined))
        .to(homeServiceFrameEle.value, frameConfig(1, undefined, 0))
        .to(homeServiceFrameEle.value, frameConfig(0.5, 1, undefined))
        .to(homeServiceFrameEle.value, frameConfig(1.5, 1, undefined))
});
</script>

<template>
    <section id="home-service">
        <div class="container">
            <SplitTextTitle :trigger="'#home-service'" :ele="'h4'" :title="'What Can I Do?'" class="text-center" />
            <SplitTextTitle :trigger="'#home-service'" :ele="'h2'" :title="'我可以做什麼？'" class="text-center mb-10" />
            <div class="relative z-1 max-w-225 mx-auto" ref="home-service-item-container">
                <div v-for="(item, index) in props.homeService" :key="item.id"
                    class="grid items-center md:gap-25 sm:gap-10 gap-4 min-h-screen sm:grid-rows-[auto] grid-rows-[240px_auto] sm:pt-0 pt-(--navbar-height)"
                    :class="index % 2 === 1 ? 'lg:grid-cols-[1fr_400px] md:grid-cols-[1fr_300px] sm:grid-cols-[1fr_200px]' : 'lg:grid-cols-[400px_1fr] md:grid-cols-[300px_1fr] sm:grid-cols-[200px_1fr]'"
                    ref="home-service-item">
                    <div class="mx-auto sm:w-auto w-60">
                        <img :src="item.img" alt="" class="w-full h-full object-cover">
                    </div>

                    <div class="" :class="index % 2 === 1 ? 'sm:-order-1' : ''">
                        <h3 class="overflow-hidden mb-3" :class="'home-service-item-content-' + index">{{ item.title }}
                        </h3>
                        <p class="overflow-hidden" :class="'home-service-item-content-' + index">{{ item.content }}</p>
                    </div>
                </div>
                <div class="absolute -z-1 lg:top-[calc(50vh-200px)] md:top-[calc(50vh-150px)] sm:top-[calc(50vh-100px)] top-(--navbar-height) sm:left-0 left-[calc(50%-120px)] lg:w-100 md:w-75 sm:w-50 w-60 aspect-square"
                    ref="home-service-frame">
                    <BaseIcon icon="portfolio-deco" width="100%" height="100%" />
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped></style>
