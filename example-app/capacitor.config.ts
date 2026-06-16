import type { CapacitorConfig } from '@capacitor/cli';

const nativeVersion = '8.0.3';

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
      version: nativeVersion,
    },
  },
};

export default config;
