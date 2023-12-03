module.exports = {
    testEnvironment: 'node',
    modulePaths: ['<rootDir>/src/app/__tests__'],
    transform: {
      '^.+\\.tsx?$': 'babel-jest',
    },
  };