import { createApp } from 'vue';
import router from './routes';
import { createPinia } from 'pinia';
import App from './App.vue';
import './main.scss';

createApp(App).use(createPinia()).use(router).mount('#app');
