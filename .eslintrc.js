module.exports = {
  root: true,
  extends: ['plugin:react/recommended', 'plugin:react-native/all', 'standard', 'prettier'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'], // Your TypeScript files extension
      parser: '@typescript-eslint/parser',
      plugins: ['@typescript-eslint'],

      // As mentioned in the comments, you should extend TypeScript plugins here,
      // instead of extending them outside the `overrides`.
      // If you don't want to extend any rules, you don't need an `extends` attribute.
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
      ],

      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        project: ['./tsconfig.json'], // Specify it only for TypeScript files
      },
    },
  ],
  plugins: ['@typescript-eslint', 'react', 'react-native', 'no-relative-import-paths'],
  settings: {
    react: {
      pragma: 'React',
      version: 'detect',
    },
  },
  globals: {
    __DEV__: false,
    jasmine: false,
    beforeAll: false,
    afterAll: false,
    beforeEach: false,
    afterEach: false,
    test: false,
    expect: false,
    describe: false,
    jest: false,
    it: false,
  },
  rules: {
    '@typescript-eslint/no-floating-promises': false,
    '@typescript-eslint/ban-ts-ignore': 0,
    '@typescript-eslint/ban-ts-comment': 0,
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/explicit-member-accessibility': 0,
    '@typescript-eslint/explicit-module-boundary-types': 0,
    '@typescript-eslint/indent': 0,
    '@typescript-eslint/member-delimiter-style': 0,
    '@typescript-eslint/no-empty-interface': 0,
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/no-object-literal-type-assertion': 0,
    '@typescript-eslint/no-var-requires': 0,
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
      },
    ],
    'comma-dangle': 0,
    'multiline-ternary': 0,
    'no-undef': 0,
    'no-unused-vars': 0,
    'no-use-before-define': 0,
    'no-global-assign': 0,
    quotes: 0,
    'react-native/no-raw-text': 0,
    'react/no-unescaped-entities': 0,
    'react/prop-types': 0,
    'space-before-function-paren': 0,
    'no-restricted-imports': [
      'error',
      {
        paths: [
          {
            name: 'react-native',
            importNames: ['SafeAreaView'],
            message: 'Import SafeAreaView from react-native-safe-area-context instead',
          },
          {
            name: 'react-native-safe-area-view',
            importNames: ['SafeAreaView'],
            message: 'Import SafeAreaView from react-native-safe-area-context instead',
          },
        ],
      },
    ],
    'no-relative-import-paths/no-relative-import-paths': ['error', { allowSameFolder: true }],
  },
};
