const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let UserSchema = new Schema({
    name: {
        type: String,
        required: true,
        max: 100
    },
    avatar: {
        type: String,
        required: true,
        max: 100
    },
});

module.exports = mongoose.model('User', UserSchema);
