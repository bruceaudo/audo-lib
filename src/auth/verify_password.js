const argon2 = require("argon2");
class PasswordVerificationError extends Error {
  constructor(message) {
    super(message);
    this.name = "PasswordVerificationError";
  }
}

/**
 * # Verify password
 *
 * This function compares the password provided by user against the hash (Probably stored in a database).
 *
 * ### Example
 * ```js
 *  const isPasswordValid = await verifyPassword("hash","password");
 * ```
 *
 * @param {string} hash - The password hash
 * @param {string} password - The password that needs to be verified against the password hash
 * @returns {Promise<boolean>} - Returns true if password and hash match and false otherwise
 * @throws { PasswordVerificationError } - When an error occurs during password verification
 */
const verifyPassword = async (hash, password) => {
  if (!hash || !password) {
    throw new PasswordVerificationError(
      "Both the hash and the password strings should be provided"
    );
  }
  if (typeof password !== "string" || typeof hash !== "string") {
    throw new PasswordVerificationError(
      "Both the hash and password should be strings"
    );
  }
  try {
    return await argon2.verify(hash, password);
  } catch (err) {
    throw new PasswordVerificationError(
      `Password verification failed with err: ${err.message}`
    );
  }
};

module.exports = verifyPassword;
