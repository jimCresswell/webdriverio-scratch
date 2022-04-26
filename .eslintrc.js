module.exports = {
  env: {
    node: true,
    es2021: true,
  },
  plugins: ["wdio"],
  extends: ["eslint:recommended", "plugin:wdio/recommended"],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    "max-len": [1, { code: 150 }],
    quotes: [1, "double"],
  },
};
