/**
 * Request
 *
 * 全局统一返回结果
 */
export interface RequestCommon {
	/**
	 * 返回码
	 */
	code?: number;
	/**
	 * 返回数据
	 */
	// data?: { [key: string]: any };
	/**
	 * 返回消息
	 */
	message?: string;
	ok?: boolean;
}