/**
 * generator/index.js
 *
 * Exports the generators so plop knows them
 */

const fs = require('fs');
const path = require('path');
const shell = require('shelljs');
const { execSync } = require('child_process');
const prettier = path.join(__dirname, '../node_modules/.bin/prettier');
const componentGenerator = require(`./component/${
  shell.env.GENERATOR_TYPE
}/index.js`);
const containerGenerator = require(`./module/${
  shell.env.GENERATOR_TYPE
}/index.js`);
const testUtilGenerator = require(`./testUtil/index.js`);
const loadableUtilGenerator = require(`./loadable/index.js`);
const webpackBaseBabelGenerator = require(`./webpack/base/babel/index.js`);

/**
 * Every generated backup file gets this extension
 * @type {string}
 */
const BACKUPFILE_EXTENSION = 'rbgen';

module.exports = plop => {
   plop.setGenerator('module', containerGenerator);
 
  plop.addHelper('directory', comp => {
    try {
      fs.accessSync(
        path.join(__dirname, `../../app/containers/${comp}`),
        fs.F_OK,
      );
      return `containers/${comp}`;
    } catch (e) {
      return `components/${comp}`;
    }
  });
  plop.addHelper('curly', (object, open) => (open ? '{' : '}'));
  plop.setActionType('prettify', answers => {
    const folderPath = `${path.join(
      `${process.cwd()}/`,
      plop.getHelper('properCase')(answers.name)+"",
      '*.{ts,tsx}',
    )}`;

    try {
      execSync(`${prettier} --write -- "${folderPath}"`);
      return folderPath;
    } catch (err) {
      throw new Error(`Prettier failed`);
    }
  });
};

module.exports.BACKUPFILE_EXTENSION = BACKUPFILE_EXTENSION;
