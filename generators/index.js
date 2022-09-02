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
  'new'
}/index.js`);
const containerGenerator = require(`./module/${
  'new'
}/index.js`);
 
/**
 * Every generated backup file gets this extension
 * @type {string}
 */
const BACKUPFILE_EXTENSION = 'rbgen';

module.exports = plop => {
  plop.setGenerator('component', componentGenerator);
  plop.setGenerator('module', containerGenerator);
  
  plop.addHelper('curly', (object, open) => (open ? '{' : '}'));
  plop.addHelper('eq',(a,b)=>a===b)
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
