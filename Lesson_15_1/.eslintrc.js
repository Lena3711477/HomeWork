module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es2021": true,
         mocha: true,
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest"
    },
    "plugins": [
        "react"
    ],
    "rules": {
       
        "quotes": ["error", "single"], // использовать одинарные кавычки
        "no-tabs": "error" // символы табуляции в коде запрещена везде 
    }
}
