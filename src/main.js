import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import "beercss"
import "material-dynamic-colors"

createApp(App).use(router).mount('#app')
