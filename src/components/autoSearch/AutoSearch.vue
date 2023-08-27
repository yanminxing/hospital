<!--auto搜索组件-->
<template>
	<el-autocomplete
		v-model="keyWord"
		v-bind="props"
		:fetch-suggestions="querySearch"
		:clearable="clearable"
		class="inline-input w-full"
		:placeholder="placeholder"
		@select="handleSelect"
	/>
</template>

<script setup lang="ts">
import {ref, onMounted,withDefaults} from 'vue';

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
const restaurants = ref([]);

const querySearch = (queryString: string, cb: any) => {
	const results = queryString
		? restaurants.value.filter(createFilter(queryString))
		: restaurants.value;
	// call callback function to return suggestions
	cb(results);
};

const createFilter = (queryString: string) => {
	return (restaurant) => {
		return (
			restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0
		);
	};
};

const handleSelect = (item) => {
	console.log(item);
};

const loadAll = () => {
	return [
		{ value: 'vue', link: 'https://github.com/vuejs/vue' },
		{ value: 'element', link: 'https://github.com/ElemeFE/element' },
		{ value: 'cooking', link: 'https://github.com/ElemeFE/cooking' },
		{ value: 'mint-ui', link: 'https://github.com/ElemeFE/mint-ui' },
		{ value: 'vuex', link: 'https://github.com/vuejs/vuex' },
		{ value: 'vue-router', link: 'https://github.com/vuejs/vue-router' },
		{ value: 'babel', link: 'https://github.com/babel/babel' },
	]
}


onMounted(() => {
	restaurants.value = loadAll();
});
</script>

<style lang="scss" scoped>
@import '@/style/elementReset.scss';
</style>