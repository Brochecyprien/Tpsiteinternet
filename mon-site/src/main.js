import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

const app = createApp(App);

app.use(router); // Assurez-vous que `router` est bien importé et configuré
app.mount('#app');
