const mongoose  = require('mongoose');
const UserSchema = require('../schema/user-schema');
const User = mongoose.model('user', UserSchema);
module.exports = User;