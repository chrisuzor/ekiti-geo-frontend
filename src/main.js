import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import router from './router.js'
import './axios'
import Vue3EasyDataTable from "vue3-easy-data-table";
import "vue3-easy-data-table/dist/style.css";

loadFonts()

createApp(App)
  .use(store)
  .use(vuetify)
  .use(router)
  .use(Vue3EasyDataTable)
  .mount('#app')
