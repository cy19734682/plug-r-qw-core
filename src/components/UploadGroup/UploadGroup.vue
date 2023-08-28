<!--UploadGroup 支持本地上传或直接上传到服务器、上传文件列表展示或缩略图展示或不展示等功能的上传组件
@created 2023.08.23
@author Ricky email:zhangqingcq@foxmail.com-->

<script lang="ts" setup>
	import t from '../../locale/i18nSFC'
	import { first, cloneDeep, indexOf, last } from 'lodash-es'
	import { myTypeof } from '../../methods/globalFunc'
	import {
		getFileSrc,
		getFileTypeByName,
		isImgByFile,
		getFileTypeIconByName,
		downloadFileReaderFile
	} from '../../methods/needImportFunc'
	import $fetch from '../../methods/fetch.js'
	import fullScreenImgByDom from '../../methods/fullScreenImgByDom'
	import $swal from '../../methods/swal'

	const emit = defineEmits(['update:modelValue', 'on-change'])
	const props = withDefaults(
		defineProps<{
			modelValue?: number | string | File | any[]
			url?: string /*文件上传的地址*/
			data?: Record<string, any> /*文件上传接口其他参数*/
			manualUpload?: boolean
			maxSize?: number
			length?: number
			showUploadList?: boolean
			withCredentials?: boolean
			multiple?: boolean
			format?: string[]
			showImg?: boolean
			disabled?: boolean /*禁用，仅展示*/
		}>(),
		{
			modelValue: () => [],
			url: window?.g?.mgrURL ? window.g.mgrURL + '/web/v1/fsc/file' : '',
			data: () => ({
				appId: 0,
				moduleId: 0,
				typeId: 0
			}),
			manualUpload: false,
			maxSize: 0,
			length: 0,
			showUploadList: true,
			withCredentials: true,
			multiple: false,
			format: () => [],
			showImg: false,
			disabled: false
		}
	)
	const fileSrcList = shallowRef<any[]>([])
	const fileDefaultList = shallowRef<any[]>([])
	const previewType = computed(() => {
		if (!props.manualUpload && props.showImg && fileListItemIsIMG.value) {
			return 'img'
		} else if (props.manualUpload && props.showImg && fileListItemIsIMG.value) {
			return 'localImg'
		} else if (props.manualUpload && props.showUploadList && (!props.showImg || !fileListItemIsIMG.value)) {
			return 'localList'
		} else if (!props.manualUpload && props.showUploadList && (!props.showImg || !fileListItemIsIMG.value)) {
			return 'list'
		} else {
			return ''
		}
	})
	const urlT = computed(() => {
		if (props.manualUpload) {
			return '//jsonplaceholder.typicode.com/posts/'
		} else {
			return props.url
		}
	})
	const fileList = computed<any[]>({
		get() {
			if (props.manualUpload) {
				return fileIdList.value
			} else {
				let temp: any[] = []
				for (let item of fileIdList.value) {
					if (typeof item === 'object' && myTypeof(item) === 'File') {
						temp.push(item)
					} else if (typeof item === 'number' || typeof item === 'string') {
						temp.push({
							response: {
								data: [
									{
										id: item
									}
								]
							}
						})
					}
				}
				return temp
			}
		},
		set(val) {
			if (props.manualUpload) {
				fileIdList.value = val
			} else {
				let temp: any[] = []
				for (let item of val) {
					if (item?.response?.data && item.response.data[0] && item.response.data[0].id) {
						temp.push(item.response.data[0].id)
					}
				}
				fileIdList.value = temp
			}
		}
	})
	const fileIdList = computed({
		get() {
			switch (typeof props.modelValue) {
				case 'number':
					return [props.modelValue]
				case 'string':
					if (props.modelValue.indexOf('--') !== -1) {
						return []
					} else {
						if (/^\d*$/.test(props.modelValue)) {
							return [Number(props.modelValue)]
						}
						return [props.modelValue]
					}
				case 'object':
					if (Array.isArray(props.modelValue)) {
						return props.modelValue.filter((e) => e !== '--')
					} else if (myTypeof(props.modelValue) === 'File') {
						return [props.modelValue]
					} else {
						return []
					}
				default:
					return []
			}
		},
		set(val) {
			if (props.length === 1) {
				let temp = first(val)
				emit('update:modelValue', temp ?? null)
				emit('on-change', temp ?? null)
			} else {
				emit('update:modelValue', cloneDeep(val))
				emit('on-change', cloneDeep(val))
			}
		}
	})
	const fileListItemIsIMG = computed(() => {
		let temp
		if (props.manualUpload) {
			temp = fileList.value
		} else {
			temp = fileDefaultList.value
		}
		for (let item of temp) {
			let type
			if (props.manualUpload) {
				type = item && item.type
			} else {
				type = item && item.mimeType
			}
			if (!type || (type && !isImgByFile(type))) {
				return false
			}
		}
		return true
	})

	watch(
		() => fileList.value,
		async (after) => {
			if (previewType.value === 'localImg') {
				if (after && after.length > 0) {
					fileSrcList.value = await getFileSrcList(after)
				} else {
					fileSrcList.value = []
				}
			} else if (after && after.length > 0 && previewType.value !== 'localList') {
				let temp: any = []
				for (let item of after) {
					if (item.name === undefined) {
						if (item?.response?.data && item.response.data[0] && item.response.data[0].id) {
							let r: any = await $fetch.get(props.url + '/' + item.response.data[0].id).catch(() => {
								temp.push({ name: t('r.file') + indexOf(after, item) })
							})
							let itemT = cloneDeep(item)
							itemT.name =
								(r?.data?.returnValue && r.data.returnValue[0] && r.data.returnValue[0]?.name) ||
								t('r.file') + indexOf(after, item)
							itemT.mimeType =
								(r?.data?.returnValue && r.data.returnValue[0] && r.data.returnValue[0]?.mimeType) || 'unknown'
							temp.push(itemT)
						} else {
							temp.push({ name: t('r.unknown') })
						}
					} else {
						temp.push(item)
					}
				}
				fileDefaultList.value = temp
			} else {
				fileDefaultList.value = []
			}
		},
		{
			immediate: true,
			deep: true
		}
	)

	function clear() {
		fileList.value = []
	}

	function getName(item: any) {
		return item.name || (item.split && last(item.split('/'))) || item
	}

	async function getFileSrcList(data: any[]) {
		let temp: any[] = []
		for (let item of data) {
			let src = await getFileSrc(item)
			temp.push(src)
		}
		return temp
	}

	function clearManualItem(index: number) {
		if (!props.disabled) {
			//触发computed的set
			let _f = fileList.value
			_f.splice(index, 1)
			fileList.value = _f
		}
	}

	function downloadDefaultFile(item: Record<string, any>) {
		if (item && item.response && item.response.data && item.response.data[0] && item.response.data[0].id) {
			window.open(props.url + '/' + item.response.data[0].id + '/download')
		}
	}

	function showPreview(file: any) {
		if (props.manualUpload) {
			return file.type && isImgByFile(file.type)
		}
		return file?.response?.data && file.response.data[0]?.id && file.mimeType && isImgByFile(file.mimeType)
	}

	function listExpand(file: any) {
		//列表图片预览
		if (props.manualUpload) {
			getFileSrc(file).then((r: any) => {
				//图片的 base64 格式, 可以直接当成 img 的 src 属性值
				fullScreenImgByDom(r)
			})
		} else {
			fullScreenImgByDom(props.url + '/' + file.response.data[0].id + '/download?preview=true')
		}
	}

	function downloadManualFile(file: any) {
		if (myTypeof(file) === 'String' && file.indexOf('http') > -1) {
			window.open(file)
		} else if (myTypeof(file) === 'File') {
			getFileSrc(file).then((r: any) => {
				downloadFileReaderFile(file.name, r)
			})
		}
	}

	function handelManualUpload(file: any) {
		if (props.manualUpload) {
			if (file) {
				let type = getFileTypeByName(file.name)
				if (props.format.length > 0 && props.format.indexOf(type) < 0) {
					$swal(
						t('r.wrongFileType'),
						t('r.supportType') + ((props.format.length > 0 && String(props.format)) || t('r.none')),
						'warning'
					)
					return false
				}
				if (props.maxSize && file.size > props.maxSize * 1024) {
					$swal(t('r.fileIsBig'), t('r.supportSize') + props.maxSize + 'kb', 'warning')
					return false
				}
				//触发computed的set
				let _f = fileList.value
				_f.push(file)
				fileList.value = _f
			}
			return false
		} else {
			return true
		}
	}

	function uploadError(error: any) {
		console.warn(error)
		$swal(t('r.uploadError'), '', 'error')
	}

	function uploadSuccess(response: any, file: any, _fileList: any) {
		if (response && response.code === 0) {
			//触发computed的set
			let _f = fileList.value
			_f.push(file)
			fileList.value = _f
		} else {
			$swal(t('r.uploadFail'), (response && response.message) || '', 'error')
		}
	}

	function overSize() {
		$swal(t('r.fileIsBig'), t('r.supportSize') + props.maxSize + ' kb', 'warning')
	}

	function onFormatError() {
		$swal(
			t('r.wrongFileType'),
			t('r.supportType') + ((props.format.length > 0 && String(props.format)) || t('r.none')),
			'warning'
		)
	}

	function onPreview(file: any) {
		let id = file?.response?.data && file.response.data[0]?.id
		let type = file?.response?.data && file.response.data[0]?.mimeType
		if (id) {
			if (myTypeof(type) === 'String' && type.indexOf('image') > -1) {
				fullScreenImgByDom(props.url + '/' + id + '/download?preview=true')
			} else {
				window.open(props.url + '/' + id + '/download?preview=true')
			}
		}
	}

	function onRemove(file: any) {
		let id = file?.response?.data && file.response.data[0]?.id
		deleteById(null, id)
	}

	function deleteById(e: any, id: any) {
		if (!props.disabled && fileIdList.value.indexOf(id) !== -1) {
			const _fileIdList = cloneDeep(fileIdList.value)
			//触发computed的set
			let _f = fileList.value
			_f.splice(_fileIdList.indexOf(id), 1)
			fileList.value = _f
		}
	}
