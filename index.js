#! node

// import CLI from './cli'
const CLI = require('./cli')
const PAGE = require('./page')
const COMPONENT = require('./component')

const actionOptions = ['page', 'component', 'module']
// module：store下面一个模块module
const config = {
  action: '', // 动作：page,component,module
  name: '',
  dirPage: 'src/pages', // 默认路径
  dirComponent: 'src/components',
  dirModule: 'src/store',
  multiFile: false,
}

// console.log('---start---------------------------')
// console.log('process.argv', process.argv)
let argv = process.argv
// console.log('argv', argv)
if(argv[2] === '-h' || argv.length < 3){
  console.log('usage: cli <command> [<args>]\n')
  console.log('command: page/component/module')
  console.log('\tpage\t\tcreate a page(view)')
  console.log('\tcomponent\tcreate a component')
  console.log('\tmodule\t\tcreate a module')
  console.log('args:')
  console.log('\t-n\tname. required.')
  console.log('\t-d\tdirectory. default value:')
  console.log('\t\tpage:\t\t\'./src/pages/\'.')
  console.log('\t\tcomponent:\t\'./src/components/\'.')
  console.log('\t\tmodule:\t\t\'./src/store/\'.')
  console.log('\t-m\tmultiple File. default false. only used in page command.')
  return ;
}

if(actionOptions.includes(argv[2])){
  config.action = argv[2]
}else{
  console.log('cli: \''+ argv[2] +'\' is not a cli command. See \'cli -h\'.\n')
  return 
}

if(argv[3].substr(0, 1) !== '-'){
  config.name = argv[3]
}
// 参数处理
let options = argv.slice(3)
options.forEach((item, index) => {
  switch (item){
    case '-n': //页面名称，必须参数
      config.name = options[index + 1]
      break;
    case '-d': //指定生成的目录
      let dir = options[index + 1] 
      console.log('dir', dir) 
      // dir = dir.substr(0, 1) === '.' ? dir.substring(1) : dir
      // dir = dir.substr(0, 1) === '/' ? dir.substring(1) : dir
      config.dir = dir
      break;
    case '-m': //建立多文件，将JS、CSS单独成文件
      config.multiFile = true
      break;
  }
})
if(config.name === ''){
  console.error('[error]create fail!', 'page name is require!')
}

// console.log(config)
// return ;

CLI.init(config)

let PATH = '.'
let dir

// 开始创建
switch(config.action){
  case 'page':
    dir = `${PATH}/${config.dirPage}/${config.name}`
    // console.log('dir', dir)
    PAGE.init(config)
    PAGE.begin(dir)
    break;
  case 'component':
    dir = `${PATH}/${config.dirComponent}/${config.name}`
    // console.log('dir', dir)
    COMPONENT.init(config)
    COMPONENT.begin(dir)
    break;
  case 'module':
    dir = `${PATH}/${config.dirModule}/`
    CLI.mkdirs(dir, () => {
      CLI.copyTemplate('./module/index.js', `${dir}/${config.name}.js`)
      console.log('[success]created a module at: ', dir)
    })
    break;
}




// console.log('---end---------------------------')