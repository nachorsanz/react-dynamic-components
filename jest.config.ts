import type {Config} from 'jest';
import {defaults} from 'jest-config';


const config: Config = {
    verbose: true,
    moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts', 'tsx'],
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
    },
    testMatch: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[tj]s?(x)'],
    testPathIgnorePatterns: ['/node_modules/', '/dist/'],

    globals: {
        'ts-jest': {
            tsconfig: 'tsconfig.json',
        },
    },

};

export default config;