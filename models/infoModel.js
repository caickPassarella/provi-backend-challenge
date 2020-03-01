const mongoose = require('mongoose');

const cpfSchema = new mongoose.Schema({
    cpf: { type: String, required: true, unique: true },
}, { timestamps: true });

const fullNameSchema = new mongoose.Schema({
    fistName: { type: String, required: true },
    lastName: { type: String, required: true }
}, { timestamps: true });

const birthdaySchema = new mongoose.Schema({
    birthday: { type: String, required: true },
}, { timestamps: true });

const phoneNumberSchema = new mongoose.Schema({
    phoneNumber: { type: String, required: true },
}, { timestamps: true });

const addressSchema = new mongoose.Schema({
    CEP: { type: String, required: true },
    street: { type: String, required: true },
    number: { type: Number, required: true },
    complement: { type: String, required: false },
    city: { type: String, required: true },
    state: { type: String, required: true }
}, { timestamps: true });

const CpfModel = mongoose.model('Cpf', cpfSchema);
const FullNameModel = mongoose.model('FullName', fullNameSchema);
const BirthdayModel = mongoose.model('Birthday', birthdaySchema);
const PhoneNumberModel = mongoose.model('PhoneNumber', phoneNumberSchema);
const AddressModel = mongoose.model('Address', addressSchema);

module.exports = {
    CpfModel,
    FullNameModel,
    BirthdayModel,
    PhoneNumberModel,
    AddressModel
};