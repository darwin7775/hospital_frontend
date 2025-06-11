<template>
<div class="min-h-screen bg-gray-100 p-6">
    <div class="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6">
      <h2 class="text-2xl font-semibold text-blue-700 mb-6">Generate Report</h2>

      <form @submit.prevent="generateReport" class="space-y-4">
        <!-- Date Range -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label class="block text-gray-700 mb-1">Start Date</label>
            <input
              type="date"
              v-model="form.startDate"
              class="w-full px-4 py-2 border rounded-lg focus:ring focus:border-blue-400"
              required
            />
          </div>
          <div>
            <label class="block text-gray-700 mb-1">End Date</label>
            <input
              type="date"
              v-model="form.endDate"
              class="w-full px-4 py-2 border rounded-lg focus:ring focus:border-blue-400"
              required
            />
          </div>
        </div>

        <!-- Report Type -->
        <div>
          <label class="block text-gray-700 mb-1">Report Type</label>
          <select
            v-model="form.reportType"
            class="w-full px-4 py-2 border rounded-lg focus:ring focus:border-blue-400"
            required
          >
            <option disabled value="">Select a report</option>
            <option value="patients">Patient Records</option>
            <option value="appointments">Appointments</option>
            <option value="billing">Billing Summary</option>
          </select>
        </div>

        <!-- Generate Button -->
        <div>
          <button
            type="submit"
            class="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Generate Report
          </button>
        </div>
      </form>

      <!-- Report Output Placeholder -->
      <div v-if="reportReady" class="mt-8">
        <div class="flex justify-between items-center mb-4">
          <h3 class="text-lg font-semibold text-gray-700">
            Report: {{ form.reportType }} ({{ form.startDate }} - {{ form.endDate }})
          </h3>
          <div class="space-x-2">
            <button @click="exportPDF" class="bg-red-500 cursor-pointer text-white px-4 py-1.5 rounded hover:bg-red-600">
              Export PDF
            </button>
            <button @click="exportExcel" class="bg-green-600 cursor-pointer text-white px-4 py-1.5 rounded hover:bg-green-700">
              Export Excel
            </button>
          </div>
        </div>

        <!-- Example table -->
        <div class="overflow-x-auto mt-4">
          <table class="min-w-full table-auto border">
            <thead class="bg-gray-100 text-left">
              <tr>
                <th class="px-4 py-2 border">Field 1</th>
                <th class="px-4 py-2 border">Field 2</th>
                <th class="px-4 py-2 border">Field 3</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in dummyData" :key="index" class="hover:bg-gray-50">
                <td class="px-4 py-2 border">{{ item.field1 }}</td>
                <td class="px-4 py-2 border">{{ item.field2 }}</td>
                <td class="px-4 py-2 border">{{ item.field3 }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
    import { ref } from 'vue'

    const form = ref({
    startDate: '',
    endDate: '',
    reportType: ''
    })

    const reportReady = ref(false)

    const dummyData = ref([])

    function generateReport() {
    reportReady.value = true
    // Simulate report data
    dummyData.value = [
        { field1: 'Example A1', field2: 'Value A2', field3: 'Info A3' },
        { field1: 'Example B1', field2: 'Value B2', field3: 'Info B3' },
        { field1: 'Example C1', field2: 'Value C2', field3: 'Info C3' }
    ]

    // In real app, fetch data via API here and prepare the report
    }
</script>