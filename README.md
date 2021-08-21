# README File Generator

## Table of Contents:

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Questions](#questions)

## Description

This command-line application allows users to dynamically generate a README.md file based on sections that should be included in a quality README.md file, including a table of contents, installation & usage instructions, licensing, how to contribute, and contact information. The app is built using `Node.js` and `JavaScript`, as well as the `Inquirer` and `fs` packages for input and file saving, respectively.

## Installation

To generate the README.md file, first run `npm install` to install package dependencies. Then, run `node index.js` to invoke the main application.

## Usage

![Walkthrough](./assets/images/walkthrough.gif)

First, run `node index.js` in the shell window to start the application. It will then prompt you to provide answwers to questions to be used in generating the README.md file. The application uses the `Inquirer` library to build answer objects and display those in their appropriate sections in the README as well as use markdown to style the README for a more visually appealing document. After the final question is answered, a file named "README.md" is generated using the `fs` library and saved into the project's root directory.

Usage video instructions can also be found here: https://drive.google.com/file/d/1MPfLlBXeGibO0PmYQffk7qYSBHiBOEio/view

## Contributing

To contribute to this project (or any others), please contact me using the information in the [Questions](#questions) section below or by submitting a pull request.

> For more information on project contribution guidelines, please reference [Contributor Covenant](https://www.contributor-covenant.org/)

## Questions?

If you have any questions, please feel free to reach out. Thanks!

GitHub: https://github.com/matthewbush55

Email: matthewbush55@gmail.com
