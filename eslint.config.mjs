import nextPlugin from "eslint-config-next";

const eslintConfig = [
  ...nextPlugin,
  {
    rules: {
      "@typescript-eslint/no-explicit-any": "off",
      "react/no-children-prop": "off",
      "react-hooks/exhaustive-deps": "off",
      "react-hooks/purity": "off",
      "react-hooks/incompatible-library": "off",
      "@typescript-eslint/no-unused-vars": "off",
      "@next/next/no-img-element": "off",
    },
  },
];

export default eslintConfig;
