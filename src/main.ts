import {createApp} from 'vue';
import App from '@/App.vue';
// 引入样式，用来清除默认样式
import '@/style/reset.scss'
import TopComp from '@/components/common/top/index.vue';

function create() {
	const app = createApp(App);
	// 注册全局组件
	app.component('TopComp', TopComp)
	app.mount('#app');
}

create()