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


/**
 * @description 医院列表参数
 * */
export interface HospitalRequest {
	/**
	 * 市code
	 */
	cityCode?: string;
	/**
	 * 区code
	 */
	districtCode?: string;
	/**
	 * 医院编号
	 */
	hoscode?: string;
	/**
	 * 医院名称
	 */
	hosname?: string;
	/**
	 * 医院类型
	 */
	hostype?: string;
	/**
	 * 省code
	 */
	provinceCode?: string;
	/**
	 * 状态
	 */
	status?: number;
}

/**
 * @description Dict，数据字典
 * */
export interface DictModel {
	/**
	 * 创建时间
	 */
	createTime?: Date;
	/**
	 * 编码
	 */
	dictCode?: string;
	/**
	 * 是否包含子节点
	 */
	hasChildren?: boolean;
	/**
	 * id
	 */
	id?: number;
	/**
	 * 逻辑删除(1:已删除，0:未删除)
	 */
	isDeleted?: number;
	/**
	 * 名称
	 */
	name?: string;
	/**
	 * 其他参数
	 */
	params?:{[key:string]: any};
	/**
	 * 上级id
	 */
	parentId?: number;
	/**
	 * 更新时间
	 */
	updateTime?: Date;
	/**
	 * 值
	 */
	value?: string;
}
