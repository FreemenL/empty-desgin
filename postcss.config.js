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
      // 指定`px`转换为视窗单位值的小数位数（很多时候无法整除）
      unitPrecision: 3,
      // 指定需要转换成的视窗单位，建议使用vw 
      viewportUnit: 'vw',
      // 指定不转换为视窗单位的类，可以自定义，可以无限添加,建议定义一至两个通用的类名
      selectorBlackList: ['.ignore', '.hairlines'],
      // 小于或等于`1px`不转换为视窗单位，你也可以设置为你想要的值 
      minPixelValue: 1,
      // 允许在媒体查询中转换`px` 
      mediaQuery: false
    }
  }
})
