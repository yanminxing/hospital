<template>
	<div class=" bg-white page-bottom">
		<div class="w1200-align-center clear-float">
			<div class="page-bottom-left">
				京ICP备 13018369号 电话挂号010-56253825
			</div>
			<div class="page-bottom-right">
				<span>联系我们</span>
				<span>合作伙伴</span>
				<span>用户协议</span>
				<span>隐私协议</span>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
@import "@/style/common.scss";

.page-bottom {
	position: fixed;
	left: 0;
	bottom: 0;
	right: 0;
	@include one-line-vertical-center(50px);

	&-left {
		float: left;
	}

	&-right {
		float: right;
		span {
			margin-left: 10px;
		}
	}
}
</style>