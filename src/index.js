const express = require("express");
const morgan = require("morgan");

const path = require("path");
const app = express();
const { mongoose } = require("./database.js");

//Settings
app.set("port", process.env.PORT || 5000);

//Middlewares
app.use(morgan("dev"));
app.use(express.json());

//Routes
app.use("/api/tasks", require("./routes/index"));

//Static files
app.use(express.static(path.join(__dirname, "public")));

//Starting server
app.listen(app.get("port"), () => {
  console.log(`Server running on port ${app.get("port")}`);
});
