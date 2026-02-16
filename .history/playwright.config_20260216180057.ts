import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './src/tests',

  timeout: 240000,
  retries: 1,   // Required for on-first-retry trace

  use: {
    baseURL: 'https://opensource-demo.orangehrmlive.com',

    headless: false,  // Browser open hoil

    launchOptions: {
      slowMo: 1000   // 1 sec delay
    },

    trace: 'on-first-retry',  // 👈 Trace enable

    screenshot: 'only-on-failure',
    video: 'retain-on-failure',

    actionTimeout: 100000,
    navigationTimeout: 90000
  },

  expect: {
    timeout: 15000
  }
});
