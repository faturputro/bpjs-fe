<template>
  <div>
    <h1 class="m-0"><i class="el-icon-s-comment"></i> Pembaca Paling Aktif</h1>
    <div class="flex items-end">
      <div>
        <small class="block mt-4 mb-2 text-gray-400">Periode</small>
        <el-date-picker
          v-model="dateRange"
          type="daterange"
          range-separator="To"
          start-placeholder="Start date"
          end-placeholder="End date">
        </el-date-picker>
      </div>
      <div class="mx-4">
        <small class="block mt-4 mb-2 text-gray-400">Unit Kerja</small>
        <el-select v-model="unit" placeholder="Select">
          <el-option
            label="IT"
            value="1">
          </el-option>
        </el-select>
      </div>
      <el-button type="primary" icon="el-icon-printer">Cetak</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dateRange: '',
      unit: null,
    };
  },
};
</script>
