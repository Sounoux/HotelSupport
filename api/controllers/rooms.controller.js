const express = require("express");
const asynchHandler = require("express-async-handler");
const Room = require("../models/room");

var roomController = {
  addOne: asynchHandler(async (req, res) => {
    try {
      const room = await Room.create(req.body);
      res.status(200);
      res.json(room);
    } catch (error) {
      res.status(500);
      throw new Error(error);
    }
  }),

  getAll: asynchHandler(async (req, res) => {
    const rooms = await Room.find().populate("reservation").sort("createdAt");
    //Compare password
    if (rooms) {
      res.status(201);
      res.send(rooms);
    } else {
      res.status(401);
      throw new Error("Server error");
    }
  }),

  deleteOne: asynchHandler(async (req, res) => {
    try {
      const room = await Room.findByIdAndDelete(req.params.id);
      res.status(200);
      res.send(room);
    } catch (error) {
      res.status(500);
      throw new Error("Server Error");
    }
  }),

  updateOne: asynchHandler(async (req, res) => {
    try {
      const room = await Room.findByIdAndUpdate(req.params.id, req.body);
      res.status(200);
      res.json(room);
    } catch (error) {
      res.status(500);
      throw new Error("Update failed");
    }
  }),

  getOne: asynchHandler(async (req, res) => {
    try {
      const room = await Room.findById(req.params.id);
      res.status(200);
      res.send(room);
    } catch (error) {
      res.status(500);
      throw new Error("No room found");
    }
  }),
};

module.exports = roomController;
