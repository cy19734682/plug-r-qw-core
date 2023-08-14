declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    modelValue: string;
    open: boolean;
    placeholder?: string | undefined;
    showBtn?: boolean | undefined;
    fixed?: boolean | undefined;
    width?: string | number | undefined;
    right?: string | number | undefined;
    top?: string | number | undefined;
    btnColor?: string | undefined;
}>, {
    open: boolean;
    showBtn: boolean;
    fixed: boolean;
    width: string;
    right: string;
    top: string;
    btnColor: string;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "on-toggle" | "on-search")[], "update:modelValue" | "on-toggle" | "on-search", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    modelValue: string;
    open: boolean;
    placeholder?: string | undefined;
    showBtn?: boolean | undefined;
    fixed?: boolean | undefined;
    width?: string | number | undefined;
    right?: string | number | undefined;
    top?: string | number | undefined;
    btnColor?: string | undefined;
}>, {
    open: boolean;
    showBtn: boolean;
    fixed: boolean;
    width: string;
    right: string;
    top: string;
    btnColor: string;
}>>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    "onOn-toggle"?: ((...args: any[]) => any) | undefined;
    "onOn-search"?: ((...args: any[]) => any) | undefined;
}, {
    fixed: boolean;
    open: boolean;
    top: string | number;
    showBtn: boolean;
    width: string | number;
    right: string | number;
    btnColor: string;
}, {}>, {
    default?(_: {}): any;
}>;
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
