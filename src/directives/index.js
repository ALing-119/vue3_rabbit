//定义懒加载插件
import { useIntersectionObserver } from '@vueuse/core'

export const lazyLoad = {
    install(app) {
        app.directive('img-lazy', {
            mounted(el, binding) {
                const { stop } = useIntersectionObserver(
                    el,
                    ([{ isIntersecting }]) => {
                      if (isIntersecting) {
                        el.src = binding.value
                        // console.log('图片加载完成',isIntersecting)
                        stop()
                      }
                    }
                )
            }
        })
    }
}