import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { clerkPlugin } from '@clerk/vue'
import { getEnvVariable } from '@clerk/shared/getEnvVariable'

const PUBLISHABLE_KEY = getEnvVariable('VITE_CLERK_PUBLISHABLE_KEY')
console.log('vue publishable key', PUBLISHABLE_KEY)

const app = createApp(App)
app.use(clerkPlugin, { publishableKey: PUBLISHABLE_KEY })
app.mount('#app')