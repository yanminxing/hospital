<template>
	<div class="page-home w1200-align-center bg-white">
		<!--轮播图-->
		<CarouselComp/>
		<!--搜索组件-->
		<div class="page-home-search align-center-center">
			<KeySearch style="width: 600px" placeholder="请输入医院" defaultValue="有值"/>
			<el-button type="primary" :icon="Search">搜 索</el-button>
			<!--<el-input v-model="form.key" clearable></el-input>-->
		</div>
	</div>
</template>

<script setup lang="ts">
import {ref} from 'vue';
import CarouselComp from './components/carouselComp.vue';
import {Search} from '@element-plus/icons-vue';
import KeySearch from '@/components/autoSearch/AutoSearch.vue';

const form = ref({
	key: ''
})

console.log(getComputedStyle(window.document.documentElement)['fontSize']);

</script>

<style lang="scss" scoped>
@import "@/style/common.scss";
@import '@/style/elementReset.scss';

.page-home {
	&-search {
		margin-top: 10px;

		& :first-child {
			margin-right: 10px;
		}
	}
}
</style>