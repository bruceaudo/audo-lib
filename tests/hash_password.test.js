const hashPassword = require("../src/auth/hash_password");

test("Tests if hashPassword function works correctly", async () => {
  const password = "password";
  await expect(hashPassword(password)).resolves.not.toEqual(password);
  await expect(hashPassword(password)).resolves.not.toThrow();
});

test("Tests if hashPassword function throws error if password not provided", async () => {
  const password = "";
  await expect(hashPassword(password)).rejects.toThrow(
    "No password string has been provided"
  );
});

test("Tests if hashPassword function throws error if password is not a string", async () => {
  const password = 3;
  await expect(hashPassword(password)).rejects.toThrow(
    "Password must be a string"
  );
});
