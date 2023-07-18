declare let i18nHandler: (this: any, ...args: any[]) => any;
export declare const t: (this: any, ...args: Parameters<typeof i18nHandler>) => any;
export declare const use: (l: any) => void;
export declare const i18n: (initI18n: any) => void;
declare const _default: {
    use: (l: any) => void;
    t: (this: any, ...args: any[]) => any;
    i18n: (initI18n: any) => void;
};
export default _default;
