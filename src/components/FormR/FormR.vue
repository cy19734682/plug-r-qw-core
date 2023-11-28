<!--FormR 表单组件，支持formData属性定义结构，formRules定义规则，submit方法提交收集到的数据
@created 2023.08.18
@author Ricky email:zhangqingcq@foxmail.com-->

<script lang="ts" setup>
	import { cloneDeep, remove, isEmpty, findIndex } from 'lodash-es'
	import moment from 'moment'
	import t from '../../locale/i18nSFC'
	import { myTypeof, isValidValue, trimObj, findCollection } from '../../methods/globalFunc'
	import $fetch from '../../methods/fetch'
	import { setTimeout } from '../../methods/timer'
	import type { FormItem } from '../../public'
	import ItemR from './ItemR.vue'

	const emit = defineEmits(['on-item-change', 'on-reset', 'on-re-render', 'on-submit'])
	const props = withDefaults(
		defineProps<{
			formData?: Array<FormItem | FormItem[]> /*表单结构数据*/
			formRules?: Record<string, any> /*表单结构规则*/
			showMessage?: boolean /*显示校验信息*/
			labelWidth?: number /*表单项标签宽度*/
			contentWidth?: string /*表单项内容宽度，默认70%*/
			itemWidth?: number /*表单项内容宽度,用于行内表单*/
			inline?: boolean /*行内表单*/
			showLongOkBt?: boolean /*是否展示长确定按钮*/
			longOkBtTxt?: string /*长确定按钮内容*/
			showInlineOkBt?: boolean /*是否展示行内短确定按钮*/
			inlineOkBtTxt?: string /*短确定按钮内容*/
			showInlineClearBt?: boolean /*是否展示行内短清空按钮*/
			inlineClearBtTxt?: string /*短清空按钮内容*/
			disabled?: boolean /*全表禁用，仅展示*/
			btnLoading?: boolean /*提交按钮显示loading*/
			trim?: boolean /*是否去除提交数据中的字符串首尾空格*/
			teamClass?: string /*分组表单-组容器class*/
		}>(),
		{
			formData: () => [],
			formRules: () => ({}),
			showMessage: true,
			labelWidth: 160,
			contentWidth: '70%',
			itemWidth: 200,
			inline: false,
			showLongOkBt: false,
			showInlineOkBt: false,
			showInlineClearBt: false,
			disabled: false,
			btnLoading: false,
			trim: true,
			teamClass: 'formTeamBox'
		}
	)
	const formGroupXRef = ref<any>(null)

	const valGroup = ref<Record<string, any>>({}) /*表单项值，对外公开，提交时传递到外层*/
	const formDataT = ref<any>([]) /*表单结构数据*/
	const tempKeys = ref<Record<string, any>>({}) /*不对外暴露表单项值*/
	let watchGroup: any[] = []
	const mgrUrl = window?.g?.mgrURL ?? ''
	/*selectInput的key没有写死在formData中（因为是动态的）,为了在showingKeys中能捕捉到这类组件的key,特声明此变量*/
	let selectInputKeys: string[] = []
	let hiddenKeys: string[] = []
	const showLoading = ref(false)
	const formReRenderKey = ref<number>(Math.random() * 100000000 + 1000) /*刷新表单*/
	/*上传组件的文件上传地址，远程上传（直接上传到服务器）时，如果没设置，则用该地址*/
	const uploadUrl = window?.g?.mgrURL ? window.g.mgrURL + '/web/v1/fsc/file' : '/file'
	let debounceCount = false

	const formTeam = computed<boolean>(() => Array.isArray(props.formData.length ? props.formData[0] : false))
	const formStyle = computed<Record<string, any>>(() =>
		props.inline
			? {
					width: props.itemWidth + props.labelWidth + 'px'
			  }
			: {}
	)
	const itemStyle = computed<Record<string, any>>(() =>
		props.inline
			? {
					width: '100%'
			  }
			: { width: props.contentWidth }
	)
	/*计算表单规则*/
	const formRulesT = computed<Record<string, any>>(() => {
		let tr = cloneDeep(props.formRules)
		for (let k in tr) {
			if (tr.hasOwnProperty(k)) {
				if (Array.isArray(tr[k])) {
					for (let e of tr[k]) {
						if (!(e.message || e.validator)) {
							e.message = t('r.required')
						}
					}
				} else if (myTypeof(tr[k]) === 'Object') {
					if (!(tr[k].message || tr[k].validator)) {
						tr[k].message = t('r.required')
					}
				}
			}
		}
		return tr
	})
	/*展示的key(需要提交的)*/
	const submitKeys = computed<string[]>(() => {
		let t: string[] = []
		if (formTeam.value) {
			for (let e of formDataT.value) {
				submitItems(e as FormItem[], t)
			}
		} else {
			submitItems(formDataT.value as FormItem[], t)
		}
		return t.concat(selectInputKeys, hiddenKeys)
	})
	const showingKeys = computed<string[]>(() => {
		let t: any[] = []
		if (formTeam.value) {
			for (let e of formDataT.value) {
				showingItems(e as FormItem[], t)
			}
		} else {
			showingItems(formDataT.value as FormItem[], t)
		}
		return t
	})

	function getSlotFormData(d: any[]) {
		/*私有，获取插槽数据*/
		return d.filter((e: Record<string, any>) => e.slotName)
	}

	/**
	 * 计算需要提交的key
	 * @param d 表单结构数据
	 * @param t 储存需要提交的key的对象
	 */
	function submitItems(d: FormItem[], t: string[]) {
		for (let root of d) {
			if (root.showing === true && root.key && root.type !== 'selectInput') {
				t.push(root.key)
				if (root.key2) {
					t.push(root.key2)
				}
				if (root.collectLabel) {
					if (!Array.isArray(root.collectLabel) && root.collectLabel.key) {
						t.push(root.collectLabel.key)
					} else if (Array.isArray(root.collectLabel)) {
						for (let l of root.collectLabel) {
							if (l.key) {
								t.push(l.key)
							}
						}
					}
				}
			}
		}
	}

	/**
	 * 计算需要展示的key
	 * @param d 表单结构数据
	 * @param t 储存需要展示的key的对象
	 */
	function showingItems(d: FormItem[], t: string[]) {
		for (let root of d) {
			if (root.showing === true && root.key && root.type !== 'selectInput') {
				t.push(root.key)
			}
		}
	}

	/*重置表单，会清空表单值并刷新表单dom，异步方法（公开）*/
	function resetForm() {
		return new Promise((r) => {
			clearForm()
			refreshFormDom().then(() => {
				emit('on-reset')
				r(true)
			})
		})
	}

	/*重新渲染表单，异步方法（公开）*/
	function reRenderForm() {
		return new Promise((r) => {
			for (let f of watchGroup) {
				f()
			}
			watchGroup = []
			tempKeys.value = {}
			initValGroup()
			initFormDataT()

			refreshFormDom().then(() => {
				emit('on-re-render')
				r(true)
			})
		})
	}

	/*刷新表单dom，异步方法（公开）*/
	function refreshFormDom() {
		return new Promise((r) => {
			formReRenderKey.value = Math.floor(Math.random() * 100000000 + 1000)
			/*刷新表单*/
			nextTick(function () {
				r(true)
			})
		})
	}

	/*清空表单值（私有，不推荐直接调用，可以调用resetForm）*/
	function clearForm() {
		let defaultV = getDefaultValues()

		for (let k in valGroup.value) {
			if (valGroup.value.hasOwnProperty(k)) {
				if (isValidValue(defaultV[k])) {
					valGroup.value[k] = defaultV[k]
				} else {
					if (Array.isArray(valGroup.value[k])) {
						valGroup.value[k] = []
					} else if (myTypeof(valGroup.value[k]) === 'Boolean') {
						valGroup.value[k] = false
					} else {
						const formItem = findCollection(props.formData, (e) => e.key === k)
						if (formItem && (formItem.type === 'editor' || formItem.type === 'editorPro')) {
							valGroup.value[k] = ''
						} else {
							valGroup.value[k] = null
						}
					}
				}
			}
		}
		clearTempKeys(defaultV)
	}

	/*清空缓存表单值（私有，不推荐直接调用，可以调用resetForm）*/
	function clearTempKeys(defaultV: Record<string, any>) {
		for (let k in tempKeys.value) {
			if (tempKeys.value.hasOwnProperty(k)) {
				if (isValidValue(defaultV[k])) {
					tempKeys.value[k] = defaultV[k]
				} else {
					if (Array.isArray(tempKeys.value[k])) {
						tempKeys.value[k] = []
					} else if (
						myTypeof(tempKeys.value[k]) === 'Object' &&
						tempKeys.value[k].hasOwnProperty('key') &&
						tempKeys.value[k].hasOwnProperty('val')
					) {
						/*selectInput*/
						tempKeys.value[k].val = null
					} else {
						tempKeys.value[k] = null
					}
				}
			}
		}
	}

	/*清空缓存表单项值（私有）*/
	function clearTempKeyItem(k: string) {
		let defaultV = getDefaultValues()
		if (isValidValue(defaultV[k])) {
			tempKeys.value[k] = defaultV[k]
		} else {
			if (Array.isArray(tempKeys.value[k])) {
				tempKeys.value[k] = []
			} else {
				tempKeys.value[k] = null
			}
		}
	}

	/*获取默认值（私有）*/
	function getDefaultValues(): Record<string, any> {
		let t: Record<string, any> = {}
		if (formTeam.value) {
			for (let e of formDataT.value) {
				defaultValItems(e as FormItem[], t)
			}
		} else {
			defaultValItems(formDataT.value as FormItem[], t)
		}
		return t
	}

	/**
	 * 从表单结构数据获取默认值(私有)
	 * @param d 表单结构数据
	 * @param a 储存默认值的对象
	 */
	function defaultValItems(d: FormItem[], a: Record<string, any>) {
		for (let root of d) {
			if (root.tempKey && isValidValue(root.defaultVal)) {
				/*将默认值转换为表单项绑定值对应的格式*/
				getTempKeyDefaultVal(root, a)
			}
			if (root.key && isValidValue(root.defaultVal)) {
				a[root.key] = root.defaultVal
			}
			if (root.key2 && isValidValue(root.defaultVal2)) {
				a[root.key2] = root.defaultVal2
			}
		}
	}

	/**
	 * 判断是否展示表单项（私有，高频被调用方法，每次表单中有任何值更改，都会被调用formDataT的长度<formDataT.length>次，而且还可能触发连锁反应）
	 * @param root 表单项结构数据
	 */
	function getFormItemIfVal(root: FormItem) {
		if (root.show) {
			if (myTypeof(root.show) === 'Object') {
				return returnIfVal(root, dealIfItem(root.show))
			} else if (Array.isArray(root.show)) {
				if (root.showOr) {
					for (let x of root.show) {
						if (dealIfItem(x) === true) {
							return returnIfVal(root, true)
						}
					}
					return returnIfVal(root, false)
				} else {
					for (let x of root.show) {
						if (dealIfItem(x) === false) {
							return returnIfVal(root, false)
						}
					}
					return returnIfVal(root, true)
				}
			} else if (myTypeof(root.show) === 'Function') {
				return returnIfVal(root, root.show(valGroup.value))
			}
		} else if (!root.showing) {
			root.showing = true
		}
		return true
	}

	/**
	 * 判断表单项是否展示（私有）
	 * @param show 表单项的展示配置数据
	 */
	function dealIfItem(show: Record<string, any>) {
		if (show.reg && typeof show.reg.test === 'function') {
			return show.reg.test(valGroup.value[show.key])
		} else if (Array.isArray(show.val)) {
			for (let v of show.val) {
				if (
					(valGroup.value[show.key] || valGroup.value[show.key] === 0 || valGroup.value[show.key] === false) &&
					v === '.'
				) {
					/*只要控制项有值及展示*/
					return true
				} else if (valGroup.value[show.key] === v) {
					return true
				}
			}
			return false
		} else {
			return false
		}
	}

	/**
	 * 将是否展示的结果写入表单结构对象，同时处理默认值相关逻辑（私有）
	 * @param root 表单项结构数据
	 * @param {boolean}val 是否展示的结果
	 */
	function returnIfVal(root: FormItem, val: boolean) {
		if (!root.showing && val && root.key) {
			root.showing = val

			if (root.defaultVal !== undefined) {
				/*对之前没展示且没值的表单项赋默认值*/
				if (root.tempKey) {
					if (
						tempKeys.value[root.tempKey] === null ||
						tempKeys.value[root.tempKey] === undefined ||
						((myTypeof(tempKeys.value[root.tempKey]) === 'Object' || Array.isArray(tempKeys.value[root.tempKey])) &&
							isEmpty(tempKeys.value[root.tempKey]))
					) {
						getTempKeyDefaultVal(root, tempKeys.value)
					}
				} else if (valGroup.value[root.key] === null || valGroup.value[root.key] === undefined) {
					valGroup.value[root.key] = root.defaultVal
				}
				if (
					root.key2 &&
					root.deafultVal2 !== undefined &&
					(valGroup.value[root.key2] === null || valGroup.value[root.key2] === undefined) &&
					root.type !== 'inputMap'
				) {
					valGroup.value[root.key2] = root.defaultVal2
				}
			}
			if (root.tempKey) {
				/*在隐藏表单项展示时把它的值赋给统计对象*/
				tempKeysWatchHandle(tempKeys.value[root.tempKey], root)
			}
		} else {
			root.showing = val
		}
		return val
	}

	/**
	 * 将使用tempKey的表单项的默认值赋转换成对应格式并储存(私有)
	 * @param root 表单项结构数据
	 * @param a 储存默认值的容器
	 */
	function getTempKeyDefaultVal(root: FormItem, a: Record<string, any>) {
		switch (root.type) {
			case 'selectInput':
				a[root.tempKey] = {
					key: root.key,
					val: root.defaultVal
				}
				break
			case 'inputMap':
				if (root.key3) {
					a[root.tempKey] = {
						lng: root.defaultVal || 0,
						lat: root.defaultVal2 || 0,
						name: root.defaultVal3 || ''
					}
				} else {
					a[root.tempKey] = {
						lng: root.defaultVal || 0,
						lat: root.defaultVal2 || 0
					}
				}
				break
			case 'input':
			case 'inputNumber':
			case 'textarea':
				a[root.tempKey] = root.defaultVal
				break
			case 'radioGroup':
			case 'select':
			case 'checkboxGroup':
				if (root.booleanVal) {
					a[root.tempKey] = Boolean(root.defaultVal) ? 1 : 0
				} else {
					a[root.tempKey] = root.defaultVal
				}
				break
			case 'date':
			case 'time':
			case 'monthRange':
				if (
					root.dateType === 'date' ||
					root.dateType === 'datetime' ||
					root.dateType === 'time' ||
					root.dateType === 'year' ||
					root.dateType === 'month'
				) {
					a[root.tempKey] = root.defaultVal
				} else if (
					root.dateType === 'daterange' ||
					root.dateType === 'datetimerange' ||
					root.dateType === 'timerange' ||
					root.type === 'monthRange'
				) {
					a[root.tempKey] = (root.defaultVal && root.defaultVal2 && [root.defaultVal, root.defaultVal2]) || []
				}
				break
		}
	}

	/*初始化表单结构（私有）*/
	function initFormDataT() {
		let t = cloneDeep(props.formData)
		if (formTeam.value) {
			for (let box of t) {
				initItems(box as FormItem[])
			}
		} else {
			initItems(t as FormItem[])
		}
		formDataT.value = t
	}

	function initItems(d: FormItem[]) {
		for (let root of d) {
			switch (root.type) {
				case 'selectInput':
					const tempKeyF = 'selectInput' + Math.floor(Math.random() * 100000000)
					root.tempKey = tempKeyF
					tempKeys.value[tempKeyF] = {
						key: root.key || null,
						val: root.defaultVal || null
					}
					watchGroup.push(
						watch(
							() => tempKeys.value[tempKeyF],
							(after) => {
								tempKeysWatchHandle(after, root)
							},
							{ immediate: true }
						)
					)
					break
				case 'inputMap':
					const tempKeyE = 'inputMap' + Math.floor(Math.random() * 100000000)
					if (root.key) {
						root.tempKey = tempKeyE
						if (root.key3) {
							tempKeys.value[tempKeyE] =
								root.defaultVal !== undefined && root.defaultVal2 !== undefined
									? {
											lng: root.defaultVal,
											lat: root.defaultVal2,
											name: root.defaultVal3 || ''
									  }
									: {
											lng: null,
											lat: null,
											name: null
									  }
						} else {
							tempKeys.value[tempKeyE] =
								root.defaultVal !== undefined && root.defaultVal2 !== undefined
									? {
											lng: root.defaultVal,
											lat: root.defaultVal2
									  }
									: {
											lng: null,
											lat: null
									  }
						}
						watchGroup.push(
							watch(
								() => tempKeys.value[tempKeyE],
								(after) => {
									tempKeysWatchHandle(after, root)
								},
								{ immediate: true }
							)
						)
					}
					break
				case 'input':
				case 'inputNumber':
				case 'textarea':
					const tempKeyD = 'inputT' + Math.floor(Math.random() * 100000000)
					if (root.key) {
						root.tempKey = tempKeyD
						tempKeys.value[tempKeyD] = root.defaultVal !== undefined ? root.defaultVal : null
						watchGroup.push(
							watch(
								() => tempKeys.value[tempKeyD],
								(after) => {
									tempKeysWatchHandle(after, root)
								},
								{ immediate: true }
							)
						)
					}
					break
				case 'select':
				case 'radioGroup':
				case 'checkboxGroup':
					if (!root.options) {
						root.options = []
					}
					if (root.asyncOption) {
						/*远程待选项*/
						if (root.changeOption) {
							/*待选项会根据条件改变*/
							if (Array.isArray(root.changeOption)) {
								let go = true
								for (let cp of root.changeOption) {
									/*检验changeOption参数是否可用*/
									if (!cp.valKey || !cp.key) {
										go = false
										break
									}
								}
								if (go) {
									watchGroup.push(
										watch(
											() => {
												let tUrl = ''
												if (Array.isArray(root.changeOption)) {
													for (let cp of root.changeOption) {
														let vT = valGroup.value[cp.valKey]
														if (vT || vT === 0 || vT === false) {
															/*如果条件有有效值，则拉取待选项*/
															tUrl += '&' + cp.key + '=' + vT
														} else if (!cp.notRequired) {
															/*条件为必填（notRequired!==true,默认必填），且没有有效值，则不拉取待选项*/
															return false
														}
													}
												}
												return tUrl
											},
											(after) => {
												let tV = cloneDeep(tempKeys.value[root.tempKey])
												tempKeys.value[root.tempKey] = null

												if (after && root.optionUrl) {
													let urlT = root.optionUrl.indexOf('?') !== -1 ? root.optionUrl : root.optionUrl + '?'
													initOption((urlT + after).replace(/\?&/, '?'), root, tV)
												} else {
													root.options = []
													if (root.localOption) {
														root.options = [...root.localOption]
													}

													if (isValidValue(tV)) {
														recoverVal(tV, root)
													}
												}
											},
											{
												immediate: true
											}
										)
									)
								} else {
									root.options = []
									if (root.localOption) {
										root.options = [...root.localOption]
									}
								}
							} else if (typeof root.changeOption === 'object') {
								if (root.changeOption.valKey && root.changeOption.key) {
									watchGroup.push(
										watch(
											() => {
												if (typeof root.changeOption === 'object' && !Array.isArray(root.changeOption)) {
													return valGroup.value[root.changeOption.valKey]
												}
												return false
											},
											(after) => {
												let tV = cloneDeep(tempKeys.value[root.tempKey])
												tempKeys.value[root.tempKey] = null

												if (
													(after || after === 0 || after === false) &&
													root.optionUrl &&
													typeof root.changeOption === 'object' &&
													!Array.isArray(root.changeOption)
												) {
													let urlT = root.optionUrl.indexOf('?') !== -1 ? root.optionUrl : root.optionUrl + '?'
													initOption((urlT + '&' + root.changeOption.key + '=' + after).replace(/\?&/, '?'), root, tV)
												} else {
													root.options = []
													if (root.localOption) {
														root.options = [...root.localOption]
													}
													if (isValidValue(tV)) {
														recoverVal(tV, root)
													}
												}
											},
											{ immediate: true }
										)
									)
								}
							} else if (myTypeof(root.changeOption) === 'Boolean') {
								/*设置changeOption为true时,当待选项地址改变后重新拉取待选项，在使用该表单组件的地方改变传入的formData对应项的optionUrl*/
								watchGroup.push(
									watch(
										() => findCollection(props.formData, (e) => e.key === root.key).optionUrl,
										(after) => {
											let tV = cloneDeep(tempKeys.value[root.tempKey])
											tempKeys.value[root.tempKey] = null

											if (after) {
												initOption(after, root, tV)
											} else {
												root.options = []
												if (root.localOption) {
													root.options = [...root.localOption]
												}

												if (isValidValue(tV)) {
													recoverVal(tV, root)
												}
											}
										},
										{
											immediate: true
										}
									)
								)
							}
						} else if (root.optionUrl) {
							initOption(root.optionUrl, root)
						}
					} else if (myTypeof(root.borrowOption) === 'String') {
						/*借用待选项*/
						root.options = findCollection(formDataT.value, (e) => e.key === root.borrowOption).options
					}

					const tempKeyC = 'opEle' + Math.floor(Math.random() * 100000000)
					if (root.key) {
						root.tempKey = tempKeyC
						if ((root.type === 'select' && root.multiple) || root.type === 'checkboxGroup') {
							tempKeys.value[tempKeyC] = root.defaultVal !== undefined ? root.defaultVal : []
						} else if (root.booleanVal) {
							tempKeys.value[tempKeyC] = root.defaultVal !== undefined ? (Boolean(root.defaultVal) ? 1 : 0) : null
						} else {
							tempKeys.value[tempKeyC] = root.defaultVal !== undefined ? root.defaultVal : null
						}

						watchGroup.push(
							watch(
								() => tempKeys.value[tempKeyC],
								(after) => {
									tempKeysWatchHandle(after, root)
								},
								{
									immediate: true
								}
							)
						)
					}
					break
				case 'date':
				case 'time':
				case 'monthRange':
					const tempKeyB = 'date' + Math.floor(Math.random() * 100000000)
					root.tempKey = tempKeyB
					if (
						root.dateType === 'date' ||
						root.dateType === 'datetime' ||
						root.dateType === 'time' ||
						root.dateType === 'year' ||
						root.dateType === 'month'
					) {
						tempKeys.value[tempKeyB] = root.defaultVal || null
					} else if (
						root.dateType === 'daterange' ||
						root.dateType === 'datetimerange' ||
						root.dateType === 'timerange' ||
						root.type === 'monthRange'
					) {
						tempKeys.value[tempKeyB] =
							(root.defaultVal && root.defaultVal2 && [root.defaultVal, root.defaultVal2]) || []
					}
					watchGroup.push(
						watch(
							() => tempKeys.value[tempKeyB],
							(after) => {
								tempKeysWatchHandle(after, root)
							}
						)
					)
					break
			}
		}
	}

	/**
	 * 初始化表单项的选项，如下拉选项，多选、单选组选项（私有）
	 * @param url 远程选项接口地址
	 * @param root 表单项结构数据对象
	 * @param itemVal 缓存的表单项旧值
	 */
	function initOption(url: string, root: FormItem, itemVal?: any) {
		$fetch
			.get(url)
			.then((r: any) => {
				if (!root.options) {
					return
				}
				let tOption = r?.data?.records || r?.data || r || []
				if (Array.isArray(tOption)) {
					if (root.optionFilter && myTypeof(root.optionFilter) === 'Function') {
						tOption = root.optionFilter(tOption)
					}
					if (root.optionLabel && root.optionVal) {
						/*label由多个字段组合成*/
						root.options.length = 0
						root.options.push(
							...tOption.map((eP: Record<string, any>) => {
								let rP: Record<string, any>
								if (Array.isArray(root.optionLabel)) {
									/*组合成的label*/
									let rL = ''
									root.optionLabel.forEach((v, i) => {
										/*需要在label中显示的字段的值*/
										let lVal = String(eP[v])
										if (i === 1) {
											rL += '（' + lVal
										} else if (i > 1) {
											rL += '、' + lVal
										} else {
											rL += lVal
										}
									})
									rP = {
										label: rL + '）',
										val: root.optionVal && eP[root.optionVal]
									}
								} else {
									rP = {
										label: root.optionLabel && eP[root.optionLabel],
										val: root.optionVal && eP[root.optionVal]
									}
								}
								/*除了要收集绑定值，还要一并收集其他字段,则将其他字段加入到待选列表项*/
								if (root.collectLabel) {
									if (Array.isArray(root.collectLabel)) {
										for (let tC of root.collectLabel) {
											if (tC.valKey && tC.valKey !== 'label') {
												rP[tC.valKey] = eP[tC.valKey]
											}
										}
									} else {
										if (root.collectLabel.valKey && root.collectLabel.valKey !== 'label') {
											rP[root.collectLabel.valKey] = eP[root.collectLabel.valKey]
										}
									}
								}
								if (rP.val !== null && rP.val !== undefined) {
									return rP
								}
							})
						)
					} else {
						root.options.length = 0
						root.options.push(...tOption)
					}
				} else {
					root.options.length = 0
				}
				if (root.localOption) {
					root.options.unshift(...root.localOption)
				}
				if (isValidValue(itemVal)) {
					recoverVal(itemVal, root)
				}

				/*待选项禁用*/
				if (root.disableOptionByOthers) {
					if (myTypeof(root.disableOptionByOthers) === 'String') {
						watchGroup.push(
							watch(
								() => valGroup.value[root.disableOptionByOthers],
								(after) => {
									clearTempKeyItem(root.tempKey)
									if (!root.options) {
										return
									}
									for (let iP of root.options) {
										if (iP.disabled) {
											iP.disabled = false
										}
									}
									if (after || after === 0 || after === false) {
										for (let iP of root.options) {
											if (iP.val === after) {
												iP.disabled = true
											}
										}
									}
								},
								{
									immediate: true
								}
							)
						)
					} else if (Array.isArray(root.disableOptionByOthers)) {
						watchGroup.push(
							watch(
								() => {
									return root.disableOptionByOthers.filter((e: any) => e).map((e: string) => valGroup.value[e])
								},
								(after) => {
									clearTempKeyItem(root.tempKey)
									if (!root.options) {
										return
									}
									for (let iP of root.options) {
										if (iP.disabled) {
											iP.disabled = false
										}
									}
									if (after) {
										for (let iP of root.options) {
											for (let i = 0; i < after.length; i++) {
												if (iP.val === after[i]) {
													iP.disabled = true
													after.splice(i, 1)
													break
												}
											}
										}
									}
								},
								{
									immediate: true
								}
							)
						)
					}
				}
			})
			.catch(() => {
				console.warn('拉取选项出错')
			})
	}

	/**
	 * 如果options中选项的值和缓存的表单项旧值相等,则为表单项恢复之前因待选项改变而清除的值（私有）
	 * @param itemVal 缓存的旧值
	 * @param root 表单项结构数据对象
	 */
	function recoverVal(itemVal: any, root: FormItem) {
		if (Array.isArray(root.options)) {
			if (findIndex(root.options, { val: itemVal }) !== -1) {
				tempKeys.value[root.tempKey] = itemVal
			}
		}
	}

	/*初始化表单项值（私有）*/
	function initValGroup() {
		valGroup.value = {}
		if (formTeam.value) {
			for (let e of props.formData) {
				initValItems(e as FormItem[])
			}
		} else {
			initValItems(props.formData as FormItem[])
		}
	}

	/**
	 * 根据表单结构数据，初始化valGroup（私有）
	 * @param d 表单结构数据
	 */
	function initValItems(d: FormItem[]) {
		for (let root of d) {
			if (root.key) {
				if (root.type === 'checkboxGroup' || (root.type === 'select' && root.multiple)) {
					valGroup.value[root.key] = root.defaultVal !== undefined && root.show === undefined ? root.defaultVal : []
				} else if (root.type === 'editor' || root.type === 'editorPro') {
					valGroup.value[root.key] = root.defaultVal !== undefined && root.show === undefined ? root.defaultVal : ''
				} else {
					valGroup.value[root.key] = root.defaultVal !== undefined && root.show === undefined ? root.defaultVal : null
					if (root.key2) {
						valGroup.value[root.key2] =
							root.defaultVal2 !== undefined && root.show === undefined ? root.defaultVal2 : null
					}
				}
			}
		}
	}

	/*将缓存表单值给统计对象（私有）*/
	function tempKeysWatchHandle(after: any, root: FormItem) {
		if (root.showing) {
			switch (root.type) {
				case 'selectInput':
					if (after) {
						if (after.beforeKey) {
							delete valGroup.value[after.beforeKey]
						}
						valGroup.value[after.key] = after.val
					}
					break
				case 'inputMap':
					if (!root.key || !root.key2) {
						return
					}
					if (after) {
						valGroup.value[root.key] = after.lng
						valGroup.value[root.key2] = after.lat
						if (root.key3) {
							valGroup.value[root.key3] = after.name
						}
					} else {
						valGroup.value[root.key] = null
						valGroup.value[root.key2] = null
						if (root.key3) {
							valGroup.value[root.key3] = null
						}
					}
					break
				case 'input':
				case 'inputNumber':
				case 'textarea':
					if (!root.key) {
						return
					}
					if (after || after === 0) {
						let reg = /^-?\d+(.\d+)?$/
						if (root.numberVal && reg.test(after)) {
							valGroup.value[root.key] = Number(after)
						} else {
							valGroup.value[root.key] = after
						}
					} else {
						valGroup.value[root.key] = null
					}
					break
				case 'select':
				case 'radioGroup':
				case 'checkboxGroup':
					if (!root.key) {
						return
					}
					if (root.booleanVal && !root.multiple) {
						valGroup.value[root.key] = after === undefined || after === '' || after === null ? null : Boolean(after)
					} else if (root.multiple || root.type === 'checkboxGroup') {
						valGroup.value[root.key] = Object.assign([], after)
					} else {
						valGroup.value[root.key] = after
					}
					/*除了要收集绑定值，还要一并收集其他字段*/
					if (root.collectLabel) {
						const targetOption = findOptions(root, after)

						if (Array.isArray(root.collectLabel)) {
							for (let l of root.collectLabel) {
								if (l.key && l.valKey) {
									const collectTempKey = findTempKey(l.key)
									let t: any = null

									if (Array.isArray(targetOption)) {
										t = targetOption.map((e) => e[l.valKey])
										valGroup.value[l.key] = t
										if (collectTempKey) {
											tempKeys.value[collectTempKey] = t
										}
									} else {
										if (targetOption && isValidValue(targetOption[l.valKey])) {
											t = targetOption[l.valKey]
										}
										valGroup.value[l.key] = t
										if (collectTempKey) {
											tempKeys.value[collectTempKey] = t
										}
									}

									let sameKeyCom = findCollection(formDataT.value, (e) => e.key === l.key)
									if (sameKeyCom && sameKeyCom.tempKey) {
										tempKeys.value[sameKeyCom.tempKey] = valGroup.value[l.key]
									}
								}
							}
						} else if (typeof root.collectLabel === 'object') {
							if (root.collectLabel.key && root.collectLabel.valKey) {
								const collectTempKey = findTempKey(root.collectLabel.key)
								let t: any = null
								if (Array.isArray(targetOption)) {
									t = targetOption.map(
										(e) => root.collectLabel && !Array.isArray(root.collectLabel) && e[root.collectLabel.valKey]
									)
									valGroup.value[root.collectLabel.key] = t
									if (collectTempKey) {
										tempKeys.value[collectTempKey] = t
									}
								} else {
									if (targetOption && isValidValue(targetOption[root.collectLabel.valKey])) {
										t = targetOption[root.collectLabel.valKey]
									}
									valGroup.value[root.collectLabel.key] = t
									if (collectTempKey) {
										tempKeys.value[collectTempKey] = t
									}
								}

								let sameKeyCom = findCollection(
									formDataT.value,
									(e) =>
										(root.collectLabel && !Array.isArray(root.collectLabel) && e.key === root.collectLabel.key) || false
								)
								if (sameKeyCom && sameKeyCom.tempKey) {
									tempKeys.value[sameKeyCom.tempKey] = valGroup.value[root.collectLabel.key]
								}
							}
						}
					}
					break
				case 'date':
				case 'time':
				case 'monthRange':
					if (!root.key) {
						return
					}
					let tp = root.dateType

					const fm: Record<string, any> = {
						date: 'YYYY-MM-DD',
						daterange: 'YYYY-MM-DD',
						datetime: 'YYYY-MM-DD HH:mm:ss',
						datetimerange: 'YYYY-MM-DD HH:mm:ss',
						year: 'YYYY',
						month: 'MM'
					}

					if (tp === 'date' || tp === 'datetime' || tp === 'time' || tp === 'year' || tp === 'month') {
						if (after) {
							if (tp === 'time') {
								valGroup.value[root.key] = after
							} else {
								valGroup.value[root.key] = moment(after).format(typeof root.format === 'string' ? root.format : fm[tp])
							}
							if (tp === 'date' && root.addTime) {
								valGroup.value[root.key] += ' 00:00:00'
							}
						} else {
							valGroup.value[root.key] = null
						}
					} else if (root.type === 'monthRange' || tp === 'daterange' || tp === 'datetimerange' || tp === 'timerange') {
						if (!root.key2) {
							return
						}
						if (after && after[0] && after[1]) {
							if (tp === 'timerange') {
								valGroup.value[root.key] = after[0]
								valGroup.value[root.key2] = after[1]
							} else if (root.type === 'monthRange') {
								valGroup.value[root.key] =
									(typeof root.format === 'string' && moment(after[0]).format(root.format)) || after[0]
								valGroup.value[root.key2] =
									(typeof root.format === 'string' && root.format && moment(after[1]).format(root.format)) || after[1]
							} else {
								valGroup.value[root.key] = moment(after[0]).format(root.format || (tp && fm[tp]))
								valGroup.value[root.key2] = moment(after[1]).format(root.format || (tp && fm[tp]))
							}
							if (tp === 'daterange' && root.addTime) {
								valGroup.value[root.key] += ' 00:00:00'
								valGroup.value[root.key2] += ' 23:59:59'
							}
						} else {
							valGroup.value[root.key] = null
							valGroup.value[root.key2] = null
						}
					}
					break
			}
		}
	}

	/*collectLabel时找出选中的选项（私有）*/
	function findOptions(root: FormItem, after: any) {
		if (!root.options) {
			return
		}
		if (root.multiple || root.type === 'checkboxGroup') {
			if (after) {
				let t: any[] = []
				for (let e of root.options) {
					if (after.indexOf(e.val) !== -1) {
						t.push(e)
					}
				}
				return t
			}
			return false
		} else {
			if (after || after === 0 || after === false) {
				for (let e of root.options) {
					if (e.val === after) {
						return e
					}
				}
			}
			return false
		}
	}

	/*找到需要收集的key对应的tempKey(私有)*/
	function findTempKey(k: string) {
		if (formTeam.value) {
			for (let e of formDataT.value) {
				const t = findTempKeyItem(e as FormItem[], k)
				if (t) {
					return t
				}
			}
			return false
		}
		return findTempKeyItem(formDataT.value as FormItem[], k)
	}

	function findTempKeyItem(d: FormItem[], k: string) {
		for (let root of d) {
			if (root.key === k) {
				return root.tempKey
			}
		}
		return false
	}

	/*设置表单项的值（可添加新字段，例如添加隐藏字段，需要提交这个值，但页面不展示，公开）*/
	function setItemToValGroup(data: Record<string, any>, notClearOthers?: boolean) {
		let t: Record<string, any> = {}
		for (let k in valGroup.value) {
			if (valGroup.value.hasOwnProperty(k) && data[k] !== undefined) {
				t[k] = data[k]
				delete data[k]
			}
		}
		updateValGroup(t, notClearOthers)
		for (let kk in data) {
			/*用Object.assign出错，只有第一次能正常合并*/
			if (data.hasOwnProperty(kk)) {
				if (hiddenKeys.indexOf(kk) < 0) {
					hiddenKeys.push(kk)
				}
				valGroup.value[kk] = data[kk]
			}
		}
	}

	/**
	 * 获取需要校验的表单项的key（私有）
	 * @param d 更新的数据对象
	 */
	function getValidateKeys(d: Record<string, any>) {
		let t = cloneDeep(d)
		if (formTeam.value) {
			let r: any[] = []
			for (let e of props.formData) {
				r.push(...getValidateItems(e as FormItem[], t))
			}
			return r
		}
		return getValidateItems(props.formData as FormItem[], t)
	}

	/**
	 * 获取需要校验的表单项的key（私有）
	 * @param a 表单结构数据
	 * @param d 更新的数据对象
	 */
	function getValidateItems(a: FormItem[], d: Record<string, any>) {
		return a
			.filter((e) => {
				for (let k of Object.keys(d)) {
					/*需要校验的表单项满足条件：1.在更新队列；2.没有处于隐藏状态；3.不能是手动置空的表单项；*/
					if (
						e.key === k &&
						showingKeys.value.indexOf(k) > -1 &&
						!(d[k] === null || ((Array.isArray(d[k]) || myTypeof(d[k]) === 'Object') && isEmpty(d[k])))
					) {
						delete d[k]
						return true
					}
				}
				return false
			})
			.map((e) => e.key)
	}

	/**
	 * 更新表单项的值（只能更新已有字段，公开）
	 * @param data 新数据
	 * @param notClearOthers 是否清空其他表单项，默认清空
	 */
	function updateValGroup(data: Record<string, any>, notClearOthers: boolean = false) {
		let t = cloneDeep(data)
		updateTempKeys(data, notClearOthers)
		/*先更新tempKeys再更新valGroup 避免更新同key的tempKeys元素清空valGroup元素*/
		for (let k in valGroup.value) {
			if (valGroup.value.hasOwnProperty(k) && data[k] !== undefined && data[k] !== '--') {
				if (Array.isArray(data[k])) {
					data[k] = data[k].filter((e: any) => e !== '--')
				} else if (myTypeof(data[k]) === 'Object') {
					for (let n in data[k]) {
						if (data[k].hasOwnProperty(n) && data[k][n] === '--') {
							data[k][n] = null
						}
					}
				}
				valGroup.value[k] = data[k]
			} else if (!notClearOthers) {
				valGroup.value[k] = Array.isArray(valGroup.value[k]) ? [] : null
			}
		}
		validateFields(getValidateKeys(t))
	}

	/**
	 * 更新未暴露表单项值（私有）
	 * @param data 新数据
	 * @param notClearOthers 是否清空其他表单项，默认清空
	 */
	function updateTempKeys(data: Record<string, any>, notClearOthers: boolean = false) {
		if (formTeam.value) {
			for (let t of formDataT.value) {
				updateTempKeyItem(t as FormItem[], data, notClearOthers)
			}
		} else {
			updateTempKeyItem(formDataT.value as FormItem[], data, notClearOthers)
		}
	}

	/**
	 * 更新tampKey
	 * @param a 表单结构数据
	 * @param d 新数据
	 * @param notClearOthers 是否清空其他表单项，默认清空
	 */
	function updateTempKeyItem(a: FormItem[], d: Record<string, any>, notClearOthers: boolean = false) {
		for (let root of a) {
			if (!root.key) {
				continue
			}
			if (
				((notClearOthers && (d[root.key] !== undefined || (root.key2 && d[root.key2] !== undefined))) ||
					!notClearOthers) &&
				root.tempKey
			) {
				switch (root.type) {
					case 'inputMap':
						if (!root.key2) {
							continue
						}
						if (myTypeof(d[root.key]) === 'Number' && myTypeof(d[root.key2] === 'Number')) {
							if (root.key3) {
								tempKeys.value[root.tempKey] = {
									lng: d[root.key],
									lat: d[root.key2],
									name: d[root.key3]
								}
							} else {
								tempKeys.value[root.tempKey] = {
									lng: d[root.key],
									lat: d[root.key2]
								}
							}
						} else {
							if (root.key3) {
								tempKeys.value[root.tempKey] = {
									lng: null,
									lat: null,
									name: null
								}
							} else {
								tempKeys.value[root.tempKey] = {
									lng: null,
									lat: null
								}
							}
						}
						break
					case 'input':
					case 'inputNumber':
					case 'textarea':
						if ((d[root.key] && d[root.key] !== '--') || d[root.key] === 0) {
							tempKeys.value[root.tempKey] = d[root.key]
						} else {
							tempKeys.value[root.tempKey] = null
						}
						break
					case 'select':
					case 'radioGroup':
					case 'checkboxGroup':
						if ((d[root.key] && d[root.key] !== '--') || d[root.key] === 0 || d[root.key] === false) {
							if (root.multiple || root.type === 'checkboxGroup') {
								tempKeys.value[root.tempKey] = [...d[root.key]]
							} else if (root.booleanVal) {
								tempKeys.value[root.tempKey] = Boolean(d[root.key]) ? 1 : 0
							} else {
								tempKeys.value[root.tempKey] = d[root.key]
							}
						} else {
							if (root.multiple || root.type === 'checkboxGroup') {
								/*当notClearOthers为false时用来清空*/
								tempKeys.value[root.tempKey] = []
							} else {
								tempKeys.value[root.tempKey] = null
							}
						}
						break
					case 'date':
					case 'time':
						if (
							root.dateType === 'date' ||
							root.dateType === 'datetime' ||
							root.dateType === 'year' ||
							root.dateType === 'month' ||
							root.dateType === 'time'
						) {
							tempKeys.value[root.tempKey] = d[root.key] && d[root.key] !== '--' ? d[root.key] : null
						} else if (
							root.dateType === 'daterange' ||
							root.dateType === 'datetimerange' ||
							root.dateType === 'timerange'
						) {
							if (!root.key2) {
								continue
							}
							tempKeys.value[root.tempKey] =
								(d[root.key] &&
									d[root.key] !== '--' &&
									d[root.key2] &&
									d[root.key2] !== '--' && [d[root.key], d[root.key2]]) ||
								[]
						}
						break
				}
			}
		}
	}

	/**
	 * 更新表单结构，例如设置或取消禁用,或者给type为txt的表单项（没有key）赋值（公开）；
	 * @param {Object|Array} d 为对象（改变单个）或数组（改变多个），支持的属性：index（必填）-需要改变的formData项的索引值、
	 * indexB-当表单为`分组表单`时必填（表示表单项的二位数组索引第二位）、需要改变的属性，如要改变第二个表单组件的label和title,
	 * 则为:{index:1,label:XXX,title:XXX}
	 */
	function updateFormDataT(d: Record<string, any> | Record<string, any>[]) {
		if (Array.isArray(d)) {
			for (let e of d) {
				changeDataHandle(e)
			}
		} else if (myTypeof(d) === 'Object') {
			changeDataHandle(d)
		}
	}

	/**
	 * 改变表单结构（私有）
	 * @param d 同updateFormDataT的 d
	 */
	function changeDataHandle(d: Record<string, any>) {
		const { index, indexB, key, val } = d
		if (typeof index !== 'number') {
			return
		}
		if (Array.isArray(formDataT.value[index])) {
			if (typeof indexB === 'number') {
				if (key && d.hasOwnProperty('val')) {
					formDataT.value[index][indexB][key] = val
				} else {
					for (let k of Object.keys(d)) {
						if (k !== 'index' && key !== 'indexB') {
							formDataT.value[index][indexB][k] = d[k]
						}
					}
				}
			}
		} else {
			if (key && d.hasOwnProperty('val')) {
				formDataT.value[index][key] = val
			} else {
				for (let k of Object.keys(d)) {
					if (k !== 'index') {
						formDataT.value[index][k] = d[k]
					}
				}
			}
		}
	}

	/*更新远程数据级联名称（私有）*/
	function asyncLabelChange({ label, root }: { label: string; root: FormItem }) {
		if (root.key2) {
			valGroup.value[root.key2] = label
		}
		itemChange({
			e: label,
			root
		})
	}

	/*更新选择输入框值（私有）*/
	function onSelectInputChange(d: any) {
		if (d.beforeKey) {
			remove(selectInputKeys, (o) => o === d.beforeKey)
		}
		if (d.key) {
			if (selectInputKeys.indexOf(d.key) === -1) {
				selectInputKeys.push(d.key)
			}
			itemChange({
				e: null,
				root: d
			})
		}
	}

	/*更新行政区域名称（私有）*/
	function alNameChange({ name, root }: { name: string; root: FormItem }) {
		if (root.key2) {
			valGroup.value[root.key2] = name
		}
		itemChange({
			e: name,
			root
		})
	}

	/**
	 * 重新校验（私有）
	 * @param e 事件的$event对象，一般是组件change事件的值
	 * @param root 表单项结构数据
	 */
	function reValidateAndChangeHandle({ e, root }: { e: any; root: FormItem }) {
		itemChange({
			e: e,
			root
		})
		nextTick(function () {
			formGroupXRef.value?.validateField?.(root.key)
		})
	}

	/**
	 * 表单项值更新（私有）
	 * @param e 事件的$event对象，一般是组件change事件的值
	 * @param root 表单项结构数据
	 */
	function itemChange({ e, root }: { e: any; root: FormItem }) {
		setTimeout(() => {
			let d: Record<string, any> = {
				event: e
			}
			if (root.key) {
				d[root.key] = valGroup.value[root.key]
			}
			if (root.key2) {
				d[root.key2] = valGroup.value[root.key2]
			}
			if (Array.isArray(root.collectLabel)) {
				for (let l of root.collectLabel) {
					d[l.key] = valGroup.value[l.key]
				}
			} else if (root.collectLabel && root.collectLabel.key) {
				d[root.collectLabel.key] = valGroup.value[root.collectLabel.key]
			}
			emit('on-item-change', d)
		}, 500)
	}

	/**
	 * 获取需要提交的数据(私有)
	 */
	function getValGroup() {
		let t: Record<string, any> = {}
		for (let e of submitKeys.value) {
			t[e] = valGroup.value[e]
		}
		if (props.trim) {
			t = trimObj(t)
		}
		return t
	}

	/*主动验证整个表单（公开）*/
	function validate() {
		formGroupXRef.value?.validate?.()
	}

	/**
	 * 手动验证表单项（公开）
	 * @param prop 需要校验的表单项(rules中对应的key)
	 */
	function reValidate(prop: any) {
		setTimeout(() => {
			formGroupXRef.value?.validateField?.(prop, () => {})
		}, 10)
	}

	/**
	 * 批量校验部分表单
	 * @param {Array}props 需要校验的表单prop集合
	 */
	function validateFields(props: any[]) {
		setTimeout(() => {
			if (Array.isArray(props)) {
				for (let e of props) {
					formGroupXRef.value?.validateField?.(e, () => {})
				}
			}
		}, 10)
	}

	/*主动改变表单按钮loading状态（在开启btnLoading的前提下，公开）*/
	function changeLoading(v: any) {
		if (v === undefined) {
			return
		}
		showLoading.value = Boolean(v)
	}

	/*触发提交事件（一般不需要调用，会通过插件内部提交按钮触发，公开）*/
	function submit() {
		if (props.disabled) {
			return
		}
		formGroupXRef.value?.validate?.((valid: any) => {
			if (!debounceCount) {
				debounceCount = true
				if (valid) {
					showLoading.value = true

					emit('on-submit', getValGroup())
				}
				setTimeout(() => {
					debounceCount = false
				}, 2000)
			}
		})
	}

	onMounted(() => {
		initValGroup()
		initFormDataT()
	})

	defineExpose({
		resetForm,
		refreshFormDom,
		reRenderForm,
		setItemToValGroup,
		updateValGroup,
		updateFormDataT,
		validate,
		reValidate,
		changeLoading,
		getValGroup,
		submit
	})
