<template>
    <svg>
        <use :href="`${sprite}#icon-${icon}`" :xlink:href="`/icon.svg#icon-${icon}`"></use>
    </svg>
</template>
<script setup lang="ts">
import sprite from "@/assets/icon/icon.svg";

defineProps<{
    icon: string
}>();
</script>
