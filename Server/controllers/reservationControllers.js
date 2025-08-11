
const Reservation = require("../models/reservationModel");

// Create Reservation
exports.createReservation = async (req, res) => {
  try {
    console.log(req.body)
    const newReservation = new Reservation(req.body);
    await newReservation.save();
    res.status(201).json({ message: "Reservation created", data: newReservation });
  } catch (error) {
    res.status(500).json({ error: "Failed to create reservation" });
  }
};

// Fetch All Reservations
exports.allReservations = async (req, res) => {
  try {
    const reservations = await Reservation.find();
    res.json(reservations);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch reservations" });
  }
};

// Delete Reservation
exports.deleteReservation = async (req, res) => {
  try {
   const { id }=req.params;
    const deleted = await Reservation.findByIdAndDelete(id);
    if (!deleted) { 
      return res.status(404).json({ message: 'Reservation not found'});
    }
    res.status(200).json({ message:  'Reservation deleted successfully' });
  } catch (error) {
   res.status(500).json({ message: 'Error deleting reservation ', error });
  }
};
