module.exports = {
    "extends": "airbnb",
    "parser": "babel-eslint",
    "rules": {
        "react/prefer-stateless-function": [0],
        "max-len": [2, {"code": 160, "tabWidth": 4, "ignoreUrls": true}],
        "indent": [2, 4, { "SwitchCase": 1 }],
        "react/jsx-indent": [2, 4],
        "react/jsx-indent-props": [2, 4],
        "react/jsx-filename-extension": ["error", { "extensions": [".js", ".jsx"] }],
        "react/forbid-prop-types": [2, { "forbid": ["any"] }],
        "no-console": 0,
        "no-use-before-define": [
			2,
			{
				"functions": false,
				"classes": true,
				"variables": true
			}
        ],
        "object-curly-newline": [0, { "minProperties": 5 }],
        "import/prefer-default-export": "off",
        "class-methods-use-this": [0],
        "no-case-declarations": "off"
    },
    "globals": { "fetch": false }
};