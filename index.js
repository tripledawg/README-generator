// packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown');

// function to initialize app with array of questions for user input
// essential input is validated while non-essential inputs are allowed to be blank. 
function init() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'title',
                message: 'What title would you like to give your project?',
                validate: input => {
                    if (input) {
                        return true;
                    } else {
                        console.log('A professional README should have a title.');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'description',
                message: 'How would you like to describe your project?',
                validate: input => {
                    if (input) {
                        return true;
                    } else {
                        console.log('A professional README should have a description.');
                        return false;
                    }
                }
            },
            {
                type: 'checkbox',
                name: 'tableOfContents',
                message: 'What would you like to include in your table of contents? Select from below.',
                choices: ['- [Description](#description)',
                    '- [Installation](#installation)',
                    '- [Usage](#usage)',
                    '- [Contributing](#contributing)',
                    '- [Testing](#testing)',
                    '- [Questions](#questions)',
                ]
            },
            {
                type: 'input',
                name: 'installation',
                message: 'What installation directions would you like to provide your user?',
                validate: input => {
                    if (input) {
                        return true;
                    } else {
                        console.log('Please enter installation directions to continue.');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'usage',
                message: 'What is the user story for this project?',
                validate: input => {
                    if (input) {
                        return true;
                    } else {
                        console.log('A professional README should have usage information');
                        return false;
                    }
                }
            },
            {
                type: 'checkbox',
                name: 'license',
                message: 'Which license would you like to use?',
                choices: ['Mozilla-Public', 'Common Development and Distribution License', 'Eclipse Public License', 'Apache', 'BSD', 'MIT', 'GNU LGPL', 'GPL', 'Proprietary', 'none'],
            },

            {
                type: 'input',
                name: 'contributing',
                message: 'How can others contribute to this project?'
            },
            {
                type: 'input',
                name: 'tests',
                message: 'How can this project be tested?'
            },
            {
                type: 'input',
                name: 'questions',
                message: 'Where can users send questions?',
                validate: input => {
                    if (input) {
                        return true;
                    } else {
                        console.log('Please provide those interested with a way to contact you.');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'githubProfile',
                message: 'What is your Github username?',
                validate: input => {
                    if (input) {
                        return true;
                    } else {
                        console.log('Please provide your Github username.');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is your email address?'
            }
        ])
        .then((answers) => {
            console.log(answers);
            writeToFile("README.md", generateMarkdown(answers));
        });
};

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err)
            throw (err);
        console.log('Success! Your README is complete!')
    });
};


// function call to initialize app
init();