const express=require('express');
const app=express();
const PORT=3000;

app.post('/',function(req,res){
    
})

app.listen(PORT,()=>{
    console.log("app running on 3000")
})