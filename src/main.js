import { createApp } from 'vue'
import App from './App.vue'
import { createVuestic } from 'vuestic-ui'
import 'vuestic-ui/css'
import '../src/style/ResultArea.css'
import '../src/style/navbar.css'
import '../src/style/SerachArea.css'
import '../src/style/YourLibrary.css'
import { createRouter,createWebHistory } from 'vue-router'





//...
const app = createApp(App)
app.use(createVuestic())
app.mount('#app')

//...