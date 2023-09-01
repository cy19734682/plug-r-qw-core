declare const _default: import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    modelValue?: any[] | undefined;
    data?: any[] | undefined;
    expandAll?: boolean | undefined;
    label?: string | undefined;
    collectVal?: string | string[] | undefined;
    leaf?: boolean | undefined;
    inlineLeaf?: boolean | undefined;
    disabled?: boolean | undefined;
}>, {
    modelValue: () => never[];
    data: () => never[];
    expandAll: boolean;
    label: string;
    collectVal: string;
    leaf: boolean;
    inlineLeaf: boolean;
    disabled: boolean;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("on-change" | "update:modelValue")[], "on-change" | "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    modelValue?: any[] | undefined;
    data?: any[] | undefined;
    expandAll?: boolean | undefined;
    label?: string | undefined;
    collectVal?: string | string[] | undefined;
    leaf?: boolean | undefined;
    inlineLeaf?: boolean | undefined;
    disabled?: boolean | undefined;
}>, {
    modelValue: () => never[];
    data: () => never[];
    expandAll: boolean;
    label: string;
    collectVal: string;
    leaf: boolean;
    inlineLeaf: boolean;
    disabled: boolean;
}>>> & {
    "onOn-change"?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {
    disabled: boolean;
    data: any[];
    label: string;
    modelValue: any[];
    expandAll: boolean;
    collectVal: string | string[];
    leaf: boolean;
    inlineLeaf: boolean;
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
