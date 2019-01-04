/**
 * [exports description]
 * @Author   freemenL
 * @DateTime 2018-10-18T20:41:01+0800
 * @param    {[type]}                 content [匹配到的文件内容  或者上一个loader 处理完的文件 ]
 * @param    {[type]}                 map     [description]
 * @return   {[type]}                         [description]
 */
var loaderUtils = require("loader-utils");
var Minimize = require('minimize');

module.exports = function(source) {
	/**
	 * 同步
	*/
	// var options = loaderUtils.getOptions(this) || {};
	// minimize = new Minimize(options);
	// return minimize.parse(source);
	/**	
	 * 异步
	*/
	//   this.context; 当前处理文件的所在目录 // E:\web1\web4\template
	//   this.resource;  当前处理文件的完整请求路径 //E:\web1\web4\template\index.html
	//   this.resourcePath; 当前处理文件的路径  //E:\web1\web4\template\index.html
	//   this.target：等于 Webpack 配置中的 Target，详情见 2-7其它配置项-Target
	//
	// this.loadModule：但 Loader 在处理一个文件时，如果依赖其它文件的处理结果才能得出当前文件的结果时，
	// 就可以通过 this.loadModule(request: string, callback: function(err, source, sourceMap, module)) 去获得 request 对应文件的处理结果。
	// this.resolve：像 require 语句一样获得指定文件的完整路径
	
	var callback = this.async();
    if (this.cacheable) {
        this.cacheable();
    }
    var opts = loaderUtils.getOptions(this) || {};
    var minimize = new Minimize(opts);
    minimize.parse(source, callback);
};
