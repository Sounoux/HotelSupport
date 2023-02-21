const express = require("express");
const asynchHandler = require("express-async-handler");
const Reservation = require("../models/reservation");
var reservController = {
  addOne: asynchHandler(async (req, res) => {
    try {
      const reservation = await Reservation.create(req.body);
      res.status(200);
      res.json(reservation);
    } catch (error) {
      res.status(500);
      throw new Error(error);
    }
  }),

  getAll: asynchHandler(async (req, res) => {
    const reservations = await Reservation.find()
      .populate("room")
      .sort("createdAt");
    //Compare password
    if (reservations) {
      res.status(201);
      res.send(reservations);
    } else {
      res.status(401);
      throw new Error("Server error");
    }
  }),

  deleteOne: asynchHandler(async (req, res) => {
    try {
      const reservation = await Reservation.findByIdAndDelete(req.params.id);
      res.status(200);
      res.send(reservation);
    } catch (error) {
      res.status(500);
      throw new Error("Server Error");
    }
  }),

  updateOne: asynchHandler(async (req, res) => {
    try {
      const reservation = await Reservation.findByIdAndUpdate(
        req.params.id,
        req.body
      );
      res.status(200);
      res.json(reservation);
    } catch (error) {
      res.status(500);
      throw new Error("Update failed");
    }
  }),

  getOne: asynchHandler(async (req, res) => {
    try {
      const reservation = await Reservation.findById(req.params.id);
      res.status(200);
      res.send(reservation);
    } catch (error) {
      res.status(500);
      throw new Error("No room found");
    }
  }),
};

module.exports = reservController;
