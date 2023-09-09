/**
 * 首页接口模块
 * */
import request from '@/utils/request';
import {DictModel, HospitalResponse} from '@/api/type/homoType';

enum HospitalApi {
	// 获取医院分页列表
	HOSPITAL_LIST = '/home/hosp/hospital/',
	FIND_BY_DICT_CODE = '/home/cmn/dict/findByDictCode/',
	FIND_HOSPITAL_BY_HOSNAME = '/hosp/hospital/findByHosname/',
}

/**
 * @description 获取医院分页列表
 *   GET /api/hosp/hospital/{page}/{limit}
 *   接口ID：107741435
 *   接口地址：https://app.apifox.com/link/project/3239132/apis/api-107741435
 * */
export const queryHospital = (_data) => {
	const {limit = 10, page = 1, hostype,districtCode } = _data;
	return request.get<any, HospitalResponse>(
		 `${HospitalApi.HOSPITAL_LIST}${page}/${limit}?districtCode=${districtCode}&hostype=${hostype}`,
	);
};

/**
 * @description 根据dictCode获取下级节点
 *   GET /api/cmn/dict/findByDictCode/{dictCode}
 *   接口ID：109397070
 *   接口地址：https://app.apifox.com/link/project/3239132/apis/api-109397070
 * */
export const reqDictCode = (data) => {
	const {dictCode} = data;
	return request.get<any, DictModel[]>(`${HospitalApi.FIND_BY_DICT_CODE}${dictCode}`);
};

/**
 * @description 根据医院名称获取医院列表
 *   GET /api/hosp/hospital/findByHosname/{hosname}
 *   接口ID：107741430
 *   接口地址：https://app.apifox.com/link/project/3239132/apis/api-107741430
 * */
export const reqHospital = (hosname = '') => {
	return request.get<any, DictModel[]>(`${HospitalApi.FIND_HOSPITAL_BY_HOSNAME}${hosname}`);
};