<template>
  <div class="h-screen w-screen flex items-center justify-center">
    <el-empty description="Page Not Found">
      <h1 class="my-2 text-6xl">404</h1>
      <el-button type="text" @click="$router.push('/dashboard')" icon="el-icon-back">Go Back</el-button>
    </el-empty>
  </div>
</template>

<script>
export default {
  mounted() {
    localStorage.removeItem('ACTIVE_MENU');
  },
}
</script>
