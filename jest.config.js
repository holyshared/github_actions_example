module.exports = {
  roots: ["<rootDir>/src"],
  transform: {
    "^.+\\.ts?$": "ts-jest"
  },
  globals: {
    "ts-jest": {
      tsConfig: "test.tsconfig.json"
    }
  },
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.ts?$",
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node']
};