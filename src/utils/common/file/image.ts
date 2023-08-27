/**
 * @description 文件处理模块
 * */

/**
 * @description 获取本地文件
 * @param pathFront {string} 文件名之前链接
 * @param name {string} 文件名
 * */
export const getLocalFile = (pathFront: string, name: string) => {
	// 需要拼接，否则会出问题
	return new URL(`${pathFront}/${name}`, import.meta.url).href;
}
