import type { AxiosInstance, AxiosRequestConfig } from 'axios';
import type { Collection } from "../public";
interface ServiceR extends AxiosInstance {
    store?: any;
}
interface RequestConfigR extends AxiosRequestConfig {
    spin?: boolean;
    noEmptyStr?: boolean;
}
/**
 * @description 基于axios封装的请求插件，引入库时使用this.$fetch时直接调用以下方法，例如：this.$fetch.get("/getData",{id:1})，
 * vue3的setup模式使用：proxy调用
 * 单独引入时遵循Es Modules规范即可
 * @class
 */
declare const _default: {
    /**
     * @description 初始化该请求插件，单独引入的话调用一次后，方可实现spin等功能，默认在该库安装时已自动化初始化了该请求插件
     * @function
     * @param {object} store 项目中vuex的store，或pinia的useStore
     */
    init(store: any): void;
    /**
     * post 请求
     * @function
     * @param {string} url 请求地址
     * @param {object} data 请求数据
     * @param {string} msg 错误信息，在控制台输出，方便调试，不用可以不传，例如：
     * @example this.$fetch.post("/getDataB",{name:'ricky'},"获取数据B失败")
     * @param {Array.<string>} rPath 请求结果提取路径，如：[data,list]表示data.list,如不需过滤可不传
     * @param {object} config 请求配置  如请求过程需要遮罩层，设置 spin:true即可
     * @return {Promise<object>}
     * @example this.$fetch.post("/getData",{id:1},null,['result','list'])
     *  .then(r=>{
     *      console.log(r)
     *      r相当于:data.result.list,data是网络请求结果
     *  })
     *
     * 注意：
     *  请求最多支持5个入参，最少一个(url)，依次为：url,data,msg,rPath,config。如果要传靠后的入参，但不想传前面的，应该这样传：
     *  this.$fetch.post("/setData",{},null,[],{
     *     headers: {
     *         'Content-Type': 'multipart/form-data'
     *       },
     *       spin:true
     *   }
     *  )
     */
    post(url: string, data?: Collection, msg?: string, rPath?: string[], config?: RequestConfigR): Promise<unknown>;
    /**
     * put请求
     * @param {string} url 请求地址
     * @param {object} data 请求数据
     * @param {string} msg 错误信息，在控制台输出，方便调试，不用可以不传
     * @param {Array.<string>} rPath 请求结果提取路径
     * @param {object} config 请求配置  如请求过程需要遮罩层，设置 spin:true即可
     * @return {Promise<unknown>}
     */
    put(url: string, data?: Collection, msg?: string, rPath?: string[], config?: RequestConfigR): Promise<unknown>;
    /**
     * get请求
     * @param {string} url 请求地址
     * @param {object} data 请求数据
     * @param {string} msg 错误信息，在控制台输出，方便调试，不用可以不传
     * @param {Array.<string>} rPath 请求结果提取路径
     * @param {object} config 请求配置  如请求过程需要遮罩层，设置 spin:true即可
     * @return {Promise<unknown>}
     * PS: get请求时(delete请求同理)，可以把请求参数写在url里，也可以写在data里，注意写在data里时，data是对象
     * 以请求'/devices',找到id=2,name=meter举例：
     *  只传url时，url = '/devices?id=2&name=meter'
     *  url和data都传时,url = '/devices',data={id:2,name:'meter'}
     */
    get(url: string, data?: Collection, msg?: string, rPath?: string[], config?: RequestConfigR): Promise<unknown>;
    /**
     * delete 请求
     * @param {string} url 请求地址
     * @param {object} data 请求数据
     * @param {string} msg 错误信息，在控制台输出，方便调试，不用可以不传
     * @param {Array.<string>} rPath 请求结果提取路径
     * @param {object} config 请求配置  如请求过程需要遮罩层，设置 spin:true即可
     * @param isUrlData 传参模式 true:params,false:data
     * @return {Promise<unknown>}
     */
    delete(url: string, data?: Collection, msg?: string, rPath?: string[], config?: RequestConfigR, isUrlData?: boolean): Promise<unknown>;
    /**
     * 并发请求   例如：
     * @example this.$fetch.all(
     *  [
     *    this.$fetch.get("/getData"),
     *    this.$fetch.post("/getDataB",{name:'ricky'})
     *  ]
     * )
     */
    all: <T>(values: (T | Promise<T>)[]) => Promise<T[]>;
    /**
     * 并发请求结果分离 例如：
     * @example this.$fetch.all(
     *  [
     *    this.$fetch.get("/getData"),
     *    this.$fetch.post("/getDataB",{name:'ricky'})
     *  ]
     * )
     *  .then(
     *    this.$fetch.spread((result1,result2)=>{
     *        console.log(result1,result2)
     *    })
     *   )
     */
    spread: <T_1, R>(callback: (...args: T_1[]) => R) => (array: T_1[]) => R;
    /**
     * 该请求插件暴露给外界的配置对象，为axios.create创建的实例对象，使用方法见axios官方网站
     */
    config: ServiceR;
};
export default _default;
