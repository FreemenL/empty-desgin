//var loaderUtils = require("loader-utils");

/**
 * [ 语法转换 ]
 * @Author   freemenL
 * @DateTime 2018-10-25T09:59:02+0800
 * @param    {[type]}                 source [description]
 * @return   {[type]}                        [description]
*/
function replace(source) {
	let template = "import React,{Component,PureComponent,Fragment} from 'react';";
	let reg = new RegExp(/\/\/@react/,"g");
    return source.replace(reg,template);
}
module.exports = function(source) {
	 return replace(source);
};








