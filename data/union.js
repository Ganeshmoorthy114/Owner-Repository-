const mongoose = require('mongoose');
const Union = new mongoose.Schema({
    name: { required: true, type: String },
    select1: { required: true, type: String },
    select2: { required: true, type: String },
    StartDate: { required: true, type: Date },
    EndDate: { required: true, type: Date },
})
module.exports = mongoose.model('Union', Union);
