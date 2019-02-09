const express = require("express");
const route = express.Router();
const db = require("../../data/dbConfig");
const bcrypt = require("bcryptjs");
const { generateToken } = require("../../common/auth");
route.get("/", async (req, res) => {
  try {
    res.status(200).json({ message: "sanity check" });
  } catch (err) {
    res.status(500).json({ message: "server is not working" });
  }
});
route.post("/login", async (req, res) => {
  const credentials = req.body;
  try {
    const user = await db("users")
      .where({ username: credentials.username })
      .first();
    if (user && bcrypt.compareSync(credentials.password, user.password)) {
      const token = await generateToken(user);
      const currentUser = await db("users")
        .where({ username: user.username })
        .first();
      res.status(200).json({
        userId: user.id,
        username: `${user.username}`,
        user_type: `${currentUser.user_type}`,
        token
      });
    } else {
      res.status(400).json({ message: "Invalid username or password" });
    }
  } catch (err) {
    res.status(500).json({ message: "Internal Server Error", err: err });
  }
});

route.post("/register", async (req, res) => {
  const credentials = req.body;
  console.log(credentials);
  try {
    let user = await db("users")
      .where({ username: credentials.username })
      .first();
    if (user) {
      res.status(400).json({
        message: `${
          user.username
        } already exists, please choose another username`
      });
    } else {
      const hash = bcrypt.hashSync(credentials.password);
      credentials.password = hash;
      const userId = await db("users").insert(credentials);
      user = await db("users")
        .where({ id: userId[0] })
        .first();
      const token = await generateToken(user);
      res.status(201).json({
        userId: userId[0],
        username: user.username,
        token,
        user_type: user.user_type
      });
    }
  } catch (err) {
    res.status(500).json({ message: "Internal server error", err: err });
  }
});
route.get("/users", async (req, res) => {
  try {
    const users = await db("users");
    res.status(200).json(users);
  } catch (err) {
    res.status(500);
  }
});
module.exports = route;
