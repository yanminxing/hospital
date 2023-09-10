<template>
	<div class="detail w1200-align-center">
		<!--左边菜单-->
		<div class="detail-left">
			<el-menu
				:default-active="activeMenu"
				class="el-menu-vertical-demo"
				router
			>
				<template v-for="item in menuList" :key="item">
					<el-menu-item :index="item.path">
						<el-icon>
							<component :is="item.icon"></component>
						</el-icon>
						<span>{{ item.name }}</span>
					</el-menu-item>
				</template>
			</el-menu>
		</div>
		<div>
			<router-view/>
		</div>
	</div>
</template>

<script setup lang="ts">
import {onMounted, ref} from 'vue';
import {useRoute, useRouter} from 'vue-router';
import {useHospitalStore} from '@/store';
import {reqHospitalDetail} from '@/api/detail/detailApi';
import {DetailResponseType} from '@/api/detail/detailType';
import {menuList} from './mockData';

const router = useRouter();
const route = useRoute();
const store = useHospitalStore();
const currentRoute = router.currentRoute.value;

const activeMenu = ref(currentRoute.path || '/detail/appointment');

const initPage =async () => {
	if(!route.query?.hoscode) return
	const res:DetailResponseType = await reqHospitalDetail(route.query.hoscode)
	// 将医院详情存在在store仓库里面
	store.SET_HOSPITAL_DETAIL(res)
};

onMounted(async () => {
	await initPage();
});

</script>

<style lang="scss" scoped>
@import "@/style/common.scss";

.detail {
	display: flex;
	background: white;

	&-left {
		width: 200px;
	}

	&-content {
		flex: 1;
	}
}
</style>