<script setup lang="ts">
	const props = withDefaults(defineProps<{ data?: any }>(), { data: [] })
</script>

<template>
	<div class="wallM">
		<router-link class="liM" v-for="e in props.data" :to="e.path"
			>{{ e.name }}<em>{{ e.desc }}</em></router-link
		>
	</div>
</template>

<style lang="less" scoped>
	.wallM {
		width: 200px;
		height: 100%;
		border-right: 1px solid #eee;

		.liM {
			padding: 5px 15px 5px 35px;
			display: block;

			em {
				display: block;
				font-style: normal;
				opacity: 0.5;
			}

			&:hover {
				color: #2d8cf0;
			}

			&.active {
				color: #2d8cf0;
				background: #f0faff;

				&:after {
					content: '';
					display: block;
					width: 2px;
					position: absolute;
					top: 0;
					bottom: 0;
					right: 0;
					background: #2d8cf0;
				}
			}
		}
	}
</style>
