/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
const { mongoose } = require("./src/config/database.js");
const { PORT } = require("./src/config/environment");

//Settings

//Middlewares
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(cors());

//Routes
app.use("/api/tasks", require("./src/controllers/task.controller.js"));

//Static files
app.use(express.static(path.join(__dirname, "public")));

//Starting server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

exports.app = onRequest(app);
