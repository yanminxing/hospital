<template>
	<div class="page">
		<!--顶部组件-->
		<TopComp />
		<!--路由组件-->
		<div class="page-router">
			<router-view></router-view>
		</div>
		<!--底部组件-->
		<CommonBottom />
	</div>
</template>

<script lang="ts" setup>
import CommonBottom from '@/components/common/bottom/index.vue';

</script>

<style lang="scss">
@import "@/style/common.scss";

body{
	background-color: $bg-all;
	height: 100vh;
}
#app {
	height: 100%;
}
.page {
	position: relative;
	height: 100%;
	&-router {
		padding-top: 80px;
		padding-bottom: 60px;
	}
}
</style>