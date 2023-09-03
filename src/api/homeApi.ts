/**
 * 首页接口模块
 * */
import request from '@/utils/request';

export const getHospital = (data) => {
	const {limit = 10, page = 1} = data;
	return request.get(`/hosp/hospital/${limit}/${page}`);
};