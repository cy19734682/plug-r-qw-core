declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<__VLS_TypePropsToRuntimeProps<{
    item: any;
    itemStyle: Record<string, any>;
    valGroup: Record<string, any>;
    tempKeys: Record<string, any>;
    inline: boolean;
    disabled: boolean;
    labelWidth: number;
    itemWidth: number;
    mgrUrl: string;
    uploadUrl: string;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("item-change" | "re-validate" | "select-input-change" | "al-name-change" | "async-label-change")[], "item-change" | "re-validate" | "select-input-change" | "al-name-change" | "async-label-change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<__VLS_TypePropsToRuntimeProps<{
    item: any;
    itemStyle: Record<string, any>;
    valGroup: Record<string, any>;
    tempKeys: Record<string, any>;
    inline: boolean;
    disabled: boolean;
    labelWidth: number;
    itemWidth: number;
    mgrUrl: string;
    uploadUrl: string;
}>>> & {
    "onItem-change"?: ((...args: any[]) => any) | undefined;
    "onRe-validate"?: ((...args: any[]) => any) | undefined;
    "onSelect-input-change"?: ((...args: any[]) => any) | undefined;
    "onAl-name-change"?: ((...args: any[]) => any) | undefined;
    "onAsync-label-change"?: ((...args: any[]) => any) | undefined;
}, {}, {}>, Partial<Record<any, (_: {
    valGroup: Record<string, any>;
}) => any>> & Partial<Record<any, (_: {
    valGroup: Record<string, any>;
}) => any>>>;
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
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
