const express = require("express");
const userRouter = express.Router();

const usersController = require("../controllers/users-controller");
const authHelpers = require("../services/auth/auth-helpers");

//Route to profile page
userRouter.get("/", authHelpers.loginRequired, usersController.index);
//Sends data to create a new user
userRouter.post("/", usersController.create);

userRouter.get("/register", authHelpers.loginRedirect, (req, res) => {
  res.render("auth/register", {
    appName: "What's For Dinner",
    message: "Put a user profile page on this route",
    data: {
      user: req.user,
      params: req.params,
    }
  })
}),

userRouter.get("/profile", usersController.index);

module.exports = userRouter;
