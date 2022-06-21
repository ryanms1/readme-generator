// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
const generateReadMe = require('./utils/generateMarkdown');
const { emitWarning } = require('process');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?',
        validate: github => {
            if (github) {
                return true
            } else {
                return false
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
        validate: email => {
            if (email) {
                return true
            } else {
                return false
            }
        }
    },
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
        validate: getTitle => {
            if (getTitle) {
                return true
            } else {
                return false
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please provide a description of your project.',
        validate: getDesc => {
            if (getDesc) {
                return true
            } else {
                return false
            }
        }
    },
    {
        type: 'list',
        name: 'license',
        message: 'What kind of license should your project have? (Use arrow keys)',
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None']
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What command should be run to install dependencies?',
        default: 'npm i'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What command should be run to run tests?',
        default: 'npm test'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What does the user need to know about using the repo?',
        validate: usage => {
            if (usage) {
                return true
            } else {
                return false
            }
        }
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'What does the user need to know about contributing to the repo?',
        validate: contributing => {
            if (contributing) {
                return true
            } else {
                return false
            }
        }
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) throw err;
    })
}

// TODO: Create a function to initialize app
function init(questions) {
    return inquirer.prompt(questions)
}

// Function call to initialize app
init(questions)
    .then(readMeData => {
        console.log(readMeData)
        const readMe = generateReadMe(readMeData)

        writeToFile('./dist/README.md', readMe)
    })
