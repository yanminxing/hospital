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
						<span>{{item.name}}</span>
					</el-menu-item>
				</template>
			</el-menu>
		</div>
		<div >
			<router-view/>
		</div>
	</div>
</template>

<script setup lang="ts">
import {ref} from 'vue';
import {useRouter} from 'vue-router';
import {menuList} from './mockData'

const router = useRouter()
const currentRoute = router.currentRoute.value;

const activeMenu = ref(currentRoute.path || '/detail/appointment');

</script>

<style lang="scss" scoped>
@import "@/style/common.scss";

.detail {
	display: flex;
	min-height: 100%;
	background: white;
	&-left {
		width: 200px;
	}

	&-content {
		flex: 1;
	}
}
</style>