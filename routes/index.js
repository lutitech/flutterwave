const express = require("express");
const {
  validateRuleController, getUser,
} = require("../controller/validate-rule-controller");
const { validatorWare } = require("../middleware/validator-ware");
const router = express.Router();

router.get("/", getUser)

router.post("/validate-rule", validatorWare, validateRuleController);

module.exports = router;
