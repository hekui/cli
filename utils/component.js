const CLI = require('./cli')

class PAGE{
  constructor(){
    config: {}
  }
  init(config){
    this.config = config
  }
  begin(dir){
    this.createComponent(dir)
  }
  createComponent(dir){
    CLI.mkdirs(dir, () => {
      CLI.copyTemplate('./component/index.js', `${dir}/index.js`)
      CLI.mkdirs(`${dir}/src`, () => {
        CLI.copyTemplate('./component/src/index.vue', `${dir}/src/${this.config.name}.vue`)
        console.log('[success]created a component at: ', dir)
      })
    })
  }
}

module.exports = new PAGE()