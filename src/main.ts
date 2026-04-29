import { createApp } from 'vue';
import { createPinia } from 'pinia';
import router from './router';
import './style.css';
import { createHead } from '@unhead/vue';
import App from './App.vue';

const app = createApp(App);
const pinia = createPinia();
const head = createHead();

app.use(pinia);
app.use(router);
app.use(head);

app.mount('#app');
