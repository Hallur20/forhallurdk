var express = require("express");
var app = express();


app.get('/', (req, res)=>{
    res.send("hey from server");
});

app.listen(3000, ()=>{
    console.log("server is up at port 3000");
})