let places = require('../data/places'),
    Place = require('mongoose').model('Place'),
    config = require('../config/database');

let CONTROLLER_NAME = 'places';

function getAll(req, res) {
    Place.find({}, function(err, places) {
        if (err) {
            throw err;
        }

        if (!places.length) {
            res.status(401).send({ err: 'No places.' });
        } else {
            res.status(200).json(places);
        }
    });
}

function createPlace(req, res) {
    let newPlace = req.body;
    Place.create(newPlace).then(res.send(newPlace));
}

function updatePlace(req, res) {
    let placeToUpdate = req.body;
    Place.update(placeToUpdate).then(res.send(placeToUpdate))
}

module.exports = {
    getAll,
    createPlace,
    updatePlace
};