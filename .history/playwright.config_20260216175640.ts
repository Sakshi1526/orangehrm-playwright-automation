import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './src/tests',

  timeout: 240000, // 4 minutes max per test

  use: {
    baseURL: 'https://opensource-demo.orangehrmlive.com',

    headless: false, // Browser will open

    launchOptions: {
      slowMo: 2000 // 2 seconds delay between actions
    },

    actionTimeout: 100000,
    navigationTimeout: 90000,

    screenshot: 'only-on-failure',
    video: 'retain-on-failure'
  },

  expect: {
    timeout: 15000
  }
});
