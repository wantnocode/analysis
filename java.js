const { spawn } = require('child_process');

// 启动 Java 服务
const javaService = spawn('java', ['-jar', '/path/to/your/java/service.jar']);

// 监听 Java 服务的标准输出和错误输出
javaService.stdout.on('data', (data) => {
  console.log(`Java Service stdout: ${data}`);
});

javaService.stderr.on('data', (data) => {
  console.error(`Java Service stderr: ${data}`);
});

javaService.on('close', (code) => {
  console.log(`Java Service exited with code ${code}`);
});






// close
const { app } = require('electron');

// 监听 Electron 应用程序关闭事件
app.on('before-quit', () => {
  // 终止 Java 服务
  javaService.kill();
});