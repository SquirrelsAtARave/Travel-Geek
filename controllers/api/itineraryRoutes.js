const router = require('express').Router();
const {Itinerary} = require('../../models');

router.post('/', async (req, res) => {
    try {
      const ItineraryData = await Itinerary.create(req.body);
  
     res.status(200).json(ItineraryData);
    } catch (err) {
      res.status(400).json(err);
    }
  });

  module.exports = router;