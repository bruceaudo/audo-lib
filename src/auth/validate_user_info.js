class ValidationError extends Error {}

/**
 * # Validate user
 *
 * This function takes an object of arguments from the user and validates them.
 * The object can include various fields, such as:
 * - email
 * - password
 * - confirmPassword
 *
 * The function dynamically validates only the fields provided.
 *
 * If all validations pass, the function returns `true`. If any validation fails, it throws an appropriate error.
 *
 * ### Example
 * ```js
 * validate_user({ email: 'test@example.com', password: 'password123' });
 * ```
 *
 * @param {Object} args - An object with user fields to validate.
 * @param {string} [args.email] - The user's email.
 * @param {string} [args.password] - The user's password.
 * @param {string} [args.confirmPassword] - The password confirmation.
 * @returns {boolean} - Returns `true` if all provided inputs are valid.
 * @throws {TypeError} - If an argument is of an invalid type.
 * @throws {ValidationError} - If validation fails (e.g., incorrect email format, password mismatch).
 */
const validate_user_info = ({ email, password, confirmPassword } = {}) => {
  // Validate email if provided
  if (email !== undefined) {
    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(email)) {
      throw new ValidationError("Invalid email format");
    }
  }

  // Validate password and confirmPassword if provided
  if (password !== undefined) {
    const passwordRegex =
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(password)) {
      throw new ValidationError(
        "Password must be at least 8 characters long, contain at least one uppercase letter and at least one symbol"
      );
    }
  }

  if (confirmPassword !== undefined) {
    if (password !== confirmPassword) {
      throw new ValidationError("Passwords do not match");
    }
  }

  // If no validation errors, return true
  return true;
};

module.exports = validate_user_info;
