const { Register } = require('../../models/registerModel');

async function create(user) {
    return await Register.create(user)
};

module.exports = {
    create
};