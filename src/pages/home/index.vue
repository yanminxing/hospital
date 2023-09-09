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
				<SearchHospital @searchChange="searchChange"></SearchHospital>
				<el-row :gutter="20">
					<template v-if="hospitalList.length">
						<el-col :span="12"
			        v-for="(item, index) in hospitalList"
			        :key="item.id || index"
						>
							<MainContent :info="item"></MainContent>
						</el-col>
					</template>
					<el-empty v-else></el-empty>
				</el-row>
			</el-col>
			<el-col :span="5">2</el-col>
		</el-row>
		<el-pagination
			v-model:current-page="page.page"
			v-model:page-size="page.limit"
			class="page-home-pagination"
			:page-sizes="[10, 20, 50, 100]"
			:small="true"
			:disabled="false"
			layout="prev, pager, next, jumper, sizes, total "
			:total="page.total"
			@size-change="handlePageChange(1)"
			@current-change="handlePageChange"
		/>
	</div>
</template>

<script setup lang="ts">
import {ref, onMounted} from 'vue';
import CarouselComp from './components/carouselComp.vue';
import {Search} from '@element-plus/icons-vue';
import KeySearch from '@/components/autoSearch/AutoSearch.vue';
import SearchHospital from './components/searchHospital.vue';
import MainContent from './components/mainContent.vue';
import {queryHospital} from '@/api/homeApi';
import {PageModel} from '@/pages/home/modelData';
import type {Content, HospitalRequest} from '@/api/type/homoType';

const form = ref<HospitalRequest>({
	hostype: '',
	districtCode: ''
});

const page = ref<PageModel>({
	page: 1,
	limit: 10,
	total: 0
});
const hospitalList = ref<Content[]>([]);

/**
 * @description 获取医院分页列表
 * */
const getHospital = async () => {
	const res: any = await queryHospital({...page.value, ...form.value}) || {};
	hospitalList.value = res?.content || [];
	Object.assign(page.value, {
		total: res?.totalElements || 0
	});
};

/**
 * @description 搜索条件发生变化
 * */
const searchChange = async (searchForm) => {
	Object.assign(form.value, searchForm);
	await getHospital();
};

/**
 * @description 医院分页页面、size改变
 * */
const handlePageChange = async (curPage) => {
	if (curPage) page.value.page = curPage;
	await getHospital();
};

onMounted(async () => {
	await getHospital();
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