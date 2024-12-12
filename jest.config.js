/** @type {import('ts-jest').JestConfigWithTsJest} */

export const preset = "ts-jest";
export const testEnvironment = "node";
export const roots = ["<rootDir>/src"];
export const transform = {
  "^.+\\.tsx?$": "ts-jest",
};
export const testRegex = "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$";
export const moduleFileExtensions = ["ts", "tsx", "js", "jsx", "json", "node"];
