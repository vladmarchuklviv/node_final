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
        max: 100
    },
    department: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Department'
    },
    position: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Position'
    },
    skill: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Skill'
    }]
});

module.exports = mongoose.model('User', UserSchema);
