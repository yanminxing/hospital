<template>
	<div class="page-home w1200-align-center bg-white">
		<!--轮播图-->
		<CarouselComp/>
		<!--搜索组件-->
		<div class="page-home-search align-center-center">
			<KeySearch style="width: 600px" placeholder="请输入医院" defaultValue="有值"/>
			<!--<el-button type="primary" :icon="Search">搜 索</el-button>-->
			<el-button type="" :icon="Search">
				<Search/>
				<!--<Search style="width: 1em; height: 1em; margin-right: 8px" />-->
				搜 索
			</el-button>
		</div>
	</div>
</template>

<script setup lang="ts">
import CarouselComp from './components/carouselComp.vue';
import {Search} from '@element-plus/icons-vue';
import KeySearch from '@/components/autoSearch/AutoSearch.vue';

</script>

<style lang="scss" scoped>
@import "@/style/common.scss";

.page-home {
	&-search {
		margin-top: 10px;

		& :first-child {
			margin-right: 10px;
		}
	}
}
</style>