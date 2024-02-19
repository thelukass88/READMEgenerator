// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
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
${data.licence}
## Contributing
${data.contributors}
## Tests
${data.tests}
## Questions
${data.questions}
## Username
${data.username}
## Email
${data.email}

`;
}

module.exports = generateMarkdown;

//Creating a function for licence badges
function licenceBadges(licence) {
  if (licence !== "none") {
    return `![Github licence](https://img.shields.io/badge/your_licence:${licence}-blue)`
  }
}
