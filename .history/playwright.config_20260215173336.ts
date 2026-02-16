import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './src/tests',
  use: {
    baseURL: 'https://opensource-demo.orangehrmlive.com',
    headless: false,
    screenshot: 'on',
    video: 'retain-on-failure'
  }
});
