const mongoose = require('mongoose');
const schema = new mongoose.Schema({
    name: { required: true, type: String },
    StartDate: { required: true, type: Date },
    EndDate: { required: true, type: Date },
    select1: { required: true, type: String },
    select2: { required: true, type: String },
    cardId: { required: true, type: String },
})

// schema = collection in mongoose

module.exports = mongoose.model('subdata', schema);