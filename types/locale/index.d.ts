export declare const t: (this: any, path: string, options?: Record<keyof any, any> | Array<string | number>) => any;
export declare const use: (l: Record<keyof any, any>) => void;
export declare const i18n: (initI18n: Record<keyof any, any>) => void;
declare const _default: {
    use: (l: Record<string | number | symbol, any>) => void;
    t: (this: any, path: string, options?: Record<string | number | symbol, any> | (string | number)[] | undefined) => any;
    i18n: (initI18n: Record<string | number | symbol, any>) => void;
};
export default _default;
