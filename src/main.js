import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/router'

import '@/assets/styles/base.scss'
import '@/assets/styles/layout.css'
import '@/assets/styles/utilities.scss'

const app = createApp(App)

app.use(router)

app.mount('#app')
