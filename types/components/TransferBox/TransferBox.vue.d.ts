declare function reset(): void;
declare function search(): void;
declare const _default: import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    titleLeft?: string | undefined;
    titleRight?: string | undefined;
    formDataLeft?: any[] | undefined;
    formDataRight?: any[] | undefined;
    formRulesLeft?: Record<string, any> | undefined;
    formRulesRight?: Record<string, any> | undefined;
    constSearchDataLeft?: Record<string, any> | undefined;
    constSearchDataRight?: Record<string, any> | undefined;
    leftTableColumns?: any[] | undefined;
    rightTableColumns?: any[] | undefined;
    leftTableUrl?: string | undefined;
    rightTableUrl?: string | undefined;
    addUrl?: string | undefined;
    deleteUrl?: string | undefined;
    addAllUrl?: string | undefined;
    deleteAllUrl?: string | undefined;
    addParamsHandle?: ((d: any) => any) | undefined;
    deleteParamsHandle?: ((d: any) => any) | undefined;
    addAllParamsHandle?: ((d: any) => any) | undefined;
    deleteAllParamsHandle?: ((d: any) => any) | undefined;
    addMethod?: "get" | "post" | "put" | undefined;
    addAllMethod?: "get" | "post" | "put" | undefined;
    deleteMethod?: "get" | "delete" | "post" | "put" | undefined;
    deleteAllMethod?: "get" | "delete" | "post" | "put" | undefined;
    searchFormLabelWith?: number | undefined;
}>, {
    formDataLeft: () => never[];
    formDataRight: () => never[];
    formRulesLeft: () => {};
    formRulesRight: () => {};
    constSearchDataLeft: () => {};
    constSearchDataRight: () => {};
    leftTableColumns: () => never[];
    rightTableColumns: () => never[];
    addParamsHandle: (selection: any[]) => any[];
    deleteParamsHandle: (selection: any[]) => any[];
    addAllParamsHandle: (searchData: Record<string, any>) => Record<string, any>;
    deleteAllParamsHandle: (searchData: Record<string, any>) => Record<string, any>;
    addMethod: string;
    addAllMethod: string;
    deleteMethod: string;
    deleteAllMethod: string;
}>, {
    reset: typeof reset;
    search: typeof search;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("transferred" | "on-data-change-l" | "on-data-change-r")[], "transferred" | "on-data-change-l" | "on-data-change-r", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    titleLeft?: string | undefined;
    titleRight?: string | undefined;
    formDataLeft?: any[] | undefined;
    formDataRight?: any[] | undefined;
    formRulesLeft?: Record<string, any> | undefined;
    formRulesRight?: Record<string, any> | undefined;
    constSearchDataLeft?: Record<string, any> | undefined;
    constSearchDataRight?: Record<string, any> | undefined;
    leftTableColumns?: any[] | undefined;
    rightTableColumns?: any[] | undefined;
    leftTableUrl?: string | undefined;
    rightTableUrl?: string | undefined;
    addUrl?: string | undefined;
    deleteUrl?: string | undefined;
    addAllUrl?: string | undefined;
    deleteAllUrl?: string | undefined;
    addParamsHandle?: ((d: any) => any) | undefined;
    deleteParamsHandle?: ((d: any) => any) | undefined;
    addAllParamsHandle?: ((d: any) => any) | undefined;
    deleteAllParamsHandle?: ((d: any) => any) | undefined;
    addMethod?: "get" | "post" | "put" | undefined;
    addAllMethod?: "get" | "post" | "put" | undefined;
    deleteMethod?: "get" | "delete" | "post" | "put" | undefined;
    deleteAllMethod?: "get" | "delete" | "post" | "put" | undefined;
    searchFormLabelWith?: number | undefined;
}>, {
    formDataLeft: () => never[];
    formDataRight: () => never[];
    formRulesLeft: () => {};
    formRulesRight: () => {};
    constSearchDataLeft: () => {};
    constSearchDataRight: () => {};
    leftTableColumns: () => never[];
    rightTableColumns: () => never[];
    addParamsHandle: (selection: any[]) => any[];
    deleteParamsHandle: (selection: any[]) => any[];
    addAllParamsHandle: (searchData: Record<string, any>) => Record<string, any>;
    deleteAllParamsHandle: (searchData: Record<string, any>) => Record<string, any>;
    addMethod: string;
    addAllMethod: string;
    deleteMethod: string;
    deleteAllMethod: string;
}>>> & {
    onTransferred?: ((...args: any[]) => any) | undefined;
    "onOn-data-change-l"?: ((...args: any[]) => any) | undefined;
    "onOn-data-change-r"?: ((...args: any[]) => any) | undefined;
}, {
    formDataLeft: any[];
    formDataRight: any[];
    formRulesLeft: Record<string, any>;
    formRulesRight: Record<string, any>;
    constSearchDataLeft: Record<string, any>;
    constSearchDataRight: Record<string, any>;
    leftTableColumns: any[];
    rightTableColumns: any[];
    addParamsHandle: (d: any) => any;
    deleteParamsHandle: (d: any) => any;
    addAllParamsHandle: (d: any) => any;
    deleteAllParamsHandle: (d: any) => any;
    addMethod: "get" | "post" | "put";
    addAllMethod: "get" | "post" | "put";
    deleteMethod: "get" | "delete" | "post" | "put";
    deleteAllMethod: "get" | "delete" | "post" | "put";
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
