/**
 * @description 对axios进行二次封装
 * @description 二次封装的目的：1 利用axios自带的请求和拦截器功能
 *              2 请求携带：在请求头里面携带公共参数，如token
 *              3 相应拦截：简化服务返回的数据，处理http的网络错误。
 * */
import axios from 'axios';
import {ElMessage} from 'element-plus';


/**
 * @description 创建axios请求，并且配置一些参数
 * */
const request = axios.create({
	// 基础请求的路径，每一个请求都会携带
	baseURL: '/api',
	// 超时时间，超过时间，就是请求失败
	timeout: 5000
});

/**
 * @description axios请求--请求拦截
 * */
request.interceptors.request.use((config) => {
	// 需要返回该配置对象，否则，无法发起请求
	return config;
});

/**
 * @description axios请求--响应拦截:两个参数--请求成功的回调、请求失败的回调
 * */
request.interceptors.response.use((response) => {
	// debugger
	if (response.data.code === 200) {
		return response.data.data;
	}
	return response.data;
}, (error) => {
	switch (error.response?.status) {
		case 404:
			ElMessage.error('请求路径错误');
			break;
		case 500 | 501 | 503:
			ElMessage.error('服务器错误');
			break;
		default:
			break;
	}
	return Promise.reject(new TypeError(error));
});

export default request;