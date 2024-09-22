const jwt = require("jsonwebtoken");
require("dotenv").config();

class JwtGenerationError extends Error {
  constructor(message) {
    super(message);
    this.name = "JwtGenerationError";
  }
}

/**
 * # Get Jwt Token
 *
 * This function takes a payload from the user and genertes a JWT token.
 *
 * ### Example
 * ```js
 *  const token = await getJwtToken({email: "email@test.com", role: "user"});
 * ```
 *
 * @param  {Object} payload - The payload provided by the user
 * @returns {Promise<string>} - The token string
 * @throws { JwtGenerationError } - If an error occurs during the jwt token generation
 */
const getJwtToken = async (payload) => {
  try {
    const token = await new Promise((resolve, reject) => {
      jwt.sign(
        payload,
        process.env.JWT_SECRET,
        { algorithm: "HS256" },
        (err, token) => {
          if (err) reject(new JwtGenerationError(err.message));
          resolve(token);
        }
      );
    });
    return token;
  } catch (err) {
    throw new JwtGenerationError(err.message);
  }
};

module.exports = getJwtToken;
