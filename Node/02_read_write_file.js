var fs = require('fs');

function readFile(srcPath) {
    fs.readFile(srcPath,'utf-8', function(err,data){
        (err) ? console.log('Read Err', err) : console.log('Read' , data); 
    })
    
}

function writeFile(savPath,data) {
    fs.writeFile(savPath,data, function (err) {
        (err) ? console.log('write Err :', err ) : console.log(' write sucessfully');
        
    })
    
}

function appendFile(savPath,data) {
    fs.appendFile(savPath,data,function (err) {
        (err) ? console.log('Append Err :' , err ) : console.log('Apend sucessFully');
        
    })
    
}

writeFile('./abc.txt', 'Ahmad Basit');
readFile('./abc.txt');
appendFile('./abc.txt' , 'Hi hows you are you there');