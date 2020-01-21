const http = require('http');

const server = http.createServer((req, res)=>{
    res.end('hello');
});

server.listen(3000, '127.0.0.1', ()=>{
    console.log('server start...');
})

//配置nodemon
//1. npm install nodemon -D
//2. 修改package.json 中的启动命令
//3.通过增加 nodemon.json 配置 指定 特殊 watch 的文件