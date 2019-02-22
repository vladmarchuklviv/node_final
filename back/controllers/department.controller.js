const Department = require('../models/department.model');

exports.create = function (req, res) {
    let department = new Department({
        name: req.body.name
    });

    department.save(function (err, department) {
        if (err) {
            res.send(err.toString());
        }
        res.send(department);
    })
};

exports.get = function (req, res) {
    Department.findById(req.params.id, function (err, department) {
        if (err) {
            return res.send(err.toString());
        }
        res.send(department);
    });
};

exports.update = function (req, res) {
    Department.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, department) {
        if (err) {
            return res.send(err.toString());
        }
        res.send(department);
    });
};

exports.delete = function (req, res) {
    Department.findByIdAndRemove(req.params.id, function (err) {
        if (err) {
            return res.send(err.toString());
        }
        res.send('department deleted');
    })
};
