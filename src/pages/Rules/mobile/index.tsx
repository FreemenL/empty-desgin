import React, { Component } from "react";
import  { EcodeHighlight } from 'emptyd';

class Mobile extends Component<any, any> {
  render() {
    return (
      <>
        <h1 className="e-title"> 移动网页开发 </h1>
        <p className="empty-line-content">
          <code className="empty-code">emptyd-admin-webpack</code> 同样适用于 <code className="empty-code">h5 及 微信公众号</code>开发 
        </p>
        <h1 className="e-title"> 首先 </h1>
        <p className="empty-line-content">
          1、移动端开发不使用<code className="empty-code">antd</code>把相关部分去掉
        </p>
        <p className="empty-line-content">
          2、对于微信公众号 按照官方文档 引入<code className="empty-code">微信jssdk</code>即可
        </p>
        <h1 className="e-title"> 移动端自适应方案 </h1>
        <p className="empty-line-content">
          1、移动端适配采用的是<code className="empty-code">vw vh 方案 </code>具体配置如下 相对rem的好处就是 不同去单独处理iphone4和ipbone5的适配,经过postcss的处理直接写px单位即可
        </p>
        <p className="empty-line-content">
          2、在 <code className="empty-code">postcss.config.js</code>中，用如下 代码框的配置 替换全部，再修改 viewportWidth 和 viewportHeight 对应设计稿的宽度和高度
        </p>
        <EcodeHighlight language='tsx'>{`
          module.exports = (ctx) => ({
            parser: ctx.parser ? 'sugarss' : false,
            map: ctx.env === 'development' ? ctx.map : false,
            plugins: {
              'postcss-import': {}, // 在@import css文件的时候让webpack监听并编译
              'cssnano': {
                preset: "advanced", 
                autoprefixer: false, 
                "postcss-zindex": false
              }, // 包含优化CSS大小的插件，以便在生产中使用。
              'atcss': {},
              "postcss-url": {},
              "postcss-aspect-ratio-mini": {},
              // https://github.com/csstools/postcss-preset-env    css的polyfill
              'postcss-preset-env': { stage: 0, autoprefixer: { grid: true } },
              "postcss-viewport-units":{},
              'postcss-px-to-viewport': {
                // 视窗的宽度，对应的是我们设计稿的宽度，一般是750 
                viewportWidth: 375,
                // 视窗的高度，根据750设备的宽度来指定，一般指定1334，也可以不配置 
                // viewportHeight: 1334,
                // 指定px转换为视窗单位值的小数位数（很多时候无法整除）
                unitPrecision: 3,
                // 指定需要转换成的视窗单位，建议使用vw 
                viewportUnit: 'vw',
                // 指定不转换为视窗单位的类，可以自定义，可以无限添加,建议定义一至两个通用的类名
                selectorBlackList: ['.ignore', '.hairlines'],
                // 小于或等于1px不转换为视窗单位，你也可以设置为你想要的值 
                minPixelValue: 1,
                // 允许在媒体查询中转换px 
                mediaQuery: false
              }
            }
          })
        `}
        </EcodeHighlight>
        <p className="empty-line-content">
          3、安装插件包：
        </p>
        <EcodeHighlight language='bash' showNumber={false}>
          {`
            $ npm install postcss-aspect-ratio-mini postcss-write-svg postcss-preset-env postcss-px-to-viewport cssnano cssnano-preset-advanced --save-dev
          `}
        </EcodeHighlight>
        <p className="empty-line-content">
          4、选择性添加如下meta 标签 ：
        </p>
        <EcodeHighlight language='markup' showNumber={false}>
          {`
            <!-- 视口适配 兼容iphonex -->
            <meta name="viewport" content="width=device-width, viewport-fit=cover, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
            <!-- 用于设定是否将网页内容中的手机号码显示为拨号的超链接，iPhone上默认为yes -->
            <meta content="telephone=no,email=no" name="format-detection">
            <!-- 把一个web app添加到了主屏幕中，那么从主屏幕中打开这个web app则全屏显示 -->
            <meta name="apple-touch-fullscreen" content="yes">
            <!-- 通过删除苹果默认的工具栏和菜单栏，来给用户腾出更多的空间从而让网页得到更好的展现  -->
            <meta name=”apple-mobile-web-app-capable” content=”yes” />
          `}
        </EcodeHighlight>
      </>
    );
  }
}

export default Mobile;


