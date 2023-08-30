import type { FormItem } from '../../public';
declare function resetForm(): Promise<unknown>;
declare function reRenderForm(): Promise<unknown>;
declare function refreshFormDom(): Promise<unknown>;
declare function setItemToValGroup(data: Record<string, any>, notClearOthers?: boolean): void;
/**
 * 更新表单项的值（只能更新已有字段，公开）
 * @param data 新数据
 * @param notClearOthers 是否清空其他表单项，默认清空
 */
declare function updateValGroup(data: Record<string, any>, notClearOthers?: boolean): void;
/**
 * 更新表单结构，例如设置或取消禁用,或者给type为txt的表单项（没有key）赋值（公开）；
 * @param {Object|Array} d 为对象（改变单个）或数组（改变多个），支持的属性：index（必填）-需要改变的formData项的索引值、
 * indexB-当表单为`分组表单`时必填（表示表单项的二位数组索引第二位）、需要改变的属性，如要改变第二个表单组件的label和title,
 * 则为:{index:1,label:XXX,title:XXX}
 */
declare function updateFormDataT(d: Record<string, any> | Record<string, any>[]): void;
/**
 * 获取需要提交的数据(私有)
 */
declare function getValGroup(): Record<string, any>;
declare function validate(): void;
/**
 * 手动验证表单项（公开）
 * @param prop 需要校验的表单项(rules中对应的key)
 */
declare function reValidate(prop: any): void;
declare function changeLoading(v: any): void;
declare function submit(): void;
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    formData?: FormItem[] | FormItem[][] | undefined;
    formRules?: Record<string, any> | undefined;
    showMessage: boolean;
    labelWidth: number;
    contentWidth: string;
    itemWidth: number;
    inline: boolean;
    showLongOkBt: boolean;
    longOkBtTxt: string;
    showInlineOkBt: boolean;
    inlineOkBtTxt: string;
    showInlineClearBt: boolean;
    inlineClearBtTxt: string;
    disabled: boolean;
    btnLoading: boolean;
    trim: boolean;
    teamClass: string;
}>, {
    formData: () => never[];
    formRules: () => {};
    showMessage: boolean;
    labelWidth: number;
    contentWidth: string;
    itemWidth: number;
    inline: boolean;
    showLongOkBt: boolean;
    showInlineOkBt: boolean;
    showInlineClearBt: boolean;
    disabled: boolean;
    btnLoading: boolean;
    trim: boolean;
    teamClass: string;
}>, {
    resetForm: typeof resetForm;
    refreshFormDom: typeof refreshFormDom;
    reRenderForm: typeof reRenderForm;
    setItemToValGroup: typeof setItemToValGroup;
    updateValGroup: typeof updateValGroup;
    updateFormDataT: typeof updateFormDataT;
    validate: typeof validate;
    reValidate: typeof reValidate;
    changeLoading: typeof changeLoading;
    getValGroup: typeof getValGroup;
    submit: typeof submit;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("on-item-change" | "on-reset" | "on-re-render" | "on-submit")[], "on-item-change" | "on-reset" | "on-re-render" | "on-submit", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    formData?: FormItem[] | FormItem[][] | undefined;
    formRules?: Record<string, any> | undefined;
    showMessage: boolean;
    labelWidth: number;
    contentWidth: string;
    itemWidth: number;
    inline: boolean;
    showLongOkBt: boolean;
    longOkBtTxt: string;
    showInlineOkBt: boolean;
    inlineOkBtTxt: string;
    showInlineClearBt: boolean;
    inlineClearBtTxt: string;
    disabled: boolean;
    btnLoading: boolean;
    trim: boolean;
    teamClass: string;
}>, {
    formData: () => never[];
    formRules: () => {};
    showMessage: boolean;
    labelWidth: number;
    contentWidth: string;
    itemWidth: number;
    inline: boolean;
    showLongOkBt: boolean;
    showInlineOkBt: boolean;
    showInlineClearBt: boolean;
    disabled: boolean;
    btnLoading: boolean;
    trim: boolean;
    teamClass: string;
}>>> & {
    "onOn-item-change"?: ((...args: any[]) => any) | undefined;
    "onOn-reset"?: ((...args: any[]) => any) | undefined;
    "onOn-re-render"?: ((...args: any[]) => any) | undefined;
    "onOn-submit"?: ((...args: any[]) => any) | undefined;
}, {
    disabled: boolean;
    trim: boolean;
    labelWidth: number;
    itemWidth: number;
    inline: boolean;
    formData: FormItem[] | FormItem[][];
    formRules: Record<string, any>;
    showMessage: boolean;
    contentWidth: string;
    showLongOkBt: boolean;
    showInlineOkBt: boolean;
    showInlineClearBt: boolean;
    btnLoading: boolean;
    teamClass: string;
}, {}>, Partial<Record<any, (_: {
    valGroup: Record<string, any>;
}) => any>> & Partial<Record<any, (_: {
    valGroup: Record<string, any>;
}) => any>>>;
export default _default;
type __VLS_NonUndefinedable<T> = T extends undefined ? never : T;
type __VLS_TypePropsToRuntimeProps<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: import('vue').PropType<__VLS_NonUndefinedable<T[K]>>;
    } : {
        type: import('vue').PropType<T[K]>;
        required: true;
    };
};
type __VLS_WithDefaults<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? __VLS_Prettify<P[K] & {
        default: D[K];
    }> : P[K];
};
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
type __VLS_Prettify<T> = {
    [K in keyof T]: T[K];
} & {};
