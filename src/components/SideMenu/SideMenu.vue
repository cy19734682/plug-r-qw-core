<!--SideMenu 侧边菜单，贴在父容器左侧，可向左将整个菜单收起，全局UI组件，直接用
@created 2023.07.17
@author Ricky email:zhangqingcq@foxmail.com-->

<script lang="ts" setup>
	import t from '../../locale/i18nSFC'
	import SideMenuGroup from './SideMenuGroup.vue'

	const props = withDefaults(defineProps<{ data?: any[] }>(), { data: () => [] })
	const emit = defineEmits(['on-change'])
	const route = useRoute()

	const menuDisplay = ref<boolean>(true)
	const pathName = ref()
	const menuRef = ref()
	const titleC = computed(() => (menuDisplay.value ? t('r.hideMenu') : t('r.showMenu')))
	const typeIco = computed(() => (menuDisplay.value ? 'ios-arrow-back' : 'ios-arrow-forward'))

	onBeforeMount(() => {
		let t: string = localStorage.getItem('menuDisplayR') || ''

		if (t !== '') {
			menuDisplay.value = JSON.parse(t)
		} else {
			menuDisplay.value = true
			localStorage.setItem('menuDisplayR', JSON.stringify(true))
		}
	})

	watch(
		() => route.path,
		(after) => {
			pathName.value = after
			nextTick(addOpen)
		},
		{ immediate: true }
	)

	function showHideMenu() {
		menuDisplay.value = !menuDisplay.value
		localStorage.setItem('menuDisplayR', JSON.stringify(menuDisplay.value))
		emit('on-change', menuDisplay.value)
	}

	function addOpen() {
		let t = menuRef.value.querySelectorAll('.dropItemRP')
		for (let e of t) {
			if (e.querySelector('.active') && !e.classList.contains('open')) {
				e.classList.add('open')
			}
		}
	}
</script>
<template>
	<div ref="menuRef" class="menuBoxRP">
		<div class="menuListR" v-show="menuDisplay">
			<side-menu-group :data="props.data" :pathName="pathName" />
		</div>
		<Icon
			:type="typeIco"
			:size="25"
			:class="{ showIco: !menuDisplay }"
			class="menuShowHideIco"
			:title="titleC"
			@click="showHideMenu"
			:color="menuDisplay ? '#fff' : '#333'"
		/>
	</div>
</template>
