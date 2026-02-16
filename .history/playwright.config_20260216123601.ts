import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './src/tests',

  timeout: 180000, // 3 minutes max per test

  expect: {
    timeout: 15000,
  },

  use: {
    baseURL: 'https://opensource-demo.orangehrmlive.com',

    headless: true, // faster

    actionTimeout: 30000,       // 30 sec per click/fill
    navigationTimeout: 90000,   // 90 sec for slow navigation

    screenshot: 'only-on-failure',
    video: 'retain-on-failure'
  }
});
