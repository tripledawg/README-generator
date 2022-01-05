const fs = require('fs'); 
const inquirer = require('inquirer');

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
}
]
