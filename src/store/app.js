import auth from '@/api/auth';

const defaultState = () => ({
  user: {
    id_user: null,
    nama_user: '',
    email: '',
    username: '',
  },
  loaded: false,
});

const mutations = {
  SET_USER_DETAIL: (state, payload) => {
    state.user = payload;
  },
  SET_LOADED: (state) => {
    state.loaded = true;
  },
};

const actions = {
  async fetchUserDetails({ commit }) {
    try {
      commit('SET_LOADED');
      const res = await auth.introspect()
      commit('SET_USER_DETAIL', res.data);
    } catch (e) {
      // do nothing
    }
  },
  async login({ dispatch }, payload) {
    try {
      const res = await auth.login(payload);
      await dispatch('fetchUserDetails');
      localStorage.setItem('TOKEN', res.data.token);
    } catch (e) {
      // do nothing
    }
  },
  logout({ commit }) {
    localStorage.clear();
    commit('SET_USER_DETAIL', defaultState());
  },
};

const getters = {
  currentUser: (state) => state.user,
  loaded: (state) => state.loaded,
  isLoggedIn: (state) => !!state.user.id_user,
};

export default {
  namespaced: true,
  state: defaultState(),
  mutations,
  actions,
  getters,
};
