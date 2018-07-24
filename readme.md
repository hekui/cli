# cli
**命令行工具**，可在项目中执行命令快速生成页面（单页面、多页面）、组件、store模块。  
本工具是基于 `node.js` 开发的命令行工具，生成 `vue` 框架下的各类文件。  

如有需要，可仿照代码实现生成 `React` 相关文件。

# 安装方法
克隆本项目代码至本地后，在项目根目录，全局安装：  
```javascript
$ npm install -g
```
安装后即可在任意项目中使用。

# 使用方法
在安装本工具后，就可在你的任意项目（根目录）中使用命令快速创建页面/组件/模块了。  
输出命令： `cli`。   

命令格式： 

```javascript
$ cli <commmand> [<args>]   // 将在项目的 /src/pages/ 下创建一个 about 的页面
```

输出命令可在项目的 `config.json` 中修改 `bin` 字段下的值，来修改为其他命令。  
```javascript
// config.json
  "bin": {
    "mycli": "./index.js" // 则输出命令:mycli
  },
```

## 命令参数
```javascript
$ cli -h // 查看帮助
$ cli page[ -n] about[ -d src/views][ -m]
// -n 页面名称，可在第一个参数中省略-n指定。必须参数
// -d 页面生成目录，默认值：./src/pages。可选参数
// -m 页面生成多文件，默认为false（单文件）, 若带该命令，则对应页面的js,css会单独生成文件。可选参数

$ cli component 
// -n 组件名称，可在第一个参数中省略-n指定。必须参数
// -d 组件生成目录，默认值：./src/pages。可选参数

$ cli module 
// -n 模块名称，可在第一个参数中省略-n指定。必须参数
// -d 模块生成目录，默认值：./src/pages。可选参数
```

## 示例命令

```javascript
$ cli page about                    // 将在项目根目录的 ./src/pages/ 下创建一个 about 目录，并在目录中生成 index.vue 文件(单文件)
$ cli page about -m                 // 将在项目根目录的 ./src/pages/ 下创建一个 about 目录，并在目录中生成 index.vue、script.js、style.scss 三个文件(多文件方式)
$ cli page -n about -d src/views -m // 将在项目根目录的 ./src/views/ 下创建一个 about 目录，并在目录中生成 index.vue、script.js、style.scss 三个文件(多文件方式)

```