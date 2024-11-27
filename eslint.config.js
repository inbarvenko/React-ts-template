import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";

import eslintReact from "eslint-plugin-react";
import eslintReactHooks from "eslint-plugin-react-hooks";
import eslintReactRefresh from "eslint-plugin-react-refresh";
import prettierPlugin from "eslint-plugin-prettier";
import eslintConfigPrettier from "eslint-config-prettier";
import eslintAutofix from "eslint-plugin-autofix";
import eslintAsyncAwait from "eslint-plugin-async-await";
import eslintPluginUnicorn from "eslint-plugin-unicorn";
import eslintPluginSimpleImportSort from "eslint-plugin-simple-import-sort";
import eslintSonarjs from "eslint-plugin-sonarjs";

// js airbnb config
// ts and js должны быть одинаковые для style-coding

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
      autofix: eslintAutofix,
      "async-await": eslintAsyncAwait,
      unicorn: eslintPluginUnicorn,
      "simple-import-sort": eslintPluginSimpleImportSort,
      sonarjs: eslintSonarjs,
      prettier: prettierPlugin,
    },
  },
  {
    rules: {
      ...eslintConfigPrettier.rules,

      "unicorn/better-regex": "error",
      "unicorn/consistent-function-scoping": "error",

      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",

      "prefer-const": "error",
      "no-undef": "error",
      "no-instanceof-array": "error",

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
