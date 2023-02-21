const express = require("express");
const login = express.Router();

//Passport file for login/register
const passport = require("../middlewares/auth");

//Login passport authentication
login.post("/login", function (req, res) {
  passport.authenticate("local-login", function (error, client, info) {
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
    });

    client.isAuthenticated = true;
    return res.json(client);
  })(req, res);
});

module.exports = login;
