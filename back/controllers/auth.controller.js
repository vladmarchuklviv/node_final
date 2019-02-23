const jwt = require("jsonwebtoken");
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
const User = require('../models/user.model');

exports.login = function (req, res) {

    let { email, password } = req.body;

    if (email === "vlad.marchuk@otakoyi.com.ua") {
        if (password === "pass") {
            const secret = "pass";
            const token = jwt.sign({ email }, secret, {expiresIn: 3600});
            console.log(token);

            return res.status(200).json({
                message: "Auth Passed",
                token
            })
        }
    }
    return res.status(401).json({ message: "Auth Failed" })

};

