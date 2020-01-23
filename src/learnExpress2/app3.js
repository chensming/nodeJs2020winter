const express = require('express');
const app = express();

app.all('*', (req,res)=>{
    res.json({
        message: 'from app.all',
        method: req.method,
        uri: req.path
    })
})


app.listen(3000,()=>{
    console.log('server start at 127.0.0.1:3000');
})