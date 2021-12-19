const User = require('./02_userModel');

//finds all users with a name of awais

User.find({name:'awias'})
.then((users)=> {
    //Return Array
    console.log('Users', users);
})
.catch((err)=> console.log('Err',err));

// finds user with the name of joe
User.findOne({name: 'awias'})
.then((user)=>{
    console.log('User', user);
})
.catch((err) => console.log('Err',err));