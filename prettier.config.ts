/** @type {import('prettier').Config} */
export const config = {
  importOrder: [
    "",
    "<THIRD_PARTY_MODULES>",
    "",
    "^types$",
    "^@/shared/(.*)$",
    "^@/lib/(.*)$",
    "^@/hooks/(.*)$",
    "^@/components/ui/(.*)$",
    "^@/components/(.*)$",
    "",
    "^[./]",
  ],
  importOrderParserPlugins: ["typescript", "jsx", "decorators-legacy"],
  plugins: ["@ianvs/prettier-plugin-sort-imports"],
};
