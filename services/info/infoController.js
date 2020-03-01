const {
  createCpfModel,
  createFullNameModel,
  createBirthdayModel,
  createPhoneNumberModel,
  createAddressModel
} = require('./repository');

const createCpf = async (req, res, next) => {
    try {
        const cpf = await createCpfModel(req.body)

        res.status(201).json({
            status: 'success',
            cpf
        })
    }
    catch (error) {
        next(error);
    };
}

const createFullName = async (req, res, next) => {
    try {

        const payload = { firstName, lastName };
        const fullName = await createFullNameModel(payload)

        res.status(201).json({
            status: 'success',
            fullName
        })
    }
    catch (error) {
        next(error);
    };
}

const createBirthday = async (req, res, next) => {
    try {
        const birthday = await createBirthdayModel(req.body)

        res.status(201).json({
            status: 'success',
            birthday
        })
    }
    catch (error) {
        next(error);
    };
}

const createPhoneNumber = async (req, res, next) => {
    try {
        const phoneNumber = await createPhoneNumberModel(req.body)

        res.status(201).json({
            status: 'success',
            phoneNumber
        })
    }
    catch (error) {
        next(error);
    };
}

const createAddress = async (req, res, next) => {
    try {
        const address = await createAddressModel(req.body)

        res.status(201).json({
            status: 'success',
            address
        })
    }
    catch (error) {
        next(error);
    };
}
module.exports = {
    createCpf,
    createFullName,
    createBirthday,
    createPhoneNumber,
    createAddress
}