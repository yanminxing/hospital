import {RequestCommon} from './commonType';

export interface HospitalModel {
	id?: string;
	createTime?: string;
	updateTime?: string;
	isDeleted?: number;
	param?: {
		hostypeString?: string;
		fullAddress?: string;
	};
	hoscode?: string;
	hosname?: string;
	hostype?: string;
	provinceCode?: string;
	cityCode?: string;
	districtCode?: string;
	address?: string;
	logoData?: string;
	intro?: string;
	route?: string;
	status?: number;
	bookingRule?: {
		cycle?: number;
		releaseTime?: string;
		stopTime?: string;
		quitDay?: number;
		quitTime?: string;
		rule?: string[]
	};
}

export type Content = HospitalModel[];

/**
 * @description 医院列表返回
 * */
export interface HospitalResponse  {
		content?: Content;
		pageable?: object;
		last?: boolean;
		totalPages?: number;
		totalElements?: number;
		first?: boolean;
		sort: {
			sorted?: boolean;
			unsorted?: boolean;
			empty?: boolean;
		};
		numberOfElements?: number;
		size?: number;
		number?: number;
		empty?: boolean;
}