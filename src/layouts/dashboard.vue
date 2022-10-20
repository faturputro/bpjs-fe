<template>
  <el-row>
    <el-col :span="4" class="h-screen overflow-y-auto sticky top-0 no-scrollbar">
      <el-menu
        :default-active="defaultActive"
        class="h-screen dashboard-menus"
        background-color="#096C8C"
        text-color="rgba(255, 255, 255, 0.4)"
        active-text-color="#fff"
        :collapse="collapse"
      >
        <div class="p-4" :class="collapse && 'invisible'">
          <div class="flex items-center w-full">
            <el-image
              style="width: 100px; height: 100px"
              src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
              fit="cover"
              class="m-auto"
            ></el-image>
          </div>
          <p class="mb-0 text-white text-center">{{ currentUser.nama_user }}</p>
          <p class="m-0 text-gray-400 text-xs text-center">Super Admin</p>
          <el-divider></el-divider>
        </div>
        <router-link to="/dashboard" @click.native="setActive(0)">
          <el-menu-item index="0">
            <i class="el-icon-s-marketing" style="color: inherit;"></i>
            <span v-show="!collapse">Dashboard</span>
          </el-menu-item>
        </router-link>
        <div v-for="(nav, idx) in navigations" :key="nav.path">
          <router-link v-if="!nav.children" :to="nav.path" @click.native="setActive(idx)">
            <el-menu-item :index="`${idx}`" v-if="nav.permissions === activeRole">
              <i :class="nav.icon" style="color: inherit;"></i>
              <span v-show="!collapse">{{ nav.title }}</span>
            </el-menu-item>
          </router-link>
          <el-submenu v-if="nav.children && nav.permissions === activeRole" :index="`${idx}`">
            <template slot="title">
              <i :class="nav.icon" style="color: inherit;"></i>
              <span v-show="!collapse">{{ nav.title }}</span>
            </template>
            <router-link :to="child.path" v-for="(child, i) in nav.children" :key="child.path">
              <el-menu-item
                :index="`${idx}-${i}`"
                @click="setActive(`${idx}-${i}`)"
                v-if="!collapse"
              >{{ child.title }}</el-menu-item>
            </router-link>
          </el-submenu>
        </div>
      </el-menu>
    </el-col>
    <el-col :span="20">
      <el-menu mode="horizontal" class="sticky top-0 z-50">
        <div class="flex items-center px-4">
          <el-button @click="collapse = !collapse" type="text" icon="el-icon-s-operation" class="p-0 text-2xl m-0 text-gray-400"></el-button>
          <div class="py-3 px-4">
            <p class="m-0 text-center text-gray-400">Aplikasi E-Perpustakaan BPJS Ketenagakerjaan</p>
          </div>
        </div>
      </el-menu>
      <div class="p-4">
        <transition name="el-fade-in-linear" mode="out-in">
          <router-view></router-view>
        </transition>
      </div>
    </el-col>
  </el-row>
</template>

<script>
import dashboardNav from '@/helpers/dashboardNav';
import permissions from '@/constants/permissions'

export default {
  data() {
    return {
      navigations: dashboardNav,
      defaultActive: '0',
      collapse: false,
      permissions,
    };
  },
  created() {
    this.init();
  },
  computed: {
    activeRole() {
      return Number(localStorage.getItem('role'));
    },
    currentUser() {
      return this.$store.getters['app/currentUser'];
    },
  },
  mounted() {
    this.defaultActive = localStorage.getItem('ACTIVE_MENU') || '0'
  },
  methods: {
    async init() {
      await this.$store.dispatch('app/fetchUserDetails');
    },
    setActive(idx) {
      localStorage.setItem('ACTIVE_MENU', String(idx));
    },
  },
};
</script>
