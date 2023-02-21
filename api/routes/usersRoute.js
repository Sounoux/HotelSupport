const express = require("express");
const asynchHandler = require("express-async-handler");
var userController = require("../controllers/users.controller");
const authentification = require("./authenticate.router");
const userRouter = express.Router();

userRouter.post("/", userController.addOne);
userRouter.post("/login", userController.verif);
userRouter.get(
  "/profile",
  authentification.required,
  userController.getProfile
);
userRouter.put(
  "/profile/update",
  authentification.required,
  userController.updateProfil
);
userRouter.get("/", userController.getAll);
userRouter.use("/profile/:id", userController.updateOne);

userRouter.all("/users", (req, res, next) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  next();
});

module.exports = { userRouter };
