const express = require("express")
const app = express();

app.set("view engine","ejs")

app.get('/',(req,res)=>{
    res.render("index")
})

app.get('/test',(req,res)=>{
    res.send("test world")
})

app.listen(3000)