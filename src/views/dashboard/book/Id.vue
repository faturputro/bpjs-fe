<template>
  <div>
    <el-button type="text" @click="$router.go(-1)" icon="el-icon-back" class="p-0 my-2">Kembali</el-button>
    <h1 class="m-0"><i class="el-icon-s-management"></i> Buku</h1>
    <p class="m-0 mt-2 text-gray-400">Tambah/Edit Buku</p>
    <el-divider></el-divider>
    <el-form label-position="top" label-width="100px" :model="bookModel">
      <el-row :gutter="20">
        <el-col :span="12">
          <el-form-item label="Kode Buku" required>
            <el-input v-model="bookModel.bookCode"></el-input>
          </el-form-item>
          <el-row>
            <el-col :span="8">
              <el-form-item label="Jenis Buku" required>
                <el-select v-model="bookModel.bookType" placeholder="Select">
                  <el-option
                    v-for="item in bookTypes"
                    :key="item.id"
                    :label="item.label"
                    :value="item.id">
                  </el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="Status Koleksi" required>
                <el-select v-model="bookModel.collectionStatus" placeholder="Select">
                  <el-option
                    v-for="item in collectionStatus"
                    :key="item.id"
                    :label="item.label"
                    :value="item.id">
                  </el-option>
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>
          <el-form-item label="Penulis" required>
            <el-input v-model="bookModel.author"></el-input>
          </el-form-item>
          <el-form-item label="Penerbit" required>
            <el-input v-model="bookModel.publisher"></el-input>
          </el-form-item>
          <el-form-item label="Tahun Terbit" required>
            <el-date-picker
              v-model="bookModel.releasedDate"
              type="year"
              placeholder="Pick a year"
            >
            </el-date-picker>
          </el-form-item>
          <el-form-item label="Tempat Terbit" required>
            <el-input v-model="bookModel.releasedLocation"></el-input>
          </el-form-item>
          <el-form-item label="Edition" required>
            <el-input v-model="bookModel.edition"></el-input>
          </el-form-item>
          <el-form-item label="Subject" required>
            <el-input v-model="bookModel.subject"></el-input>
          </el-form-item>
          <el-form-item label="Keterangan" required>
            <el-input type="textarea" :rows="3" v-model="bookModel.description"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="No. Klasifikasi" required>
            <el-input v-model="bookModel.classificationNo"></el-input>
          </el-form-item>
          <el-form-item label="Label" required>
            <el-input v-model="bookModel.label"></el-input>
          </el-form-item>
          <el-form-item label="ISBN" required>
            <el-input v-model="bookModel.isbn"></el-input>
          </el-form-item>
          <el-form-item label="Deskripsi/Fisik/Kolasi" required>
            <el-input v-model="bookModel.collageDescription"></el-input>
          </el-form-item>
          <el-form-item label="Bahasa" required>
            <el-select v-model="bookModel.language" placeholder="Select">
              <el-option
                v-for="item in bookTypes"
                :key="item.id"
                :label="item.label"
                :value="item.id">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="Abstrak" required>
            <el-input v-model="bookModel.abstract" type="textarea" :rows="3"></el-input>
          </el-form-item>
          <el-form-item label="Jumlah" required>
            <el-input-number v-model="bookModel.total" :min="1"></el-input-number>
          </el-form-item>
          <el-row :gutter="20">
            <el-col :span="8">
              <el-form-item label="Rak" required>
                <el-input v-model="bookModel.columnNo"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="Baris" required>
                <el-input v-model="bookModel.rowNo"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="Kolom" required>
                <el-input v-model="bookModel.rowNo"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-form-item label="No. Urut" required>
            <el-input v-model="bookModel.rowNo"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="7">
          <p>Gambar Sampul</p>
          <el-upload
            class="upload-demo"
            drag
            action="https://jsonplaceholder.typicode.com/posts/"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :file-list="fileList"
          >
            <i class="el-icon-upload"></i>
            <div class="el-upload__text">Drop file here or <em>click to upload</em></div>
            <div class="el-upload__tip" slot="tip">File with a size less than 500kb</div>
          </el-upload>
        </el-col>
        <el-col :span="7">
          <p>File Upload Data Buku</p>
          <el-upload
            class="upload-demo"
            drag
            action="https://jsonplaceholder.typicode.com/posts/"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :file-list="fileList"
            accept="application/pdf, image/png, image/jpeg, image/jpg"
            multiple>
            <i class="el-icon-upload"></i>
            <div class="el-upload__text">Drop file here or <em>click to upload</em></div>
            <div class="el-upload__tip" slot="tip">Files with a size less than 500kb</div>
          </el-upload>
        </el-col>
      </el-row>
    </el-form>
    <el-divider></el-divider>
    <el-button type="primary">Simpan</el-button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      bookModel: {
        bookCode: '',
        bookType: null,
        collectionStatus: null,
      },
      fileList: [],
      dialogVisible: false,
      userDetail: {},
      bookTypes: [
        {
          id: 1,
          label: 'Fiction',
        },
        {
          id: 2,
          label: 'History',
        },
      ],
      collectionStatus: [
        {
          id: 1,
          label: 'Collected',
        },
        {
          id: 2,
          label: 'Pending',
        },
      ],
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
    handlePreview() {
      console.log('doSOmething');
    },
    handleRemove() {
      console.log('doSOmething');
    },
  },
}
</script>
