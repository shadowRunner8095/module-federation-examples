import { createModuleFederationConfig } from '@module-federation/rsbuild-plugin';

export default createModuleFederationConfig({
  name: 'modal',
  exposes: {
    '.': './src/index.ts',
  },
  shared: {
    react: { singleton: true },
    'react-dom': { singleton: true },
  },
  getPublicPath:'function(){return "http://localhost:3001/"}',
});
