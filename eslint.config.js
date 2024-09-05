import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import eslintConfigPrettier from "eslint-config-prettier";
import eslintPluginReactHooks from "eslint-plugin-react-hooks";

export default [
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"], ignores: ["dist"] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    ...pluginReact.configs.flat.recommended,
    settings: { react: { version: "detect" } },
    plugins: {
      "react-hooks": eslintPluginReactHooks,
    },
    rules: {
      "react/react-in-jsx-scope": "off", // React v17+ does not require importing React
      ...eslintPluginReactHooks.configs.recommended.rules,
    },
  },
  eslintConfigPrettier,
];
