const argon2 = require("argon2");
class HashingError extends Error {
  constructor(message) {
    super(message);
    this.name = "HashingError";
  }
}

/**
 * # Hash password
 *
 * This function receives a password string and hashes it.
 *
 * ### Example
 * ```js
 *  await hashPassword("password");
 * ```
 *
 * @param { string } password - Password provided by user
 * @returns { string } - The hashed password, if the hashing succeeds
 * @throws { HashingError } - When password hashing fails, the HashingError is thrown
 */
const hashPassword = async (password) => {
  if (!password) {
    throw new HashingError("No password string has been provided");
  }
  if (typeof password !== "string") {
    throw new HashingError("Password must be a string");
  }
  try {
    const hash = await argon2.hash(password);
    return hash;
  } catch (err) {
    throw new HashingError(err.message);
  }
};

module.exports = hashPassword;
