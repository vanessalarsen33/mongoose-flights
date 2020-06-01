const express = require('express');
const router = express.Router();
const flightsCtrl = require('../controllers/flights');

router.get('/', flightsCtrl.getAllFlights);
router.get('/new', flightsCtrl.newFlightForm);
router.get('/:id', flightsCtrl.show);
router.post('/', flightsCtrl.createFlight);


module.exports = router;
