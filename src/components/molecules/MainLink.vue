<script setup lang="ts">
import BaseLink from '@/components/atoms/BaseLink.vue';

const props = defineProps<{
    url: string,
    text: string,
    isExternal: boolean,
}>();

</script>

<template>
    <BaseLink
        :url="props.url"
        :is-external="props.isExternal"
        class="md:px-8 md:py-4 px-6 py-3 rounded-[10px] w-fit mainLink">
        <h5 class="text-black">{{ props.text }}</h5>
    </BaseLink>
</template>

<style lang="scss" scoped>
@property --process {
  syntax: '<number>';
  inherits: false;
  initial-value: -10;
}
.mainLink{
    background: linear-gradient(90deg, white calc((var(--process) - 10) * 1%), var(--color-primary-1), white calc((var(--process) + 10) * 1%));
    &:hover{
        animation: scanningAnimation 2.5s infinite cubic-bezier(.8,.2,.2,.8);
    }
}

@keyframes scanningAnimation {
    0%{
        --process: -10;
    }
    40%{
        --process: 110;
    }
    80%{
        --process: -10;
    }
    100%{
        --process: -10;
    }
}
</style>
