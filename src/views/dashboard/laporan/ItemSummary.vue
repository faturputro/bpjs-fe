<template>
  <div>
    <h1 class="m-0"><i class="el-icon-s-comment"></i> Ringkasan Item per Kategori</h1>
    <small class="block mt-4 mb-2 text-gray-400">Tahun</small>
    <el-date-picker
      v-model="yearValue"
      type="year"
      placeholder="Pilih tahun">
    </el-date-picker>
    <el-button type="primary" icon="el-icon-printer" class="ml-4">Cetak</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      yearValue: '',
    };
  },
};
</script>
