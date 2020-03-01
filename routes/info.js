const express = require("express");
const router = express.Router();
const {
  createCpf,
  createFullName,
  createBirthday,
  createPhoneNumber,
  createAddress
} = require("../services/info/infoController");

router.post("/cpf", createCpf);
router.post("/full-name", createFullName);
router.post("/birthday", createBirthday);
router.post("/phone-number", createPhoneNumber);
router.post("/address", createAddress);

module.exports = router;