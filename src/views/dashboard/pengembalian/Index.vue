<template>
  <div>
    <h1 class="m-0"><i class="el-icon-s-management"></i> Pengembalian Buku</h1>
    <div class="mt-4 flex items-center mb-4 justify-between w-full">
      <el-form :inline="true" :model="formInline">
        <el-form-item class="m-0">
          <el-input placeholder="Cari" v-model="formInline.searchVal" class="w-full">
            <el-select v-model="formInline.officeVal" slot="prepend" placeholder="Jenis" style="width: 120px">
              <el-option label="Restaurant" value="1"></el-option>
              <el-option label="Order No." value="2"></el-option>
              <el-option label="Tel" value="3"></el-option>
            </el-select>
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>
        </el-form-item>
      </el-form>
      <router-link to="/dashboard/book/new">
        <el-button type="primary" icon="el-icon-plus">Pinjam</el-button>
      </router-link>
    </div>
    <el-divider></el-divider>
    <el-table
      :data="tableData"
      stripe
      style="width: 100%"
    >
      <el-table-column
        prop="bookCode"
        label="Kode Buku"
        width="300"
      >
      </el-table-column>
      <el-table-column
        prop="bookType"
        label="Jenis Buku"
        width="200"
      >
      </el-table-column>
      <el-table-column
        prop="bookTitle"
        label="Judul Buku"
        width="320"
      >
      </el-table-column>
      <el-table-column
        prop="author"
        label="Penulis Buku"
        width="200"
      >
      </el-table-column>
      <el-table-column
        prop="releasedDate"
        label="Tahun Terbit"
        width="140">
      </el-table-column>
      <el-table-column
        prop="total"
        label="Jumlah"
        width="100"
      >
      </el-table-column>
      <el-table-column
        prop="language"
        label="Bahasa"
        width="180"
      >
      </el-table-column>
      <el-table-column
        prop="desc"
        label="Keterangan"
        width="250"
      >
      </el-table-column>
      <el-table-column fixed="right" label="Actions" width="180">
        <template slot-scope="scope">
          <router-link :to="`/dashboard/book/${scope.row.id}`">
            <el-button size="mini" class="mr-2">Edit</el-button>
          </router-link>
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
          >Delete</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="flex mt-6 justify-center">
      <el-pagination
        background
        layout="prev, pager, next"
        :total="1000">
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
            <el-input v-model="userDetail.userCode"></el-input>
          </el-form-item>
          <el-form-item label="Name User">
            <el-input v-model="userDetail.name"></el-input>
          </el-form-item>
          <el-form-item label="Alamat">
            <el-input v-model="userDetail.address" type="textarea" :rows="2"></el-input>
          </el-form-item>
          <el-form-item label="No. HP Terkini">
            <el-input v-model="userDetail.phone"></el-input>
          </el-form-item>
          <el-form-item label="Kode Kantor">
            <el-input v-model="userDetail.officeCode"></el-input>
          </el-form-item>
          <el-form-item label="Alamat Kantor">
            <el-input v-model="userDetail.officeAddress"></el-input>
          </el-form-item>
        </el-form>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">Cancel</el-button>
        <el-button type="primary" @click="dialogVisible = false">Confirm</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      formInline: {
        searchVal: '',
        officeVal: '',
      },
      tableData: [
        {
          id: 1,
          bookCode: 'AKJHSA',
          bookType: 'Fiction',
          bookTitle: 'Some Book Title',
          author: 'John Doe',
          releasedDate: '1984',
          total: 48,
          language: 'Bahasa',
          desc: 'jakarta selatan',
        },
        {
          id: 2,
          bookCode: 'AKJHSA',
          bookType: 'Fiction',
          bookTitle: 'Some Book Title',
          author: 'John Doe',
          releasedDate: '1984',
          total: 48,
          language: 'Bahasa',
          desc: 'jakarta selatan',
        },
        {
          id: 3,
          bookCode: 'AKJHSA',
          bookType: 'Fiction',
          bookTitle: 'Some Book Title',
          author: 'John Doe',
          releasedDate: '1984',
          total: 48,
          language: 'Bahasa',
          desc: 'jakarta selatan',
        },
        {
          id: 4,
          bookCode: 'AKJHSA',
          bookType: 'Fiction',
          bookTitle: 'Some Book Title',
          author: 'John Doe',
          releasedDate: '1984',
          total: 48,
          language: 'Bahasa',
          desc: 'jakarta selatan',
        },
      ],
      dialogVisible: false,
      userDetail: {},
    };
  },
  methods: {
    submitSearch() {},
    edit({ id }) {
      this.dialogVisible = true;
      this.userDetail = this.tableData.find((user) => user.id === id)
    },
    handleClose() {
      this.userDetail = {};
      this.dialogVisible = false;
    },
  },
}
</script>
