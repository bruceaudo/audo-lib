const jwt = require("jsonwebtoken");

class JwtVerificationError extends Error {
  constructor(message) {
    super(message);
    this.name = "JwtVerificationError";
  }
}

/**
 * # Verify Jwt Token
 *
 * This function takes a JWT token and decodes it to get the original data
 *
 * ```js
 * const payload = await verifyJwtToken(token);
 * ```
 *
 * @param {string} token - The JWT token that needs to be decoded
 * @returns {Promise<Object>} - The payload object is returned
 * @throws { JwtVerificationError } - This error is thrown when an error occurs during the decoding
 */
const verifyJwtToken = (token) => {
  const secret = process.env.JWT_SECRET;

  return new Promise((resolve, reject) => {
    jwt.verify(token, secret, (err, decoded) => {
      if (err) {
        return reject(
          new JwtVerificationError("Invalid or expired token: ", err)
        );
      }
      resolve(decoded);
    });
  });
};

module.exports = verifyJwtToken;
