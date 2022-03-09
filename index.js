var inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./Employee');
const generatePage = require('index.html');

const questions = [
  {
    type: 'list',
    name: 'employeeType',
    message: 'What type of employee do you want to add?',
    choices: ['Manager', 'Engineer', 'Intern'],
    vaidate: userInput => {
      if (userInput) {
        return true;
      } else {
        console.log('You must choose an employee type.');
        return false;
      }
    }
    // if(userInput.includes('Manager'))
    }
];

function writeToFile(fileName, data) {
  const pageHTML = generatePage(data);
  fs.writeFile(fileName, pageHTML, err => {
    if (err) throw err;
    console.log(err);
    console.log('Page complete! Check out index.html to see the output!');
  });
}

function init() {
  inquirer
    .prompt(questions)
    .then((answers) => {
      writeToFile('index.html', answers)
      console.log(answers)
    })
    .catch((error) => {
      console.log(error)
    });
}

init();
