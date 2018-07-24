const fs = require('fs')
const path = require('path')

class CLI{
  constructor(){
    config: {}
  }
  init(config){
    this.config = config
  }
  mkdirsSync(dir) {
    if (fs.existsSync(dir)) {
      return true;
    } else {
      if (this.mkdirsSync(path.dirname(dir))) {
        fs.mkdirSync(dir);
        return true;
      }
    }
  }
  mkdirs(dir, cb) {  
    fs.exists(dir, function (exists) {  
      if (exists) {  
        cb();  
      } else {  
        // console.log(path.dirname(dirname)); 
        this.mkdirs(path.dirname(dir), function () {  
          fs.mkdir(dir, cb);  
          // console.log('在' + path.dirname(dir) + '目录创建好' + dir  +'目录');
        });  
      }
    }.bind(this));  
  }
  mkdir(dir){
    fs.mkdirSync(dir, function(err){
      if(err){
        console.log('mkdir error:', err)
      }
    })
  }
  write(path, str){
    fs.writeFileSync(path, str)
  }
  format(file, data){
    let str = file
    for(let key in data){
      // console.log(key, data[key])
      str = str.replace(new RegExp(`{{${key}}}`, 'ig'), data[key]);
    }
    return str
  }
  copyTemplate(from, to){
    // console.log('in copyTemplate')
    from = path.join(__dirname, 'templates', from);
    let file = this.format(fs.readFileSync(from, 'utf-8'), {
      name: this.config.name
    })
    // console.log('file', file)
    this.write(to, file)
  }
}

module.exports = new CLI()