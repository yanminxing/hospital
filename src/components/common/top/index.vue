<template>
	<div class="fixed-top bg-white">
		<div class="page-top w1200-align-center clear-float">
			<div class="page-top-left">
				<img class="page-top-left-icon" src="../../../assets/images/logo.png" />
				<span class="page-top-left-name">尚医通 预约挂号统一平台</span>
			</div>
			<div class="page-top-right">
				<button class="text-light">帮助中心</button>
				<button class="text-light">登录/注册</button>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
@import "@/style/common.scss";

.fixed-top {
	position: fixed;
	left: 0;
	right: 0;
	top: 0;
}

.page-top {
	height: 70px;
	background: #ffffff;
	&-left {
		float: left;
		@include one-line-vertical-center(70px);
		&-icon{
			width: 50px;
			height: 50px;
		}
		&-name {
			margin-left: 10px;
			font-weight: 500;
			font-size: 20px;
			color: rgb(85, 166, 254);
		}
	}
	&-right {
		float: right;
		@include one-line-vertical-center(70px);
		& :first-child {
			margin-right: 10px;
		}
	}
}
</style>