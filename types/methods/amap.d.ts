type AmapR = {
    securityJsCode: string;
    key: string;
};
export declare function set({ securityJsCode, key }: AmapR): void;
export declare function get(d: 'securityJsCode' | 'key'): string;
export {};
