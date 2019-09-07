module.exports = {
    env: {
        es6: true
    },
    parser: "@typescript-eslint/parser",
    parserOptions: {
        sourceType: "module"
    },
    plugins: ["react","typescript"],
    rules:{
        "indent": ["error", 2]
    }
};
