import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './src/tests',

  timeout: 90000, // 90 sec max per test (safe for slow site)

  expect: {
    timeout: 100000, // assertion wait 10 sec
  },

  use: {
    baseURL: 'https://opensource-demo.orangehrmlive.com',

    headless: true, // ⚡ Faster than headed mode

    actionTimeout: 20000,      // 20 sec for click/fill
    navigationTimeout: 60000,  // 60 sec for page load

    screenshot: 'only-on-failure',
    video: 'retain-on-failure'
  }
});
