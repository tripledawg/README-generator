// function that returns a license badge based on which license is passed in
// used split/join methods to allow for licenses with more than one wordRE
// If there is no license, returns an empty string
function renderLicenseBadge(license) {
  if (license.length > 0) {
    return `[![license](https://img.shields.io/badge/license-${license[0].split(' ').join('%20')}-blue)](https://shields.io)`;
  }
  return '';
}

//function that returns the license link
//If there is no license, returns "none provided"
function renderLicenseLink(license) {
  if (license.length > 0) {
    if (license[0] == "Mozilla-Public") {
      return "https://opensource.org/licenses/MPL-2.0";
    }
    else if (license[0] == "Common Development and Distribution License") {
      return "https://opensource.org/licenses/CDDL-1.0";
    }
    else if (license[0] == "Eclipse Public License") {
      return "https://opensource.org/licenses/EPL-2.0";
    }
    else if (license[0] == "Apache") {
      return "https://opensource.org/licenses/Apache-2.0";
    }
    else if (license[0] == "BSD") {
      return "https://opensource.org/licenses/BSD-2-Clause";
    }
    else if (license[0] == "MIT") {
      return "https://opensource.org/licenses/MIT";
    }
    else if (license[0] == "GNU LGPL") {
      return "https://opensource.org/licenses/lgpl-license";
    }
    else if (license[0] == "GPL") {
      return "https://opensource.org/licenses/gpl-license";
    }
    else if (license[0] == "Proprietary") {
      return "Proprietary License";
    } else {
      return "None Provided";
    }
  }
}

//function adds spacing and returns
function renderTOC(tocArray) {
  var output = "\n";
  for (var i = 0; i < tocArray.length; i++) {
    output += "  " + tocArray[i] + "\n";
  }
  return output;
}

//function generates markdown
function generateMarkdown(data) {
  return `# ${data.title}
  ## Licensing:
  ${renderLicenseBadge(data.license)}
  ## Table of Contents: ${renderTOC(data.tableOfContents)}

  ## Description:
  ${data.description} 
  ## Installation: 
  ${data.installation} 
  ## Usage: 
  ${data.usage} 
  ## License: 
  ${renderLicenseLink(data.license)} 
  ## Contributing: 
  ${data.contributing} 
  ## Testing: 
  ${data.tests} 
  ## Questions: 
  ${data.questions}
  <https://github.com/${data.githubProfile}>
  <${data.email}>`;
}
//connects to global namespace for use in index.js
module.exports = generateMarkdown;
