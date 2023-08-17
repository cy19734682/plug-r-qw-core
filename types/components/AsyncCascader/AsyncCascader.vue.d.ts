declare const _default: import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    modelValue?: string | number | any[] | undefined;
    url?: string | undefined;
    optionVal?: string | undefined;
    optionLabel?: string | undefined;
    optionFilter?: (<T>(d: T[]) => T[]) | undefined;
    separator?: string | undefined;
    onlyLastVal?: boolean | undefined;
    onlyLastLabel?: boolean | undefined;
    filterable?: boolean | undefined;
    placeholder?: string | undefined;
    disabled?: boolean | undefined;
}>, {
    url: string;
    optionVal: string;
    optionLabel: string;
    separator: string;
    onlyLastVal: boolean;
    onlyLastLabel: boolean;
    filterable: boolean;
    placeholder: string;
    disabled: boolean;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "on-label-change")[], "update:modelValue" | "on-label-change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    modelValue?: string | number | any[] | undefined;
    url?: string | undefined;
    optionVal?: string | undefined;
    optionLabel?: string | undefined;
    optionFilter?: (<T>(d: T[]) => T[]) | undefined;
    separator?: string | undefined;
    onlyLastVal?: boolean | undefined;
    onlyLastLabel?: boolean | undefined;
    filterable?: boolean | undefined;
    placeholder?: string | undefined;
    disabled?: boolean | undefined;
}>, {
    url: string;
    optionVal: string;
    optionLabel: string;
    separator: string;
    onlyLastVal: boolean;
    onlyLastLabel: boolean;
    filterable: boolean;
    placeholder: string;
    disabled: boolean;
}>>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    "onOn-label-change"?: ((...args: any[]) => any) | undefined;
}, {
    disabled: boolean;
    placeholder: string;
    url: string;
    optionVal: string;
    optionLabel: string;
    separator: string;
    onlyLastVal: boolean;
    onlyLastLabel: boolean;
    filterable: boolean;
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
