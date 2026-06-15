import type { CapacitorConfig } from '@capacitor/cli';

import rootPkg from '../package.json';

const config: CapacitorConfig = {
  appId: 'app.capgo.calendar.example',
  appName: 'Capgo Calendar Example',
  webDir: 'dist',
  plugins: {
    SplashScreen: {
      launchAutoHide: false,
    },
    CapacitorUpdater: {
      appId: 'app.capgo.calendar.example',
      autoUpdate: true,
      autoSplashscreen: true,
      directUpdate: 'always',
      version: rootPkg.version,
    },
  },
};

export default config;
