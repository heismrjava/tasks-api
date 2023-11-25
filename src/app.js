const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
//const bodyParser = require('body-parser');
//const expressStatic = require('express-static');

const path = require("path");
const app = express();
const { mongoose } = require("./config/database.js");
const { PORT } = require("./config/environment.js");

//Settings

//Middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

//Routes
app.use("/api/tasks", require("./controllers/task.controller.js"));
app.use("/api/users", require("./controllers/user.controller.js"));

//Static files
app.use(express.static(path.join(__dirname, "public")));

//Starting server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});