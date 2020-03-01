const {
  CpfModel,
  FullNameModel,
  BirthdayModel,
  PhoneNumberModel,
  AddressModel
} = require("../../models/infoModel");

async function createCpfModel(cpf) {
  //return await CpfModel.update({ cpf }, { cpf }, { upsert: true });
  return await CpfModel.create(cpf)
}

async function createFullNameModel(fullName) {
  return await FullNameModel.create(fullName);
}

async function createBirthdayModel(birthday) {
  return await BirthdayModel.create(birthday);
}

async function createPhoneNumberModel(phoneNumber) {
  return await PhoneNumberModel.create(phoneNumber);
}

async function createAddressModel(address) {
  return await AddressModel.create(address);
}

module.exports = {
  createCpfModel,
  createFullNameModel,
  createBirthdayModel,
  createPhoneNumberModel,
  createAddressModel
};
