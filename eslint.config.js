import js from "@eslint/js";
import tseslint from "typescript-eslint";
import globals from "globals";

export default [
    {
        ignores: ["dist/**", "node_modules/**", "build/**"]
    },
    js.configs.recommended,
    ...tseslint.configs.recommended,
    {
        files: ["**/*.ts", "**/*.js"],
        languageOptions: {
            parser: tseslint.parser,
            globals: {
                ...globals.node,
            },
        },
    },
];