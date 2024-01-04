<!--ItemR 表单项组件
@created 2023.08.21
@author Ricky email:zhangqingcq@foxmail.com-->
<script lang="ts" setup>
	import t from '../../locale/i18nSFC'
	import SelectInput from '../SelectInput/SelectInput.vue'
	import AlCascaderMC from '../AlCascaderMC/AlCascaderMC.vue'
	import AsyncCascader from '../AsyncCascader/AsyncCascader.vue'
	import UploadGroup from '../UploadGroup/UploadGroup.vue'
	import EditorPro from '../EditorPro/EditorPro.vue'
	import InputMap from '../InputMap/InputMap.vue'
	import MonthRange from '../MonthRange/MonthRange.vue'

	const emit = defineEmits([
		'item-change',
		're-validate',
		'select-input-change',
		'al-name-change',
		'async-label-change'
	])
	const props = defineProps<{
		item: any
		itemStyle: Record<string, any>
		valGroup: Record<string, any>
		tempKeys: Record<string, any>
		inline: boolean
		disabled: boolean
		labelWidth: number
		itemWidth: number
		mgrUrl: string
		uploadUrl: string
	}>()

	function itemClass(root: any) {
		return {
			withInfo: Boolean(root.info),
			withTitle: Boolean(root.title),
			inlineFormItemXN: props.inline,
			noLabel: root.type === 'selectInput',
			[root.class]: root.class,
			slotInput: root.slotPosition
		}
	}

	function itemChange(e: any, root: any) {
		emit('item-change', {
			e,
			root
		})
	}

	function reValidateAndChangeHandle(e: any, root: any) {
		emit('re-validate', {
			e,
			root
		})
	}

	function onSelectInputChange(d: any) {
		emit('select-input-change', d)
	}

	function alNameChange(name: any, root: any) {
		emit('al-name-change', {
			name,
			root
		})
	}

	function asyncLabelChange(label: any, root: any) {
		emit('async-label-change', {
			label,
			root
		})
	}
</script>

