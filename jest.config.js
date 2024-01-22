/** @type {import('@jest/types').Config.InitialOptions} */
module.exports = {
  preset: 'react-native',
  setupFilesAfterEnv: ['./jest-setup-after-env.js'],
  modulePathIgnorePatterns: ['e2e'],
  coveragePathIgnorePatterns: ['constants.tsx'],
};
