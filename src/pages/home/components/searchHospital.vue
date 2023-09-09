<template>
	<div class="page-home-hospital">
		<div class="page-home-hospital-name">
			医院
		</div>
		<div class="page-home-hospital-content">
			<span>等级:</span>
			<div class="page-home-hospital-content-right">
				<span :class="{'page-home-hospital-active': !form.hostype}" @click="change('hostype', '')">全部医院</span>
				<span
					v-for="item in levelList"
					:key="item.value"
					:class="{'page-home-hospital-active': form.hostype === item.value}"
					@click="change('hostype', item.value)"
				>
					{{ item.name }}
				</span>
			</div>
		</div>
		<div class="page-home-hospital-content">
			<span>地区:</span>
			<div class="page-home-hospital-content-right">
				<span :class="{'page-home-hospital-active': !form.districtCode}" @click="change('districtCode', '')">
					全部地区
				</span>
				<span
					v-for="item in regionList"
					:key="item.value"
					:class="{'page-home-hospital-active': form.districtCode === item.value}"
					@click="change('districtCode', item.value)"
				>
					{{ item.name }}
				</span>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts" name="LevelAndRegion">
import {ref, onMounted} from 'vue';
import {reqDictCode} from '@/api/homeApi';
import {DictModel, HospitalRequest} from '@/api/type/homoType';

const emits = defineEmits(['searchChange'])

const form = ref<HospitalRequest>({
	hostype: '',
	districtCode: ''
});
const levelList = ref<DictModel[]>([]);
const regionList = ref<DictModel[]>([]);

/**
 * @获取页面数据--等级列表和地区列表
 * */
async function initPage() {
	levelList.value = await reqDictCode({dictCode: 'Hostype'}) || [];
	regionList.value = await reqDictCode({dictCode: 'Beijin'}) || [];
}


/**
 * @点击等级或者地区--等级列表和地区列表
 * */
function change(type, value) {
	form.value[type] = value
	emits('searchChange', form.value)
}


onMounted(async () => {
	await initPage();
});
</script>

<style lang="scss" scoped>
@import "@/style/common.scss";
@import '@/style/elementReset.scss';

.page-home-hospital {

	&-name {
		font-weight: 600;
		font-size: 20px;
	}

	&-content {
		display: flex;
		margin-top: 10px;
		color: #bbbbbb;

		& :first-child {
			line-height: 26px;
		}

		&-right {
			flex: 1;
			margin-left: 10px;

			span {
				margin-right: 10px;
				line-height: 26px;
			}
		}
	}

	&-active {
		color: #55a6fe;
	}
}
</style>