<template>
	<!--suppress HtmlExtraClosingTag -->
	<FormItem
		:label="props.item.type !== 'radio' && props.item.type !== 'checkbox' ? props.item.label : ' '"
		:prop="props.item.key || ''"
		class="relativeBox"
		:class="itemClass(props.item)"
	>
		<!--纯文本,也可以不传label和val,单纯用来布局占位-->
		<div
			v-if="props.item.type === 'txt'"
			:style="props.itemStyle"
			style="display: inline-block"
			:class="{ likeInputX: props.item.likeInput, disabled: Boolean(props.item.disabled) || props.disabled }"
			>{{ props.item.valKey ? props.valGroup[props.item.valKey] || '无' : props.item.val }}
		</div>
		<!--数字输入框-->
		<InputNumber
			:style="props.itemStyle"
			v-else-if="props.item.type === 'inputNumber'"
			v-model="props.tempKeys[props.item.tempKey]"
			:max="props.item.max || props.item.max === 0 ? props.item.max : Infinity"
			:min="props.item.min || props.item.min === 0 ? props.item.min : -Infinity"
			:precision="props.item.precision"
			:step="props.item.step || 1"
			:placeholder="props.item.placeholder || t('r.pInput')"
			:disabled="Boolean(props.item.disabled) || props.disabled"
			:readonly="Boolean(props.item.readonly)"
			:editable="props.item.editable !== false"
			@on-blur="itemChange($event, props.item)"
			:active-change="Boolean(props.item.activeChange)"
			:clearable="props.item.clearable !== false"
		/>
		<!--输入框-->
		<Input
			:style="itemStyle"
			v-else-if="props.item.type === 'input'"
			v-model="props.tempKeys[props.item.tempKey]"
			:type="props.item.inputType ?? (props.item.password ? 'password' : 'text')"
			:maxlength="props.item.maxLength || null"
			:password="Boolean(props.item.password)"
			:icon="props.item.icon"
			:prefix="props.item.prefix"
			:suffix="props.item.suffix"
			:placeholder="props.item.placeholder || t('r.pInput')"
			:disabled="Boolean(props.item.disabled) || props.disabled"
			@on-blur="itemChange($event, props.item)"
			:clearable="!props.item.password && props.item.inputType === 'text' && props.item.clearable !== false"
		>
			<template v-if="props.item.slotPosition && props.item.slotName" #[props.item.slotPosition]>
				<slot :name="props.item.slotName" />
			</template>
			<template v-if="props.item.slotPosition !== 'prepend' && props.item.prepend" #prepend>
				<span>{{ props.item.prepend }}</span>
			</template>
			<template v-if="props.item.slotPosition !== 'append' && props.item.append" #append>
				<span>{{ props.item.append }}</span>
			</template>
		</Input>
		<!--下拉框-->
		<Select
			v-else-if="props.item.type === 'select'"
			v-model="tempKeys[props.item.tempKey]"
			:style="itemStyle"
			:filterable="props.item.filterable === true || props.item.filterable === false ? props.item.filterable : false"
			:disabled="Boolean(props.item.disabled) || props.disabled"
			:multiple="Boolean(props.item.multiple)"
			:placeholder="props.item.placeholder || t('r.pSelect')"
			@on-change="itemChange($event, props.item)"
			transfer
			:clearable="props.item.clearable !== false"
		>
			<Option
				v-for="(optionItem, i) in props.item.options"
				:value="optionItem.val"
				:label="optionItem.label || optionItem.val"
				:key="'option-' + props.item.key + i"
				:disabled="!!optionItem.disabled"
			/>
		</Select>
		<!--选择输入框（可以选择输入的key，比如选择是想收集体重还是身高）-->
		<select-input
			v-else-if="props.item.type === 'selectInput'"
			v-model="tempKeys[props.item.tempKey]"
			:label-width="labelWidth"
			:item-width="itemWidth"
			:select-option="props.item.options || []"
			:placeholder="props.item.placeholder || t('r.pInput')"
			:clearable="props.item.clearable !== false"
			:disabled="Boolean(props.item.disabled) || props.disabled"
			@on-change="onSelectInputChange"
		/>
		<!--行政区域级联-->
		<al-cascader-m-c
			:style="itemStyle"
			class="inlineBlock"
			v-else-if="props.item.type === 'alCascader'"
			v-model="props.valGroup[props.item.key]"
			:level="props.item.level || props.item.level === 0 ? props.item.level : 2"
			:disabled="Boolean(props.item.disabled) || props.disabled"
			:filterable="props.item.filterable !== false"
			:placeholder="props.item.placeholder || t('r.pSelect')"
			:change-on-select="Boolean(props.item.changeOnSelect)"
			@on-name-change="alNameChange($event, props.item)"
		/>
		<!--远程数据级联-->
		<async-cascader
			:style="itemStyle"
			v-else-if="props.item.type === 'asyncCascader'"
			v-model="props.valGroup[props.item.key]"
			:url="props.item.url || mgrUrl + '/web/v1/umc/orgs'"
			:option-val="props.item.optionVal || 'id'"
			:option-label="props.item.optionLabel || 'name'"
			:option-filter="props.item.optionFilter || null"
			:only-last-val="props.item.onlyLastVal !== false"
			:only-last-label="props.item.onlyLastLabel !== false"
			:separator="props.item.separator || '/'"
			:placeholder="props.item.placeholder || t('r.pSelect')"
			:filterable="Boolean(props.item.filterable)"
			:disabled="Boolean(props.item.disabled) || props.disabled"
			@on-label-change="asyncLabelChange($event, props.item)"
		/>
		<!--单选（不可取消选择）-->
		<Radio
			v-else-if="props.item.type === 'radio'"
			v-model="props.valGroup[props.item.key]"
			:disabled="Boolean(props.item.disabled) || props.disabled"
			@on-change="itemChange($event, props.item)"
			>{{ props.item.label }}</Radio
		>
		<!--单选组-->
		<RadioGroup
			:style="itemStyle"
			v-else-if="props.item.type === 'radioGroup'"
			@on-change="reValidateAndChangeHandle($event, props.item)"
			:type="props.item.buttonType ? 'button' : null"
			v-model="tempKeys[props.item.tempKey]"
		>
			<Radio
				v-for="radioItem of props.item.options"
				:key="'radioItem' + radioItem.val"
				:label="radioItem.val"
				:border="Boolean(props.item.itemBorder)"
				:disabled="Boolean(props.item.disabled) || props.disabled || radioItem.disabled"
			>
				<Icon v-if="radioItem.icon && !props.item.buttonType" :type="radioItem.icon" />
				<span>{{ radioItem.label || radioItem.val }}</span>
			</Radio>
		</RadioGroup>
		<!--单选（可取消选择）-->
		<Checkbox
			v-else-if="props.item.type === 'checkbox'"
			v-model="props.valGroup[props.item.key]"
			:disabled="!!props.item.disabled"
			@on-change="itemChange($event, props.item)"
			>{{ props.item.label }}</Checkbox
		>
		<!--多选组-->
		<CheckboxGroup
			:style="itemStyle"
			v-else-if="props.item.type === 'checkboxGroup'"
			v-model="tempKeys[props.item.tempKey]"
			@on-change="reValidateAndChangeHandle($event, props.item)"
		>
			<Checkbox
				v-for="checkItem of props.item.options"
				:key="'checkItem' + checkItem.val"
				:label="checkItem.val"
				:disabled="Boolean(props.item.disabled) || props.disabled || checkItem.disabled"
			>
				<Icon v-if="checkItem.icon" :type="checkItem.icon" />
				<span>{{ checkItem.label || checkItem.val }}</span>
			</Checkbox>
		</CheckboxGroup>
		<!--文本框-->
		<!--suppress HtmlWrongAttributeValue -->
		<Input
			v-else-if="props.item.type === 'textarea'"
			type="textarea"
			v-model="tempKeys[props.item.tempKey]"
			:autosize="props.item.autosize || { minRows: 2 }"
			:style="itemStyle"
			:maxlength="props.item.maxLength || null"
			:show-word-limit="Boolean(props.item.showWordLimit)"
			:placeholder="props.item.placeholder || t('r.pInput')"
			:disabled="Boolean(props.item.disabled) || props.disabled"
			@on-blur="itemChange($event, props.item)"
			:clearable="props.item.clearable !== false"
		/>
		<!--上传组件-->
		<upload-group
			:style="itemStyle"
			class="inlineBlock"
			v-else-if="props.item.type === 'upload'"
			v-model="props.valGroup[props.item.key]"
			:url="props.item.url || uploadUrl"
			:manual-upload="Boolean(props.item.manualUpload)"
			:format="props.item.format || []"
			:data="props.item.data"
			:max-size="props.item.maxSize || 0"
			:show-img="Boolean(props.item.showImg)"
			:length="props.item.length || 0"
			:disabled="Boolean(props.item.disabled) || props.disabled"
			:with-credentials="props.item.withCredentials !== false"
			@on-file-id-change="reValidateAndChangeHandle($event, props.item)"
		/>
		<!--日期选择器-->
		<DatePicker
			:style="itemStyle"
			v-else-if="props.item.type === 'date'"
			v-model="tempKeys[props.item.tempKey]"
			:type="props.item.dateType"
			:disabled="Boolean(props.item.disabled) || props.disabled"
			placement="bottom-end"
			:placeholder="props.item.placeholder || t('r.selectDate')"
			:options="props.item.dateOptions || null"
			:clearable="props.item.clearable !== false"
			:editable="false"
			transfer
			@on-change="itemChange($event, props.item)"
		/>
		<!--时间选择器-->
		<TimePicker
			:style="itemStyle"
			v-else-if="props.item.type === 'time'"
			v-model="tempKeys[props.item.tempKey]"
			:type="props.item.dateType"
			:disabled="Boolean(props.item.disabled) || props.disabled"
			placement="bottom-end"
			:placeholder="props.item.placeholder || t('r.selectTime')"
			:steps="props.item.steps || []"
			:clearable="props.item.clearable !== false"
			:editable="false"
			:format="props.item.format || 'HH:mm:ss'"
			transfer
			@on-change="itemChange($event, props.item)"
		/>
		<!--月份区间选择-->
		<month-range
			:style="itemStyle"
			v-else-if="props.item.type === 'monthRange'"
			v-model="tempKeys[props.item.tempKey]"
			:disabled="Boolean(props.item.disabled) || props.disabled"
			placement="bottom-end"
			:placeholder="props.item.placeholder || t('r.selectDate')"
			:options1="props.item.dateOptions1 || null"
			:options2="props.item.dateOptions2 || null"
			@on-change="itemChange($event, props.item)"
		/>
		<!--富文本编辑器Pro-->
		<editor-pro
			class="inlineBlock"
			:style="itemStyle"
			v-else-if="props.item.type === 'editorPro'"
			v-model="props.valGroup[props.item.key]"
			:placeholder="props.item.placeholder || t('r.pInput')"
			:disabled="Boolean(props.item.disabled) || props.disabled"
			:toolbar-config="props.item.toolbarConfig || {}"
			:editor-config="props.item.editorConfig || {}"
			:mode="props.item.mode || 'simple'"
			:height="props.item.height || 300"
			@input="itemChange($event, props.item)"
		/>
		<input-map
			v-else-if="props.item.type === 'inputMap'"
			v-model="tempKeys[props.item.tempKey]"
			:style="itemStyle"
			:placeholder="props.item.placeholder || t('r.search')"
			:disabled="Boolean(props.item.disabled) || props.disabled"
			:show-map="props.item.showMap !== false"
			:height="props.item.mapHeight || '250px'"
			@on-change="itemChange($event, props.item)"
		/>
		<div v-else-if="props.item.type === 'custom'" class="inlineBlock" :style="itemStyle">
			<slot :name="props.item.slotName" :val-group="props.valGroup" />
		</div>
		<!--表单项提示文字-->
		<div v-if="Boolean(props.item.info)" class="formInfoTxtXN">{{ props.item.info }}</div>
		<!--表单项标题-->
		<div v-if="Boolean(props.item.title)" class="formTitleTxtXN">{{ props.item.title }}</div>
	</FormItem>
</template>
