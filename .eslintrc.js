module.exports = {
    parser:  '@typescript-eslint/parser',
    extends:  [
        'plugin:@typescript-eslint/recommended',
    ],
    parserOptions:  {
        ecmaVersion:  2018,
        sourceType:  'module',
    },
    rules:  {
        "indent": ["error", 4],
        "linebreak-style": ["error", "unix"],
        "quotes": ["error", "double"],
        "semi": ["error", "always"]
    },
};
