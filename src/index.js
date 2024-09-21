const hashPassword = require("./auth/hash_password");
const validate_user_info = require("../src/auth/validate_user_info");

module.exports = {
  validate: validate_user_info,
  hashPassword: hashPassword,
};
