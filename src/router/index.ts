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
			component: () => import('@/pages/detail/index.vue'),
			redirect: '/detail/appointment',
			children:[
				{
					name: '预约挂号',
					path: '/detail/appointment',
					component: () => import('@/pages/detail/appointment/index.vue')
				},
				{
					name: '医院详情',
					path: '/detail/detail',
					component: () => import('@/pages/detail/detail/index.vue')
				},
				{
					name: '预约通知',
					path: '/detail/notify',
					component: () => import('@/pages/detail/notify/index.vue')
				},
				{
					name: '停诊信息',
					path: '/detail/info',
					component: () => import('@/pages/detail/info/index.vue')
				},
				{
					name: '查询/取消',
					path: '/detail/search',
					component: () => import('@/pages/detail/search/index.vue')
				},
			]
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