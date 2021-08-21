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
    message:
      "Provide a brief description of your project (motivation for building, problem(s) it solves, what did you learn, etc.)",
    name: "description",
  },
  {
    type: "input",
    message: "What steps and/or commands are required to install your project",
    name: "installation",
    default: "npm i",
  },
  {
    type: "input",
    message: "Provide instructions on how to use your project",
    name: "usage",
  },
  {
    type: "input",
    message: "What command should be used to run tests?",
    name: "tests",
    default: "npm run tests",
  },
  {
    type: "input",
    message: "Describe how someone can contribute to your project",
    name: "contributing",
  },
  {
    type: "list",
    message: "What type of license is your project covered under?",
    name: "license",
    choices: ["None", "Apache 2.0", "BSD 3", "GNU GPL v3", "IBM", "MIT", "Mozilla", "PDDL"],
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
function writeToFile(data) {
  fs.writeFile("ExampleREADME.md", data, (error) => {
    error ? console.log(error) : console.log("README file created!");
  });
}

// TODO: Create a function to initialize app
function init() {
  // present the user with questions
  inquirer.prompt(questions).then((response) => {
    writeToFile(generateMarkdown(response));
  });
}
// Function call to initialize app
init();
