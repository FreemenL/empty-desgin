const path = require("path");
const fs = require("fs");
const systemConfig = require(path.resolve(process.cwd(),'config/index'));

const appDirectory = fs.realpathSync(process.cwd());

const resolveApp = relativePath => path.resolve(appDirectory, relativePath);
const { systemPath } = systemConfig;
const appSrc = resolveApp(systemPath.appSrc);
const moduleFileExtensions = [
  "ts",
  "tsx",
  "json",
  "js",
  "png"
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

const transformAppPathAlias = (appPathAlias) => {Object.entries(appPathAlias).forEach((path,index)=>{path[1]=`${appSrc}/${path[1]}`;appPathAlias[path[0]]=path[1]}); return appPathAlias};

module.exports = {
  appSrc,	
  appTsConfig:resolveModule(resolveApp,systemPath.appTsConfig),
  appIndex: resolveModule(resolveApp,systemPath.appIndex),
  appFavicon:resolveModule(resolveApp,systemPath.appFavicon),
  appNodeModules:resolveApp(systemPath.appNodeModules),
  appStatic:resolveApp(systemPath.appStatic),
  appLog:resolveApp(systemPath.appLog),
  appBuild: resolveApp(systemPath.appBuild),
  appLoader:resolveApp(systemPath.appLoader),
  appPathAlias:transformAppPathAlias(systemPath.appPathAlias),                 
  appExcludeCssModule:systemPath.appExcludeCssModule&&systemPath.appExcludeCssModule.map((path,index)=>new RegExp(`[\\\\/]node_modules[\\\\/].*${path}`)),
  appConfig:systemPath.appConfig&&systemPath.appConfig.map((path,index)=>resolveApp(path)),
  appTsLoader:systemPath.appTsLoader&&systemPath.appTsLoader.map((path,index)=>resolveApp(path))
}