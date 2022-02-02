// playwright.config.ts
import {PlaywrightTestConfig, devices} from '@playwright/test';

const config: PlaywrightTestConfig = {
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  use: {
    video: 'on',
    trace: 'on',
    screenshot: 'only-on-failure',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
  ],
  testDir: './tests',
  reporter: [
    [
      '@zebrunner/javascript-agent-playwright',
      {
        // enabled: true,
        // reportingServerHostname: 'https://webdriver.zebrunner.com',
        // reportingProjectKey: 'DEF',
        // reportingRunDisplayName: 'PW-tests conf',
        // reportingRunBuild: 'alpha-1 conf',
        // reportingRunEnvironment: 'STAGE conf',
        // reportingNotificationNotifyOnEachFailure: true,
        // reportingNotificationSlackChannels: 'channel1,channel2',
        // reportingNotificationMsTeamsChannels: 'channel1,channel2',
        // reportingNotificationEmails: 'channel1,channel2',
        // reportingMilestoneId: '1',
        // reportingMilestoneName: 'test',
        // pwConcurrentTasks: 19,
      },
    ],
  ],
};

export default config;
