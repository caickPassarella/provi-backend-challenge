const { create : createRegister } = require('./repository');
const Bcrypt = require("bcryptjs");
const crypto = require('crypto');

const create = async (req, res, next) => {
    try {
        const hashedPassword = Bcrypt.hashSync(req.body.password);
        const payload = {...req.body, password: hashedPassword};
        await createRegister(payload);
        
        const token = crypto.randomBytes('10').toString('hex');
        
        res.status(201).json({
            status: 'success',
            token
        });
    }
    catch (error) {
        next(error);
    }
}

module.exports = {
    create
};