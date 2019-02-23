const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let SkillSchema = new Schema({
    name: {
        type: String,
        required: true,
        max: 100
    }
});

module.exports = mongoose.model('Skill', SkillSchema);



