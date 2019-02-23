const Position = require('../models/position.model');

exports.all = function (req, res) {
    Position.find({}, function (err, positions) {
        res.send(positions);
    });
};

exports.create = function (req, res) {
    let position = new Position({
        name: req.body.name
    });

    position.save(function (err, position) {
        if (err) {
            res.send(err.toString());
        }
        res.send(position);
    })
};

exports.get = function (req, res) {
    Position.findById(req.params.id, function (err, position) {
        if (err) {
            return res.send(err.toString());
        }
        res.send(position);
    });
};

exports.update = function (req, res) {
    Position.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, position) {
        if (err) {
            return res.send(err.toString());
        }
        res.send(position);
    });
};

exports.delete = function (req, res) {
    Position.findByIdAndRemove(req.params.id, function (err) {
        if (err) {
            return res.send(err.toString());
        }
        res.send('position deleted');
    })
};
