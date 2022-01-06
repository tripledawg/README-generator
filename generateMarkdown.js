// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { 
  //add if statements if license = spaced name, replace with %20
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  //??below//
  return `# ${data.title}  
   ## Licensing:
   [![license](https://img.shields.io/badge/license-${data.license}-blue)](https://shields.io)
   ## Table of Contents: 
   - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Testing](#testing)
  - [Questions](#questions)
   ## Description:
   ${data.description} 
   ## Installation:${data.installation}  
   ## Usage: ${data.usage}  
   ## License:${data.license}  
   ## Contributing: ${data.contributing} 
   ## Testing:${data.tests} 
   ## Questions: ${data.questions}
`;
}

module.exports = generateMarkdown;
