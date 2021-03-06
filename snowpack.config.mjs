/* eslint-disable import/no-anonymous-default-export */
/** @type {import("snowpack").SnowpackUserConfig } */
export default {
    mount: {
      public: { url: '/', static: true },
      src: { url: '/dist' },
    },
    plugins: [
      '@snowpack/plugin-react-refresh',
      '@snowpack/plugin-dotenv',
      [
        '@snowpack/plugin-typescript',
        {
          /* Yarn PnP workaround: see https://www.npmjs.com/package/@snowpack/plugin-typescript */
          ...(process.versions.pnp ? { tsc: 'yarn pnpify tsc' } : {}),
        },
      ],
      'snowpack-plugin-relative-css-urls',
      '@snowpack/plugin-postcss',
    ],
    routes: [
      /* Enable an SPA Fallback in development: */
      { match: 'routes', src: '.*', dest: '/index.html' },
    ],
    optimize: {
      /* Example: Bundle your final build: */
      // "bundle": true,
    },
    packageOptions: {
      /* ... */
    },
    devOptions: {
      /* ... */
    },
    buildOptions: {
      // https://github.com/snowpackjs/snowpack/issues/2849
      sourcemap: 'inline',
    },
  };
  