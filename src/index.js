const hashPassword = require("./auth/hash_password");
const validate_user_info = require("../src/auth/validate_user_info");
const verifyPassword = require("./auth/verify_password");

module.exports = {
  validate: validate_user_info,
  hashPassword: hashPassword,
  verifyPassword: verifyPassword,
};
