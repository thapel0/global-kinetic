'use strict'

const TEST_CONFIG = {
    testEnvirnmnet: 'node',
    verbose: true,
    testRegex: `${__dirname}/.*\\.test`,
    testPathIgnorePatterns: ['<rootDir>/node_modules/'],
    setupFilesAfter: ['jest.setup.js'],
    testRunner: 'jest-circus/runner'
   // globalTeardown: '<rootDir>/jest.teardown',
};

module.exports = {TEST_CONFIG} ;
