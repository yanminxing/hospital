<template>
	<el-card class="page-home-content" @click="goToDetail">
		<div class="page-home-content-left">
			<div>{{info?.hosname}}</div>
			<div class="page-home-content-left-info">
				<svg
					t="1693640166816"
					class="icon"
					viewBox="0 0 1024 1024"
					version="1.1"
					xmlns="http://www.w3.org/2000/svg"
					p-id="4033"
					width="16"
					height="16">
					<path d="M832 364.8h-147.2s19.2-64 32-179.2c6.4-57.6-38.4-115.2-102.4-121.6h-12.8c-51.2 0-83.2 32-102.4 76.8l-38.4 96c-32 64-57.6 102.4-76.8 115.2-25.6 12.8-121.6 12.8-128 12.8H128c-38.4 0-64 25.6-64 57.6v480c0 32 25.6 57.6 64 57.6h646.4c96 0 121.6-64 134.4-153.6l51.2-307.2c6.4-70.4-6.4-134.4-128-134.4z m-576 537.6H128V422.4h128v480z m640-409.6l-51.2 307.2c-12.8 57.6-12.8 102.4-76.8 102.4H320V422.4c44.8 0 70.4-6.4 89.6-19.2 32-12.8 64-64 108.8-147.2 25.6-64 38.4-96 44.8-102.4 6.4-19.2 19.2-32 44.8-32h6.4c32 0 44.8 32 44.8 51.2-12.8 102.4-32 166.4-32 166.4l-25.6 83.2h243.2c19.2 0 32 0 44.8 12.8 12.8 12.8 6.4 38.4 6.4 57.6z" p-id="4034">
					</path>
				</svg>
				<span>{{ info?.param?.hostypeString}}</span>
				<svg
					t="1693640637975"
					class="icon"
					viewBox="0 0 1224 1024"
					version="1.1" xmlns="http://www.w3.org/2000/svg"
					p-id="6273"
					width="16"
					height="16">
					<path d="M1088.41388 163.233377a45.196693 45.196693 0 0 1-61.267846-2.961919L923.314311 68.671365a40.534412 40.534412 0 0 1-8.063002-58.10481 45.196693 45.196693 0 0 1 61.267847 2.943636l103.886572 91.600093a40.534412 40.534412 0 0 1 8.008152 58.123093zM1097.007103 538.098987A484.51147 484.51147 0 1 1 612.495632 52.179691 485.206241 485.206241 0 0 1 1097.007103 538.098987zM612.495632 156.303949a381.776755 381.776755 0 1 0 380.679748 381.795038A381.228252 381.228252 0 0 0 612.495632 156.303949z m156.725748 360.769069L607.741935 652.84593a120.341679 120.341679 0 0 1-24.20729 15.851753 39.62024 39.62024 0 0 1-24.390125 7.916735 33.221032 33.221032 0 0 1-30.917317-7.788751 23.951322 23.951322 0 0 1-5.485035-13.657738l-72.201351-74.285665a37.974729 37.974729 0 0 1 1.407826-54.521253 40.040759 40.040759 0 0 1 55.746244 1.371259l57.538023 59.183533 152.648538-128.29498c29.728892-24.975195 65.326773-32.142308 79.514731-15.979737s1.59066 49.456737-28.174799 74.450215zM197.991499 160.271458a44.75789 44.75789 0 0 1-60.865611 2.961919 40.698964 40.698964 0 0 1 7.953301-58.10481l103.301502-91.600093a44.75789 44.75789 0 0 1 60.865611-2.961919 40.698964 40.698964 0 0 1-7.953301 58.10481z" fill="#333333" p-id="6274">
				</path>
				</svg>
				<span>每天{{info?.bookingRule?.releaseTime}}放号</span>
			</div>
		</div>
		<img class="page-home-content-icon" :src="`data:image/gif;base64,${info?.logoData}`"  alt=""/>
	</el-card>
</template>

<script setup lang="ts">
import type {Content} from '@/api/type/homoType'
import {HospitalModel} from '@/api/type/homoType';
import {useRouter } from 'vue-router'

interface PropsModel {
	info?: HospitalModel
}

const router = useRouter()

const props = withDefaults(defineProps<PropsModel>(), {
	info: () => {
		return {}
	}
})

function goToDetail() {
	router.push({
		path: '/detail',
		query: {
			hoscode: props.info?.hoscode
		}
	})
}

</script>

<style lang="scss" scoped>
@import "@/style/common.scss";

.page-home-content {
	margin-top: 20px;
	:deep(.el-card__body) {
		display: flex;
		justify-content: center;
		align-items: center;
	}
	&-left {
		flex: 1;
		&-info {
			display: flex;
			align-items: center;
			margin-top: 10px;
			& :nth-child(1) {
				margin-right: 6px;
			}
			& :nth-child(2) {
				margin-right: 20px;
			}
			& :nth-child(3) {
				margin-right: 6px;
			}
		}
	}
	&-icon {
		width: 50px;
		height: 50px;
	}
}
</style>