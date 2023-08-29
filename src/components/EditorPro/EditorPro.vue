<!--EditorPro 富文本编辑器
@created 2023.08.28
@author Ricky email:zhangqingcq@foxmail.com-->

<script lang="ts" setup>
	import { Editor, Toolbar } from '@wangeditor/editor-for-vue'
	import t from '../../locale/i18nSFC'
	import $fetch from '../../methods/fetch'
	import $swal from '../../methods/swal'

	const emit = defineEmits(['update:modelValue', 'on-change'])
	const props = withDefaults(
		defineProps<{
			modelValue?: string
			toolbarConfig?: Record<string, any>
			editorConfig?: Record<string, any>
			mode?: 'default' | 'simple'
			height?: string | number
			imgUploadUrl?: string
			videoUploadUrl?: string
			placeholder?: string
			disabled?: boolean
		}>(),
		{
			modelValue: '<p></p>',
			toolbarConfig: () => ({}),
			editorConfig: () => ({}),
			mode: 'default',
			height: 300,
			placeholder: '',
			disabled: false
		}
	)

	const _editor = shallowRef()
	const valueT = computed({
		get() {
			return props.modelValue
		},
		set(v: any) {
			emit('update:modelValue', v)
			emit('on-change', v)
		}
	})
	const toolbarConfigT = computed(() =>
		Object.assign(
			{
				placeholder: props.placeholder || t('r.pInput'),
				insertKeys: {
					index: 31,
					keys: ['previewX']
				}
			},
			props.toolbarConfig
		)
	)
	const editorConfigT = computed(() =>
		Object.assign(
			{
				readOnly: props.disabled,
				MENU_CONF: {
					uploadImage: {
						async customUpload(file: any, insertFn: any) {
							// file 是 input 中选中的文件列表
							// insertFn 是获取图片 url 后，插入到编辑器的方法
							// 自己实现上传，并得到图片 url alt href
							let temp = new FormData()
							temp.append('files', file)
							const n = file.name
							const u = props.imgUploadUrl ?? '/node-serve/file'
							$fetch
								.post(u, temp, null, [], {
									spin: true,
									headers: {
										'Content-Type': 'multipart/form-data'
									}
								})
								.then((r: any) => {
									if (r && r.data) {
										if (Array.isArray(r.data)) {
											for (let e of r.data) {
												const url = u + '/' + e.id + '/download'
												// 上传图片，返回结果，将图片插入到编辑器中
												insertFn(url, n, url)
											}
										} else {
											const url = u + '/' + r.data.id + '/download'
											// 上传图片，返回结果，将图片插入到编辑器中
											insertFn(url, n, url)
										}
									}
								})
								.catch(() => {
									$swal(t('r.uploadFail'), '', 'error')
								})
						}
					},
					uploadVideo: {
						async customUpload(file: any, insertFn: any) {
							// file 即选中的文件
							// insertFn 是获取视频 url 后，插入到编辑器的方法
							// 自己实现上传，并得到视频 url poster(封面地址,可选)
							let temp = new FormData()
							temp.append('files', file)
							const u = props.videoUploadUrl ?? '/node-serve/file'
							$fetch
								.post(u, temp, null, [], {
									spin: true,
									headers: {
										'Content-Type': 'multipart/form-data'
									}
								})
								.then((r: any) => {
									if (r && r.data) {
										if (Array.isArray(r.data)) {
											for (let e of r.data) {
												const url = u + '/' + e.id + '/download'
												// 最后插入视频
												insertFn(url)
											}
										} else {
											const url = u + '/' + r.data.id + '/download'
											// 最后插入视频
											insertFn(url)
										}
									}
								})
								.catch(() => {
									$swal(t('r.uploadFail'), '', 'error')
								})
						}
					}
				}
			},
			props.editorConfig
		)
	)
	const editorTextareaStyle = computed(() => ({
		height: typeof props.height === 'string' ? props.height : props.height + 'px'
	}))

	function onCreated(d: any) {
		_editor.value = d
	}

	watch(
		() => props.disabled,
		(a: any) => {
			if (a) {
				_editor.value.disable()
			} else {
				_editor.value.enable()
			}
		}
	)

	onBeforeUnmount(() => {
		if (!_editor.value) {
			return
		}
		_editor.value.destroy()
	})
</script>

<template>
	<div class="editor-pro-root">
		<Toolbar
			class="editor-pro-toolbar"
			:editor="_editor"
			:defaultConfig="toolbarConfigT"
			:mode="mode"
			v-show="!disabled"
		/>
		<Editor
			class="editor-pro-editor"
			v-model="valueT"
			:defaultConfig="editorConfigT"
			:mode="mode"
			@onCreated="onCreated"
			:style="editorTextareaStyle"
		/>
	</div>
</template>
