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
 *  const hash = await hashPassword("password");
 * ```
 *
 * @param { string } password - Password provided by user
 * @returns { Promise<string> } - The hashed password, if the hashing succeeds
 * @throws { HashingError } - When password hashing fails, the HashingError is thrown
 */
const hashPassword = async (password) => {
  if (!password) {
    throw new HashingError("Password is required");
  }
  if (typeof password !== "string") {
    throw new HashingError("Password must be a string");
  }
  try {
    const hash = await argon2.hash(password);
    return hash;
  } catch (err) {
    throw new HashingError(`Password hashing failed: ${err.message}`);
  }
};

module.exports = hashPassword;
