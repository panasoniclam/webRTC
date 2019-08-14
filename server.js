const express = require('express');
const app = express();

app.use(express.static('./public'));
app.set('view engine','ejs');
app.set('views','./views');

app.use('/',(req,res,next)=>{
    res.render("index.ejs")
})
const server = require('http').Server(app)
server.listen(8080)
