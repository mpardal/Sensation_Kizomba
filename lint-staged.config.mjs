// noinspection JSUnusedGlobalSymbols
// eslint-disable-next-line import/no-default-export
export default {
  '!(.eslintrc.js)*.{js,jsx,ts,tsx}': ['eslint --fix'],
  'src/**/*.{ts,tsx}': () => 'pnpm tsc -p tsconfig.json',
  'src/**/*.{css}': ['prettier --write'],
};
