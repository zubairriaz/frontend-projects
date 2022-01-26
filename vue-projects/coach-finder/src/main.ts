import { createApp } from 'vue'
import App from './App.vue'

import router from './router';
import {store} from './store/index';
import BaseCard from '../src/components/ui/BaseCard.vue';
import BaseButton from '../src/components/ui/BaseButton.vue';
import BaseBadge from '../src/components/ui/BaseBadge.vue';

const app = createApp(App)
app.use(router)
app.use(store);
app.component('base-card', BaseCard)
app.component('base-button', BaseButton )
app.component('base-badge', BaseBadge)
app.mount('#app')
