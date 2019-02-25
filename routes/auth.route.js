const passport = require('passport');
const router = require('express').Router();
const jwt = require('express-jwt');
const User = require('../models/user.model');

const getTokenFromHeaders = (req) => {
    const { headers: { authorization } } = req;

    if(authorization && authorization.split(' ')[0] === 'Token') {
        return authorization.split(' ')[1];
    }
    return null;
};

const auth = {
    required: jwt({
        secret: 'secret',
        userProperty: 'payload',
        getToken: getTokenFromHeaders,
    }),
    optional: jwt({
        secret: 'secret',
        userProperty: 'payload',
        getToken: getTokenFromHeaders,
        credentialsRequired: false,
    }),
};

router.post('/register', auth.optional, (req, res, next) => {
    let user = {
        email: req.body.email,
        password: req.body.password,
        name: req.body.name,
    };

    if(!user.email) {
        return res.status(422).json({
            errors: {
                email: 'is required',
            },
        });
    }

    if(!user.password) {
        return res.status(422).json({
            errors: {
                password: 'is required',
            },
        });
    }

    const finalUser = new User(user);

    finalUser.setPassword(user.password);

    return finalUser.save()
        .then(() => res.json({ user: finalUser.toAuthJSON() }));
});


router.post('/login', auth.optional, (req, res, next) => {
    let user = {
        email: req.body.email,
        password: req.body.password,
    };

    if(!user.email) {
        return res.status(422).json({
            errors: {
                email: 'is required',
            },
        });
    }

    if(!user.password) {
        return res.status(422).json({
            errors: {
                password: 'is required',
            },
        });
    }

    return passport.authenticate('local', { session: false }, (err, passportUser, info) => {
        if(err) {
            return next(err);
        }

        if(passportUser) {
            const user = passportUser;
            user.token = passportUser.generateJWT();

            req.session.messages = "Login successfull";
            req.session.authenticated = true;
            req.authenticated = true;

            return res.json({ user: user.toAuthJSON() });
        }

        return res.send(info);
    })(req, res, next);
});

module.exports = router;