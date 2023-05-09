const mongoose = require('mongoose');
const Done = new mongoose.Schema({
    cardName: { required: true, type: String },
    Status: { required: true, type: String },
    Id: { required: true, type: Number },
    orderId: { required: true, type: Number },
    nestedData: { required: true, type: Array },
})
module.exports = mongoose.model('Header', Done);
