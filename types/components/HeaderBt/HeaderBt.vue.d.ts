declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    icon?: string | undefined;
    withIcon?: boolean | undefined;
    iconSize?: string | number | undefined;
    color?: string | undefined;
    borderColor?: string | undefined;
    disabled?: boolean | undefined;
}>, {
    withIcon: boolean;
    iconSize: number;
    color: string;
    borderColor: string;
    disabled: boolean;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "click"[], "click", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    icon?: string | undefined;
    withIcon?: boolean | undefined;
    iconSize?: string | number | undefined;
    color?: string | undefined;
    borderColor?: string | undefined;
    disabled?: boolean | undefined;
}>, {
    withIcon: boolean;
    iconSize: number;
    color: string;
    borderColor: string;
    disabled: boolean;
}>>> & {
    onClick?: ((...args: any[]) => any) | undefined;
}, {
    color: string;
    withIcon: boolean;
    iconSize: string | number;
    borderColor: string;
    disabled: boolean;
}>, {
    default?(_: {}): any;
}>;
export default _default;
declare type __VLS_NonUndefinedable<T> = T extends undefined ? never : T;
declare type __VLS_TypePropsToRuntimeProps<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: import('vue').PropType<__VLS_NonUndefinedable<T[K]>>;
    } : {
        type: import('vue').PropType<T[K]>;
        required: true;
    };
};
declare type __VLS_WithDefaults<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? __VLS_Prettify<P[K] & {
        default: D[K];
    }> : P[K];
};
declare type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
declare type __VLS_Prettify<T> = {
    [K in keyof T]: T[K];
} & {};
