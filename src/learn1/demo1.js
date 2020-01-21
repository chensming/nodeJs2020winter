//读取代码cpu信息
const os = require('os');

//获取当前系统的cpu数量
const cpus = os.cpus();
console.log(cpus.length);

//返回系统总内存
//bytes
const totalmemery = os.totalmem();
//GB
console.log(totalmemery/1024/1024/1024);

//返回系统剩余内存
const free = os.freemem();
console.log(free/1024/1024/1024);