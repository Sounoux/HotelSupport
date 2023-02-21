const express = require("express");
const getDetails = express.Router();

const Client = require("../models/client");

getDetails.get("/getDetails", (req, res) => {
  Client.findOne(
    { email: req.session.passport.client.email },
    function (err, client) {
      if (err) console.log(err);

      const { nom, prenom } = client;

      res.status(200).send({
        nom,
        prenom,
      });
    }
  );
});

module.exports = getDetails;
