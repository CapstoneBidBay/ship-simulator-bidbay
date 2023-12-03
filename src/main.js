import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Toast from 'vue-toastification'
import 'vue-toastification/dist/index.css'
import { createPinia } from 'pinia'

const pinia = createPinia()

createApp(App).use(pinia).use(Toast, {
    position: 'bottom-right',
    hideProgressBar: true
}).mount('#app')
