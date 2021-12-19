const mongoose = require('mongoose');

mongoose.connection.collection.users.drop();
