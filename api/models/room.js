const mongoose = require("mongoose");

const reservationSchema = require("./reservation").schema;

const roomSchema = new mongoose.Schema(
  {
    name: { type: Number, require: true },
    capacity: { type: Number, require: true },
    type: { type: String, require: true },
    isAvailable: { type: Boolean, require: true },
    vue: { type: String, require: true },
    prix: { type: Number, require: true },
    reservation: {
      ref: "User",
      required: true,
      type: mongoose.Schema.Types.ObjectId,
    },
  },
  { timestamps: true }
);
const Room = mongoose.model("Room", roomSchema);

module.exports = Room;
