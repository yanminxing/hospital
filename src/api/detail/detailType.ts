import {RequestCommon} from '../type/commonType';


interface BookingRuleModel {
	/**
	 * @description
	 * */
	cycle?: number;
	/**
	 * @description
	 * */
	quitDay?: number;
	/**
	 * @description
	 * */
	quitTime?: string;
	/**
	 * @description
	 * */
	releaseTime?: string;
	/**
	 * @description
	 * */
	rule?: Array<number>;
	/**
	 * @description
	 * */
	stopTime?: string;
}

interface HospitalModel {
	address?: string;
	/**
	 * @description
	 * */
	bookingRule: BookingRuleModel;
	/**
	 * @description
	 * */
	cityCode?: string;
	/**
	 * @description
	 * */
	createTime?: string;
	/**
	 * @description
	 * */
	districtCode?: string;
	/**
	 * @description
	 * */
	hoscode?: string;
	/**
	 * @description
	 * */
	hosname?: string;
	/**
	 * @description
	 * */
	hostype?: string;
	/**
	 * @description
	 * */
	id?: string;
	/**
	 * @description
	 * */
	intro?: string;
	/**
	 * @description
	 * */
	isDeleted?: number;
	/**
	 * @description
	 * */
	logoData?: string;
	/**
	 * @description
	 * */
	param: Object;
	/**
	 * @description
	 * */
	provinceCode?: string;
	/**
	 * @description
	 * */
	route?: string;
	/**
	 * @description
	 * */
	status?: number;
	/**
	 * @description
	 * */
	updateTime?: string;
	/**
	 * @description
	 * */
}

interface ResponseModel {
	bookingRule: BookingRuleModel;
	hospital: HospitalModel;
}

export type DetailResponseType = ResponseModel