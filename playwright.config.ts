import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './src/tests',

  timeout: 240000,
  retries: 1,   

  use: {
    baseURL: 'https://opensource-demo.orangehrmlive.com',

    headless: false,  

    launchOptions: {
      slowMo: 1000   
    },

    trace: 'on-first-retry',  

    screenshot: 'only-on-failure',
    video: 'retain-on-failure',

    actionTimeout: 100000,
    navigationTimeout: 90000
  },

  expect: {
    timeout: 15000
  }
});
