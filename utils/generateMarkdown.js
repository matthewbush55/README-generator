// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license != "None") {
    return `# License
    This project is licensed with ${license}.`;
  }
  return "";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license != "None") {
    return `# License Link`;
    // return the actual link of the license
  }
  return "";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license != "None") {
    return `# License Section`;
    // return the actual link of the license
  }
  return "";
}
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}


  ## Table of Contents:


  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  

  ## Description

  ${data.description}


  ## Installation

  To install necessary dependencies, run the following command:

    ${data.installation}


  ## Usage

  ${data.usage}


  ## Contribution

  ${data.contribution}


  ## Tests

  To run tests, run the following command:

    ${data.tests}


  ## Questions?

  If you have any questions, please contact me.

  GitHub: ${data.github}
  Email: ${data.email}
`;
}

module.exports = generateMarkdown;