</script>

<template>
	<Form
		ref="formGroupXRef"
		:model="valGroup"
		:rules="formRulesT"
		:label-width="props.labelWidth"
		:inline="props.inline"
		:show-message="props.showMessage"
		class="formXN"
		:key="formReRenderKey"
	>
		<!--解决form只有一个input时enter触发页面刷新的问题-->
		<FormItem style="display: none"><input type="text" /></FormItem>
		<div v-for="(box, n) of formDataT" v-if="formTeam" :class="[teamClass, 'formTeamBox' + n]" :key="'formTeamBox' + n">
			<template v-for="(item, i) of box" :key="'formItem' + i">
				<item-r
					:item="item"
					v-if="getFormItemIfVal(item)"
					:style="formStyle"
					:item-style="itemStyle"
					:val-group="valGroup"
					:temp-keys="tempKeys"
					:inline="props.inline"
					:disabled="props.disabled"
					:label-width="props.labelWidth"
					:item-width="props.itemWidth"
					:mgr-url="mgrUrl"
					:upload-url="uploadUrl"
					@item-change="itemChange"
					@re-validate="reValidateAndChangeHandle"
					@clear-temp-key-item="clearTempKeyItem"
					@select-input-change="onSelectInputChange"
					@al-name-change="alNameChange"
					@async-label-change="asyncLabelChange"
				>
					<template #[s.slotName]="slotProps" v-for="s in getSlotFormData(box)">
						<slot :name="s.slotName" :val-group="slotProps.valGroup" />
					</template>
				</item-r>
			</template>
		</div>
		<template v-for="(item, i) of formDataT" :key="'formItem' + i">
			<item-r
				:item="item"
				v-if="!formTeam && getFormItemIfVal(item)"
				:style="formStyle"
				:item-style="itemStyle"
				:val-group="valGroup"
				:temp-keys="tempKeys"
				:inline="props.inline"
				:disabled="props.disabled"
				:label-width="props.labelWidth"
				:item-width="props.itemWidth"
				:mgr-url="mgrUrl"
				:upload-url="uploadUrl"
				@item-change="itemChange"
				@re-validate="reValidateAndChangeHandle"
				@clear-temp-key-item="clearTempKeyItem"
				@select-input-change="onSelectInputChange"
				@al-name-change="alNameChange"
				@async-label-change="asyncLabelChange"
			>
				<template #[s.slotName]="slotProps" v-for="s in getSlotFormData(formData)">
					<slot :name="s.slotName" :val-group="slotProps.valGroup" />
				</template>
			</item-r>
		</template>
		<!--长提交按钮-->
		<FormItem v-if="props.showLongOkBt">
			<!--suppress HtmlWrongAttributeValue -->
			<Button
				@click="submit"
				:style="itemStyle"
				type="primary"
				:loading="props.btnLoading && showLoading"
				:disabled="props.disabled"
				>{{ props.longOkBtTxt || t('r.confirm') }}
			</Button>
		</FormItem>
		<div class="inlineBlock">
			<!--短提交按钮（查询）-->
			<!--suppress HtmlWrongAttributeValue -->
			<Button
				v-if="props.showInlineOkBt"
				type="primary"
				:class="{ inlineFormBtXN: props.inline, okBtnXN: true }"
				@click="submit"
				:loading="props.btnLoading && showLoading"
				:disabled="props.disabled"
				>{{ props.inlineOkBtTxt || t('r.confirm') }}
			</Button>
			<!--取消按钮（清除）-->
			<!--suppress HtmlWrongAttributeValue -->
			<Button v-if="props.showInlineClearBt" @click="resetForm" :class="{ inlineFormBtXN: props.inline }" type="dashed"
				>{{ props.inlineClearBtTxt || t('r.clear') }}
			</Button>
		</div>
	</Form>
</template>
