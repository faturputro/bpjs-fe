import axios from 'axios';
import VueAxios from 'vue-axios';
import { Message } from 'element-ui';
import store from '../store';
import router from '../router';

const axiosPlugins = {
  install(Vue) {
    const instance = axios.create({
      baseURL: `${process.env.VUE_APP_API_URL}/api`,
      withCredentials: false,
      timeout: 60 * 1000, // Timeout,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });

    instance.interceptors.request.use((config) => {
      const token = localStorage.getItem('TOKEN')
      if (token) {
        config.headers = {
          ...config.headers,
          Authorization: `Bearer ${token}`,
        }
      }
      return config
    });

    instance.interceptors.response.use((config) => config, async (err) => {
      if (err.response.status === 401) {
        if (err.response.data?.message) {
          Message({
            type: 'error',
            message: err.response.data.message,
          });
          await store.dispatch('app/logout');
          await router.push({ name: 'login' });
        } else if (store.getters['app/isLoggedIn']) {
          await store.dispatch('app/logout');
          await router.push({ name: 'login' });
        }
      } else {
        Message({
          type: 'error',
          message: err.response.message,
        });
      }
      const error = await Promise.reject(err);
      return error;
    });
    Vue.use(VueAxios, instance);
  },
};

export default axiosPlugins;
