const fs = require("fs");
const { SyncHook } = require("tapable");
const recursive = require('recursive-readdir');
const gzipSize = require('gzip-size').sync;

const pluginName = 'printFileSizesAfterBuildPlugin';

class printFileSizesAfterBuildPlugin {
    // 传入webpack config中的plugin配置参数
    constructor(options) {
        // this.options = options;
    }

    apply(compiler) {
        
        // 实例化自定义hook
        compiler.hooks.printFileSizesAfterBuildHook = new SyncHook(['data']);
        compiler.hooks.environment.tap(pluginName, (compilation) => {
            const appBuild  = compiler.options.output.path;
            //广播自定义hook
            compiler.hooks.printFileSizesAfterBuildHook.call(this.measureFileSizesBeforeBuild(appBuild));
        });
    }

    removeFileNameHash(buildFolder, fileName) {
        return fileName
            .replace(buildFolder, '')
            .replace(/\\/g, '/')
            .replace(
            /\/?(.*)(\.[0-9a-f]+)(\.chunk)?(\.js|\.css)/,
            (match, p1, p2, p3, p4) => p1 + p4
            );
    }

    canReadAsset(asset) {
        return (
            /\.(js|css)$/.test(asset) &&
            !/service-worker\.js/.test(asset) &&
            !/precache-manifest\.[0-9a-f]+\.js/.test(asset)
        );
    }
    
    measureFileSizesBeforeBuild(buildFolder) {
        return new Promise(resolve => {
            recursive(buildFolder, (err, fileNames) => {
                var sizes;
                if (!err && fileNames) {
                    sizes = fileNames.filter(this.canReadAsset).reduce((memo, fileName) => {
                    var contents = fs.readFileSync(fileName);
                    var key = this.removeFileNameHash(buildFolder, fileName);
                    memo[key] = gzipSize(contents);
                    return memo;
                    }, {});
                }
                resolve({
                    root: buildFolder,
                    sizes: sizes || {},
                });
            });
        });
    }
}
module.exports = printFileSizesAfterBuildPlugin