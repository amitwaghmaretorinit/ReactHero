/**
 * Container Generator
 */

const cwd = process.cwd();
const fs = require("fs");

module.exports = {
  description: "Add a module",
  prompts: [
    {
      type: "input",
      name: "name",
      message: "What should it be called?",
      default: "Form",
    },

    {
      type: "file",
      name: "schema",
      default: "schema.json",
      message: "Schema File (schema.json)",
    },
  ],
  actions: (data) => {
    if (data.schema && fs.existsSync(`${cwd}/${data.schema}`)) {
      const rawdata = fs.readFileSync(`${cwd}/${data.schema}`);
      const parsedData = JSON.parse(rawdata);
      data.schemaData = parsedData.crud;
      data.list = parsedData.list;
    }

    const actions = [
      {
        type: "add",
        path: `${cwd}/{{path}}/{{properCase name}}/index.tsx`,
        templateFile: "./module/index.js.hbs",
        abortOnFail: true,
      },
    ];

    actions.push({
      type: "add",
      path: `${cwd}/{{path}}/{{properCase name}}/AddEdit{{properCase name}}Page.tsx`,
      templateFile: "./module/edit.js.hbs",
      abortOnFail: true,
    });
    if (data.schemaData) {
      actions.push({
        type: "add",
        path: `${cwd}/{{path}}/{{properCase name}}/schema.ts`,
        templateFile: "./module/schema.js.hbs",
        abortOnFail: true,
      });
    }
    if (data.list) {
      actions.push({
        type: "add",
        path: `${cwd}/{{path}}/{{properCase name}}/helper.tsx`,
        templateFile: "./module/helper.js.hbs",
        abortOnFail: true,
      });
    }

    actions.push({ type: "prettify", path: `{{path}}/` });
    return actions;
  },
};
