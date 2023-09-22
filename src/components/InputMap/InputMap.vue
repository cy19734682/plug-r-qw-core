<!--InputMap 带搜索框的地图组件，支持搜索地点，经纬度回显地点，缩放，移动地图，拖动标记，点击标记显示地点信息
@created 2023.08.16
@author Ricky email:zhangqingcq@foxmail.com-->

<script lang="ts" setup>
	import { cloneDeep, isNumber } from 'lodash-es'
	import t from '../../locale/i18nSFC'
	import { setTimeout } from '../../methods/timer'
	import AMapLoader from '@amap/amap-jsapi-loader'
	import { get } from '../../methods/amap'
	import { Input } from 'view-ui-plus'

	const emit = defineEmits(['update:modelValue', 'on-change'])
	const props = withDefaults(
		defineProps<{
			modelValue?: Record<string, any>
			width?: string | number
			height?: string | number
			placeholder?: string
			disabled?: boolean
			showMap?: boolean
		}>(),
		{
			modelValue: () => ({}),
			width: '100%',
			disabled: false,
			showMap: true
		}
	)

	const valueT = computed({
		get() {
			let temp
			if (!props.modelValue) {
				temp = {
					name: null
				}
			} else if (!props.modelValue.name) {
				temp = {
					...props.modelValue,
					name: null
				}
			} else {
				temp = cloneDeep(props.modelValue)
			}
			return temp
		},
		set(val) {
			emit('update:modelValue', cloneDeep(val))
		}
	})

	const widthT = computed(() => {
		if (isNumber(props.width)) {
			return props.width + 'px'
		} else {
			return props.width
		}
	})

	const heightT = computed(() => {
		if (isNumber(props.height)) {
			return props.height + 'px'
		} else if (props.height) {
			return props.height
		} else if (isNumber(props.width)) {
			return props.width * 0.66 + 'px'
		} else {
			return '200px'
		}
	})

	const containerStyle = computed<Record<string, any>>(() => ({
		width: widthT.value,
		position: 'relative'
	}))

	const mapStyle = computed<Record<string, any>>(() => ({
		width: widthT.value,
		height: heightT.value,
		marginTop: '6px',
		opacity: props.showMap ? 1 : 0,
		position: props.showMap ? 'relative' : 'absolute',
		top: props.showMap ? 0 : '-10000px'
	}))

	watch(
		() => props.modelValue,
		(after) => {
			//更新地图mark
			if (after && after.lng && after.lat) {
				if (!Map || !GeoCoder) {
					return
				}
				createMarker({
					lng: after.lng,
					lat: after.lat,
					name: after.name
				})
			}
		}
	)

	const mapId = 'mapId' + Math.floor(Math.random() * 1000000000)
	const mapInputRef = ref<InstanceType<typeof Input> | null>(null)
	const mapRef = ref<HTMLDivElement | null>(null)
	let infoWindow: Record<string, any> | null

	function checkHeight() {
		if ((mapRef.value && mapRef.value.clientHeight < 10) || !mapRef.value) {
			setTimeout(checkHeight, 300)
		} else {
			/*高德地图实例初始化较慢，暂时延时1秒，后面寻找完美解决方案*/
			setTimeout(initMap, 100)
		}
	}

	let AMap: any
	let Map: any
	let GeoCoder: any
	let AutoComplete: any

	function initMap() {
		AMapLoader.load({
			key: get('key'),
			version: '2.0',
			plugins: ['AMap.AutoComplete', 'AMap.Geocoder']
		}).then((_map) => {
			AMap = _map
			Map = new AMap.Map(mapId).on('complete', () => {
				GeoCoder = new AMap.Geocoder()

				if (props.modelValue?.lng && props.modelValue?.lat) {
					createMarker({
						lng: props.modelValue.lng,
						lat: props.modelValue.lat,
						name: props.modelValue.name
					})
				}
				const iEl = mapInputRef.value?.$el?.children
				if (iEl && iEl.length > 1) {
					AutoComplete = new AMap.AutoComplete({
						input: iEl[1]
					}).on('select', (val: Record<string, any>) => {
						if (val?.poi?.name) {
							if (val.poi.location?.lng && val.poi.location?.lat) {
								createMarker({
									name: val.poi.name,
									lng: val.poi.location.lng,
									lat: val.poi.location.lat
								})
								valueT.value = {
									name: val.poi.name,
									lng: val.poi.location.lng,
									lat: val.poi.location.lat
								}
							} else {
								Map.setCity(val.poi.name, () => {
									let center = Map.getCenter()
									createMarker({
										name: val.poi.name,
										lng: center.lng,
										lat: center.lat
									})
									valueT.value = {
										name: val.poi.name,
										lng: center.lng,
										lat: center.lat
									}
								})
							}
						}
						emit('on-change', valueT.value)
					})
				}

				Map.on('hotspotclick', (d: Record<string, any>) => {
					createMarker({
						name: d.name,
						lng: d.lnglat.lng,
						lat: d.lnglat.lat
					})
					valueT.value = {
						name: d.name,
						lng: d.lnglat.lng,
						lat: d.lnglat.lat
					}
				})
			})
		})
	}

	function createMarker({ lng, lat, name }: { lng: number; lat: number; name: string }) {
		Map.clearMap()
		let point = new AMap.LngLat(lng, lat)
		let marker = new AMap.Marker({
			map: Map,
			position: point,
			draggable: true
		})
		Map.add(marker)
		getAddress(lng, lat)
		marker.on('dragend', () => {
			let dragPoint = marker.getPosition()
			valueT.value = {
				name: name || null,
				lng: dragPoint.lng,
				lat: dragPoint.lat
			}
			getAddress(lng, lat)
		})
		marker.on('click', (e: Record<string, any>) => {
			if (infoWindow) {
				infoWindow.open(Map, e.target.getPosition())
			}
		})
		Map.setFitView()
	}

	function getAddress(lng: number, lat: number) {
		GeoCoder.getAddress([lng, lat], (status: string, result: Record<string, any>) => {
			if (status === 'complete' && result.info === 'OK' && result.regeocode && result.regeocode.formattedAddress) {
				infoWindow = new AMap.InfoWindow({
					//创建信息窗体
					isCustom: true,
					content: '<div class="mapInfoWindowIKJ">' + result.regeocode.formattedAddress + '</div>',
					offset: new AMap.Pixel(16, -45),
					closeWhenClickMap: true
				})
			} else {
				infoWindow = null
				console.warn('地图获取位置信息失败', result)
			}
		})
	}

	onMounted(checkHeight)

	onUnmounted(() => {
		if (!Map) {
			return
		}
		Map.destroy()
		Map = null
		GeoCoder = null
		AutoComplete = null
		infoWindow = null
	})
</script>

<template>
	<div :style="containerStyle" class="containerIKJ">
		<Input
			ref="mapInputRef"
			v-model="valueT.name"
			:class="{ mapInputIKJ: props.showMap }"
			:placeholder="props.placeholder || t('r.search')"
			:disabled="props.disabled"
			icon="ios-search"
		/>
		<div :style="mapStyle" ref="mapRef" :id="mapId"></div>
	</div>
</template>
