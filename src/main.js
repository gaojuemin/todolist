import {createApp} from 'vue'
import App from './App.vue'
import naive from 'naive-ui'
import store from './store/index'
import axios from 'axios'

createApp(App).use(naive).use(store).mount('#App')
// Vue.prototype.$axios = axios
