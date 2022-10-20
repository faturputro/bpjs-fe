import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import locale from 'element-ui/lib/locale/lang/en';

import axios from './axios';
import globalFilter from './globalFilter';
import permission from './permission';
import '@/assets/scss/main.scss';

export default {
  install(Vue) {
    Vue.use(axios);
    Vue.use(permission);
    Vue.use(globalFilter);
    Vue.use(ElementUI, { locale });
  },
}
