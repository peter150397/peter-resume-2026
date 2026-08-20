<script setup lang="ts">
import BaseLink from "@/components/atoms/BaseLink.vue"
import BaseIcon from "@/components/atoms/BaseIcon.vue"

const props = defineProps<{
    totalPage: number
    currentPage: number
}>()
</script>

<template>
    <section class="px-6 sm:mb-25 mb-15 w-fit mx-auto">
        <div class="flex items-center gap-6 pb-5 relative">
            <BaseLink
                :url="props.currentPage - 1 === 1 ? '' : `?page=${props.currentPage - 1}`"
                :is-external="false"
                class="duration-300 rotate-180"
                :class="
                    props.currentPage <= 1
                        ? 'pointer-events-none text-gray-50'
                        : 'text-white hover:text-primary-1'
                "
            >
                <BaseIcon icon="arrow-to-right" width="24" height="24" />
            </BaseLink>
            <BaseLink
                v-for="num in props.totalPage"
                :key="num"
                :url="num === 1 ? '/portfolio' : '/portfolio?page=' + num"
                :is-external="false"
                class="h4 w-10 h-10 flex justify-center items-center duration-300"
                :class="
                    props.currentPage === num
                        ? 'text-primary-1 pointer-events-none'
                        : 'hover:text-primary-1'
                "
                >{{ num < 10 ? "0" + num : num }}</BaseLink
            >
            <BaseLink
                :url="`?page=${props.currentPage + 1}`"
                :is-external="false"
                class="duration-300"
                :class="
                    props.currentPage >= props.totalPage
                        ? 'pointer-events-none text-gray-50'
                        : 'text-white hover:text-primary-1'
                "
            >
                <BaseIcon icon="arrow-to-right" width="24" height="24" />
            </BaseLink>
        </div>
    </section>
</template>

<style lang="scss" scoped></style>
