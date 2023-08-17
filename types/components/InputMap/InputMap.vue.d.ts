declare const _default: import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    modelValue?: Record<string, any> | undefined;
    width?: string | number | undefined;
    height?: string | number | undefined;
    placeholder?: string | undefined;
    disabled?: boolean | undefined;
    showMap?: boolean | undefined;
}>, {
    modelValue: () => {};
    width: string;
    disabled: boolean;
    showMap: boolean;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("on-change" | "update:modelValue")[], "on-change" | "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    modelValue?: Record<string, any> | undefined;
    width?: string | number | undefined;
    height?: string | number | undefined;
    placeholder?: string | undefined;
    disabled?: boolean | undefined;
    showMap?: boolean | undefined;
}>, {
    modelValue: () => {};
    width: string;
    disabled: boolean;
    showMap: boolean;
}>>> & {
    "onOn-change"?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {
    disabled: boolean;
    modelValue: Record<string, any>;
    width: string | number;
    showMap: boolean;
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
