<template>
  <div>
    <h1 class="m-0"><i class="el-icon-s-comment"></i> Chat</h1>
    <el-table
      :data="tableData"
      stripe
      style="width: 100%"
    >
      <el-table-column
        prop="id"
        label="No."
        width="100"
      >
      </el-table-column>
      <el-table-column
        prop="userName"
        label="Nama"
        width="250"
      >
      </el-table-column>
      <el-table-column
        prop="sentAt"
        label="Tanggal Kirim"
        width="200"
      >
        <template slot-scope="scope">
          <p>{{ scope.row.sentAt | formatDate('DD MMM YYYY HH:mm') }}</p>
        </template>
      </el-table-column>
      <el-table-column
        prop="repliedAt"
        label="Tanggal Balasan"
        width="320"
      >
      <template slot-scope="scope">
          <p>{{ scope.row.repliedAt | formatDate('DD MMM YYYY HH:mm') }}</p>
        </template>
      </el-table-column>
      <el-table-column
        prop="conversation"
        label="Percakapan"
      >
      </el-table-column>
      <el-table-column fixed="right" label="Actions" width="180">
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="primary"
            @click="showDialog(scope.row)"
          >Balas</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="flex mt-6 justify-center">
      <el-pagination
        background
        layout="prev, pager, next"
        :total="1000"
      >
      </el-pagination>
    </div>
    <el-dialog
      :title="activeChat.userName"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose">
      <div>
        <ul class="chat-message--list">
          <li v-for="(msg, i) in messages" :key="i" :class="msg.type === 1 ? 'primary' : 'secondary'">
            <p class="my-0">{{ msg.message }}</p>
            <small>{{ msg.timetamp | formatDate('HH:mm') }}</small>
          </li>
        </ul>
        <span slot="footer" class="dialog-footer">
          <div class="flex items-center">
            <el-input v-model="message" @keyup.enter.native="sendMessage"></el-input>
            <el-button
              type="primary"
              @click="sendMessage"
              icon="el-icon-s-promotion"
            ></el-button>
          </div>
        </span>
      </div>
    </el-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeChat: {
        userName: '',
      },
      message: '',
      messages: [
        {
          timestamp: Date.now(),
          message: 'Need help...',
          type: 2,
        },
        {
          timestamp: Date.now(),
          message: 'How can i help?',
          type: 1,
        },
      ],
      formInline: {
        searchVal: '',
        officeVal: '',
      },
      tableData: [
        {
          id: 1,
          userName: 'John Doe',
          sentAt: '2011-10-05T14:48:00.000Z',
          repliedAt: '2011-10-05T14:48:00.000Z',
          conversation: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        },
        {
          id: 2,
          userName: 'John Smith',
          sentAt: '2011-10-05T14:48:00.000Z',
          repliedAt: '2011-10-05T14:48:00.000Z',
          conversation: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        },
        {
          id: 3,
          userName: 'John Doe',
          sentAt: '2011-10-05T14:48:00.000Z',
          repliedAt: '2011-10-05T14:48:00.000Z',
          conversation: 'Lorem ipsum dolor sit amet',
        },
        {
          id: 4,
          userName: 'John Doe',
          sentAt: '2011-10-05T14:48:00.000Z',
          repliedAt: '2011-10-05T14:48:00.000Z',
          conversation: 'Lorem ipsum dolor sit amet',
        },
      ],
      dialogVisible: false,
      userDetail: {},
    };
  },
  methods: {
    edit({ id }) {
      this.dialogVisible = true;
      this.userDetail = this.tableData.find((user) => user.id === id);
    },
    handleClose() {
      this.userDetail = {};
      this.dialogVisible = false;
    },
    showDialog(row) {
      this.dialogVisible = true;
      this.activeChat = { ...row };
    },
    sendMessage() {
      const payload = {
        type: 1,
        message: this.message,
        timestamp: Date.now(),
      };
      this.message = '';
      this.messages.push(payload);
    },
  },
}
</script>

<style lang="scss">
.chat-message--list {
  position: relative;
  list-style: none;
  padding: 0;

  li {
    list-style: none;
    padding: .5rem;
    border-radius: 12px;
    margin-bottom: 1rem;

    p {
      font-size: 1rem;
    }

    &.primary {
      background-color: rgb(0, 140, 216);
      color: white;
    }
    &.secondary {
      background-color: rgb(232, 232, 232);
      color: #333;
    }
  }
}
</style>
