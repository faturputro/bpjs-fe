import Home from '@/views/dashboard/Dashboard.vue';
import UserManagement from '@/views/dashboard/user/Index.vue';
import BookManagement from '@/views/dashboard/book/Index.vue';
import BookManagementId from '@/views/dashboard/book/Id.vue';
import Loan from '@/views/dashboard/monitoring/Loan.vue';
import Return from '@/views/dashboard/monitoring/Return.vue';
import Chat from '@/views/dashboard/chat/Index.vue';
import permissions from '@/constants/permissions';
import Peminjaman from '@/views/dashboard/Peminjaman/Index.vue';
import Pengembalian from '@/views/dashboard/pengembalian/Index.vue';
import Permintaan from '@/views/dashboard/permintaan/Index.vue';
import History from '@/views/dashboard/laporan/History.vue';

const dashboardRoutes = [
  {
    path: 'home',
    name: 'dashboardHome',
    component: Home,
    meta: {
      title: 'Dashboard',
      allowedPermissions: [permissions.SUPER_ADMIN],
    },
  },
  {
    path: 'user',
    name: 'userManagment',
    component: UserManagement,
    meta: {
      title: 'Manajemen User',
      allowedPermissions: [permissions.SUPER_ADMIN],
    },
  },
  {
    path: 'book',
    name: 'bookManagement',
    component: BookManagement,
    meta: {
      title: 'Manajemen Buku',
      allowedPermissions: [permissions.SUPER_ADMIN],
    },
  },
  {
    path: 'book/new',
    name: 'bookManagementNew',
    component: BookManagementId,
    meta: {
      title: 'Manajemen Buku - Tambah',
      allowedPermissions: [permissions.SUPER_ADMIN],
    },
  },
  {
    path: 'book/:id',
    name: 'bookManagementDetail',
    component: BookManagementId,
    meta: {
      title: 'Manajemen Buku - Edit',
      allowedPermissions: [permissions.SUPER_ADMIN],
    },
  },
  {
    path: 'monitoring/loan',
    name: 'monitorBookLoan',
    component: Loan,
    meta: {
      title: 'Monitoring Peminjaman',
    },
  },
  {
    path: 'monitoring/return',
    name: 'monitorBookReturn',
    component: Return,
    meta: {
      title: 'Monitoring Pengembalian',
    },
  },
  {
    path: 'chat',
    name: 'chat',
    component: Chat,
    meta: {
      title: 'Chat',
    },
  },
  {
    path: 'permintaan-buku',
    name: 'permintaanBuku',
    component: Permintaan,
  },
  {
    path: 'peminjaman',
    name: 'peminjaman',
    component: Peminjaman,
  },
  {
    path: 'pengembalian',
    name: 'pengembalian',
    component: Pengembalian,
  },
  {
    path: 'report/loan-history',
    name: 'riwayatPeminjaman',
    component: History,
    meta: {
      title: 'Riwayat Peminjaman',
    },
  },
  {
    path: 'report/most-active-readers',
    name: 'laporanPembacaAktif',
    component: () => import(/* webpackChunkName: "reportActiveUser" */ '../views/dashboard/laporan/ActiveUser.vue'),
    meta: {
      title: 'Pembaca Paling Aktif',
    },
  },
  {
    path: 'report/summaries',
    name: 'laporanRingkasanItem',
    component: () => import(/* webpackChunkName: "laporanRingkasanItem" */ '../views/dashboard/laporan/ItemSummary.vue'),
    meta: {
      title: 'Ringkasan Item per Kategori',
    },
  },
  {
    path: 'report/popular-books',
    name: 'laporanBukuTerpopuler',
    component: () => import(/* webpackChunkName: "reportPopularBooks" */ '../views/dashboard/laporan/PopularBooks.vue'),
    meta: {
      title: 'Buku Terpopuler',
    },
  },
  {
    path: 'report/book-entries',
    name: 'laporanEntryBuku',
    component: () => import(/* webpackChunkName: "laporanEntryBuku" */ '../views/dashboard/laporan/BookEntries.vue'),
    meta: {
      title: 'Riwayat Entry Buku',
    },
  },
  {
    path: 'report/user-list',
    name: 'laporanListUser',
    component: () => import(/* webpackChunkName: "laporanListUser" */ '../views/dashboard/laporan/UserList.vue'),
    meta: {
      title: 'Daftar User',
    },
  },
  {
    path: 'report/book-list',
    name: 'laporanListBuku',
    component: () => import(/* webpackChunkName: "laporanListBuku" */ '../views/dashboard/laporan/BookList.vue'),
    meta: {
      title: 'Daftar Buku',
    },
  },
];

export default dashboardRoutes;
