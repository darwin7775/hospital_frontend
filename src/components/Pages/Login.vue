<template>

    <GuestLayout>
        <div class="flex min-h-screen">
            <!-- Left Image Section -->
            <div class="w-1/2 hidden lg:block">
            <img
                src="https://thumbs.wbm.im/pw/small/c2cf443e8f951a21fdd6ce04ddf99de4.png"
                alt="Hospital"
                class="w-full h-full object-cover"
            />
            </div>

            <!-- Right Login Form Section -->
            <div class="w-full lg:w-1/2 flex items-center justify-center bg-gray-100">
            <div class="bg-white p-10 rounded-lg shadow-lg w-full max-w-md">
                <h2 class="text-3xl font-bold text-blue-700 mb-6 text-center">Hospital Login</h2>
                <!-- <form @submit.prevent="handleLogin"> -->
                <form>
                <div class="mb-4">
                    <label class="block text-gray-700 mb-2" for="email">Email</label>
                    <input
                    type="email"
                    id="email"
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="admin@hospital.com"
                    />
                </div>

                <div class="mb-6">
                    <label class="block text-gray-700 mb-2" for="password">Password</label>
                    <input
                    type="password"
                    id="password"
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="********"
                    />
                </div>

                <button
                    @click="goToDashboard()"
                    class="w-full cursor-pointer bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300"
                >
                    Login
                </button>
                </form>

                <!-- <p class="mt-4 text-sm text-center text-gray-500">
                Forgot password? <a href="#" class="text-blue-600 hover:underline">Click here</a>
                </p> -->
            </div>
            </div>
        </div>
    </GuestLayout>
</template>

<script setup>
    import GuestLayout from "../Layout/GuestLayout.vue";
    import Swal from 'sweetalert2';
    import router from "../../router.js";

    function showAlert() {
        Swal.fire({
            title: 'Login Successful!',
            text: 'Welcome back to the hospital portal.',
            icon: 'success'
        })
    }
    function goToDashboard(){
        router.push({name: 'Dashboard'})
    }
</script>