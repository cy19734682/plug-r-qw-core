import type { TreeNode } from '../../public';
declare const _default: import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    modelValue?: any[] | undefined;
    data?: TreeNode[] | undefined;
    firstTitle?: string | undefined;
    secondTitle?: string | undefined;
    label?: string | undefined;
    collectVal?: string | string[] | undefined;
    leaf?: boolean | undefined;
    disabled?: boolean | undefined;
}>, {
    modelValue: () => never[];
    data: () => never[];
    label: string;
    collectVal: string;
    leaf: boolean;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("on-change" | "update:modelValue")[], "on-change" | "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    modelValue?: any[] | undefined;
    data?: TreeNode[] | undefined;
    firstTitle?: string | undefined;
    secondTitle?: string | undefined;
    label?: string | undefined;
    collectVal?: string | string[] | undefined;
    leaf?: boolean | undefined;
    disabled?: boolean | undefined;
}>, {
    modelValue: () => never[];
    data: () => never[];
    label: string;
    collectVal: string;
    leaf: boolean;
}>>> & {
    "onOn-change"?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {
    data: TreeNode[];
    label: string;
    modelValue: any[];
    collectVal: string | string[];
    leaf: boolean;
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
