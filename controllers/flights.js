const Flight = require('../models/flight');
const Ticket = require('../models/ticket')

module.exports = {
    getAllFlights,
    newFlightForm,
    createFlight,
    show
};

function show(req, res) {
  Flight.findById(req.params.id, function(err, flight) {
    Ticket.find({flight: flight._id}, function(err, tickets) {
      console.log('tickets:', tickets);
      res.render('flights/show', {
        title: `Flight ${flight.flightNo} Details`,
        flight,
        tickets
      });
    })
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
