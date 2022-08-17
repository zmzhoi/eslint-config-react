# @zmzhoi/eslint-config-react

This package is a eslint sharable config for `React` project. 👍

## Notice❗️

- Peer dependencies:
  - `eslint` : ^8.0.0
- Dependencies
  - `@babel/core` : ^7.18.10,
  - `@babel/eslint-parser` : ^7.18.9,
  - `@typescript-eslint/eslint-plugin` : ^5.33.1,
  - `@typescript-eslint/parser` : ^5.33.1,
  - `eslint-config-prettier` : ^8.5.0,
  - `eslint-plugin-import` : ^2.26.0,
  - `eslint-plugin-jsx-a11y` : ^6.6.1,
  - `eslint-plugin-react` : ^7.30.1,
  - `eslint-plugin-react-hooks` : ^4.6.0

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
