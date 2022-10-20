<template>
  <div>
    <h1 class="m-0"><i class="el-icon-s-marketing"></i> Dashboard</h1>
    <el-row class="mt-8" :gutter="10">
      <el-col :span="6">
        <el-card>
          <h2 class="font-medium m-0 text-gray-400"><i class="el-icon-user-solid"></i> Member Aktif</h2>
          <h1 class="text-8xl my-4 text-right">62</h1>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card>
          <h2 class="font-medium m-0 text-gray-400"><i class="el-icon-s-management"></i> Total Buku</h2>
          <h1 class="text-8xl my-4 text-right">140</h1>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card>
          <h2 class="font-medium m-0 text-gray-400"><i class="el-icon-user"></i> Total Peminjam</h2>
          <h1 class="text-8xl my-4 text-right">50</h1>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card>
          <h2 class="font-medium m-0 text-gray-400"><i class="el-icon-s-custom"></i> Total Pengembalian</h2>
          <h1 class="text-8xl my-4 text-right">80</h1>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
