const express = require("express");
const bcrypt = require("bcryptjs");
const { body, validationResult } = require("express-validator");

const User = require("../models/user.model.js");
const { routes } = require("../config/routes.js");

const router = express.Router();

//Rutas de usuarios
router.get(routes.index, async (req, res) => {
  const user = await User.find();
  res.json(user);
});

router.get(routes.show, async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }
  res.json(user);
});

router.post(routes.create, async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: "Complete all fields" });
  }

  const lowerUsername = username.toLowerCase();
  const userExisting = await User.findOne({ username: lowerUsername});
  if (userExisting) {
    return res.status(409).json({ message: "This username already exists" });
  }

  const salt = bcrypt.genSaltSync(10);
  const hashedPassword = bcrypt.hashSync(password, salt);
  
  const user = new User({ username: lowerUsername, password: hashedPassword });
  await user.save();
  res.json(user);
});

router.put(routes.update, async (req, res) => {
  const { id } = req.params;
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({ message: "Complete all fields" });
  }
  const updatedUser = { username, password };
  await Task.findByIdAndUpdate(id, updatedUser);
  res.json(updatedUser);
});

router.delete(routes.delete, async (req, res) => {
  const { id } = req.params;
  if (!id) {
    return res
      .status(400)
      .json({ message: "The request could not be processed" });
  }
  await User.findByIdAndDelete(id);
  res.json({ message: "User deleted" });
});

module.exports = router;
