const mongoose = require('mongoose');

const personalDataSchema = new mongoose.Schema({
    firstName: {type: String, required:true},
    lastName: {type: String, required:true}
});

module.exports = mongoose.model('Data', personalDataSchema);