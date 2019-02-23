const User = require('../models/user.model');

exports.all = function (req, res) {
    User.find({})
        .populate('department', ['name'])
        .populate('position', ['name'])
        .populate('skill', ['name'])
        .exec(function(err, users) {

            if (err) {
                res.send(err.toString());
            }
            res.send(users);
    });
};

exports.create = function (req, res) {
    let user = new User({
        name: req.body.name,
        avatar: saveAvatar(req.body.avatar),
        department: req.body.department,
        position: req.body.position,
        skill: req.body.skill,
    });

    user.setPassword(req.body.password);

    user.save(function (err, user) {
        if (err) {
            res.send(err.toString());
        }

        res.send(user);
    })
};

exports.get = function (req, res) {
    User.findById(req.params.id)
        .populate('department', ['name'])
        .populate('position', ['name'])
        .populate('skill', ['name'])
        .exec(function(err, users) {

            if (err) {
                res.send(err.toString());
            }
            res.send(users);
        });
};

exports.update = function (req, res) {
    let data = req.body;

    if (data.avatar) {
        data.avatar = saveAvatar(data.avatar);
    }

    User.findByIdAndUpdate(req.params.id, {$set: data}, function (err, user) {
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

saveAvatar = function (avatarData) {
    let base64Data = avatarData.replace(/^data:image\/png;base64,/, "");
    let path = "uploads/" + Date.now() + "_avatar.jpg";

    require("fs").writeFile(path, base64Data, 'base64', function(err) {
        if (err) {
            return res.send(err.toString());
        }
    });

    return path;
};