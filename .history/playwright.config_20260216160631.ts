import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './src/tests',

  timeout: 240000, // 4 minutes max

  //retries: 1,

  use: {
    baseURL: 'https://opensource-demo.orangehrmlive.com',
    headless: true,
    actionTimeout: 100000,
    navigationTimeout: 90000,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure'
  },

  expect: {
    timeout: 15000
  }
});
