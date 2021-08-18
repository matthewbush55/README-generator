// TODO: Include packages needed for this application
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
    name: "contents",
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
    choices: ["MIT", "lic", "lic2"],
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
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
  // present the user with questions
  inquirer.prompt(questions).then((data) => {
    fs.writeFile("README.md", JSON.stringify(data), (error) => {
      error ? console.log(error) : console.log("File created!");
    });
  });
}
// Function call to initialize app
init();
