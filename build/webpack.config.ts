/**
 * 开发环境配置
*/
import * as path from 'path';
const webpack =require('webpack');
const paths  =require( "./paths");
const chalk  =require('chalk');
const merge  =require('webpack-merge');
const portfinder = require('portfinder');
const NotifierPlugin = require('friendly-errors-webpack-plugin');
const systemConfig = require(path.resolve(process.cwd(),'config/index'));
const common = require('./webpack.base.ts');
const utils = require('./utils');

const basePort = process.env.PORT || systemConfig.devConfig.localServerPort;

const devconfig = {
  devtool: 'inline-source-map',//只在开发环境下配置
  devServer: {
    contentBase:paths.appBuild,
    compress: true,//一切服务都启用gzip 压缩
    inline: true, // 在打包后文件里注入一个websocket客户端
    port: process.env.PORT || basePort,
    clientLogLevel: 'warning',//清空HMR 信息
    host: "0.0.0.0",
    hot: true,
    open: true,
    quiet: true,
    useLocalIp: true, //This option lets the browser open with your local IP.
    stats: "errors-only",
    historyApiFallback: true,
    overlay: {
      warnings: false,
      errors: true
    },
    proxy:systemConfig.devConfig.proxyTable||{}
  },
  // Some libraries import Node modules but don't use them in the browser.
  // Tell Webpack to provide empty mocks for them so importing them works.
  node: {
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty',
  },
  cache:true,
  plugins:[
    new webpack.NamedModulesPlugin(),
		// new webpack.HotModuleReplacementPlugin(),
		new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: '"development"'//node提供的常量api
        }
    })
  ]
};

if(systemConfig.bundleAnalyzerReport){
  const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
	devconfig.plugins.push(new BundleAnalyzerPlugin({
		analyzerMode: 'server',
		analyzerHost: '127.0.0.1',
		analyzerPort: 8888,
		reportFilename: 'report.html',
		defaultSizes: 'parsed',
		openAnalyzer: true,
		generateStatsFile: false,
		statsFilename: 'stats.json',
		logLevel: 'info'
	}))
}

const devWebpackConfig = merge(common,devconfig);
module.exports = new Promise((resolve, reject) => {
  
  portfinder.basePort = process.env.PORT || basePort;

  portfinder.getPort((err, port) => {
    if (err) {
      reject(err)
    } else {
      // publish the new Port, necessary for e2e tests
      process.env.PORT = port
      // add port to devServer config
      devWebpackConfig.devServer.port = port
      // Add FriendlyErrorsPlugin
      devWebpackConfig.plugins.push(new NotifierPlugin({
        compilationSuccessInfo: {
          messages: [`You application is running here ${chalk.blue("http://"+utils.getIp()+":"+port)}`],
          notes: ['Start moving bricks!']
        },
        onErrors:utils.createNotifierCallback()
      }))
      resolve(devWebpackConfig)
    }
  })
})





















