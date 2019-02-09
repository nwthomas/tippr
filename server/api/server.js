const express = require("express");
const server = express();
const middlewareConfig = require("../config/middlewares");
const workersRoute = require("./routes/workers");
const usersRoute = require("./routes/users");
const tipsRoute = require("./routes/tips");
const { authenticate } = require("../common/auth");
middlewareConfig(server);
server.use("/workers", authenticate, workersRoute);
server.use("/tips", authenticate, tipsRoute);
server.use("/", usersRoute);

module.exports = server;
