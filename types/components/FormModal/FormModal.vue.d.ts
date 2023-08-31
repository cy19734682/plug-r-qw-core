import type { FormItem } from '../../public';
declare function resetForm(): Promise<unknown>;
declare function refreshFormDom(): Promise<unknown>;
declare function reRenderForm(): Promise<unknown>;
declare function setItemToValGroup(data: Record<string, any>, notClearOthers: boolean): void;
declare function updateValGroup(data: Record<string, any>, notClearOthers: boolean): void;
declare function updateFormDataT(data: Record<string, any> | Record<string, any>[]): void;
declare function validate(): void;
declare function reValidate(prop: any): void;
declare function changeLoading(val: any): void;
declare function getValGroup(): any;
declare function submit(): void;
declare function open(): void;
declare function close(): void;
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    title?: string | undefined;
    formData?: (FormItem | FormItem[])[] | undefined;
    width?: string | number | undefined;
    labelWidth?: number | undefined;
    okBtTxt?: string | undefined;
    cancelBtTxt?: string | undefined;
    hideCancelBt?: boolean | undefined;
    hideFooter?: boolean | undefined;
    btnLoading?: boolean | undefined;
}>, {
    formData: () => never[];
    width: number;
    labelWidth: () => any;
    hideCancelBt: boolean;
    hideFooter: boolean;
    btnLoading: boolean;
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
    open: typeof open;
    close: typeof close;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("on-open" | "on-close")[], "on-open" | "on-close", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    title?: string | undefined;
    formData?: (FormItem | FormItem[])[] | undefined;
    width?: string | number | undefined;
    labelWidth?: number | undefined;
    okBtTxt?: string | undefined;
    cancelBtTxt?: string | undefined;
    hideCancelBt?: boolean | undefined;
    hideFooter?: boolean | undefined;
    btnLoading?: boolean | undefined;
}>, {
    formData: () => never[];
    width: number;
    labelWidth: () => any;
    hideCancelBt: boolean;
    hideFooter: boolean;
    btnLoading: boolean;
}>>> & {
    "onOn-open"?: ((...args: any[]) => any) | undefined;
    "onOn-close"?: ((...args: any[]) => any) | undefined;
}, {
    width: string | number;
    labelWidth: number;
    formData: (FormItem | FormItem[])[];
    btnLoading: boolean;
    hideCancelBt: boolean;
    hideFooter: boolean;
}, {}>, Partial<Record<any, (_: {
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
