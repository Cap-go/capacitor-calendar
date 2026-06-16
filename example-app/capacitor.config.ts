import type { CapacitorConfig } from '@capacitor/cli';
import { existsSync, readFileSync } from 'node:fs';
import { resolve } from 'node:path';

import pkg from './package.json';

const rootPackagePath = resolve(process.cwd(), '..', 'package.json');
const rootPkg = existsSync(rootPackagePath)
  ? JSON.parse(readFileSync(rootPackagePath, 'utf8'))
  : pkg;
const nativeVersion = rootPkg.version || pkg.version;

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
