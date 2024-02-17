// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
## Description
${data.description}
## Table of Contents
* [Installation](#installation)
* [Useage](#useage)
* [Licence](#licence)
* [Contributions](#contributing)
* [Testing](#tests)
* [Questions](#questions)
## Installation
${data.installation}
## Useage
${data.useage}
## Licence
${data.licence}
## Contributing
${data.contributing}
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
