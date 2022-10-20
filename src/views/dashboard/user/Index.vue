<template>
  <div>
    <h1 class="m-0"><i class="el-icon-s-custom"></i> User</h1>
    <div class="mt-4">
      <el-form :inline="true" :model="formInline">
        <el-form-item label="Cari:">
          <el-input v-model="formInline.searchVal"></el-input>
        </el-form-item>
        <el-form-item label="Kantor:">
          <el-input v-model="formInline.officeVal"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitSearch">Cari</el-button>
        </el-form-item>
      </el-form>
    </div>
    <el-table
      :data="tableData"
      stripe
      style="width: 100%"
    >
      <el-table-column
        prop="nama_user"
        label="Nama User"
        width="300"
      >
      </el-table-column>
      <el-table-column
        prop="username"
        label="Kode User"
        width="200"
      >
      </el-table-column>
      <el-table-column
        prop="alamat_domisili"
        label="Alamat"
        width="320"
      >
      </el-table-column>
      <el-table-column
        prop="no_hp"
        label="No. Handphone"
        width="200"
      >
      </el-table-column>
      <el-table-column
        prop="officeCode"
        label="Kode Kantor"
        width="180">
      </el-table-column>
      <el-table-column
        prop="officeAddress"
        label="Alamat Kantor"
        width="320"
      >
      </el-table-column>
      <el-table-column fixed="right" label="Actions" width="180">
        <template slot-scope="scope">
          <el-button size="mini" @click="edit(scope.row)">Edit</el-button>
          <el-button type="danger" size="mini" @click="deleteUser(scope.row)">Delete</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="flex mt-6 justify-center">
      <el-pagination
        background
        layout="prev, pager, next"
        :total="total"
      >
      </el-pagination>
    </div>
    <el-dialog
      title="Edit/Add User"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose"
    >
      <div>
        <el-form label-position="top" label-width="100px" :model="userDetail">
          <el-form-item label="Kode User">
            <el-input v-model="userDetail.userCode" readonly disabled></el-input>
          </el-form-item>
          <el-form-item label="Name User">
            <el-input v-model="userDetail.nama_user" readonly disabled></el-input>
          </el-form-item>
          <el-form-item label="Kode Kantor">
            <el-input v-model="userDetail.officeCode" readonly disabled></el-input>
          </el-form-item>
          <el-form-item label="Alamat Kantor">
            <el-input v-model="userDetail.officeAddress" readonly disabled></el-input>
          </el-form-item>
          <el-form-item label="Alamat">
            <el-input v-model="userDetail.alamat_domisili" type="textarea" :rows="2"></el-input>
          </el-form-item>
          <el-form-item label="No. HP Terkini">
            <el-input v-model="userDetail.no_hp"></el-input>
          </el-form-item>
        </el-form>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">Cancel</el-button>
        <el-button type="primary" @click="submit">Confirm</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
import UserAPI from '@/api/user';

export default {
  data() {
    return {
      formInline: {
        searchVal: '',
        officeVal: '',
      },
      tableData: [],
      total: 0,
      page: 1,
      dialogVisible: false,
      userDetail: {},
    };
  },
  created() {
    this.fetch();
    if (this.$route.query.q) {
      this.formInline.searchVal = this.$route.query.q;
    }
    if (this.$route.query.page) {
      this.page = Number(this.$route.query.page);
    }
  },
  watch: {
    $route() {
      this.fetch();
    },
  },
  methods: {
    async fetch() {
      const params = {
        page: this.$route.query.page || this.page,
        nama_user: this.$route.query.q || this.formInline.searchVal,
      };
      const res = await UserAPI.getAllUser(params);
      this.total = res.data.total;
      this.tableData = res.data.data;
    },
    submitSearch() {
      this.page = 1;
      this.$router.push({
        query: {
          q: this.formInline.searchVal,
          page: this.page,
        },
      });
    },
    edit(row) {
      this.dialogVisible = true;
      this.userDetail = { ...row };
    },
    handleClose() {
      this.userDetail = {};
      this.dialogVisible = false;
    },
    async submit() {
      try {
        const payload = this.userDetail;
        const res = await UserAPI.editUser(payload);
        this.handleClose();
        this.$message({
          message: res.message,
          type: 'success',
        });
        this.fetch();
      } catch (e) {
        // do nothing
      }
    },
    async deleteUser({ id_user }) {
      try {
        const confirm = await this.$confirm('Delete user?', 'Warning', {
          confirmButtonText: 'Delete',
          cancelButtonText: 'Cancel',
          type: 'warning',
        });
        if (confirm) {
          const res = await UserAPI.deleteUser(id_user);
          this.handleClose();
          this.$message({
            message: res.message,
            type: 'success',
          });
          this.fetch();
        }
      } catch (e) {
        // do nothing
      }
    },
  },
}
</script>
