<template>
	<div class="page">
		<!--顶部组件-->
		<TopComp />
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
}
.page {
	position: relative;
	height: 100%;
}
</style>