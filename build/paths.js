const path = require('path');
const fs = require('fs');
const systemConfig = require(path.resolve(process.cwd(),'config/index'));

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

const { systemPath } = systemConfig;
const moduleFileExtensions = [
  'ts',
  'tsx',
  'json',
];

const resolveModule = (resolveFn, filePath) => {
  const extension = moduleFileExtensions.find(extension =>
    fs.existsSync(resolveFn(`${filePath}.${extension}`))
  );

  if (extension) {
    return resolveFn(`${filePath}.${extension}`);
  }

  return resolveFn(`${filePath}.js`);
};

module.exports = {
	appNodeModules:resolveApp(systemPath.appNodeModules),
	appSrc:resolveApp(systemPath.appSrc),
	appBuild: resolveApp(systemPath.appBuild),
	appTsConfig:resolveApp(systemPath.appTsConfig),
	appIndex: resolveModule(resolveApp,systemPath.appIndex),
}