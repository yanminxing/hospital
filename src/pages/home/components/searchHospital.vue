<template>
	<div class="page-home-hospital">
		<div class="page-home-hospital-name">
			医院
		</div>
		<div class="page-home-hospital-content">
			<span>等级:</span>
			<div class="page-home-hospital-content-right">
				<span v-for="item in 20" >全部医院</span>
			</div>
		</div>
		<div class="page-home-hospital-content">
			<span>地区:</span>
			<div class="page-home-hospital-content-right">
				<span v-for="item in 20" >全部地区</span>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
@import "@/style/common.scss";
@import '@/style/elementReset.scss';

.page-home-hospital {

	&-name{
		font-weight: 600;
		font-size: 20px;
	}
	&-content{
		display: flex;
		margin-top: 10px;
		color: #bbbbbb;

		& :first-child {
			line-height: 26px;
		}
		&-right{
			flex:1;
			margin-left: 10px;

			span {
				margin-right: 10px;
				line-height: 26px;
			}
		}
	}
}
</style>