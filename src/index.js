const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const path = require("path");
const app = express();
const { mongoose } = require("./database.js");
const { PORT } = require("./config/environment");

//Settings

//Middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

//Routes
app.use("/api/tasks", require("./controllers/task.controller.js"));

//Static files
app.use(express.static(path.join(__dirname, "public")));

//Starting server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
