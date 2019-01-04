/**
 * [getIp 获取本机ip]
 */
exports.getIp = function(){
    const os = require('os');
    const interfaces = os.networkInterfaces();
    let IPv4 = '127.0.0.1';
    for (let key in interfaces) {
      let alias = 0;
      interfaces[key].forEach(function(details){
          const { family, internal } = details;
        if (family == 'IPv4' && internal == false  ) {
          IPv4 = details.address;
        }
      });
    }
    return IPv4;
  }
  
  /**
   * @return {[type]} [description]
  */
  exports.createNotifierCallback = () => {
    const notifier = require('node-notifier');
    return (severity, errors) => {
      if (severity !== 'error') return
  
      const error = errors[0]
      const filename = error.file && error.file.split('!').pop()
  
      notifier.notify({
        title: process.env.npm_package_name,
        message: severity + ': ' + error.name,
        subtitle: filename || '',
      })
    }
  }
  
  
  
  
  