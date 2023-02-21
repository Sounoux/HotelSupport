const express = require('express');
const asynchHandler = require('express-async-handler');
const Room = require('../models/room');
var roomController = require("../controllers/rooms.controller")
const roomRouter = express.Router();

/* GET/POST/PUT/DELETE rooms. */
roomRouter.post('/', roomController.addOne);
roomRouter.get('/', roomController.getAll);
roomRouter.delete('/:id', roomController.deleteOne);
roomRouter.put('/:id', roomController.updateOne);
roomRouter.get('/:id', roomController.getOne);

module.exports = { roomRouter };