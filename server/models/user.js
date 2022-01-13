const mongoose = require('mongoose');
const userSchema = require('../schemata/user');

const User = mongoose.model('test', userSchema);

module.exports = User;
