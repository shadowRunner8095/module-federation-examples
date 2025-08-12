# Micro-Frontend Lab / Sandbox

This project is a collection of micro-frontend (Micro-FE) examples, designed as a lab or sandbox for experimenting with module federation, dynamic imports, and modern frontend architecture patterns.

## Structure

- **apps/provider**: Provides federated modules and exposes components/services.
- **apps/consumer**: Consumes remote modules from the provider or other sources.
- **apps/module-federation-runtime**: Contains runtime utilities for module federation.

## Features

- Module Federation with Rsbuild/Rspack
- Dynamic import of remote modules (including CDN usage)
- Static asset handling and configuration
- Example modal and UI patterns
- Nginx config for local multi-port development

## Usage

1. Install dependencies:
   ```sh
   pnpm install
   ```
2. Build all apps:
   ```sh
   pnpm build
   ```
3. Start development servers as needed (see each app's README or package.json scripts).

## License

MIT License (see LICENSE file)
