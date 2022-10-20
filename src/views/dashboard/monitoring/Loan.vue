<template>
  <div>
    <h1 class="m-0"><i class="el-icon-s-platform"></i> Monitor Peminjaman Buku</h1>
    <div class="mt-4 flex justify-between items-end">
      <div>
        <p>Periode</p>
        <el-date-picker
          v-model="dateRange"
          type="daterange"
          range-separator="To"
          start-placeholder="Start date"
          end-placeholder="End date">
        </el-date-picker>
      </div>
      <el-form :inline="true" :model="formInline" class="flex">
        <el-form-item label="Cari:" class="mb-0 flex items-center">
          <el-input v-model="formInline.searchVal"></el-input>
        </el-form-item>
        <el-form-item label="Kantor:" class="mb-0 flex items-center">
          <el-input v-model="formInline.officeVal"></el-input>
        </el-form-item>
        <el-form-item class="mb-0">
          <el-button type="primary" @click="submitSearch">Cari</el-button>
        </el-form-item>
      </el-form>
    </div>
    <el-divider></el-divider>
    <el-table
      :data="tableData"
      stripe
      style="width: 100%"
    >
      <el-table-column
        prop="no"
        label="No."
        width="100"
      ></el-table-column>
      <el-table-column
        prop="loanDate"
        label="Tanggal Pinjam"
        width="200"
        sortable
      ></el-table-column>
      <el-table-column
        prop="dueDate"
        label="Tanggal Jatuh Tempo"
        width="200"
        sortable
      ></el-table-column>
      <el-table-column
        prop="bookNo"
        label="No. Buku"
        width="100"
      ></el-table-column>
      <el-table-column
        prop="bookTitle"
        label="Judul Buku"
        width="250"
      ></el-table-column>
      <el-table-column
        prop="collectionType"
        label="Jenis Koleksi"
        width="180"
      ></el-table-column>
      <el-table-column
        prop="collectionStatus"
        label="Status Koleksi"
        width="180"
      ></el-table-column>
      <el-table-column
        prop="availableCount"
        label="Jumlah Persediaan"
        width="180"
      ></el-table-column>
      <el-table-column
        prop="name"
        label="Nama Peminjam"
        width="210"
        sortable
      ></el-table-column>
      <el-table-column
        prop="phoneNo"
        label="No. Hp"
        width="140"
      ></el-table-column>
      <el-table-column
        prop="workingUnit"
        label="Unit Kerja"
        width="180"
      ></el-table-column>
      <el-table-column fixed="right" label="Actions" width="170">
        <template slot-scope="scope">
          <el-button size="mini" class="" @click="edit(scope.row)">Chat</el-button>
          <el-button
            size="mini"
            class=""
            plain
            type="success"
            @click="edit(scope.row)"
          >Approve</el-button>
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
      dateRange: '',
      formInline: {
        searchVal: '',
        officeVal: '',
      },
      tableData: [
        {
          no: '1',
          loanDate: '21 Sep 2022',
          dueDate: '01 Sep 2022',
          returnedDate: '23 Sep 2022',
          bookNo: '123',
          bookTitle: 'Clean Architecture',
          collectionType: '',
          collectionStatus: '',
          availableCount: 20,
          name: 'John Doe',
          phoneNo: '08123123123',
          workingUnit: '',
        },
        {
          no: '1',
          loanDate: '21 Sep 2022',
          dueDate: '01 Sep 2022',
          returnedDate: '23 Sep 2022',
          bookNo: '123',
          bookTitle: 'Clean Architecture',
          collectionType: '',
          collectionStatus: '',
          availableCount: 20,
          name: 'John Doe',
          phoneNo: '08123123123',
          workingUnit: '',
        },
        {
          no: '1',
          loanDate: '21 Sep 2022',
          dueDate: '01 Sep 2022',
          returnedDate: '23 Sep 2022',
          bookNo: '123',
          bookTitle: 'Clean Architecture',
          collectionType: '',
          collectionStatus: '',
          availableCount: 20,
          name: 'John Doe',
          phoneNo: '08123123123',
          workingUnit: '',
        },
        {
          no: '1',
          loanDate: '21 Sep 2022',
          dueDate: '01 Sep 2022',
          returnedDate: '23 Sep 2022',
          bookNo: '123',
          bookTitle: 'Clean Architecture',
          collectionType: '',
          collectionStatus: '',
          availableCount: 20,
          name: 'John Doe',
          phoneNo: '08123123123',
          workingUnit: '',
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
