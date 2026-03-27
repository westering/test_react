import type { Config } from 'jest'

const config: Config = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  roots: ['<rootDir>/src'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  moduleNameMapper: {
    '^@/.*\\.(svg|png|jpg|jpeg|gif|webp)$': '<rootDir>/src/shared/config/jest/fileMock.ts',
    '^.+\\.(svg|png|jpg|jpeg|gif|webp)$': '<rootDir>/src/shared/config/jest/fileMock.ts',
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  transform: {
    '^.+\\.(ts|tsx)$': [
      'ts-jest',
      {
        tsconfig: '<rootDir>/tsconfig.test.json',
      },
    ],
  },
}

export default config
