/**
 * @description 路由页面
 * */
import {createRouter, createWebHashHistory} from 'vue-router';

/**
 * @description 路由实例
 * @description createRouter--用来创建路由
 * */
const router = createRouter({
	// 路由模式创建
	history: createWebHashHistory(),
	routes: [
		{
			path: '/home',
			component: () => import('@/pages/home/index.vue')
		},
		{
			path: '/detail',
			component: () => import('@/pages/detail/index.vue')
		},
		{
			path: '/',
			redirect: '/home'
		}
	],
	// 滚动行为控制： 控制滚动条的位置
	scrollBehavior() {
		return {
			left: 0,
			top: 0
		}
	}
});

export default router;