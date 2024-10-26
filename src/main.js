import './assets/scss/main.scss'

import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router.js'
// main.js or app.js
import 'bootstrap';


createApp(App).use(router).mount('#app')
