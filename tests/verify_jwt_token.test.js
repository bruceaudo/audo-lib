const jwt = require("jsonwebtoken");
const verifyJwtToken = require("../src/auth/verify_jwt_token");

// Mocking jwt.verify function
jest.mock("jsonwebtoken");

describe("verifyJwtToken", () => {
  const mockToken = "mockedJwtToken";
  const secret = (process.env.JWT_SECRET = "mockedSecret"); // Mock the secret environment variable

  beforeEach(() => {
    jest.clearAllMocks(); // Clear mocks before each test
  });

  test("should resolve with decoded payload for a valid token", async () => {
    const mockDecoded = { email: "test@test.com", role: "user" };

    // Mock jwt.verify to simulate successful verification
    jwt.verify.mockImplementation((token, secret, callback) => {
      callback(null, mockDecoded); // Simulate a valid decoded token
    });

    const decoded = await verifyJwtToken(mockToken);
    expect(decoded).toEqual(mockDecoded); // Check if the decoded payload is returned
  });

  test("should reject with an error for an invalid or expired token", async () => {
    const mockError = new Error("Invalid or expired token");

    // Mock jwt.verify to simulate token verification failure
    jwt.verify.mockImplementation((token, secret, callback) => {
      callback(mockError, null); // Simulate a failed verification
    });

    await expect(verifyJwtToken(mockToken)).rejects.toThrow(
      "Invalid or expired token"
    ); // Expect rejection with the appropriate error message
  });
});
