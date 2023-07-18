declare function open(): void;
declare function close(getData?: boolean): void;
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    title?: string | undefined;
    headerColor?: string | undefined;
    headerBg?: string | undefined;
    headerFontSize?: string | number | undefined;
    zIndex?: number | undefined;
}>, {
    headerFontSize: number;
    zIndex: number;
}>, {
    open: typeof open;
    close: typeof close;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("on-open" | "on-close")[], "on-open" | "on-close", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    title?: string | undefined;
    headerColor?: string | undefined;
    headerBg?: string | undefined;
    headerFontSize?: string | number | undefined;
    zIndex?: number | undefined;
}>, {
    headerFontSize: number;
    zIndex: number;
}>>> & {
    "onOn-open"?: ((...args: any[]) => any) | undefined;
    "onOn-close"?: ((...args: any[]) => any) | undefined;
}, {
    headerFontSize: string | number;
    zIndex: number;
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
