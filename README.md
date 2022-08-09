# @zmzhoi/eslint-config-react

> This package is a shareable eslint config for react project.

## Notice

- Dependencies:
  ```
  {
    "eslint-config-airbnb": "19.0.4",
    "eslint-config-prettier": "8.5.0"
  }
  ```
- Required version of `eslint` is : `^7.32.0` || `^8.2.0`

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
