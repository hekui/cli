import toast from './src/toast'

toast.install = function(Vue){
  Vue.component(toast.name, toast)
}

export default toast