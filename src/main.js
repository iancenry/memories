/* eslint-disable vue/no-reserved-component-names */
/* eslint-disable vue/multi-word-component-names */
import './assets/main.css';

//primevue
import PrimeVue from 'primevue/config';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import Avatar from 'primevue/avatar';
import Toast from 'primevue/toast';

import ToastService from 'primevue/toastservice'

import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';

const app = createApp(App);

app.component('Button', Button);
app.component('InputText', InputText);
app.component('Avatar', Avatar);
app.component('Toast', Toast);

app.use(PrimeVue);
app.use(ToastService);
app.use(createPinia());
app.use(router);

app.mount('#app');
