<template>
  <div class="container mx-auto h-screen flex items-center">
    <el-card class="w-1/3 mx-auto">
      <h3 class="text-center">Login</h3>
      <el-form :model="user" ref="login" label-position="top">
        <el-form-item
          prop="email"
          label="Email"
          :rules="[
            { required: true, message: 'Please input email address', trigger: 'blur' },
            { type: 'email', message: 'Please input correct email address', trigger: ['blur', 'change'] }
          ]"
        >
          <el-input v-model="user.email" @keyup.enter.native="submit"></el-input>
        </el-form-item>
        <el-form-item
          prop="password"
          label="Password"
          :rules="[
            { required: true, message: 'Please input password', trigger: 'blur' },
          ]"
        >
          <el-input v-model="user.password" type="password" @keyup.enter.native="submit"></el-input>
        </el-form-item>
        <el-form-item
          prop="role"
          label="Role"
          :rules="[
            { required: true, message: 'Please select role', trigger: 'blur' },
          ]"
        >
        <el-select v-model="user.role" placeholder="Pilih Role">
          <el-option
            v-for="item in roleOptions"
            :key="item.id"
            :label="item.name"
            :value="item.id"
            class="w-full"
          >
          </el-option>
        </el-select>
        </el-form-item>
        <el-form-item class="mt-12">
          <el-button type="primary" @click="submit" class="w-full">Login</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        email: '',
        password: '',
        role: null,
      },
      roleOptions: [
        {
          id: 1,
          name: 'Super Admin',
        },
        {
          id: 2,
          name: 'Admin',
        },
        {
          id: 3,
          name: 'Anggota',
        },
      ],
      loading: false,
    };
  },
  methods: {
    async submit() {
      try {
        const valid = await this.$refs.login.validate()
        if (valid) {
          const payload = {
            email: this.user.email,
            password: this.user.password,
          }
          await this.$store.dispatch('app/login', payload);
          localStorage.setItem('role', this.user.role);
          this.$router.push('/dashboard');
        }
      } catch (e) {
        if (e?.response?.data) {
          this.$message({
            showClose: true,
            message: e?.response?.data?.message,
            type: 'error',
          });
        }
      }
    },
  },
};
</script>
