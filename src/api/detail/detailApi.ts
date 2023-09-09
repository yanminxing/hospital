/**
 * 医院接口模块
 * */
import request from '@/utils/request';

enum DetailApi {
	// 获取医院分页列表
	HOSPITAL_DETAIL = '/hosp/hospital/',
}

/**
 * @description 医院预约挂号详情
 *   GET /api/hosp/hospital/{hoscode}
 *   接口ID：107741434
 *   接口地址：https://app.apifox.com/link/project/3239132/apis/api-107741434
 * */
export const reqHospitalDetail = (hoscode) => {
	return request.get<any, any>(
		`${DetailApi.HOSPITAL_DETAIL}${hoscode}`,
	);
};

