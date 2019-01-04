const { run } = require('runjs');
const utils = require('./utils');
let matchPatterns = false;

// 判断是否存在dev模式的dll 动态链接库 没有就生成
if (!utils.existsDllLibrary("dev")) {
    utils.hint('building dllLibrary...');
    run("cross-env NODE_ENV=development TS_NODE_PROJECT=\"config/tsconfig-for-webpack-config.json\" webpack --config ./build/webpack.dll.ts");
}

// 运行模式
const patterns = [{
    name: "dev",
    run: () => run("cross-env NODE_ENV=development TS_NODE_PROJECT=\"config/tsconfig-for-webpack-config.json\" nodemon -e js,ts --watch ./build/* --watch ./package.json --exec \"webpack-dev-server  --hot --inline --display-error-details --mode development --config ./build/webpack.config.ts\""),
}, {
    name: "run",
    run: () => run("cross-env NODE_ENV=development TS_NODE_PROJECT=\"config/tsconfig-for-webpack-config.json\" webpack-dev-server  --hot --inline --display-error-details --mode development --config ./build/webpack.config.ts")
}
];

// 根据配置的开发模式 运行相应的命令
patterns.forEach((pattern, index) => {
    if (pattern.name === utils.systemConfig.pattern.trim()) {
        matchPatterns = true;
        pattern.run();
        return;
    }
})

//错误捕获 
if (!matchPatterns) {
    throw new ReferenceError("无效的pattern定义！");
}


