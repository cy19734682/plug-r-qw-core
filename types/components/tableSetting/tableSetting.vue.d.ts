declare const _default: import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    modelValue?: any[] | undefined;
    sKey: string;
    top?: string | undefined;
    right?: string | undefined;
    width?: string | undefined;
    bg?: string | undefined;
    defaultCheck?: boolean | undefined;
}>, {
    modelValue: () => never[];
    top: string;
    right: string;
    width: string;
    bg: string;
    defaultCheck: boolean;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:modelValue"[], "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    modelValue?: any[] | undefined;
    sKey: string;
    top?: string | undefined;
    right?: string | undefined;
    width?: string | undefined;
    bg?: string | undefined;
    defaultCheck?: boolean | undefined;
}>, {
    modelValue: () => never[];
    top: string;
    right: string;
    width: string;
    bg: string;
    defaultCheck: boolean;
}>>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {
    top: string;
    right: string;
    bg: string;
    modelValue: any[];
    width: string;
    defaultCheck: boolean;
}, {}>;
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
type __VLS_Prettify<T> = {
    [K in keyof T]: T[K];
} & {};
