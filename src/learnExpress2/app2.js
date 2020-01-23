const express = require('express');
const app = express();

app.all('/demo',(req,res)=>{
    res.json({
        message: 'demo all methods',
        method: req.method
    })
})

app.listen(3000,()=>{
    console.log('server starting...');
})