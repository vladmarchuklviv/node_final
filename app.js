const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');

const auth = require('./routes/auth.route');
const user = require('./routes/user.route');
const department = require('./routes/department.route');
const position = require('./routes/position.route');
const skill = require('./routes/skill.route');
const app = express();
const mongoose = require('mongoose');
app.use(session({ secret: 'secret', cookie: { maxAge: 60000 }, resave: false, saveUninitialized: false }));


let mongoDB = 'mongodb://127.0.0.1/users_back';
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended: false}));
app.use('/user', user);
app.use('/department', department);
app.use('/position', position);
app.use('/skill', skill);
app.use('/auth', auth);
require('./config/passport');

app.listen(3000, () => {
    console.log('Server is up and running on port numner 3000');
});

