'use strict';

const path = require('path');
const pug = require('pug');

const configPath = path.join(process.cwd(), 'pug.config');
const defaultConfig = { compile: {} }; // avoids key errors

let config;
try {
  // require might fail
  config = { ...defaultConfig, ...require(configPath) };
} catch {
  config = defaultConfig;
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
