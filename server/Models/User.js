const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  name: { type: String, require: true },
  email: { type: String, require: true, unique: true },
  password: { type: String, require: true },
  Date: { type: Date, default: Date.now },
});

const Model = mongoose.model('user',UserSchema)

module.exports=Model;