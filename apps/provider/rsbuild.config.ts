import { defineConfig } from '@rsbuild/core';

import { pluginModuleFederation } from '@module-federation/rsbuild-plugin';
import moduleFederationConfig from './module-federation.config';
import { resolve } from 'path'

const isProduction = process.env.BUILD_ENV === 'production';

export default defineConfig({
  plugins: [pluginModuleFederation(moduleFederationConfig)],
  server: {
    port: 3001,
  },
  output: {
    assetPrefix: isProduction ? '/module-federation-examples/provider/' : 'http://localhost:3001/',
    ...(isProduction ? {
      distPath: {
        root: resolve(__dirname, '../../dist/provider')
      },
      cleanDistPath: false
    } : {}),
  },
  tools: {
    rspack: (config) => {
      config.module = config.module || {};
      config.module.rules = config.module.rules || [];
      config.module.rules.push({
        test: /\.html$/,
        type: 'asset/source',
      });
    },
  },
});
