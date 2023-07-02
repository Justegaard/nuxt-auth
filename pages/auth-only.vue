<script setup lang="ts">
import {definePageMeta} from "#imports";

definePageMeta({
    middleware: ['auth']
})
</script>

<template>
    <div>
        <h1>Auth-only</h1>
    </div>
</template>

<style scoped>

</style>