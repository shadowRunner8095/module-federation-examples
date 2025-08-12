import { createModuleFederationConfig } from '@module-federation/rsbuild-plugin';

const isProduction = process.env.BUILD_ENV === 'production';

export default createModuleFederationConfig({
  name: 'modal',
  exposes: {
    '.': './src/index.ts',
  },
  shared: {
    react: { singleton: true },
    'react-dom': { singleton: true },
  },
  getPublicPath: `function(){ return ${isProduction
    ? '/module-federation-examples/provider/'
    : 'http://localhost:3001/'}}`,
});
