//把所有组件通过插件方式进行全局化注册
import ImageView from './ImageView/index.vue'
import XtxSku from './XtxSku/index.vue'

export const compnentsPlugin={
    install(app){
        app.component('ImageView',ImageView)
        app.component('XtxSku',XtxSku)
    }
}