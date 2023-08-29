/**
 * @description plug-r-qw 源代码入口文件
 * @author Ricky email:zhangqingcq@foxmail.com
 * @created 2023.04.27
 */
import type { App } from 'vue';
import fullScreenImgByDom from './methods/fullScreenImgByDom';
import fullScreenImgPreview from './methods/fullScreenImgPreview';
import messageBox from './methods/messageBox';
import $swal from './methods/swal';
import $swalConfirm from './methods/swalConfirm';
import './methods/wangeditor5init';
export * from './components';
export * from './methods/globalFunc';
export * from './methods/needImportFunc';
export { default as $fetch } from './methods/fetch';
export { default as fullScreenImgByDom } from './methods/fullScreenImgByDom';
export { default as fullScreenImgPreview } from './methods/fullScreenImgPreview';
export { default as messageBox } from './methods/messageBox';
export { default as $swal } from './methods/swal';
export { default as $swalConfirm } from './methods/swalConfirm';
export { setInterval, setTimeout } from './methods/timer';
export interface plugROption {
    notRegistryGlobal?: boolean;
    store?: any;
    useStore?: any;
    router?: Record<keyof any, any>;
    locale?: Record<keyof any, any>;
    i18n?: Record<keyof any, any>;
    amap?: {
        securityJsCode: string;
        key: string;
    };
    [k: keyof any]: any;
}
declare const _default: {
    $fetch: {
        init(store: any, app: any): void;
        post(url: string, data?: import("./public").Collection | undefined, msg?: string | null | undefined, rPath?: string[] | undefined, config?: import("./methods/fetch").RequestConfigR | undefined): Promise<unknown>;
        put(url: string, data?: import("./public").Collection | undefined, msg?: string | null | undefined, rPath?: string[] | undefined, config?: import("./methods/fetch").RequestConfigR | undefined): Promise<unknown>;
        get(url: string, data?: import("./public").Collection | undefined, msg?: string | null | undefined, rPath?: string[] | undefined, config?: import("./methods/fetch").RequestConfigR | undefined): Promise<unknown>;
        delete(url: string, data?: import("./public").Collection | undefined, msg?: string | null | undefined, rPath?: string[] | undefined, config?: import("./methods/fetch").RequestConfigR | undefined, isUrlData?: boolean): Promise<unknown>;
        all: typeof import("axios").all;
        spread: typeof import("axios").spread;
        config: import("./methods/fetch").ServiceR;
    };
    fullScreenImgByDom: typeof fullScreenImgByDom;
    fullScreenImgPreview: typeof fullScreenImgPreview;
    $swal: typeof $swal;
    $swalConfirm: typeof $swalConfirm;
    messageBox: typeof messageBox;
    setInterval: (fn: () => void, time: number) => number;
    setTimeout: (fn: () => void, time: number) => number;
    toHump(name: string): string;
    htmlEncode(text: string): string | HTMLElement;
    htmlDecode(html: string): string | null;
    getFileSrc(file: File): Promise<unknown>;
    getFileTypeByName(name: string): string;
    isImgByFile(type: string): boolean;
    getFileTypeIconByName(name: string): string;
    downloadFileReaderFile(name: string, href: string): void;
    fakeALinkClick(obj: Record<string, any>): void;
    findPath({ group, condition, pathKey, childKey, path }: {
        group: import("./public").Collection;
        condition: (item: any) => boolean;
        pathKey?: any;
        childKey?: any;
        path?: string[] | undefined;
    }): (string | number)[];
    getStringWidth(str: string, fontSize?: number): number;
    emptyInput(val: any): any;
    stopBubbling(e: any): void;
    myTypeof(v: any): string;
    toLine(name: string): string;
    trimObj(obj: import("./public").Collection): import("./public").Collection;
    clearObj(val: import("./public").Collection, ignoreList?: (number | typeof Symbol.iterator | typeof Symbol.unscopables | "length" | "toString" | "toLocaleString" | "pop" | "push" | "concat" | "join" | "reverse" | "shift" | "slice" | "sort" | "splice" | "unshift" | "indexOf" | "lastIndexOf" | "every" | "some" | "forEach" | "map" | "filter" | "reduce" | "reduceRight" | "find" | "findIndex" | "fill" | "copyWithin" | "entries" | "keys" | "values" | "includes" | "flatMap" | "flat")[]): import("./public").Collection;
    toFormData(data: Record<string, any>): FormData;
    findCollection(group: import("./public").Collection, condition: (e: any) => boolean, getPath?: boolean): any;
    oneOf(value: any, validList: any[]): boolean;
    decimalDigitsLimit(val: string | number, num?: number): string | number;
    downloadFileByFormSubmit(url: string, data?: import("./public").PlainObject, method?: string): void;
    fileExport(this: any, url: string, data?: import("./public").PlainObject, method?: string): void;
    getColumnsKeys(sKey: string, columns: any[], returnArray?: boolean): string | string[];
    isValidValue(val: any): boolean;
    isNumberValue(val: any): boolean;
    tooltipManual(contentKey: string | string[] | ((params: any) => string), dash?: boolean, jointMark?: string): (_h: any, params: any) => globalThis.VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>;
    isEmptyValue(data: import("./public").Collection): boolean;
    stringLength(str: string): number;
    setValByOption({ group, condition, key, val, childKey }: {
        group: import("./public").Collection;
        condition: (item: any) => boolean;
        key: string;
        val: any;
        childKey: string;
    }): false | undefined;
    hasPermission(value: string): boolean;
    isNaN(v: any): boolean;
    dataFilterOrToUrl(data: import("./public").PlainObject, toUrl?: boolean, keepEmptyVal?: boolean): string | import("./public").PlainObject;
    removeEmptyValue(data: import("./public").Collection): import("./public").Collection;
    htmlPrint(data: string): void;
    siblingElems(elem: ChildNode): any[];
    formDataHeadConfig: {
        headers: {
            'Content-Type': string;
        };
    };
    locale: (l: Record<string | number | symbol, any>) => void;
    i18n: (initI18n: Record<string | number | symbol, any>) => void;
    install: (app: App<any>, options?: plugROption) => void;
};
export default _default;
