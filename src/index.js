const express = require('express');
const {PORT}=require('../src/config/Serverconfig');
const bodyParser = require('body-parser');

const setupserver=async()=>{
    const app=express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));
    app.listen(PORT,()=>{
        console.log(`Server started at ${PORT}`);
        // console.log(process.env);
    })
}
setupserver();