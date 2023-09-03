/**
 * 分页接口
 * */
export interface PageModel {
	/**
	 * 每页记录数
	 */
	limit: number;
	/**
	 * 当前页码
	 */
	page: number;
	/**
	 * 总条数
	 */
	total?: number;
}

/**
 * 医院参数
 * */
export interface RequestModel {
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