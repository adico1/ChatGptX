import { chrome } from 'jest-chrome';
import '@testing-library/jest-dom';

// Add any other testing libraries or configuration here.

// Mock the chrome API
Object.assign(global, require('jest-chrome'))

// Suppress console errors/warnings in test output
const originalError = console.error;
beforeAll(() => {
  console.error = (...args: any[]) => {
    if (typeof args[0] === 'string' && args[0].includes('Error: Uncaught [Error: Unable to access document.body')) {
      return;
    }
    originalError.call(console, ...args);
  };
});