jest.config.js:
{
  "testEnvironment": "node",
  "collectCoverage": true,
  "coverageDirectory": "coverage",
  "testMatch": ["**/__tests__/**/*.test.js"]
}

__tests__/example.test.js:
test('hello world', () => {
  expect(1 + 1).toBe(2);
});