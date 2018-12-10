const paths = require("./paths");
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports={
	entry:{
		app:['babel-polyfill',paths.appIndex]
	},
	output:{
		filename: 'static/js/[name].[hash].js',
    	path:paths.appBuild,
    	publicPath: '/',
	},
	resolve: {
		extensions: [ '.ts','.tsx', '.js' , '.json']
	},
	module: {
   	rules: [{
      test: /\.(le|c)ss$/,
      use:[
        "style-loader",
         {
            loader:'css-loader',
            options: {
              importLoaders: 1,
            }
          },{
            loader: "less-loader",
            options: {
              sourceMap:true,
              javascriptEnabled: true
            }
          }
      ]
    },{
	    enforce: 'pre',
	    test: /\.(ts|tsx)$/,
	    use: [{
	            loader: 'awesome-typescript-loader',
	            options: {
	              useBabel: true,
	              transpileOnly: true,
	              useTranspileModule: false,
	              sourceMap: false,//devMode,
	            },
	        },
	        "source-map-loader"
	      ],
	      include:[paths.appSrc], // 精确指定要处理的目录
	    }]
	},
	plugins:[
		new webpack.HotModuleReplacementPlugin(),
		new ForkTsCheckerWebpackPlugin({
		    ignoreLints: [
	         'no-console',
	         'object-literal-sort-keys',
	         'quotemark',
	        ],
	        async: false,
	        checkSyntacticErrors: true,
	        tsconfig: paths.appTsConfig,
	        compilerOptions: {
	          module: 'esnext',
	          moduleResolution: 'node',
	          resolveJsonModule: true,
	          isolatedModules: true,
	          noEmit: true,
	          jsx: 'preserve',
	        },
	        reportFiles: [
	          '**',
	          '!**/*.json',
	          '!**/__tests__/**',
	          '!**/?(*.)(spec|test).*'
	        ],
	        watch: paths.appSrc,
	        silent: true,
	    }),
		new HtmlWebpackPlugin({
	      title: '深圳市城市管理智慧执法平台',
	      template:'./template/index.html',
	      // favicon:utils.resolvePath('src/public/favicon.png'),
	      hash:true
	    }),
	]
}
