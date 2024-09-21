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

// Validate user information when logging in
try {
  const isUserValid = audoLib.validate({
    email: "test@email.com",
    password: "Examplepassword12345!",
  });
} catch (error) {
  // Do something with error info
}
```

## Features
