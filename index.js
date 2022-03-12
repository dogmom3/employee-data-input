var inquirer = require('inquirer');
const fs = require('fs');
const Employees = require('./Employees');
const generatePage = require('./generatePage.js');
const employees = [];
const questions = [
  {
    type: 'input',
    name: 'managerName',
    message: 'What is the name of the team manager?',
    validate: userInput => {
      if (userInput) {
        return true;
      } else {
        console.log('You must enter a name.');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'employeeID',
    message: 'What is their employee ID?',
    validate: userInput => {
      if (userInput) {
        return true;
      } else {
        console.log('You must enter an ID.');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'emailAddress',
    message: 'What is their email address?',
    validate: userInput => {
      if (userInput) {
        return true;
      } else {
        console.log('You must enter a valid email address.');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'officeNumber',
    message: 'What is their office number?',
    validate: userInput => {
      if (userInput) {
        return true;
      } else {
        console.log('You must enter a phone number.');
        return false;
      }
    }
  },
]
const engineerQuestions = [
  {
    type: 'input',
    name: 'engineerName',
    message: 'What is the name of the engineer?',
    validate: userInput => {
      if (userInput) {
        return true;
      } else {
        console.log('You must enter a name.');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'employeeID',
    message: 'What is their employee ID?',
    validate: userInput => {
      if (userInput) {
        return true;
      } else {
        console.log('You must enter an ID.');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'emailAddress',
    message: 'What is their email address?',
    validate: userInput => {
      if (userInput) {
        return true;
      } else {
        console.log('You must enter a valid email address.');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'githubUserName',
    message: 'What is their GitHub user name?',
    validate: userInput => {
      if (userInput) {
        return true;
      } else {
        console.log('You must enter a GitHub user name.');
        return false;
      }
    }
  },
]
const internQuestions = [
  {
    type: 'input',
    name: 'internName',
    message: 'What is the interns name?',
    validate: userInput => {
      if (userInput) {
        return true;
      } else {
        console.log('You must enter a name.');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'employeeID',
    message: 'What is their employee ID?',
    validate: userInput => {
      if (userInput) {
        return true;
      } else {
        console.log('You must enter an employee ID.');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'emailAddress',
    message: 'What is their email address?',
    validate: userInput => {
      if (userInput) {
        return true;
      } else {
        console.log('You must enter a valid email address.');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'school',
    message: 'What is the name of their school?',
    validate: userInput => {
      if (userInput) {
        return true;
      } else {
        console.log('You must enter a school.');
        return false;
      }
    }
  },
];

const employeeType = [
  {
    type: 'list',
    name: 'employeeSelect',
    message: 'Would you like to add an engineer or an intern or finish building your team?',
    choices: ["engineer", "intern", "finish building team"],

  }
]


function writeToFile(fileName, data) {
  const pageHTML = generatePage(data);
  fs.writeFile(fileName, pageHTML, err => {
    if (err) throw err;
    console.log(err);
    console.log('Page complete! Check out index.html to see the output!');
  });
}
function askEmployeeType() {
  inquirer.prompt(employeeType)
    .then((answers) => {
      if (answers.employeeSelect.includes('engineer')) {
        inquirer.prompt(engineerQuestions)
          .then((engineerAnswers) => {
            employees.push(engineerAnswers)
            console.log('engineerAnswers', engineerAnswers)
            askEmployeeType();
          })

      }

      if (answers.employeeSelect.includes('intern')) {
        inquirer.prompt(internQuestions)
          .then((internAnswers) => {
            employees.push(internAnswers)
            console.log('internAnswers', internAnswers)
            askEmployeeType();
          })
      }

      if (answers.employeeSelect.includes('finish building team')) {
        writeToFile('index.html', employees)
      console.log('finish building team', answers)
      }
    })
}
function init() {
  inquirer
    .prompt(questions)
    .then((answers) => {
      employees.push(answers)
      console.log('answers', answers)
      askEmployeeType();

    })
    .catch((error) => {
      console.log(error)
    });
}

init();
