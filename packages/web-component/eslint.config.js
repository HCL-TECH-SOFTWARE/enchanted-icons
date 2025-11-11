import js from "@eslint/js";
import tseslint from "typescript-eslint";
import importPlugin from "eslint-plugin-import";
import jestPlugin from "eslint-plugin-jest";
import promisePlugin from "eslint-plugin-promise";
import litPlugin from "eslint-plugin-lit";
import litA11yPlugin from "eslint-plugin-lit-a11y";
import wcPlugin from "eslint-plugin-wc";
import globals from "globals";

export default tseslint.config(
  {
    ignores: [
        "node_modules/",
        "dist/",
        "coverage/",
        "*.config.js",
        "*.config.cjs",
        "builder.js"
    ],
  },

  js.configs.recommended,

  ...tseslint.configs.recommended,

  {
    plugins: {
      lit: litPlugin,
    },
    rules: {
      ...litPlugin.configs.recommended.rules,
    },
  },

  {
    plugins: {
      "lit-a11y": litA11yPlugin,
    },
    rules: {
      ...litA11yPlugin.configs.recommended.rules,
    },
  },

  {
    plugins: {
      wc: wcPlugin,
    },
    rules: {
      ...wcPlugin.configs.recommended.rules,
    },
  },

  {
    files: ["**/*.test.ts", "**/*.spec.ts"],
    plugins: {
        jest: jestPlugin,
    },
    rules: {
        ...jestPlugin.configs.recommended.rules,
        "jest/no-disabled-tests": "warn",
        "jest/no-focused-tests": "error",
    },
    languageOptions: {
        globals: {
            ...globals.jest,
        }
    }
  },

  {
    plugins: {
        promise: promisePlugin,
    },
    rules: {
        ...promisePlugin.configs.recommended.rules,
        "promise/prefer-await-to-then": "warn",
    }
  },

  {
    files: ["src/**/*.ts"],
    ignores: ["src/preview.ts"],
    languageOptions: {
      parserOptions: {
        project: "./tsconfig.json",
        tsconfigRootDir: import.meta.dirname,
      },
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2021,
      }
    },
    plugins: {
      import: importPlugin,
    },
    settings: {
      "import/resolver": {
        typescript: true,
        node: true,
      }
    },
    rules: {
      "@typescript-eslint/default-param-last": ["error"],
      "@typescript-eslint/no-explicit-any": ["warn", { "ignoreRestArgs": true }],
      "@typescript-eslint/no-unused-vars": [
        "warn", { "vars": "all", "args": "after-used", "varsIgnorePattern": "^_", "argsIgnorePattern": "^_", "ignoreRestSiblings": true }
      ],
      "@typescript-eslint/no-useless-constructor": "error",
      "@typescript-eslint/no-non-null-assertion": "warn",
      "arrow-body-style": ["warn", "as-needed"],
      "class-methods-use-this": "off",
      "default-param-last": "off",
      "import/no-extraneous-dependencies": "off",
      "import/prefer-default-export": "off",
      "max-len": ["warn", { "code": 120, "ignoreUrls": true, "ignoreStrings": true, "ignoreTemplateLiterals": true }],
      "no-async-promise-executor": "error",
      "no-unused-vars": "off",
      "no-shadow": "off",
      "no-undef": "off",
      "no-console": ["warn", { "allow": ["warn", "error", "info"] }],
      "no-useless-constructor": "off",
      "no-empty-function": ["warn", { "allow": ["constructors"] }],
      "no-param-reassign": "warn",
      "import/extensions": "off"
    },
  },
);
