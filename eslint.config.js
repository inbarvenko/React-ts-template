import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";

import eslintReact from "eslint-plugin-react";
import eslintReactHooks from "eslint-plugin-react-hooks";
import eslintReactRefresh from "eslint-plugin-react-refresh";
import prettierPlugin from "eslint-plugin-prettier";
import eslintConfigPrettier from "eslint-config-prettier";
import eslintAutofix from "eslint-plugin-autofix";

/** @type {import("eslint").Linter.Config[]} */
export default tseslint.config(
  { files: ["**/*.{ts,tsx}"] },
  {
    languageOptions: {
      globals: globals.browser,
      parserOptions: {
        project: [
          // "tsconfig.json"
          "tsconfig.node.json",
          "tsconfig.app.json",
        ],
      },
    },
  },
  {
    plugins: {
      "@typescript-eslint": tseslint.plugin,
      "react-hooks": eslintReactHooks,
      react: eslintReact,
      "react-refresh": eslintReactRefresh,
      prettier: prettierPlugin,
      autofix: eslintAutofix,
      "import/order": [
        "error",
        {
          groups: [
            "builtin",
            "external",
            "parent",
            "sibling",
            "index",
            "object",
            "type",
          ],
          pathGroups: [
            {
              pattern: "@/**/**",
              group: "parent",
              position: "before",
            },
          ],
          alphabetize: { order: "asc" },
        },
      ],
    },
  },
  {
    rules: {
      ...eslintConfigPrettier.rules,
      "prefer-const": "error",
      "no-undef": "error",
      "react/self-closing-comp": ["error", { component: true, html: true }],
      "arrow-body-style": ["error", "as-needed"],
      "sort-imports": [
        "error",
        {
          ignoreCase: true,
          ignoreDeclarationSort: true,
        },
      ],
    },
  },
  {
    ignores: ["node_modules", "eslint.config.js"],
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
);
