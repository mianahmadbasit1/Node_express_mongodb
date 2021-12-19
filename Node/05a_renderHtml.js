 var http = require('http');
 var fs = require('fs');

 //also facing cilent side url facing

 http.createServer(function (req,res) {
     console.log('req',req.url)
     fs.readFile('./ahmad.html' , function (err,data) {
         res.writeHead(200, {'content-Type' : 'text/html'});
         res.write(data);
         res.end();
           
        })

     
 }) .listen(8080);