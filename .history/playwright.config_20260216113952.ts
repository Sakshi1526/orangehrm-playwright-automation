import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './src/tests',

  timeout: 60000, // ✅ Increase global test timeout to 60 seconds

  expect: {
    timeout: 10000, // ✅ Wait up to 10 seconds for assertions
  },

  use: {
    baseURL: 'https://opensource-demo.orangehrmlive.com',
    headless: false,

    actionTimeout: 30000,      // ✅ Timeout for each action (click, fill, etc.)
    navigationTimeout: 30000,  // ✅ Timeout for page navigation

    screenshot: 'on',
    video: 'retain-on-failure'
  }
});
