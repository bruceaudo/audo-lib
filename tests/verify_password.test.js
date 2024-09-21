const hashPassword = require("../src/auth/hash_password");
const verifyPassword = require("../src/auth/verify_password");

test("Tests if verifyPassword function works correctly", async () => {
  const password = "password";
  const hashedPassword = await hashPassword(password);
  await expect(verifyPassword(hashedPassword, password)).resolves.toBeTruthy();
  await expect(verifyPassword(hashedPassword, password)).resolves.not.toThrow();
});

test("Tests if verifyPassword function works correctly", async () => {
  const password = "password";
  const hashedPassword = await hashPassword(password);
  const wrongPassword = "123";
  await expect(
    verifyPassword(hashedPassword, wrongPassword)
  ).resolves.toBeFalsy();
  await expect(
    verifyPassword(hashedPassword, wrongPassword)
  ).resolves.not.toThrow();
});

test("Tests if verifyPassword function throws error if hash or password not provided", async () => {
  const password = "";
  const hashedPassword = "";
  await expect(verifyPassword(hashedPassword, password)).rejects.toThrow(
    "Both the hash and the password strings should be provided"
  );
});

test("Tests if verifyPassword function throws error if password or hash is not a string", async () => {
  const password = 3;
  const hashedPassword = 3;
  await expect(verifyPassword(hashedPassword, password)).rejects.toThrow(
    "Both the hash and password should be strings"
  );
});
