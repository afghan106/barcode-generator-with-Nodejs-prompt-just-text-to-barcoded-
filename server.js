const express=require("express");
const bodyparser=require("body-parser");


const app=express();


app.listen(1111,()=>{
    console.log("server is runing on port 1111")
})