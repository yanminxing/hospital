<template>
	<div class="page-home-carousel">
		<el-carousel height="350px" arrow="always">
			<el-carousel-item v-for="item in dataList" :key="item.value">
				<img :src="CarouselImg" alt="暂无次图片">
			</el-carousel-item>
		</el-carousel>
	</div>
</template>

<script setup lang="ts">
import {ref} from 'vue';
import CarouselImg from '@/assets/images/web-banner-1.png';
import {getLocalFile} from '@/utils/common/file/image';

// 轮播图片列表
const dataList = ref([
	// vite引入图片方式
	// 1 方式1：使用import直接引入
	{
		name: CarouselImg,
		value: 1
	},
	// 2 方式2：使用import动态引入引入
	{
		name: () => import('@/assets/images/web-banner-1.png'),
		value: 2
	},
	// 3 方式3：使用new URL()引入
	{
		name: () => getLocalFile('@/assets/images','web-banner-1.png'),
		value: 2
	}
]);
</script>

<style lang="scss" scoped>
@import "@/style/common.scss";

.page-home-carousel {
}
</style>