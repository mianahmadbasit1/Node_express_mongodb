const mongoose = require('mongoose');
const User = require('./02_userModel');

const addUser = require('./03_createUser');

mongoose.connect("mongodb+srv://Ahmad:Ahmad.123@cluster0.3i4dg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")

mongoose.connection
.once('open', ()=> {
    console.log('Yahoo Conection is Estblished');
    //o  connection add user call 
    addUser()
})

.on('error', (err) => {
    console.log('Err', err)
})