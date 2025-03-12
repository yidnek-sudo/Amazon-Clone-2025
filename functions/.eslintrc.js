module.exports = {
  env: {
    es6: true,
    node: true,
  },
  parserOptions: {
    "ecmaVersion": 2018,
  },
  extends: [
    "eslint:recommended",
    "google",
  ],
  rules: {
    "no-restricted-globals": ["error", "name", "length"],
    "prefer-arrow-callback": "error",
    "quotes": ["error", "double", {"allowTemplateLiterals": true}],
  },
  overrides: [
    {
      files: ["**/*.spec.*"],
      env: {
        mocha: true,
      },
      rules: {},
    },
  ],
  globals: {},
};

// module.exports = {
//   env: {
//     node: true, // ✅ Enables Node.js global variables like require, module, process
//     es6: true,
//   },
//   extends: ["eslint:recommended"],
//   rules: {
//     "no-unused-vars": "warn", // ✅ Change to warning instead of error
//     "no-undef": "off", // ✅ Disables errors for require, module, exports, etc.
//   },
// };
