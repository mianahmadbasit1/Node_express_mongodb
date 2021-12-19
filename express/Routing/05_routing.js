const express = require('express');

const app = express();

const router1 = express.Router();
const router2 = express.Router();
const router3 = express.Router();
// use api into api
router1.get('/',(req,res)=>res.send('Api is Live'));
router1.get('/user',(req,res)=>res.send('/user Calling'));
router1.get('/group', (req,res)=>res.send('/Group is calling'));
router1.get('/post',(req,res)=>res.send('/post is calling'));

//when value is get from user
router2.get('/:username',(req,res)=> res.send(JSON.stringify(req.params)));

router3.get('/',(req,res) => res.send("Api is Live Update"))
//api define 

app.use('/apiV1', router1);
app.use('/apiV2',router3);
app.use('/users',router2);

app.get('/',function (req,res) {
    res.send('Express  Work');
    
})

app.listen(9999,function () {
    console.log(`Express Server Started on http://localhost:9999`);
});