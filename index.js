//packages required for application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "What is your project title?",
    name: "title",
  },
  {
    type: "input",
    message: "What should go in the table of contents?",
    name: "table",
  },
  {
    type: "input",
    message: "Provide a brief description of your project",
    name: "description",
  },
  {
    type: "input",
    message: "What command should be run for project dependencies?",
    name: "dependencies",
    default: "npm i",
  },
  {
    type: "input",
    message: "Provide usage information for your project",
    name: "usage",
  },
  {
    type: "input",
    message: "Describe contribution guidelines for your project",
    name: "contribution",
  },
  {
    type: "input",
    message: "What command should be run for tests?",
    name: "tests",
    default: "npm run tests",
  },
  {
    type: "list",
    message: "What type of license is your project covered under?",
    name: "license",
    choices: [
      "GNU AGPLv3",
      "GNU GPLv3",
      "GNU LGPLv3",
      "Mozilla Public License 2.0",
      "Apache License 2.0",
      "MIT License",
      "Boost Software License 1.0",
      "The Unlicense",
    ],
  },
  {
    type: "input",
    message: "What is your GitHub username?",
    name: "github",
  },
  {
    type: "input",
    message: "What is your email address?",
    name: "email",
  },
];

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
  // present the user with questions
  inquirer.prompt(questions).then((data) => {
    const markdown = generateMarkdown(data);
    fs.writeFile("README.md", markdown, (error) => {
      error ? console.log(error) : console.log("File created!");
    });
  });
}
// Function call to initialize app
init();
