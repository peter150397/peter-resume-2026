<script setup lang="ts">
const props = defineProps<{
    url: string,
    isExternal: boolean,
}>();

let linkTag = "router-link";
let linkAttr = "to";

if(props.isExternal){
    linkTag = "a";
    linkAttr = "href";
}
</script>

<template>
    <component :is="linkTag" :[linkAttr]="props.url" :target="props.isExternal ? '_blank':''">
        <slot></slot>
    </component>
</template>

<style lang="scss" scoped>

</style>
