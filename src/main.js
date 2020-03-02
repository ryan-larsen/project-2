import Vue from 'vue';

import '@progress/kendo-ui';

import '@progress/kendo-theme-default/dist/all.css';

import {

ChartInstaller,

} from '@progress/kendo-charts-vue-wrapper';

import App from './App.vue';

Vue.use(ChartInstaller);

Vue.config.productionTip = false;

new Vue({

render: (h) => h(App),

}).$mount('#app');
