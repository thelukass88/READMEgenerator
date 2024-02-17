// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
## Description
${data.description}
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
