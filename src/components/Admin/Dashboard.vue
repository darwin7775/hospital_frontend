<template>
<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div class="bg-white rounded-lg shadow p-4">
            <h3 class="text-gray-700 font-medium">Total Patients</h3>
            <p class="text-2xl font-bold text-blue-600">1,245</p>
          </div>
          <div class="bg-white rounded-lg shadow p-4">
            <h3 class="text-gray-700 font-medium">Appointments</h3>
            <p class="text-2xl font-bold text-blue-600">320</p>
          </div>
          <div class="bg-white rounded-lg shadow p-4">
            <h3 class="text-gray-700 font-medium">Revenue</h3>
            <p class="text-2xl font-bold text-green-600">$45,000</p>
          </div>
          <div class="bg-white rounded-lg shadow p-4">
            <h3 class="text-gray-700 font-medium">Pending Reports</h3>
            <p class="text-2xl font-bold text-red-500">7</p>
          </div>
        </div>

        <!-- Example table -->
        <div class="bg-white rounded-lg shadow p-6">
          <h2 class="text-lg font-semibold text-gray-800 mb-4">Recent Appointments</h2>
          <div class="overflow-x-auto">
            <table class="w-full table-auto">
              <thead>
                <tr class="bg-gray-100 text-gray-700 text-left">
                  <th class="px-4 py-2">Patient</th>
                  <th class="px-4 py-2">Date</th>
                  <th class="px-4 py-2">Doctor</th>
                  <th class="px-4 py-2">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr class="border-b hover:bg-gray-50">
                  <td class="px-4 py-2">John Doe</td>
                  <td class="px-4 py-2">June 10, 2025</td>
                  <td class="px-4 py-2">Dr. Smith</td>
                  <td class="px-4 py-2 text-green-600 font-semibold">Confirmed</td>
                </tr>
                <tr class="border-b hover:bg-gray-50">
                  <td class="px-4 py-2">Jane Smith</td>
                  <td class="px-4 py-2">June 11, 2025</td>
                  <td class="px-4 py-2">Dr. Adams</td>
                  <td class="px-4 py-2 text-yellow-600 font-semibold">Pending</td>
                </tr>
                <tr class="hover:bg-gray-50">
                  <td class="px-4 py-2">Ali Khan</td>
                  <td class="px-4 py-2">June 12, 2025</td>
                  <td class="px-4 py-2">Dr. Lee</td>
                  <td class="px-4 py-2 text-red-500 font-semibold">Canceled</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
</template>

<script setup>

</script>