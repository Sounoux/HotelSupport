const express = require('express');
const asynchHandler = require('express-async-handler');
var reservController = require("../controllers/reservations.controller")
const reservationRouter = express.Router();

reservationRouter.post('/', reservController.addOne);
reservationRouter.get('/', reservController.getAll);
reservationRouter.delete('/:id', reservController.deleteOne);
reservationRouter.put('/:id', reservController.updateOne);
reservationRouter.get('/:id', reservController.getOne);

module.exports = { reservationRouter };