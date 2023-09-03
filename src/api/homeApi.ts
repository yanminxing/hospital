/**
 * 首页接口模块
 * */
import request from '@/utils/request';

enum HospitalApi {
	// 获取医院分页列表
	HOSPITAL_LIST = '/home/hosp/hospital/'
}

/**
 * @description 获取医院分页列表
 *   GET /api/hosp/hospital/{page}/{limit}
 *   接口ID：107741435
 *   接口地址：https://app.apifox.com/link/project/3239132/apis/api-107741435
 * */
export const queryHospital = (data) => {
	const {limit = 10, page = 1} = data;
	return request.get(`${HospitalApi.HOSPITAL_LIST}${page}/${limit}`);
};