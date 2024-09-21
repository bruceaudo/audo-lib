# audo-lib

This is a library that provides utility functions that are used for most backend web development projects.

## Table of Contents

1. [Installation](#installation)
2. [Usage](#usage)
3. [Features](#features)
4. [Contributing](#contributing)
5. [License](#license)

## Installation

```bash
npm install audo-lib
```

## Usage

```js
const audoLib = require("audo-lib");
```

## Features

1. ### Validating user input

```js
const audoLib = require("audo-lib");

try {
  const isUserValid = audoLib.validate({
    email: "test@email.com",
    password: "PAssword12345!",
    confirmPassword: "PAssword12345!",
  });
} catch (error) {
  //...
}
```

2. ### Hashing passwords

```js
const audoLib = require("audo-lib");

const password = "PAssword12345!";

// Wrap this in an async function
try {
  const isUserValid = await audoLib.hashPassword(password);
} catch (error) {
  //...
}
```

3. ### Verifying passwords

```js
const audoLib = require("audo-lib");

const password = "PAssword12345!";
const hashedPassword = "sfd63dgevuqdt3fq376dgev" // Hash from a database etc

// Wrap this in an async function
try {
  const isPasswordCorrect = await audoLib.verifyPassword(hashedPassword, password);
} catch (error) {
  //...
}
```
