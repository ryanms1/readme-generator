// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'None') {
    return ''
  } else {
    return `![GitHub license]`
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'None') {
    return ''
  } else {
    return `(https://img.shields.io/badge/license-${license.split(' ').join('')}-blue.svg)`
  }

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    return `${renderLicenseBadge(license)}${renderLicenseLink(license)}`
  } else {
    return ''
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseSection(data.license)}

  ## Description

  ${data.description}

  ## Table of Contents

  * [Installation](#installation)

  * [Usage](#usage)
  
  * [License](#license)

  * [Contributing](#contributing)

  * [Tests](#tests)

  * [Questions](#questions)

  ## Installation

  To install necessary dependencies, run the following command:

  ${data.installation}
  
  ## Usage 

  ${data.usage}

  ## License

  This project is licensed under the ${data.license} license.

  ## Contributing 

  ${data.contributing}

  ## Tests

  To run tests, run the following command:

  ${data.tests}

  ## Questions

  If you have any questions about the repo, open an issue or contact me directly at ${data.email}. You can find more of my work at [${data.github}](https://github.com/${data.github}/).

`;
}

module.exports = generateMarkdown;
