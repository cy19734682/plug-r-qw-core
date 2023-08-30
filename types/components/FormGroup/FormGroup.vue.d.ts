import type { FormItem } from '../../public';
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    formData?: (FormItem | FormItem[])[] | undefined;
    with?: string | undefined;
    labelWidth?: number | undefined;
    contentWidth?: string | undefined;
    itemWidth?: number | undefined;
    showOkBt?: boolean | undefined;
    showCancelBt?: boolean | undefined;
    okBtTxt?: string | undefined;
    cancelBtTxt?: string | undefined;
    btnLoading?: boolean | undefined;
}>, {
    formData: () => never[];
    with: string;
    labelWidth: number;
    contentWidth: string;
    itemWidth: number;
    showOkBt: boolean;
    showCancelBt: boolean;
    btnLoading: boolean;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "on-cancel"[], "on-cancel", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    formData?: (FormItem | FormItem[])[] | undefined;
    with?: string | undefined;
    labelWidth?: number | undefined;
    contentWidth?: string | undefined;
    itemWidth?: number | undefined;
    showOkBt?: boolean | undefined;
    showCancelBt?: boolean | undefined;
    okBtTxt?: string | undefined;
    cancelBtTxt?: string | undefined;
    btnLoading?: boolean | undefined;
}>, {
    formData: () => never[];
    with: string;
    labelWidth: number;
    contentWidth: string;
    itemWidth: number;
    showOkBt: boolean;
    showCancelBt: boolean;
    btnLoading: boolean;
}>>> & {
    "onOn-cancel"?: ((...args: any[]) => any) | undefined;
}, {
    labelWidth: number;
    itemWidth: number;
    formData: (FormItem | FormItem[])[];
    contentWidth: string;
    btnLoading: boolean;
    with: string;
    showOkBt: boolean;
    showCancelBt: boolean;
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
