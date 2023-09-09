<!--auto搜索组件-->
<template>
	<el-autocomplete
		v-model="keyWord"
		v-bind="props"
		:trigger-on-focus="false"
		:fetch-suggestions="querySearch"
		:clearable="clearable"
		class="inline-input w-full"
		:placeholder="placeholder"
		@select="handleSelect"
	/>
</template>

<script setup lang="ts">
import {ref, onMounted,withDefaults} from 'vue';
import {useRouter} from 'vue-router';
import {reqHospital} from '@/api/homeApi';

const router = useRouter();
const props = defineProps({
	/**
	 * 占位符
	 * */
	placeholder: {
		type: String,
		default: () => '请输入'
	},
	/**
	 * 绑定的初始值
	 * */
	defaultValue: {
		type: String,
		default: () => ''
	},
	/**
	 * 是否显示清除按钮
	 * */
	clearable: {
		type: Boolean,
		default: () => true
	}
})

const keyWord = ref(props.defaultValue);

const querySearch =async (value: string, cb: any) => {
	const res = await reqHospital(value) || []
	const list = res.map((item: object) => {
		return {
			value: item.hosname,
			hoscode: item.hoscode,
		}
	})
	cb(list);
};


const handleSelect = (item) => {
	router.push({
		path: '/detail',
		query: {
			hoscode: item.hoscode
		}
	})
};


onMounted(() => {
});
</script>

<style lang="scss" scoped>
@import '@/style/elementReset.scss';
</style>