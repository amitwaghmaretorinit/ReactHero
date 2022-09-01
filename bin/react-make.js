#! /usr/bin/env node
const shell = require("shelljs");
const fs = require("fs");
const childProcess = require("child_process");
const process = require("process");
const _ = require("lodash");
const path = require("path");

const COMPONENT = "component";
const CONTAINER = "container";
const MODULE = "module";
const WEBPACK_BASE_BABEL = "webpackBaseBabel";
const TEST_UTIL = "tUtil";
const LOADABLE = "loadable";

const generator = path.join(__dirname, "../generators/index.js");
const plopGen = ["--plopfile", generator];

const [, , ...args] = process.argv;
let commandLineArgs = args.toString().split(",");
const stdioInherit = { stdio: "inherit" };

function execShell(commandArray) {
   try {
    childProcess.execFileSync(
      path.join(__dirname, "../node_modules/.bin/plop"),
      commandArray,
      { ...stdioInherit }
    );
   } catch (error) {
     
   }
}

// validate input
if (!commandLineArgs[0]) {
  shell.exec(
    `echo Sorry! react-boss requires an argument to be passed. Run react-boss --help for more details`
  );
  // return;
}

// get the type of generator
shell.env.GENERATOR_TYPE = _.includes(commandLineArgs[0], "t")
  ? "existing"
  : "new";
let directoryName = "react-template";
switch (commandLineArgs[0]) {
  case "init":
    console.log(`React Boss : Creating an application into ${commandLineArgs[1] || 'react_template'}...`)

    shell.exec(
      `git clone  https://github.com/amitwaghmaretorinit/react_template ${commandLineArgs[1] || 'react_template'} --quiet`
    );
    console.log('React Boss : Installing dependencies...')
    shell.exec(`cd ${commandLineArgs[1] || 'react_template'} && npm i --force --silent`)
    console.log('Starting app...')
    shell.exec(`cd ${commandLineArgs[1] || 'react_template'} && npm start`)


    break;
  case "module":
    // execShell(plopGen);
    execShell([...plopGen, MODULE, ..._.drop(commandLineArgs)]);

    break;
  case "component":
    execShell([...plopGen, COMPONENT, ..._.drop(commandLineArgs)]);
    break;

  case "--help":
    shell.echo(
      `Generate tests for existing and new react components\n\n` +
        `init: Create a new react application\n`+
        `module: Create a new CRUD module using schema.json\n`+
        `component: Create a new Component with or without React.memo`
    );
    break;
  case "--all":
    {
      commandLineArgs = _.drop(commandLineArgs);
      if (!commandLineArgs[0] || !commandLineArgs[1] || commandLineArgs[2]) {
        shell.exec(
          `echo Sorry! react-boss --all requires 2 commandLineArgs to be passed. Run react-boss --help for more details`
        );
        // return;
      }
    }
    break;
  default:
    shell.exec(`echo Sorry ${commandLineArgs[0]} is not a valid command`);
    break;
}
