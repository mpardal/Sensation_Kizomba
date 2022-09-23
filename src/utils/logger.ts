/* eslint-disable no-console */
//import createLogger from 'pino';

/*export const logger = createLogger({
  browser: {
    asObject: true,
  },
  prettyPrint: true,
});*/

export const logger = {
  info: console.log,
  error: console.error,
  debug: console.debug,
  warn: console.warn,
  trace: console.trace,
  log: console.log,
};

/* eslint-enable no-console */
