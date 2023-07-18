<script lang="ts" setup>
	import { useRouter } from 'vue-router'
	import { siblingElems } from '../../methods/globalFunc'

	const router = useRouter()
	const props = withDefaults(defineProps<{ data?: any[]; pathName?: string }>(), { data: () => [], pathName: '' })

	function getClass(item) {
		return item.path === props.pathName ? 'active' : ''
	}
	function handleClick(e, item) {
		e.preventDefault()
		let target = e.target

		if (!item.children && !target.classList.contains('active')) {
			router.push(item.path)
			return
		}
		let parent = target.parentNode
		let siblings = siblingElems(parent)
		for (let item of siblings) {
			item.classList.remove('open') //手风琴效果
			const child = item.querySelectorAll('.open')
			for (let e of child) {
				e.classList.remove('open')
			}
		}
		parent.classList.toggle('open')
	}
</script>
<template>
	<ul class="groupBoxRP">
		<li :class="{ dropItemRP: item.children }" v-for="(item, i) of props.data" :key="item.path + i">
			<div
				class="menuTxtR"
				:class="getClass(item)"
				@click="handleClick($event, item)"
				:style="{ paddingLeft: item.level * 20 + 'px' }"
			>
				{{ item.name || '-- no name --' }}
			</div>
			<sideMenuGroup :data="item.children" v-if="item.children" :path-name="props.pathName" />
		</li>
	</ul>
</template>
