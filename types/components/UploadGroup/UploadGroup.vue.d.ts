declare const _default: import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    modelValue?: string | number | any[] | File | undefined;
    url?: string | undefined;
    data?: Record<string, any> | undefined;
    manualUpload?: boolean | undefined;
    maxSize?: number | undefined;
    length?: number | undefined;
    showUploadList?: boolean | undefined;
    withCredentials?: boolean | undefined;
    multiple?: boolean | undefined;
    format?: string[] | undefined;
    showImg?: boolean | undefined;
    disabled?: boolean | undefined;
}>, {
    modelValue: () => never[];
    url: string;
    data: () => {
        appId: number;
        moduleId: number;
        typeId: number;
    };
    manualUpload: boolean;
    maxSize: number;
    length: number;
    showUploadList: boolean;
    withCredentials: boolean;
    multiple: boolean;
    format: () => never[];
    showImg: boolean;
    disabled: boolean;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("on-change" | "update:modelValue")[], "on-change" | "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    modelValue?: string | number | any[] | File | undefined;
    url?: string | undefined;
    data?: Record<string, any> | undefined;
    manualUpload?: boolean | undefined;
    maxSize?: number | undefined;
    length?: number | undefined;
    showUploadList?: boolean | undefined;
    withCredentials?: boolean | undefined;
    multiple?: boolean | undefined;
    format?: string[] | undefined;
    showImg?: boolean | undefined;
    disabled?: boolean | undefined;
}>, {
    modelValue: () => never[];
    url: string;
    data: () => {
        appId: number;
        moduleId: number;
        typeId: number;
    };
    manualUpload: boolean;
    maxSize: number;
    length: number;
    showUploadList: boolean;
    withCredentials: boolean;
    multiple: boolean;
    format: () => never[];
    showImg: boolean;
    disabled: boolean;
}>>> & {
    "onOn-change"?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {
    length: number;
    disabled: boolean;
    data: Record<string, any>;
    modelValue: string | number | any[] | File;
    url: string;
    withCredentials: boolean;
    format: string[];
    manualUpload: boolean;
    maxSize: number;
    showUploadList: boolean;
    multiple: boolean;
    showImg: boolean;
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
