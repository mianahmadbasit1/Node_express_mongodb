var http = require("http");
var fs = require('fs');
var querystring = require('querystring');

const usersList = [{id: 1 , name: '0300787887' }, {id: 2, name:'xyz'}];

//GET       All Fetch select      All TODOS
//GET/id    GET SPECIFIC RECORD    TODO
//POST       INSERT/CREATE          ADD
//PUT          UPDATE              UPDATE
//DELETE        DELETE              DELETE

//Application routes/Requests: 
// Get: /       / users      /user       /user/id
//  post:  /user

http.createServer(function (req,res) {
  if (req.url == '/users' && req.method == 'GET') {
      res.write(JSON.stringify(usersList));
      res.end();
      return;
      
  }
  if (req.url == '/user' && req.method == 'POST') {
      var body = ' ';
      req.on('data', function (data) {
          body += data;
          //1e6 ==== 1 * Math.pow (10,6) === 1 * 1000000 ~~~ 1 MB 
          if(body.length > 1e6){
              //FLOOD ATTACK OR FAULTY CLIENT, NUKE REQUEST
              request.connection.destroy();
          }
          
      });
      req.on('end' , function () {
          console.log('body', body);
          // if we are use var querystring than we are use alias qs..
          var POST  = qs.parse(body);
          console.log('POST' , POST);
          res.write(JSON.stringify(POST));
          res.end();
      });
      return;
  }

  if (req.url =='/user' && req.method == "GET") {
      res.write('My user Information');
      res.end();
      return;
      
  }

  if(req.url.indexOf('/user/')> -1 && req.method == 'GET'){
      var id = req.url.replace('/user/' , ' ');
      res.write('Show user name which have id' + id);
      res.end();
      return;
  }

if (req.url == './') {
    fs.readFile('index.html', function (err,data) {
        res.writeHead(200,{
            'Content-Type':'text/html'
        });
        res.write(data);
        res.end();
    });
    return;
}
 res.writeHead(200,{
     'content-Type' : 'text/html'
           
 });
 res.write('Invalid Route');
 res.end();

}).listen(9999);