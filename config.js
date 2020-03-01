require('dotenv').config({path: '.env'});
const joi = require('joi');

const configSchema = joi.object({
    MONGOURI: joi.string().required(),
    PORT: joi.number().required()
})

const config = {
    MONGOURI: process.env.MONGOURI,
    PORT: process.env.PORT
}

const result = configSchema.validate(config);
if (result.error) {
    console.error(result.error);
    process.exit(1);
}

module.exports = result.value;