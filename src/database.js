const mongoose = require("mongoose");
const { DB_HOST, DB_DATABASE } = require("./config/environment");

const URI = DB_HOST + DB_DATABASE;
mongoose
  .connect(URI)
  .then((db) => console.log("Connected to database"))
  .catch((err) => console.log("Error connecting to database", err));

module.exports = mongoose;