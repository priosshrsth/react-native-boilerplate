// eslint-disable-next-line @typescript-eslint/no-var-requires
const tsconfig = require('./tsconfig.json');

const pathAlias = tsconfig.compilerOptions.paths;

const aliases = {};
for (const alias in pathAlias) {
  const resolvedPath = pathAlias[alias][0];
  aliases[alias.replace('/*', '')] = resolvedPath.replace('/*', '');
}

/** @type {import('@babel/core').TransformOptions['plugins']} */
const plugins = [
  [
    /** Enables baseUrl: "./" option in tsconfig.json to work @see https://github.com/entwicklerstube/babel-plugin-root-import */
    'babel-plugin-root-import',
    {
      paths: [
        {
          rootPathPrefix: 'app/',
          rootPathSuffix: 'app',
        },
        {
          rootPathPrefix: 'assets/',
          rootPathSuffix: 'assets',
        },
      ],
    },
  ],
  /** react-native-reanimated web support @see https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/installation/#web */
  '@babel/plugin-proposal-export-namespace-from',
  [
    'module-resolver',
    {
      alias: aliases,
    },
  ],
  /** NOTE: This must be last in the plugins @see https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/installation/#babel-plugin */
  'react-native-reanimated/plugin',
];

/** @type {import('@babel/core').TransformOptions} */
module.exports = {
  presets: ['babel-preset-expo'],
  env: {
    production: {},
  },
  plugins,
};
