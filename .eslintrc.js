module.exports = {
  "extends": [
    "@pauloelias/eslint-config-javascript-standard-core",
    "standard-jsx",
    "prettier",
    "prettier/react",
    "plugin:jsx-a11y/recommended",
  ],
  "parser": "babel-eslint",
  "env": {
    "browser": true,
    "node": true,
    "jest": true
  },
  "rules": {
    "prettier/prettier": [
      "error",
      {
        "semi": false,
        "singleQuote": true
      }
    ]
  },
  "plugins": ["prettier", "html", "jsx-a11y", "react", "react-hooks"]
}
