const express = require('express');

const app = express();
//1st middelware
function log(req,res,next) {
    console.log(new Date(),req.method,req.url);
    next();
    
}
//2nd Middelware 
function secondMiddelware(req,res,next) {
    console.log("Second Middelware")
       next();

}

//app gettting

app.get('/',log, secondMiddelware,function (req,res) 
{
res.send('Express Work');

    
});

// if response is not VALID than check error

app.get('/error', function (req,res,next) {
      throw new Error ('Testing Err');    
});

// if funcation is not define 

function notDefineRoute(req,res,next) {
    res.send('404 not Found ');
    
}
//call funcation 
app.use(notDefineRoute);

function errorHandler(err,req,res,next) 
{
if(err){
    res.send('Errors' +err)

}    
}
app.use(errorHandler);


app.listen(1111,function () {
    console.log(`Express Server Staretd on: http://localhost:1111`);
});