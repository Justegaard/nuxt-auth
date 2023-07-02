<script setup lang="ts">
import {useAuthStore} from "~/stores/useAuthStore";
import {definePageMeta} from "#imports";

definePageMeta({
    middleware: ['guest']
})

const form = ref({
    email: 'test@example.com',
    password: 'password',
});

const auth = useAuthStore();

async function handleLogin() {
    const { error } = await auth.login(form.value)
}
</script>

<template>
    <div>
        <h1>Login</h1>
        <form @submit.prevent="handleLogin">
            <label>
                Email
                <input type="email" v-model="form.email">
            </label>
            <label>
                Password
                <input type="password" v-model="form.password">
            </label>
            <button type="submit">Login</button>
        </form>
    </div>
</template>

<style scoped>

</style>