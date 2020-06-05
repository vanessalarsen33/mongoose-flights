const Ticket = require('../models/ticket');
const Flight = require('../models/flight');

module.exports = {
    new: newTicket,
    create,

}

function newTicket(req, res) {
    console.log('req.params:', req.params);
    res.render('tickets/new', {
        title: 'New Ticket',
        flightId: req.params.id
    });
};

function create(req, res) {
    req.body.flight = req.params.id;
    console.log(req.body)
    Ticket.create(req.body, function(err, newTicket) {
        console.log(err)
        console.log('this is the new ticket', newTicket);
        res.redirect(`/flights/${req.params.id}`);
    })
}