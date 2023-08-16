const router = require('express').Router();
const itineraryRoutes = require("./itineraryRoutes.js");

router.use("/itinerary", itineraryRoutes) 
module.exports = router;
