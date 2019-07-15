module.exports = {
  "extends": [
    "@pauloelias/eslint-config-javascript-standard-core",
    "standard-jsx",
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
  "plugins": ["jsx-a11y", "react", "react-hooks"]
}
