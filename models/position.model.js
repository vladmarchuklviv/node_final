const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let PositionSchema = new Schema({
    name: {
        type: String,
        required: true,
        max: 100
    }
});

module.exports = mongoose.model('Position', PositionSchema);



