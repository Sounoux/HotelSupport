const mongoose = require("mongoose");
const roomSchema = require("./room").schema;

const reservationSchema = new mongoose.Schema(
  {
    nom: { type: String, require: true },
    prenom: { type: String, require: true },
    email: { type: String, require: true },
    phone: { type: String, require: true },
    adresse: { type: String, require: false },
    ville: { type: String, require: false },
    pays: { type: String, require: false },
    codePostale: { type: String, require: false },
    startDate: { type: Date, require: true },
    endDate: { type: Date, require: true },
    room: { ref: "Room", required: true, type: mongoose.Schema.Types.ObjectId },
  },
  { timestamps: true }
);
const Reservation = mongoose.model("Reservation", reservationSchema);

module.exports = Reservation;
