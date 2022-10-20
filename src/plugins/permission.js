import store from '../store';
import router from '../router';

const anonymousPath = [
  '',
  '/login',
];

const verifyRoutePath = (to, next) => {
  const destinationPath = to.matched[0].path;
  if (anonymousPath.includes(destinationPath)) {
    if (store.getters['app/isLoggedIn']) {
      return next({ name: 'dashboardHome' });
    }
    return next();
  }
  if (store.getters['app/isLoggedIn']) {
    return next();
  }
  return next({ name: 'login' });
};

const permission = {
  install() {
    router.beforeEach(async (to, from, next) => {
      document.title = to.meta.title || '';
      if (!store.getters['app/loaded']) {
        await store.dispatch('app/fetchUserDetails');
      }
      document.title = to.meta.title;
      verifyRoutePath(to, next);
    });
  },
};

export default permission;
