const User = require('./02_userModel');

function addUser() {
    console.log('adding user');
    
    const joe = new User ({name: 'Awais', name: 'Raza' , name:'joe' });
    joe.save()
    .then(()=>console.log('saved user'))
    .catch((err) => console.log('Err',err));
   
}

module.exports = addUser;