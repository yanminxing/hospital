import {defineStore} from 'pinia';

export const useHospitalStore = defineStore('hospitalDetail', {
	state:() =>{
		return {
			detail: {}
		}
	},
	getters: {
	},
	actions: {
		/**
		 * @description 设置医院详情
		 * */
		SET_HOSPITAL_DETAIL(detail) {
			this.detail = detail || {}
		},
	},
});
