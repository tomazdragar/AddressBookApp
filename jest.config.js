const {defaults} = require('jest-config')
module.exports = {
    preset: 'ts-jest',
    roots: [
        "<rootDir>/src"
    ],
    moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts', 'tsx'],
    // Setup Enzyme
    snapshotSerializers: ["enzyme-to-json/serializer"],
    setupFilesAfterEnv: ["<rootDir>/src/setupEnzyme.tsx"]
}