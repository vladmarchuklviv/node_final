const User = require('../models/user.model');

exports.create = function (req, res) {
    let user = new User({
        name: req.body.name,
        avatar: req.body.avatar,
    });

    user.save(function (err, user) {
        if (err) {
            res.send(err.toString());
        }
        res.send(user);
    })
};

exports.get = function (req, res) {
    User.findById(req.params.id, function (err, user) {
        if (err) {
            return res.send(err.toString());
        }
        res.send(user);
    });
};

exports.update = function (req, res) {
    User.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, user) {
        if (err) {
            return res.send(err.toString());
        }
        res.send(user);
    });
};

exports.delete = function (req, res) {
    User.findByIdAndRemove(req.params.id, function (err) {
        if (err) {
            return res.send(err.toString());
        }
        res.send('user deleted');
    })
};
