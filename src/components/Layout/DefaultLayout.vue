<template>
  <div class="flex min-h-screen bg-gray-100">
    <!-- Overlay for mobile when sidebar is open -->
    <div
      v-if="sidebarOpen"
      class="fixed inset-0  bg-opacity-50 z-30 lg:hidden"
      @click="sidebarOpen = false"
    ></div>

    <!-- Sidebar -->
    <aside
      :class="[
        'fixed z-40 inset-y-0 left-0 w-64 bg-white shadow-md transform transition-transform duration-300 ease-in-out',
        sidebarOpen ? 'translate-x-0' : '-translate-x-full',
        'lg:translate-x-0 lg:relative lg:z-auto'
      ]"
    >
      <!-- Close button (mobile only) -->
      <div class="flex justify-between items-center px-4 py-3 border-b lg:hidden">
        <h2 class="text-lg font-semibold text-blue-700">Hospital</h2>
        <button @click="sidebarOpen = false" class="text-gray-600 hover:text-red-500 cursor-pointer">
          ✕
        </button>
      </div>

      <!-- Navigation -->
      <nav class="mt-6 space-y-2 px-4">
        <h2 v-if="sidebarOpen == false" class="text-lg font-semibold text-blue-700">Hospital</h2>
        <hr v-if="sidebarOpen == false" />
        <router-link 
                  v-for="item in navigation" 
                  :key="item.name" 
                  :to="item.to" 
                  :class="[$route.name === item.to.name ? 'bg-indigo-700 text-white' : 'text-indigo-500 hover:bg-indigo-700 hover:text-white', 'block px-4 py-2 rounded font-medium']" 
                  :aria-current="$route.name === item.to.name ? 'page' : undefined">
                  {{ item.name }} 
        </router-link>
        <p @click="logout()" class="block px-4 py-2 rounded hover:bg-indigo-700 hover:text-white text-indigo-500 font-medium cursor-pointer">Logout</p>
        <!-- <a href="#" class="block px-4 py-2 rounded hover:bg-blue-100 text-gray-700 font-medium">Dashboard</a>
        <a href="#" class="block px-4 py-2 rounded hover:bg-blue-100 text-gray-700 font-medium">Patients</a>
        <a href="#" class="block px-4 py-2 rounded hover:bg-blue-100 text-gray-700 font-medium">Appointments</a>
        <a href="#" class="block px-4 py-2 rounded hover:bg-blue-100 text-gray-700 font-medium">Reports</a>
        <a href="#" class="block px-4 py-2 rounded hover:bg-blue-100 text-gray-700 font-medium">Settings</a> -->
      </nav>
    </aside>

    <!-- Main Content -->
    <div class="flex-1 flex flex-col">
      <!-- Topbar -->
      <header class="flex items-center justify-between bg-white shadow px-6 py-4">
        <button
          @click="sidebarOpen = true"
          class="text-gray-600 lg:hidden"
        >
          <!-- Hamburger icon -->
          <svg class="w-6 h-6 cursor-pointer" fill="none" stroke="currentColor" stroke-width="2"
               viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round">
            <path d="M4 6h16M4 12h16M4 18h16"/>
          </svg>
        </button>
        <h1 class="text-xl font-semibold text-gray-800">{{ $route.name  }}</h1>
      </header>

      <!-- Page Content -->
      <main class="p-6 space-y-6">
        <RouterView/>
      </main>
    </div>
  </div>
    <!-- <RouterView/> -->
</template>

<script setup>
    import { ref } from 'vue';
    import router from "../../router.js";

    const sidebarOpen = ref(false)

    const navigation = [
        { name: 'Dashboard', to:{name:'Dashboard'}},
        // { name: 'Patients', to:{name:'Reports'}},
        // { name: 'Appointments', to:{name:'Reports'}},
        { name: 'Report', to:{name:'Report'}},
        // { name: 'Settings', to:{name:'Reports'}},
    ]

    function logout(){
        router.push({name: 'Login'})
    }
</script>