const validate_user_info = require("../src/auth/validate_user_info");

test("Validates user info with valid email and matching passwords", () => {
  const userInfo = {
    email: "audo401@gmail.com",
    password: "Kbb336p28!",
    confirmPassword: "Kbb336p28!",
  };
  expect(validate_user_info(userInfo)).toBeTruthy();
  expect(() => validate_user_info(userInfo)).not.toThrow();
});

test("Validates user info with valid email and password alone.", () => {
  const userInfo = {
    email: "audo401@gmail.com",
    password: "Kbb336p28!",
  };
  expect(validate_user_info(userInfo)).toBeTruthy();
  expect(() => validate_user_info(userInfo)).not.toThrow();
});

test("Fails with passwords don't match", () => {
  const userInfo = {
    email: "audo401@gmail.com",
    password: "Kbb336p28!",
    confirmPassword: "Kbb336p29!",
  };

  expect(() => validate_user_info(userInfo)).toThrow("Passwords do not match");
});

test("Fails with invalid email format", () => {
  const userInfo = {
    email: "invalid-email",
    password: "Kbb336p28!",
    confirmPassword: "Kbb336p28!",
  };

  expect(() => validate_user_info(userInfo)).toThrow("Invalid email format");
});

test("Fails with Password must be at least 8 characters long, contain at least one uppercase letter and at least one symbol", () => {
  const userInfo = {
    email: "audo401@gmail.com",
    password: "12345",
    confirmPassword: "12345",
  };

  expect(() => validate_user_info(userInfo)).toThrow(
    "Password must be at least 8 characters long, contain at least one uppercase letter and at least one symbol"
  );
});
