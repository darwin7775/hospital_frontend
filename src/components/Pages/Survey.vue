<template>
    <GuestLayout>
        <div class="min-h-screen bg-gray-100 flex items-center justify-center py-10">
            <div class="bg-white w-full max-w-2xl p-8 rounded-lg shadow-lg">
            <h2 class="text-2xl font-bold text-center text-blue-700 mb-6">Patient Satisfaction Survey</h2>
            
            <form>
                <!-- Name -->
                <div class="mb-4">
                <label class="block text-gray-700 mb-1">Full Name</label>
                <input
                    type="text"
                    class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-400"
                    placeholder="John Doe"
                />
                </div>

                <!-- Email -->
                <div class="mb-4">
                <label class="block text-gray-700 mb-1">Email</label>
                <input
                    type="email"
                    class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-400"
                    placeholder="john@example.com"
                />
                </div>

                <!-- Multiple Choice -->
                <div class="mb-4">
                <label class="block text-gray-700 mb-2">How did you hear about us?</label>
                <select
                    class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-400"
                >
                    <option disabled value="">Select an option</option>
                    <option>Doctor referral</option>
                    <option>Friend/Family</option>
                    <option>Online search</option>
                    <option>Social media</option>
                </select>
                </div>

                <!-- Rating -->
                <!-- <div class="mb-4">
                <label class="block text-gray-700 mb-2">Rate your overall experience</label>
                <div class="flex gap-4">
                    <label v-for="n in 5" :key="n" class="flex items-center gap-1">
                    <input type="radio" :value="n" v-model="form.rating" required />
                    {{ n }}
                    </label>
                </div>
                </div> -->

                <!-- Feedback -->
                <div class="mb-4">
                <label class="block text-gray-700 mb-1">Additional Feedback</label>
                <textarea
                    class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-400"
                    rows="4"
                    placeholder="Let us know how we can improve..."
                ></textarea>
                </div>

                <!-- Submit Button -->
                <button
                class="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300"
                >
                Submit Survey
                </button>
            </form>
            </div>
        </div>
    </GuestLayout>
</template>

<script setup>
    import GuestLayout from "../Layout/GuestLayout.vue";
</script>