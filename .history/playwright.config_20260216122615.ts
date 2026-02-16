import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './src/tests',

  timeout: 50 * 1000, // 90 sec max per test (safe for slow site)

  expect: {
    timeout: 10000, // assertion wait 10 sec
  },

  use: {
    baseURL: 'https://opensource-demo.orangehrmlive.com',

    headless: true, // ⚡ Faster than headed mode

    actionTimeout: 120000,      // 20 sec for click/fill
    navigationTimeout: 120000,  // 60 sec for page load

    screenshot: 'only-on-failure',
    video: 'retain-on-failure'
  }
});
