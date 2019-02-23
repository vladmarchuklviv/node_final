const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let DepartmentSchema = new Schema({
    name: {
        type: String,
        required: true,
        max: 100
    }
});

module.exports = mongoose.model('Department', DepartmentSchema);



