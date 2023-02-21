const express = require("express");
const asynchHandler = require("express-async-handler");
const authTokenGenerator = require("../utils/authTokenGenerator");
const User = require("../models/User");

var userController = {
  addOne: asynchHandler(async (req, res) => {
    const { name, email, password } = req.body;
    const userExist = await User.findOne({ email: email });

    if (userExist) {
      throw new Error("User Exist");
    }
    const user = await User.create({ name, email, password });
    if (user) {
      res.status(200);
      res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        password: user.password,
      });
    }
    // res.status(500);
    // throw new Error('Server Error');
  }),

  verif: asynchHandler(async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email });
    //Compare password
    if (user && (await user.isPasswordMatch(password))) {
      res.status(201);
      res.status(200);
      res.json({
        _id: user._id,
        name: user.name,
        password: user.password,
        email: user.email,
      });
    } else {
      res.status(401);
      throw new Error("Invalid login credentials");
    }
  }),

  getProfile: asynchHandler(async (req, res) => {
    try {
      const user = await User.findById(req.user.id).populate("rooms");
      res.status(404);
      if (!user) throw new Error(`You don't have any profile yet`);
      res.status(201);
      res.send(user);
    } catch (error) {
      res.status(500);
      throw new Error("Server error");
    }
  }),

  //UPDATE PROFILE

  updateProfil: asynchHandler(async (req, res) => {
    const user = await User.findById(req.user.id);
    if (user) {
      user.name = req.body.name || user.name;
      user.email = req.body.email || user.email;
      //This will encrypt automatically in our model
      if (req.body.password) {
        user.password = req.body.password || user.password;
      }
      const updateUser = await user.save();
      res.json({
        _id: updateUser._id,
        name: updateUser.name,
        password: updateUser.password,
        email: updateUser.email,
      });
    } else {
      res.status(401);
      throw new Error("User Not found");
    }
  }),

  getAll: asynchHandler(async (req, res) => {
    try {
      const users = await User.find().populate("rooms");
      res.status(200);
      res.json(users);
    } catch (error) {}
  }),

  updateOne: asynchHandler(async (req, res) => {
    try {
      const user = await User.findByIdAndUpdate(req.params.id, req.body);
      res.status(200);
      res.json(user);
    } catch (error) {
      res.status(500);
      throw new Error("Update failed");
    }
  }),
};

module.exports = userController;
