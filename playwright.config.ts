import path from 'node:path';
import type { PlaywrightTestConfig } from '@playwright/test';
import { devices } from '@playwright/test';

const port = process.env.PORT || 3000;
const testServerBaseUrl = `http://localhost:${port}`;

const config: PlaywrightTestConfig = {
  timeout: 30_000,
  testDir: path.join(__dirname, 'e2e'),
  retries: 0,
  outputDir: path.join(__dirname, 'test-results'),
  webServer: {
    command: 'pnpm dev',
    url: testServerBaseUrl,
    timeout: 120_000,
    reuseExistingServer: !process.env.CI,
  },
  use: {
    baseURL: testServerBaseUrl,
    trace: 'retry-with-trace',
    // All available context options: https://playwright.dev/docs/api/class-browser#browser-new-context
    // contextOptions: {
    //   ignoreHTTPSErrors: true,
    // },
  },
  projects: [
    {
      name: 'Desktop Chrome',
      use: {
        ...devices['Desktop Chrome'],
      },
    },
  ],
};

export default config;
