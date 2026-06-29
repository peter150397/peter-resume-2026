<script setup lang="ts">
const props = defineProps<{
    img: string,
    title: string,
}>();
</script>

<template>
    <div class="md:flex-[1_0_25%] flex-[1_0_40%]">
        <div class="w-fit mx-auto flex items-center">
            <img :src="props.img" alt="" class="lg:w-20 sm:w-15 w-10">
            <h5 class="ml-3 text-center font-700 whitespace-nowrap">{{ props.title }}</h5>
        </div>
    </div>
</template>

<style lang="scss" scoped>

</style>
