const User = require('./02_userModel');

const joe = new User({
    name: 'joe'
});

joe.save()
     .then(()=> {

        // model instance remove (13b)
         joe.remove().then().catch(err);
         
         // class method remove
         User.remove({name: 'joe'});    //also return promise

         // class method FindAndRemove
         User.findOneAndRemove({name: 'joe'});

         // class method FindByIdAndRemove

         User.findOneAndRemove(joe._id);



})
.catch((err)=> console.log('Err', err));