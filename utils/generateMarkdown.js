// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
if (license !== "None"){
  return ` ![Github license](https://img.shields.io/badge/license-${license}-blue.svg)`;
}
return "";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
if (license !== "None"){
  return `* [License](#license)`;
}
return "";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
if (license !== "None") {
  return `## License \n This project is licensed under the ${license} license.`;
}
return "";
}
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}
## Description 
${data.description}
## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
${renderLicenseLink(data.license)}
* [Tests](#tests)
* [Questions](#questions)

`;
}
//Complete all h2 sections and do ${}.data.liscense that goes with them. Repeat 31 and 32. Questions section if yo uahve any about repo contact me @ mroe of my work @ with link. 
module.exports = generateMarkdown;
