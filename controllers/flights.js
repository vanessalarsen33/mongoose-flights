const Flight = require('../models/flight');

module.exports = {
    getAllFlights,
    newFlightForm,
    createFlight,
    show
};

function show(req, res) {
  Flight.findById(req.params.id)
  .exec(function(err, flight) {
      res.render('flights/show', {
        title: 'Flight Detail',
        flight
      });
    });
  }

function getAllFlights(req, res) {
  Flight.find({}, function(err, flights) {
      res.render('flights/index', { title: 'All Flights', flights })
  });
}

function createFlight(req, res) {
  const flight = new Flight(req.body);
  console.log(flight);
  flight.save({}, function(err, newFlight) {
    res.redirect('/flights');
  });
};

function newFlightForm(req, res) {
  res.render('flights/new');
};
