// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case "Apache 2.0":
      return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
    case "BSD 3":
      return `[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`;
    case "GNU GPL v3":
      return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
    case "IBM":
      return `[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)`;
    case "MIT":
      return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
    case "Mozilla":
      return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;
    case "PDDL":
      return `[![License: ODbL](https://img.shields.io/badge/License-PDDL-brightgreen.svg)](https://opendatacommons.org/licenses/pddl/)`;
    default:
      return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case "Apache 2.0":
      return "https://opensource.org/licenses/Apache-2.0";
    case "BSD 3":
      return "https://opensource.org/licenses/BSD-3-Clause";
    case "GNU GPL v3":
      return "https://www.gnu.org/licenses/gpl-3.0";
    case "IBM":
      return "https://opensource.org/licenses/IPL-1.0";
    case "MIT":
      return "https://opensource.org/licenses/MIT";
    case "Mozilla":
      return "https://opensource.org/licenses/MPL-2.0";
    case "PDDL":
      return "https://opendatacommons.org/licenses/pddl/";
    default:
      return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseLink = renderLicenseLink(license);
  if (license !== "None") {
    return `## License
  
  This project is licensed under [${license}](${licenseLink})`;
  }
  return;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Table of Contents:

  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Tests](#tests)
  * [Contributing](#contributing)
  * [License](#license)
  * [Questions](#questions)
  

  ## Description

  ${data.description}


  ## Installation

  To install necessary dependencies, run the following command:

    ${data.installation}


  ## Usage

  ${data.usage}


  ## Tests

  To run tests, run the following command:

    ${data.tests}


  ${renderLicenseSection(data.license)}


  ## Contributing
  
  > [Contributor Covenant](https://www.contributor-covenant.org/)
  
  ${data.contribution}


  ## Questions?

  If you have any questions, please contact me.

  GitHub: https://github.com/${data.github}
  Email: ${data.email}
`;
}

module.exports = generateMarkdown;
