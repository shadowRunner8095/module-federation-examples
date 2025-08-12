import { defineConfig } from '@rsbuild/core';

import { pluginModuleFederation } from '@module-federation/rsbuild-plugin';
import moduleFederationConfig from './module-federation.config';

export default defineConfig({
  plugins: [pluginModuleFederation(moduleFederationConfig)],
  server: {
    port: 3001,
  },
  output:{
    assetPrefix: 'http://localhost:3001/'
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
