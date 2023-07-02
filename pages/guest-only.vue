<script setup lang="ts">
import {definePageMeta} from "#imports";

definePageMeta({
    middleware: ['guest']
})
</script>

<template>
    <div>
        <h1>Guest-only</h1>
    </div>
</template>

<style scoped>

</style>