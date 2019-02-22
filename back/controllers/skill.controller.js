const Skill = require('../models/skill.model');

exports.create = function (req, res) {
    let skill = new Skill({
        name: req.body.name
    });

    skill.save(function (err) {
        if (err) {
            res.send(err.toString());
        }
        res.send('User Created');
    })
};

exports.get = function (req, res) {
    Skill.findById(req.params.id, function (err, skill) {
        if (err) {
            return res.send(err.toString());
        }
        res.send(skill);
    });
};

exports.update = function (req, res) {
    Skill.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, skill) {
        if (err) {
            return res.send(err.toString());
        }
        res.send(skill);
    });
};

exports.delete = function (req, res) {
    Skill.findByIdAndRemove(req.params.id, function (err) {
        if (err) {
            return res.send(err.toString());
        }
        res.send('skill deleted');
    })
};
