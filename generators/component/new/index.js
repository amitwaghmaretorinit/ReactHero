/**
 * Component Generator
 */

/* eslint strict: ["off"] */

('use strict');

 const cwd = process.cwd();

const prompts = [
  {
    type: 'input',
    name: 'name',
    message: 'What should it be called?',
    default: 'Button',
  },
  {
    type: 'confirm',
    name: 'memo',
    default: false,
    message: 'Do you want to wrap your component in React.memo?',
  },
]; 

module.exports = {
  description: 'Add an unconnected component',
  prompts,
  actions: data => {
    // Generate index.js and index.test.js
    const actions = [
      {
        type: 'add',
        path: `${cwd}/{{path}}/{{properCase name}}/index.js`,
        templateFile: './component/index.js.hbs',
        abortOnFail: true,
      },
    ];

 

    return actions;
  },
};
