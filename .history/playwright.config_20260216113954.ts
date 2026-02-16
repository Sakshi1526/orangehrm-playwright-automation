import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './src/tests',

  timeout: 30000,

  expect: {
    timeout: 5000,
  },

  use: {
    baseURL: 'https://opensource-demo.orangehrmlive.com',
    headless: true,
    actionTimeout: 10000,
    navigationTimeout: 15000,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure'
  }
});
