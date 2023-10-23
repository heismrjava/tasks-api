const express = require("express");

const router = express.Router();

// Importar el controlador de tasks
const tasks = require("../controllers/task.controller");
const users = require("../controllers/user.controller");

// Agregar el controlador de tasks a la ruta principal
router.use("/api/tasks", tasks);
router.use("/api/users", users);

// Exportar el router
//module.exports = router;
