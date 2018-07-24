const CLI = require('./cli')

class PAGE{
  constructor(){
    config: {}
  }
  init(config){
    this.config = config
  }
  begin(dir){
    if(this.config.multiFile){
      this.createMultiplePage(dir)
    }else{
      this.createSinglePage(dir)
    }
  }
  createMultiplePage(dir){
    CLI.mkdirs(dir, () => { //多文件
      CLI.copyTemplate('./page/multipleFile/index.vue', `${dir}/index.vue`)
      CLI.copyTemplate('./page/multipleFile/script.js', `${dir}/script.js`)
      CLI.copyTemplate('./page/multipleFile/style.scss', `${dir}/style.scss`)
      console.log('[success]created a page at: ', dir)
    })
  }
  createSinglePage(dir){
    // CLI.mkdirs('./src/pages/about', () => {
    //   console.log('done')
    //   CLI.copyTemplate('./page/singleFile/index.vue', `${dir}/index.vue`)
    // })
    CLI.mkdirs(dir, () => {
      CLI.copyTemplate('./page/singleFile/index.vue', `${dir}/index.vue`)
      console.log('[success]created a page at: ', dir)
    })
  }
}

module.exports = new PAGE()