// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return `[![license](https://img.shields.io/badge/license-${license[0].split(' ').join('%20')}-blue)](https://shields.io)`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README

function renderTOC(tocArray) {
  return tocArray.forEach(element => {
    return `${element}\n`;
  });
}

function generateMarkdown(data) {
  return `# ${data.title}  
   ## Licensing:
   ${renderLicenseBadge(data.license)}
   ## Table of Contents: 
   ${renderTOC(data.tableOfContents)}
   ## Description:
   ${data.description} 
   ## Installation: ${data.installation}  
   ## Usage: ${data.usage}  
   ## License: ${data.license}  
   ## Contributing: ${data.contributing} 
   ## Testing: ${data.tests} 
   ## Questions: ${data.questions}
`;
}

module.exports = generateMarkdown;
