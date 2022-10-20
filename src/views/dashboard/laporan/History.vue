<template>
  <div>
    <h1 class="m-0"><i class="el-icon-s-comment"></i> Riwayat Peminjaman</h1>
    <small class="block mt-4 mb-2 text-gray-400">Pilih periode peminjaman</small>
    <el-date-picker
      v-model="dateRange"
      type="daterange"
      range-separator="To"
      start-placeholder="Start date"
      end-placeholder="End date">
    </el-date-picker>
    <el-button type="primary" icon="el-icon-printer" class="ml-4">Cetak</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dateRange: '',
    };
  },
};
</script>
