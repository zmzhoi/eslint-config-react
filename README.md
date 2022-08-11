# @zmzhoi/eslint-config-react

> This package is a eslint sharable config for `React` project. 👍

## Notice❗️

- `Dependencies`:
  ```
  {
    "@babel/eslint-parser": "7.18.9",
    "eslint-config-airbnb": "19.0.4",
    "eslint-config-prettier": "8.5.0"
  }
  ```

- `@zmzhoi/eslint-config-react` requires belows:
  - `eslint : ^7.32.0 || ^8.2.0`
  - `@babel/core : >= 7.11.0`

- You must have babel config file(`eg. .babelrc`) in the root folder of your project.
  
## Usage

Installation:

```
  npm install -D @zmzhoi/eslint-config-react
```

Then create `.eslintrc.js` file with following contents in the root folder of your project:
`.eslintrc.js`

```
module.exports = {
  extends: ['@zmzhoi/eslint-config-react'],
  rules: {
    // Add rules that you want to overwrite
  }
};
```

## LICENSE

[MIT.](LICENSE)
