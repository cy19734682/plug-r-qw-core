import type {ComponentCustomProperties, ComponentInternalInstance} from 'vue'
import {getCurrentInstance} from 'vue'

export default function (): ComponentCustomProperties & Record<string, any> {
    const {appContext} = getCurrentInstance() as ComponentInternalInstance
    return appContext.config.globalProperties
}