/**
 * 文件形式输出编译内容
*/
const fs = require("fs");
var path = require('path');
const fse = require('fs-extra');
const chalk = require("chalk");
var filesize = require('filesize');
var stripAnsi = require('strip-ansi');
const gzipSize = require('gzip-size').sync;
// These sizes are pretty large. We'll warn for bundles exceeding them.
const WARN_AFTER_BUNDLE_GZIP_SIZE = 512 * 1024;
const WARN_AFTER_CHUNK_GZIP_SIZE = 1024 * 1024;

class FilePlugin{
	options
	constructor(options){
		this.options = options;
	}
	apply(compiler){
		compiler.hooks.printFileSizesAfterBuildHook.tap('Listen4Myplugin', (FileSizesAfterBuild) => {
			const appBuild  = compiler.options.output.path;
            FileSizesAfterBuild.then((previousFileSizes)=>{
                fse.emptyDirSync(appBuild);
				console.log(chalk.blue("Production environment directory has been deleted !"));
				compiler.hooks.done.tapAsync("getStats",(stats)=>{
				  this.printFileSizesAfterBuild(
					stats,
					previousFileSizes,
					appBuild,
					WARN_AFTER_BUNDLE_GZIP_SIZE,
					WARN_AFTER_CHUNK_GZIP_SIZE
		    	  );
				})
				compiler.hooks.emit.tapAsync("outputFile",(compilation,cb)=>{
					let content = `##编译输出内容：\n\n`;
					// for(let attr in compilation.assets) {
					// 	content+=`#--->  [{ file  :  ${attr}  }-----{ size  :  ${(Buffer.byteLength(compilation["assets"][attr]["source"](), 'utf8')/1024)}kb }]\n\n`
					// }
					content+=JSON.stringify(compilation.assets);
					var buffer = new Buffer(content);
					let ws = fs.createWriteStream(`${this.options.path||compilation.options.context}/${this.options.filename||"file-list.md"}`, {start: 0});
					ws.write(buffer, 'utf8',(err, buffer)=>{
					  console.log(chalk.bgCyan(`Packing logs in this -> ${this.options.path||compilation.options.context}/${this.options.filename||"file-list.md"}`));
					  cb()
					});
				})
			})
        });
	}

	canReadAsset(asset) {
		return (
			/\.(js|css)$/.test(asset) &&
			!/service-worker\.js/.test(asset) &&
			!/precache-manifest\.[0-9a-f]+\.js/.test(asset)
		);
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
    
	getDifferenceLabel(currentSize, previousSize) {
		var FIFTY_KILOBYTES = 1024 * 50;
		var difference = currentSize - previousSize;
		var fileSize = !Number.isNaN(difference) ? filesize(difference) : 0;
		if (difference >= FIFTY_KILOBYTES) {
			return chalk.red('+' + fileSize);
		} else if (difference < FIFTY_KILOBYTES && difference > 0) {
			return chalk.yellow('+' + fileSize);
		} else if (difference < 0) {
			return chalk.green(fileSize);
		} else {
			return '';
		}
	}

	printFileSizesAfterBuild(
		webpackStats,
		previousSizeMap,
		buildFolder,
		maxBundleGzipSize,
		maxChunkGzipSize
    ) {
		var root = previousSizeMap.root;
		var sizes = previousSizeMap.sizes;
		var assets = (webpackStats.stats || [webpackStats])
			.map(stats =>
			stats
				.toJson({ all: false, assets: true })
				.assets.filter(asset => this.canReadAsset(asset.name))
				.map(asset => {
				var fileContents = fs.readFileSync(path.join(root, asset.name));
				var size = gzipSize(fileContents);
				var previousSize = sizes[this.removeFileNameHash(root, asset.name)];
				var difference = this.getDifferenceLabel(size, previousSize);
				return {
					folder: path.join(
					   path.basename(buildFolder),
					   path.dirname(asset.name)
					),
					name: path.basename(asset.name),
					size: size,
					sizeLabel:
					filesize(size) + (difference ? ' (' + difference + ')' : ''),
				};
				})
			)
			.reduce((single, all) => all.concat(single), []);
			assets.sort((a, b) => b.size - a.size);
			var longestSizeLabelLength = Math.max.apply(
				null,
				assets.map(a => stripAnsi(a.sizeLabel).length)
			);
			var suggestBundleSplitting = false;
			assets.forEach(asset => {
				var sizeLabel = asset.sizeLabel;
				var sizeLength = stripAnsi(sizeLabel).length;
				if (sizeLength < longestSizeLabelLength) {
				var rightPadding = ' '.repeat(longestSizeLabelLength - sizeLength);
				sizeLabel += rightPadding;
				}
				var isMainBundle = asset.name.indexOf('main.') === 0;
				var maxRecommendedSize = isMainBundle
				? maxBundleGzipSize
				: maxChunkGzipSize;
				var isLarge = maxRecommendedSize && asset.size > maxRecommendedSize;
				if (isLarge && path.extname(asset.name) === '.js') {
				suggestBundleSplitting = true;
				}
				console.log(
				'  ' +
					(isLarge ? chalk.yellow(sizeLabel) : sizeLabel) +
					'  ' +
					chalk.dim(asset.folder + path.sep) +
					chalk.cyan(asset.name)
				);
			});
			if (suggestBundleSplitting) {
				console.log();
				console.log(
				   chalk.yellow('The bundle size is significantly larger than recommended.')
				);
				console.log(
					chalk.yellow(
						'Consider reducing it with code splitting: https://goo.gl/9VhYWB'
					)
				);
				console.log(
				     chalk.yellow('You can also analyze the project dependencies: https://goo.gl/LeUzfb')
				);
			}
		}
}

module.exports = FilePlugin;
