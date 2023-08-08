// module.exports = {
//   env: {
//     browser: true,
//     es2021: true,
//   },
//   extends: [
//     "eslint:recommended",
//     "plugin:@typescript-eslint/recommended",
//     "plugin:react/recommended",
//     "airbnb",
//     "airbnb-typescript",
//     "plugin:prettier/recommended",
//   ],
//   overrides: [
//     {
//       env: {
//         node: true,
//       },
//       files: [".eslintrc.{js,cjs}"],
//       parserOptions: {
//         sourceType: "script",
//       },
//     },
//   ],
//   parser: "@typescript-eslint/parser",
//   parserOptions: {
//     ecmaFeatures: {
//       jsx: true,
//     },
//     ecmaVersion: "latest",
//     sourceType: "module",
//     project: ["./tsconfig.json"],
//   },
//   plugins: ["@typescript-eslint", "react"],
//   rules: {
//     "prettier/prettier": [
//       "error",
//       {
//         endOfLine: "auto",
//       },
//     ],
//     "semi":"off",
//     "import/prefer-default-export": "off",
//     "react/require-default-props": [0],
//     "react/function-component-definition": [
//       2,
//       { namedComponents: "arrow-function" },
//     ],
//   },
// };
