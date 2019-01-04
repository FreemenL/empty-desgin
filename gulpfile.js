const gulp = require('gulp');
const GulpSSH = require('gulp-ssh');
const systemConfig = require(path.resolve(process.cwd(), 'config/index'));
// 需要上传到服务器的路径
const config = systemConfig.remoteServer.sshConfig;

let gulpSSH = new GulpSSH({
  ignoreErrors: false,
  sshConfig: config.ssh
})
/**
 *上传前先删除服务器上现有文件...
*/
gulp.task('execSSH', () => {
  console.log('删除服务器上现有文件...')
  return gulpSSH.shell(config.commands, {filePath: 'log/commands.log'})
      .pipe(gulp.dest('logs'))
})
/**
 * 上传文件到服务器
 */
gulp.task('default', ['execSSH'], () => {
  console.log('2s后开始上传文件到服务器...')
  setTimeout(() => {
    return gulp.src([systemConfig.remoteServer.uploadFile])
        .pipe(gulpSSH.dest(config.remotePath))
  }, 2000)
})