</script>

<template>
	<div>
		<Upload
			name="files"
			:action="urlT"
			:before-upload="handelManualUpload"
			:on-error="uploadError"
			:on-success="uploadSuccess"
			:on-exceeded-size="overSize"
			:on-preview="onPreview"
			:on-remove="onRemove"
			:on-format-error="onFormatError"
			:data="props.data"
			:max-size="props.maxSize"
			:show-upload-list="false"
			:with-credentials="props.withCredentials"
			:format="props.format"
			:multiple="props.multiple || false"
			:disabled="(props.length > 0 && fileList.length >= props.length) || Boolean(props.disabled)"
		>
			<!--暂时屏蔽multiple选项-->
			<Button
				icon="ios-cloud-upload-outline"
				:class="{ disabledR: (props.length > 0 && fileList.length >= props.length) || Boolean(props.disabled) }"
				>{{ t('r.selectFile') }}
			</Button>
		</Upload>
		<div class="previewBoxM" v-show="previewType === 'img' && fileIdList.length > 0">
			<template v-for="item of fileIdList" :key="item">
				<div class="previewImg" v-if="!props.manualUpload && item !== null">
					<img :src="url + '/' + item + '/download?preview=true'" :alt="item" />
					<div class="deleteModal">
						<Icon
							type="ios-expand"
							size="40"
							class="previewExpand"
							:title="t('r.fView')"
							@click="fullScreenImgByDom(props.url + '/' + item + '/download?preview=true')"
						/>
						<Icon
							type="ios-trash-outline"
							size="40"
							class="previewDelete"
							@click="deleteById($event, item)"
							:title="t('r.delete')"
						/>
					</div>
				</div>
			</template>
		</div>
		<div class="previewBoxM" v-show="previewType === 'localImg' && fileSrcList.length > 0">
			<template v-for="(item, index) of fileSrcList" :key="'manualImg' + index">
				<div class="previewImg" v-if="props.manualUpload && item !== null">
					<img :src="item" :alt="'manualImg' + index" />
					<div class="deleteModal">
						<Icon
							type="ios-expand"
							size="40"
							class="previewExpand"
							@click="fullScreenImgByDom(item)"
							:title="t('r.fView')"
						/>
						<Icon
							type="ios-trash-outline"
							size="40"
							class="previewDelete"
							@click="clearManualItem(index)"
							:title="t('r.delete')"
						/>
					</div>
				</div>
			</template>
		</div>
		<div class="customFileListM" v-show="previewType === 'localList' && fileList.length > 0">
			<template v-for="(item, index) of fileList" :key="'manualItem' + index">
				<p class="customFileListItem" v-if="props.manualUpload && item !== null">
					<Icon v-if="item.name" :type="getFileTypeIconByName(item.name)" />
					<span
						class="upNameT"
						:class="{ previewName: showPreview(item) }"
						@click="downloadManualFile(item)"
						:title="t('r.download')"
						>{{ getName(item) }}</span
					>
					<span class="btBoxJ">
						<Icon
							v-if="showPreview(item)"
							type="md-qr-scanner"
							size="14"
							class="listBtH"
							@click="listExpand(item)"
							:title="t('r.fView')"
						/>
						<Icon type="ios-close" size="22" class="listBtH" @click="clearManualItem(index)" :title="t('r.delete')" />
					</span>
				</p>
			</template>
		</div>
		<div class="customFileListM" v-show="previewType === 'list' && fileDefaultList.length > 0">
			<template v-for="(item, index) of fileDefaultList" :key="'defaultItem' + index">
				<p class="customFileListItem" v-if="!props.manualUpload && item !== null">
					<Icon :type="getFileTypeIconByName(item.name)" />
					<span
						class="upNameT"
						:class="{ previewName: showPreview(item) }"
						@click="downloadDefaultFile(item)"
						:title="t('r.download')"
						>{{ item.name || t('r.file') + (index + 1) }}</span
					>
					<span class="btBoxJ">
						<Icon
							v-if="showPreview(item)"
							type="md-qr-scanner"
							size="14"
							class="listBtH"
							@click="listExpand(item)"
							:title="t('r.fView')"
						/>
						<Icon type="ios-close" size="22" class="listBtH" @click="clearManualItem(index)" :title="t('r.delete')" />
					</span>
				</p>
			</template>
		</div>
	</div>
</template>
