const mongoose = require("mongoose");

const reservationSchema = new mongoose.Schema({
  date: { type: String, required: true },
  time: { type: String, required: true },
  people: { type: Number, required: true },
  fname: { type: String, required: true },
  phone: { type: Number, required: true },
  email: { type: String, required: true },
});

const Reservation = mongoose.model("Reservation", reservationSchema);
module.exports = Reservation;
