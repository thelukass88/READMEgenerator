// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${licenceBadge(data.licence)}
## Description
${data.description}
## Table of Contents
* [Installation](#installation)
* [Useage](#useage)
* [Licence](#licence)
* [Contributions](#contributors)
* [Testing](#tests)
* [Questions](#questions)
## Installation
${data.installation}
## Useage
${data.useage}
## Licence
Your application is licenced under: ${data.licence}
## Contributing
${data.contributors}
## Tests
${data.tests}
## Questions
If you would like to contact me<br>
visit: [github/${data.username}](https://github.com/${data.username})<br>
email: ${data.email}

`;
}

module.exports = generateMarkdown;

//Function for licence badges
function licenceBadge(licence) {
  if (licence !== "none") {
    return `![Github licence](https://img.shields.io/badge/your_licence:-${licence}-blue.svg)`
  }
  return "";
}
//Function for Licence link
function licenceLink(licence) {
  if (licence !== "none") {
    return `\n* [Licence](#licence)\n`;
  }
  return "";
}
