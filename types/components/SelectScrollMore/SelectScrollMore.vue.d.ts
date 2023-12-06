declare const _default: import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    modelValue?: string | number | any[] | undefined;
    url: string;
    searchData?: Record<string, any> | undefined;
    getOptions?: boolean | undefined;
    optionFilter?: ((d: any) => any) | undefined;
    optionsLabelKey?: string | string[] | undefined;
    optionsValKey?: string | undefined;
    searchKey?: string | undefined;
    searchWordsRequired?: boolean | undefined;
    collectLabel?: boolean | undefined;
    placeholder?: string | undefined;
    disabled?: boolean | undefined;
}>, {
    searchData: () => {
        size: number;
    };
    getOptions: boolean;
    optionsLabelKey: string;
    optionsValKey: string;
    searchKey: string;
    searchWordsRequired: boolean;
    collectLabel: boolean;
    disabled: boolean;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("on-change" | "update:modelValue" | "update-option-finish")[], "on-change" | "update:modelValue" | "update-option-finish", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    modelValue?: string | number | any[] | undefined;
    url: string;
    searchData?: Record<string, any> | undefined;
    getOptions?: boolean | undefined;
    optionFilter?: ((d: any) => any) | undefined;
    optionsLabelKey?: string | string[] | undefined;
    optionsValKey?: string | undefined;
    searchKey?: string | undefined;
    searchWordsRequired?: boolean | undefined;
    collectLabel?: boolean | undefined;
    placeholder?: string | undefined;
    disabled?: boolean | undefined;
}>, {
    searchData: () => {
        size: number;
    };
    getOptions: boolean;
    optionsLabelKey: string;
    optionsValKey: string;
    searchKey: string;
    searchWordsRequired: boolean;
    collectLabel: boolean;
    disabled: boolean;
}>>> & {
    "onOn-change"?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    "onUpdate-option-finish"?: ((...args: any[]) => any) | undefined;
}, {
    disabled: boolean;
    searchData: Record<string, any>;
    getOptions: boolean;
    optionsLabelKey: string | string[];
    optionsValKey: string;
    searchKey: string;
    searchWordsRequired: boolean;
    collectLabel: boolean;
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
