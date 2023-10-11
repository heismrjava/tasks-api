const mongoose = require("mongoose");

const URI = "mongodb://127.0.0.1:27017/tasks";
mongoose
  .connect(URI)
  .then((db) => console.log("Connected to database"))
  .catch((err) => console.log("Error connecting to database", err));

module.exports = mongoose;