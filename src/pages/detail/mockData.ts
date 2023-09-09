import {
	Menu as IconMenu,
	Search,
	InfoFilled,
	Notification,
	Tickets,
} from '@element-plus/icons-vue'

/**
 * @description 医院详情页二级子路由
 * */
export  const menuList = [
	{
		name: '预约挂号',
		path: '/detail/appointment',
		icon: IconMenu,
	},
	{
		name: '医院详情',
		path: '/detail/detail',
		icon: Tickets,
	},
	{
		name: '预约通知',
		path: '/detail/notify',
		icon: Notification,
	},
	{
		name: '停诊信息',
		path: '/detail/info',
		icon: InfoFilled,
	},
	{
		name: '查询/取消',
		path: '/detail/search',
		icon: Search,
	},
];