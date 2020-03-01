const mongoose = require('mongoose');

const registerSchema = new mongoose.Schema({
    email: { type: String, required: true, index: { unique: true } },
    password: { type: String, required: true }
}, { timestamps: true });

const Register = mongoose.model('Register', registerSchema);

module.exports = { Register };