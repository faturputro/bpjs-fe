import permissions from '@/constants/permissions'

export default [
  {
    title: 'User',
    path: '/dashboard/user',
    icon: 'el-icon-s-custom',
    permissions: permissions.SUPER_ADMIN,
  },
  {
    title: 'Buku',
    path: '/dashboard/book',
    icon: 'el-icon-s-management',
    permissions: permissions.SUPER_ADMIN,
  },
  {
    title: 'Monitor',
    icon: 'el-icon-s-platform',
    permissions: permissions.SUPER_ADMIN,
    children: [
      {
        title: 'Monitoring Peminjaman',
        path: '/dashboard/monitoring/loan',
        icon: 'el-icon-monitor',
      },
      {
        title: 'Monitoring Pengembalian',
        path: '/dashboard/monitoring/return',
        icon: 'el-icon-monitor',
      },
    ],
  },
  {
    title: 'Chat',
    path: '/dashboard/chat',
    icon: 'el-icon-s-comment',
    showBadge: true,
    permissions: permissions.SUPER_ADMIN,
  },
  {
    title: 'Peminjaman Buku',
    path: '/dashboard/peminjaman',
    icon: 'el-icon-s-management',
    permissions: permissions.ANGGOTA,
  },
  {
    title: 'Pengembalian Buku',
    path: '/dashboard/pengembalian',
    icon: 'el-icon-s-management',
    permissions: permissions.ANGGOTA,
  },
  {
    title: 'Permintaan Buku',
    path: '/dashboard/permintaan-buku',
    icon: 'el-icon-s-management',
    permissions: permissions.ANGGOTA,
  },
  {
    title: 'Laporan',
    icon: 'el-icon-s-order',
    permissions: permissions.SUPER_ADMIN,
    children: [
      {
        title: 'Riwayat Peminjaman',
        path: '/dashboard/report/loan-history',
      },
      {
        title: 'Pembaca Paling Aktif',
        path: '/dashboard/report/most-active-readers',
      },
      {
        title: 'Buku Terpopuler',
        path: '/dashboard/report/popular-books',
      },
      {
        title: 'Ringkasan Item per Kategori',
        path: '/dashboard/report/summaries',
      },
      {
        title: 'Riwayat Entry Buku',
        path: '/dashboard/report/book-entries',
      },
      {
        title: 'Daftar User',
        path: '/dashboard/report/user-list',
      },
      {
        title: 'Daftar Buku',
        path: '/dashboard/report/book-list',
      },
    ],
  },
]
