const getJwtToken = require("../src/auth/get_jwt_token");
const jwt = require("jsonwebtoken");

// Mocking jwt.sign function
jest.mock("jsonwebtoken");

describe("getJwtToken function", () => {
  beforeEach(() => {
    jest.clearAllMocks(); // Clear mocks before each test
  });

  test("should generate a JWT token for valid payload", async () => {
    const mockPayload = { email: "test@test.com", role: "user" };
    const mockToken = "mockedJwtToken";

    // Mock jwt.sign to simulate successful token generation
    jwt.sign.mockImplementation((payload, secret, options, callback) => {
      callback(null, mockToken); // Simulate successful token generation
    });

    const token = await getJwtToken(mockPayload);
    expect(token).toBe(mockToken); // Check that token matches the mocked one
  });

  test("should throw JwtGenerationError if jwt.sign fails", async () => {
    const mockPayload = { email: "test@test.com", role: "user" };
    const mockError = new Error("JWT generation failed");

    // Mock jwt.sign to simulate an error
    jwt.sign.mockImplementation((payload, secret, options, callback) => {
      callback(mockError, null); // Simulate error during token generation
    });

    await expect(getJwtToken(mockPayload)).rejects.toThrow(
      "JWT generation failed"
    ); // Expect a rejection with the error message
  });

  test("should throw JwtGenerationError if no secret is provided", async () => {
    const mockPayload = { email: "test@test.com", role: "user" };

    // Mock jwt.sign to simulate a missing secret or failure
    jwt.sign.mockImplementation((payload, secret, options, callback) => {
      callback(new Error("secretOrPrivateKey must be provided"), null);
    });

    await expect(getJwtToken(mockPayload)).rejects.toThrow(
      "secretOrPrivateKey must be provided"
    );
  });
});
