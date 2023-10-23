const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserSchema = new Schema({
  image: { type: String, required: false },
  username: { type: String, required: true },
  password: { type: String, required: true },
});

module.exports = mongoose.model("User", UserSchema);