// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
//const questions = [];

// TODO: Create a function to write README file
//function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
//function init() {}

// Function call to initialize app
//init();

const inquirer = require('inquirer');

const fs = require('fs'); 

const generateMarkdown = require('./generateMarkdown');

inquirer
    .prompt([
    {
        type: 'input',
        name: 'title', 
        message: 'What title would you like to give your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'How would you like to describe your project?',
    },
    {
        type: 'input',
        name: 'table of contents',
        message: 'What would you like to include in your table of contents?'
        //use concatenation and \n new line command to make it, maybe use a foreach?
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What installation directions you would like to provide your user?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What is the user story for this project?',
    },
    {
        type: 'checkbox',
        name: 'license',
        message: 'Which license would you like to use?',
        choices: ['Mozilla-Public','Common Development and Distribution License', 'Eclipse Public License','Apache', 'BSD', 'MIT', 'GNU LGPL', 'GPL', 'Proprietary', 'none'],
    },
        
    {
        type: 'input',
        name: 'contributing',
        message: 'How can others contribute to this project?',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'How can this project be tested?',
    },
    {
        type: 'input',
        name: 'questions',
        message: 'Where can users send questions?',
    }
]);
const questions = [inquirer.prompt]; //???


function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err)=> {
        if (err)
        throw(err); 
        console.log ('Success! Your README is complete!')
    });
};

function init() {
    inquirer.prompt(questions)
    .then(function (userInput) {
        console.log(userInput)
        writeToFile("README.md", generateMarkdown(userInput));
    });
};

init();