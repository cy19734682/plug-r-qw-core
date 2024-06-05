<!--UploadGroup 支持本地上传或直接上传到服务器、上传文件列表展示或缩略图展示或不展示等功能的上传组件
@created 2023.08.23
@author Ricky email:zhangqingcq@foxmail.com-->

<script lang="ts" setup>
	import t from '../../locale/i18nSFC'
	import { first, cloneDeep, indexOf, last, find, findIndex } from 'lodash-es'
	import { myTypeof } from '../../utils/globalFunc'
	import {
		getFileSrc,
		getFileTypeByName,
		isImgByFile,
		getFileTypeIconByName,
		downloadFileReaderFile
	} from '../../utils/needImportFunc'
	import $fetch from '../../utils/fetch.js'
	import fullScreenImgByDom from '../../utils/fullScreenImgByDom'
	import $swal from '../../utils/swal'

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
	const fileSrcList = shallowRef<any[]>([]) //本地图片模式图片文件地址集合
	const fileDefaultList = shallowRef<any[]>([]) //从服务器返回的数据整理完成的文件集合
	const localImgSrcList = shallowRef<any[]>([])
	let tempStorage: Record<string, any> = {}
	const previewType = computed(() => {
		if (!props.manualUpload && props.showImg && fileListItemIsIMG.value) {
			//上传到服务器，图片模式
			return 'img'
		} else if (props.manualUpload && props.showImg && fileListItemIsIMG.value) {
			//上传到本地，图片模式
			return 'localImg'
		} else if (props.manualUpload && props.showUploadList && (!props.showImg || !fileListItemIsIMG.value)) {
			//上传到本地
			return 'localList'
		} else if (!props.manualUpload && props.showUploadList && (!props.showImg || !fileListItemIsIMG.value)) {
			//上传到服务器
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
	const fileList = computed({
		//文件集合
		get() {
			if (props.manualUpload) {
				return fileIdList.value
			} else {
				return fileIdList.value.map((e) => ({ id: e }))
			}
		},
		set(val) {
			if (props.manualUpload) {
				fileIdList.value = val || []
			} else {
				fileIdList.value = val?.map((e) => e?.id) || []
			}
		}
	})
	const fileIdList = computed({
		//文件ID集合
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
		//文件集合是否全为图片
		let temp
		if (props.manualUpload) {
			temp = fileList.value
		} else {
			temp = fileDefaultList.value
		}
		if (!temp) {
			return false
		}
		for (let item of temp) {
			let type
			if (props.manualUpload) {
				type = item?.type
			} else {
				type = item?.mimeType
			}
			if (!type || (type && !(isImgByFile(type) || type === 'loading'))) {
				return false
			}
		}
		return true
	})

	const fileDefaultImgList = computed(() => {
		//图片文件集合
		return fileDefaultList.value.filter((e) => isImgByFile(e?.mimeType))
	})

	const fileImgSrcList = computed(() => {
		//图片地址、名字集合
		return fileDefaultImgList.value.map((e: any) => ({
			src: props.url + '/' + e?.id + '/download?preview=true',
			name: e?.name
		}))
	})

	const localImgList = computed(() => {
		// 本地图片集合
		return fileList.value.filter((e: any) => isImgByFile(e?.type))
	})

	watch(localImgList, async (after) => {
		localImgSrcList.value = await getFileSrcList(after)
	})

	watch(
		() => fileList.value,
		async (after) => {
			if (previewType.value === 'localImg') {
				if (after?.length) {
					fileSrcList.value = await getFileSrcList(after)
				} else {
					fileSrcList.value = []
				}
			} else if (after?.length && previewType.value !== 'localList') {
				let temp: any = cloneDeep(after)
				const _fileDefaultList = cloneDeep(fileDefaultList.value)
				for (let item of temp) {
					if (item?.name === undefined) {
						//根据id获取文件名字
						if (item.id) {
							const fileT = find(_fileDefaultList, (e) => e?.id === item.id)
							if (fileT) {
								//本地有名字，在本地拿
								item.name = fileT.name
								item.mimeType = fileT.mimeType
							} else if (tempStorage.hasOwnProperty(item.id)) {
								//缓存有信息，在缓存拿取
								item.name = tempStorage[item.id].name
								item.mimeType = tempStorage[item.id].mimeType
							} else {
								//本地没有，去服务器拿
								item.mimeType = 'loading'
								$fetch
									.get(props.url + '/' + item.id)
									.then((r: any) => {
										item.name = r?.data?.returnValue?.[0]?.name || t('r.file') + indexOf(after, item)
										item.mimeType = r?.data?.returnValue?.[0]?.mimeType || 'unknown'
										triggerRef(fileDefaultList)
									})
									.catch(() => {
										item.name = t('r.file') + indexOf(temp, item)
									})
							}
						} else {
							item.name = t('r.unknown')
						}
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
		return item?.name || (item?.split && last(item.split('/'))) || item
	}

	async function getFileSrcList(data: any[]) {
		let temp: any[] = []
		for (let item of data) {
			//图片的 base64 格式, 可以直接当成 img 的 src 属性值
			let src = await getFileSrc(item)
			temp.push(src)
		}
		return temp
	}

	function clearManualItem(index: number) {
		if (!props.disabled) {
			//触发computed的set
			let _f = fileList.value
			_f?.splice(index, 1)
			fileList.value = _f
		}
	}

	function downloadDefaultFile(item: Record<string, any>) {
		if (item?.id) {
			window.open(props.url + '/' + item.id + '/download')
		}
	}

	function showPreview(file: any) {
		if (props.manualUpload) {
			return file?.type && isImgByFile(file.type)
		}
		return file?.id && file.mimeType && isImgByFile(file.mimeType)
	}

	async function listExpand(file: any) {
		//列表图片预览
		if (props.manualUpload) {
			//本地上传
			let index
			let tt
			if (typeof file === 'number') {
				//直接传的index预览，本地图片模式
				index = file
				tt = fileSrcList.value
			} else if (file) {
				//传的file对象预览，本地列表
				index = findIndex(localImgList.value, (e: any) => e.size === file.size && e.lastModified === file.lastModified)
				tt = localImgSrcList.value
			}
			if (!tt) {
				return
			}
			fullScreenImgByDom(
				tt.map((e: any, i: number) => ({
					src: e,
					name: localImgList.value[i]?.name
				})),
				index
			)
		} else if (file?.id) {
			//上传到服务器，远程列表模式
			const index = findIndex(fileDefaultImgList.value, (e) => e.id === file.id)
			fullScreenImgByDom(fileImgSrcList.value, index)
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
				if (props.format?.length && props.format.indexOf(type) < 0) {
					$swal(
						t('r.wrongFileType'),
						t('r.supportType') + ((props.format?.length && String(props.format)) || t('r.none')),
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
				_f?.push(file)
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
		if (response?.code === 0) {
			//触发computed的set
			let _f = fileList.value
			file.id = response.data?.[0]?.id
			file.name = response.data?.[0]?.name
			file.mimeType = response.data?.[0]?.mimeType //将文件信息存起来，不用再去服务器拉取了
			tempStorage[file.id] = { name: file.name, mimeType: file.mimeType }
			_f?.push(file)
			fileList.value = _f
		} else {
			$swal(t('r.uploadFail'), response?.message || '', 'error')
		}
	}

	function overSize() {
		$swal(t('r.fileIsBig'), t('r.supportSize') + props.maxSize + ' kb', 'warning')
	}

	function onFormatError() {
		$swal(
			t('r.wrongFileType'),
			t('r.supportType') + ((props.format?.length && String(props.format)) || t('r.none')),
			'warning'
		)
	}

	function onPreview(file: any) {
		let id = file?.id
		let type = file?.mimeType
		if (id) {
			if (myTypeof(type) === 'String' && type.indexOf('image') > -1) {
				fullScreenImgByDom(props.url + '/' + id + '/download?preview=true')
			} else {
				window.open(props.url + '/' + id + '/download?preview=true')
			}
		}
	}

	function onRemove(file: any) {
		let id = file?.response?.data?.[0]?.id
		deleteById(null, id)
	}

	function deleteById(e: any, id: any) {
		if (!id && id !== 0) {
			return
		}
		if (!props.disabled && fileIdList.value.indexOf(id) !== -1) {
			const _fileIdList = cloneDeep(fileIdList.value)
			//触发computed的set
			let _f = fileList.value
			_f?.splice(_fileIdList.indexOf(id), 1)
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
			:disabled="(props.length > 0 && fileList?.length >= props.length) || Boolean(props.disabled)"
		>
			<Button
				icon="md-cloud-upload"
				:class="{
					disabledR: (props.length > 0 && fileList?.length >= props.length) || Boolean(props.disabled)
				}"
				>{{ t('r.selectFile') }}
			</Button>
		</Upload>
		<div class="previewBoxM" v-show="previewType === 'img' && fileDefaultList?.length > 0">
			<template v-for="(item, index) of fileDefaultList" :key="item?.id">
				<div
					class="previewImg"
					:class="{ previewLoading: item.mimeType === 'loading' }"
					v-if="!props.manualUpload && item?.id !== null"
				>
					<div class="imgLoading" v-show="item.mimeType === 'loading'">
						<div data-loader="circle-side" class="loader-div" />
					</div>
					<img
						:src="url + '/' + item.id + '/download?preview=true'"
						:alt="item.name"
						v-show="item.mimeType !== 'loading'"
					/>
					<div class="deleteModal" v-show="item.mimeType !== 'loading'">
						<Icon
							type="ios-expand"
							size="40"
							class="previewExpand"
							:title="t('r.fView')"
							@click="fullScreenImgByDom(fileImgSrcList, index)"
						/>
						<Icon
							type="ios-trash-outline"
							size="40"
							class="previewDelete"
							@click="deleteById($event, item.id)"
							:title="t('r.delete')"
						/>
					</div>
				</div>
			</template>
		</div>
		<div class="previewBoxM" v-show="previewType === 'localImg' && fileSrcList?.length > 0">
			<template v-for="(item, index) of fileSrcList" :key="'manualImg' + index">
				<div class="previewImg" v-if="props.manualUpload && item !== null">
					<img :src="item" :alt="'manualImg' + index" />
					<div class="deleteModal">
						<Icon type="ios-expand" size="40" class="previewExpand" @click="listExpand(index)" :title="t('r.fView')" />
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
		<div class="customFileListM" v-show="previewType === 'localList' && fileList?.length > 0">
			<template v-for="(item, index) of fileList" :key="'manualItem' + index">
				<p class="customFileListItem" v-if="props.manualUpload && item !== null">
					<Icon v-if="item.name" class="fileTypeIco" :type="getFileTypeIconByName(item.name)" size="20" />
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
							size="22"
							class="listBtH"
							@click="listExpand(item)"
							:title="t('r.fView')"
						/>
						<Icon type="md-close" size="22" class="listBtH" @click="clearManualItem(index)" :title="t('r.delete')" />
					</span>
				</p>
			</template>
		</div>
		<div class="customFileListM" v-show="previewType === 'list' && fileDefaultList?.length > 0">
			<template v-for="(item, index) of fileDefaultList" :key="'defaultItem' + index">
				<div class="customFileListItem" v-if="!props.manualUpload && item">
					<div class="listLoading" v-show="item.mimeType === 'loading'">
						<div data-loader="circle-side" class="loader-div" />
					</div>
					<Icon
						:type="getFileTypeIconByName(item.name)"
						class="fileTypeIco"
						v-show="item.mimeType !== 'loading'"
						size="20"
					/>
					<span
						class="upNameT"
						@click="downloadDefaultFile(item)"
						:title="t('r.download')"
						v-show="item.mimeType !== 'loading'"
						>{{ item.name || t('r.file') + (index + 1) }}</span
					>
					<span class="btBoxJ" v-show="item.mimeType !== 'loading'">
						<Icon
							v-if="showPreview(item)"
							type="md-qr-scanner"
							size="22"
							class="listBtH"
							@click="listExpand(item)"
							:title="t('r.fView')"
						/>
						<Icon type="md-close" size="22" class="listBtH" @click="clearManualItem(index)" :title="t('r.delete')" />
					</span>
				</div>
			</template>
		</div>
	</div>
</template>
