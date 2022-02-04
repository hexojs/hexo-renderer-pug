'use strict';

const path = require('path');
const pug = require('pug');

const configPath = path.join(process.cwd(), 'pug.config');
const defaultConfig = { compile: {} }; // avoids key errors

let hasConfig = true;
try {
  require.resolve(configPath);
} catch {
  hasConfig = false;
}

const config = hasConfig ? require(configPath) : defaultConfig;

// Validate non-standard keys -- e.g. 'compile'.
const hasProp = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop);
const invalidKeys = Object.keys(config).filter(k => !hasProp(defaultConfig, k));
if (invalidKeys.length > 0) {
  throw Error(`Unsupported PUG config keys: ${invalidKeys.join(', ')}`);
}

function pugCompile(data) {
  const opts = {
    ...config.compile,
    filename: data.path // always used
  };
  return pug.compile(data.text, opts);
}

function pugRenderer(data, locals) {
  return pugCompile(data)(locals);
}

pugRenderer.compile = pugCompile;

module.exports = pugRenderer;
