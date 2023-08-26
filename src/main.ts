import {createApp} from 'vue';
import App from '@/App.vue';
// 引入样式，用来清除默认样式
import '@/style/reset.scss'

const app = createApp(App);
app.mount('#app');
