const User = require("./02_userModel");

const joe = new User({
  name: "joe",
});

joe.save().then(() => {
  joe.set("name", "Alex");

  joe.save();

  joe.update({ name: "Alex" });

  User.update({ name: "joe" }, { name: "Alex" });

  User.findOneAndUpdate({ name: "joe" }, { name: "Alex" });

  User.findByIdAndUpdate(joe._id, { name: "Alex" });
});
