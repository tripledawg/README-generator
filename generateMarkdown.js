// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license.length > 0) {
    return `[![license](https://img.shields.io/badge/license-${license[0].split(' ').join('%20')}-blue)](https://shields.io)`;
  }
  return '';
}

// TODO: Create a function that returns the license link
//choices: ['Mozilla-Public', 'Common Development and Distribution License', 'Eclipse Public License', 'Apache', 'BSD', 'MIT', 'GNU LGPL', 'GPL', 'Proprietary', 'none'],

// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license[0] == "") {

  }
 }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README

// function renderTOC(tocArray) {
//   return tocArray.forEach(element => {
//     return `${element}\n`;
//   });
// }
//var tocArray = "";
// for (var i = this.queue.length - 1; i >= 0; i++) {
//   var current = [i];
//   toc += item + "\n";
// }

function renderTOC(tocArray) {
  var output = "\n";
  for (var i = 0; i < tocArray.length; i++) {
    output += "  " + tocArray[i] + "\n";
  }
  return output;
  // return tocArray.join('\n');
}

function generateMarkdown(data) {
  return `# ${data.title}
  ## Licensing:
  ${renderLicenseBadge(data.license)}
  ## Table of Contents: ${renderTOC(data.tableOfContents)}

  ## Description:
  ${data.description} 
  ## Installation: ${data.installation} 
  ## Usage: ${data.usage} 
  ## License: ${data.license} 
  ## Contributing: ${data.contributing} 
  ## Testing: ${data.tests} 
  ## Questions: ${data.questions}`;
}

module.exports = generateMarkdown;
