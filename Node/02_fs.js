var fs= require('fs');

/** Sync 
console.log("Sync 1")
var files = fs.readFileSync('./');
console.log('Sync 2',files);
*/



console.log('Async 1');
fs.readFile('./',function(err,files){
    if(err) {
        console.log('Err:', err)

    } else {
        console.log('Files:' , files);
    }



})
console.log('Async 2');