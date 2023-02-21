const express = require("express");
const router = express.Router();

const passport = require("passport");

const jwt = require("express-jwt");

const getTokenFromHeaders = (req) => {
  const {
    headers: { authorization },
  } = req;

  if (authorization && authorization.split(" ")[0] === "Token") {
    return authorization.split(" ")[1];
  }
  return null;
};

const authentification = {
  required: jwt({
    algorithms: ["sha1", "RS256", "HS256"],
    secret: "secret",
    userProperty: "payload",
    getToken: getTokenFromHeaders,
  }),
};

module.exports = authentification;
