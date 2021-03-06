const express =require('express');
//install cookie parser
//npm i cookie-parser
const cookieParser = require('cookie-parser') ;

const app = express();

app.use(cookieParser());

app.get('/', function (req,res) {
 res.cookie('myFirstCookie' , 'Looks Good');
 res.send('Cookie...!');      // check in browser document.cookie 
});


app.get('/clearCookie', function (req,res) {
    res.clearCookie('myFirstCookie');
    res.send('Cookies Removed');
    
});

app.listen(1700,function () {
    console.log(`Express Server Started on: http://localhost:1700`);
});