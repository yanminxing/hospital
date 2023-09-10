import {defineStore} from 'pinia';
import {DetailResponseType} from '@/api/detail/detailType';

interface StateModel {
	detail: DetailResponseType;
}

export const useHospitalStore = defineStore('hospitalDetail', {
	state: (): StateModel => {
		return {
			detail: {} as DetailResponseType
		};
	},
	getters: {},
	actions: {
		/**
		 * @description 设置医院详情
		 * */
		SET_HOSPITAL_DETAIL(detail: DetailResponseType) {
			this.detail = (detail || {}) as DetailResponseType;
		}
	}
});
