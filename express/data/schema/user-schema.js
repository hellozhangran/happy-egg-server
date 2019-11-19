const mongoose = require('mongoose');
const UserSchema = mongoose.Schema({
    name: String,
    age: Number,
    sale: Boolean
});
module.exports = UserSchema;