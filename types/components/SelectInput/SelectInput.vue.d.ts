declare const _default: import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    modelValue?: Record<string, any> | undefined;
    labelWidth?: number | undefined;
    labelTextAlign?: "left" | "right" | "center" | undefined;
    itemWidth?: number | undefined;
    selectOption?: any[] | undefined;
    placeholder?: string | undefined;
    clearable?: boolean | undefined;
    disabled?: boolean | undefined;
}>, {
    modelValue: () => {
        key: null;
        val: null;
    };
    labelWidth: number;
    labelTextAlign: string;
    itemWidth: number;
    selectOption: () => never[];
    clearable: boolean;
    disabled: boolean;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("on-change" | "update:modelValue")[], "on-change" | "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    modelValue?: Record<string, any> | undefined;
    labelWidth?: number | undefined;
    labelTextAlign?: "left" | "right" | "center" | undefined;
    itemWidth?: number | undefined;
    selectOption?: any[] | undefined;
    placeholder?: string | undefined;
    clearable?: boolean | undefined;
    disabled?: boolean | undefined;
}>, {
    modelValue: () => {
        key: null;
        val: null;
    };
    labelWidth: number;
    labelTextAlign: string;
    itemWidth: number;
    selectOption: () => never[];
    clearable: boolean;
    disabled: boolean;
}>>> & {
    "onOn-change"?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {
    disabled: boolean;
    clearable: boolean;
    modelValue: Record<string, any>;
    labelWidth: number;
    labelTextAlign: "left" | "right" | "center";
    itemWidth: number;
    selectOption: any[];
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
