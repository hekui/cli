import {{name}} from './src/{{name}}'

{{name}}.install = function(Vue){
  Vue.component({{name}}.name, {{name}})
}

export default {{name}}