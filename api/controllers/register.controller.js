const express = require("express");
const register = express.Router();

//Passport file for login/register
const passport = require("../middlewares/auth");

//Register passport authentication
register.post("/register", (req, res) => {
  passport.authenticate("local-register", function (error, client, info) {
    if (error) {
      return res.status(500).json({
        message: error || "Something happend",
        error: error.message || "Server error",
      });
    }
    req.logIn(client, function (error, data) {
      if (error) {
        return res.status(500).json({
          message: error || "Something happend",
          error: error.message || "Server error",
        });
      }
      return res.json(client);
    });
  })(req, res);
});

module.exports = register;
