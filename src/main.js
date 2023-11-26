/* eslint-disable vue/multi-word-component-names */
import './assets/main.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';

//primevue
import PrimeVue from 'primevue/config';

import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import InputMask from 'primevue/inputmask';

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(PrimeVue);
// eslint-disable-next-line vue/no-reserved-component-names
app.component('Button', Button);
app.component('InputText', InputText);
app.component('InputMask', InputMask);

app.mount('#app');
