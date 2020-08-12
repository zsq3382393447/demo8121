import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import '../src/styles/rem'
import '../src/styles/reset.css'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Element from 'element-ui';
Vue.use(Element, { size: 'small', zIndex: 3000 });
import { Button } from 'element-ui';
Vue.prototype.$ELEMENT = { size: 'small', zIndex: 3000 };
Vue.use(Button);


import echarts from 'echarts'
Vue.prototype.$echarts=echarts;

Vue.config.productionTip = false

import filter from './filters'

for(let key in filter){
  Vue.filter(key,filter[key])
}
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
