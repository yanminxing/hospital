<template>
	<div class="page-home w1200-align-center bg-white">
		<!--轮播图-->
		<CarouselComp/>
		<!--搜索组件-->
		<div class="page-home-search align-center-center">
			<KeySearch style="width: 600px" placeholder="请输入医院" defaultValue="有值"/>
			<el-button type="primary" :icon="Search">搜 索</el-button>
		</div>
		<el-row :gutter="20" class="content">
			<el-col :span="19">
				<!--医院搜索条件-->
				<SearchHospital></SearchHospital>
				<el-row :gutter="20">
					<el-col :span="12" v-for="item in 8" :key="item">
						<MainContent></MainContent>
					</el-col>
				</el-row>
			</el-col>
			<el-col :span="5">2</el-col>
		</el-row>
		<el-pagination
			v-model:current-page="currentPage4"
			v-model:page-size="pageSize4"
			class="page-home-pagination"
			:page-sizes="[100, 200, 300, 400]"
			:small="small"
			:disabled="disabled"
			:background="background"
			layout="prev, pager, next, jumper, total, sizes,"
			:total="400"
			@size-change="handleSizeChange"
			@current-change="handleCurrentChange"
		/>
	</div>
</template>

<script setup lang="ts">
import {ref,onMounted} from 'vue';
import CarouselComp from './components/carouselComp.vue';
import {Search} from '@element-plus/icons-vue';
import KeySearch from '@/components/autoSearch/AutoSearch.vue';
import SearchHospital from './components/searchHospital.vue';
import MainContent from './components/mainContent.vue';
import {getHospital} from '@/api/homeApi'

const form = ref({
	key: ''
});

onMounted(async () => {
	const res = await getHospital({limit: 10, page: 1})
	console.log(res);
});

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

.content {
	padding: 20px;
}
</style>