// Allow the use of typescript files for gatsby-node, gatsby-browser and gatsby-ssr
require('source-map-support').install();
require('ts-node').register({
  compilerOptions: {
    allowJs: true, // Allow tsx extension
    jsx: 'preserve', // JSX will be transpiled by babel afterwards
    target: 'esnext', // Bebel will transpile
  },
});

module.exports = {
  plugins: ['gatsby-plugin-typescript'],
};
