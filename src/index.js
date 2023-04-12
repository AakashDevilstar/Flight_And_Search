const express = require('express');
const {PORT}=require('../src/config/Serverconfig');

const setupserver=async()=>{
    const app=express();
    app.listen(PORT,()=>{
        console.log(`Server started at ${PORT}`);
        // console.log(process.env);
    })
}
setupserver();