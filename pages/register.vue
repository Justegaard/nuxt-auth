<script setup lang="ts">
import {useAuthStore} from "~/stores/useAuthStore";
import {definePageMeta} from "#imports";

definePageMeta({
    middleware: ['guest']
})

const form = ref({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
});

const auth = useAuthStore();

async function handleRegister() {
    const { error } = await auth.register(form.value)

    if (!error) {
        navigateTo('/')
    }
}
</script>

<template>
    <div>
        <h1>Register</h1>
        <form @submit.prevent="handleRegister">
            <label>
                Name
                <input type="text" v-model="form.name">
            </label>

            <label>
                Email
                <input type="email" v-model="form.email">
            </label>

            <label>
                Password
                <input type="password" v-model="form.password">
            </label>

            <label>
                Password confirmation
                <input type="password" v-model="form.password_confirmation">
            </label>

            <button type="submit">Register</button>
        </form>
    </div>
</template>

<style scoped>

</style>