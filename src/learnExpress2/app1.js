const express = require('express');
const app = express();

app.get('/demo', (req, res)=>{
    res.json({
        message: 'from get demo'
    })
})


app.post('/demo', (req, res)=>{
    res.json({
        message: 'from post demo'
    })
})

app.get('/user/byname', (req, res) =>{
    let {name} = req.query;
    res.json({
        name
    })
})

app.get('/user/byid', (req, res)=>{
    let {id} = req.query;
    res.json({
        id
    })
})


app.listen(3000, ()=>{
    console.log('server start...');
})