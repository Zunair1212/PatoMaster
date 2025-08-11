const express=require('express');
const router=express.Router();
const {allReservations, createReservation, deleteReservation } = require('../controllers/reservationControllers');





router.post("/reservations", createReservation);
router.get("/reservations", allReservations);
router.delete("/reservations/:id", deleteReservation);



module.exports =router
