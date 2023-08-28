declare const _default: import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    modelValue?: string | number | any[] | undefined;
    level?: 0 | 1 | 2 | "0" | "1" | "2" | undefined;
    disabled?: boolean | undefined;
    transfer?: boolean | undefined;
    filterable?: boolean | undefined;
    separator?: string | undefined;
    placeholder?: string | undefined;
}>, {
    level: number;
    disabled: boolean;
    transfer: boolean;
    filterable: boolean;
    separator: string;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "on-name-change")[], "update:modelValue" | "on-name-change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    modelValue?: string | number | any[] | undefined;
    level?: 0 | 1 | 2 | "0" | "1" | "2" | undefined;
    disabled?: boolean | undefined;
    transfer?: boolean | undefined;
    filterable?: boolean | undefined;
    separator?: string | undefined;
    placeholder?: string | undefined;
}>, {
    level: number;
    disabled: boolean;
    transfer: boolean;
    filterable: boolean;
    separator: string;
}>>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    "onOn-name-change"?: ((...args: any[]) => any) | undefined;
}, {
    disabled: boolean;
    transfer: boolean;
    separator: string;
    filterable: boolean;
    level: 0 | 1 | 2 | "0" | "1" | "2";
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
