<!--预约挂号-->
<template>
	<div class="detail-appointment">
		<!--预约挂号--标题-->
		<div class="detail-appointment-title">
			<span class="detail-appointment-title-name">{{ hospitalStore.detail?.hospital?.hosname }}</span>
			<svg
				t="1693640166816"
				class="icon"
				viewBox="0 0 1024 1024"
				version="1.1"
				xmlns="http://www.w3.org/2000/svg"
				p-id="4033"
				width="18"
				height="18">
				<path
					d="M832 364.8h-147.2s19.2-64 32-179.2c6.4-57.6-38.4-115.2-102.4-121.6h-12.8c-51.2 0-83.2 32-102.4 76.8l-38.4 96c-32 64-57.6 102.4-76.8 115.2-25.6 12.8-121.6 12.8-128 12.8H128c-38.4 0-64 25.6-64 57.6v480c0 32 25.6 57.6 64 57.6h646.4c96 0 121.6-64 134.4-153.6l51.2-307.2c6.4-70.4-6.4-134.4-128-134.4z m-576 537.6H128V422.4h128v480z m640-409.6l-51.2 307.2c-12.8 57.6-12.8 102.4-76.8 102.4H320V422.4c44.8 0 70.4-6.4 89.6-19.2 32-12.8 64-64 108.8-147.2 25.6-64 38.4-96 44.8-102.4 6.4-19.2 19.2-32 44.8-32h6.4c32 0 44.8 32 44.8 51.2-12.8 102.4-32 166.4-32 166.4l-25.6 83.2h243.2c19.2 0 32 0 44.8 12.8 12.8 12.8 6.4 38.4 6.4 57.6z"
					p-id="4034"
					fill="#b85959"
				>
				</path>
			</svg>
			<span>{{ hospitalStore.detail?.hospital?.param?.hostypeString }}</span>
		</div>
		<div class="detail-appointment-info">
			<div class="detail-appointment-info-left">
				<img :src="`data:image/jpg;base64,${hospitalStore.detail?.hospital?.logoData}`" alt="">
			</div>
			<div class="detail-appointment-info-right">
				<div>挂号规则</div>
				<div class="detail-appointment-info-right-item">
					<span>预约周期:</span>
					<span>{{ hospitalStore.detail?.bookingRule?.cycle }}天 </span>
					<span>放号时间:</span>
					<span>{{ hospitalStore.detail?.bookingRule?.releaseTime }}</span>
					<span> 停挂时间:</span>
					<span> {{ hospitalStore.detail?.bookingRule?.stopTime }} </span>
				</div>
				<div class="detail-appointment-info-right-item">
					<span>具体位置:</span>
					<span>{{ hospitalStore.detail?.hospital?.param?.fullAddress }}</span>
				</div>
				<div class="detail-appointment-info-right-item">
					<span>具体路线: </span>
					<span>{{ hospitalStore.detail?.hospital?.route }}</span>
				</div>
				<div class="detail-appointment-info-right-item">
					<span>退号时间: </span>
					<span>{{ '就诊前一工作日15:30前取消' }}</span>
				</div>
				<div>预约挂号规则</div>
				<template v-if="hospitalStore.detail?.bookingRule?.rule?.length">
					<div v-for="(item,index) in hospitalStore.detail.bookingRule.rule" :key="index"
					  class="detail-appointment-info-right-item">
						<span>{{item}}</span>
					</div>
				</template>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts" name="Appointment">
import {useHospitalStore} from '@/store';

const hospitalStore = useHospitalStore();
</script>

<script lang="ts">
// 使用vue2写法，使得开发者工具能够显示组件名字
export default {
	name: 'Appointment'
};
</script>

<style lang="scss" scoped>
@import "@/style/common.scss";

.detail-appointment {
	margin: 20px;

	&-title {
		@include one-line-vertical-center(30px);

		&-name {
			font-size: 22px;
			font-weight: 600;
			margin-right: 16px;
		}

		& :last-child {
			margin-left: 10px;
			color: #bbbbbb;
		}
	}

	&-info {
		display: flex;
		margin-top: 20px;

		&-left {
			width: 80px;
			height: 80px;
		}

		&-right {
			flex: 1;

			&-item {
				color: #898484;
				line-height: 26px;
				font-size: 14px;
			}
		}
	}
}
</style>