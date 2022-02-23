import { createApp } from 'vue'
import App from './App.vue'
import naive from "naive-ui";
import store from './store/index'

createApp(App).use(naive).use(store).mount('#App')

