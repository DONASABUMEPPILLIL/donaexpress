var express = require('express');
var http = require('http');
var path = require('path');
var app = express();
const nav=[
{link:"/authors",name:"Authors"},
{link:"/signup",name:"Signup"},{link:"/login",name:"Login"}
]
var indexRouter = require("./src/routes/indexRouter")(nav)
var authorRouter = require('./src/routes/authorRouter')(nav)
var loginRouter = require('./src/routes/loginRouter')
var signupRouter = require('./src/routes/signupRouter')
app.set('views', path.join(__dirname, './src/views'));
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.use('/', indexRouter);
app.use("/authors",authorRouter)
app.use('/login', loginRouter);
app.use('/signup', signupRouter);
app.listen(3000);
