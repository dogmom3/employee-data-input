var inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
const generatePage = require('./src/generatePage.js');
const employees = [];

const managerQuestions = [
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
];
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
    name: 'gitHubUserName',
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
];
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
];

function writeToFile(fileName, answers) {
  const pageHTML = generatePage(answers);
  fs.writeFile(fileName, pageHTML, err => {
    if (err) throw err;
    console.log(err);
    console.log('Page complete! Check out index.html to see the output!');
  });
};
function askEmployeeType() {
  inquirer.prompt(employeeType)
    .then((answers) => {
      if (answers.employeeSelect.includes('engineer')) {
        inquirer.prompt(engineerQuestions)
          .then((answers) => {
            employees.push(new Engineer(answers.engineerName, "Engineer", answers.employeeID, answers.emailAddress, answers.gitHubUserName))
            console.log('answers', employees)
            askEmployeeType();
          })
      }
      if (answers.employeeSelect.includes('intern')) {
        inquirer.prompt(internQuestions)
          .then((answers) => {
            employees.push(new Intern(answers.internName, "Intern", answers.employeeID, answers.emailAddress, answers.school))
            console.log('answers', employees)
            askEmployeeType();
          })
      }
      if (answers.employeeSelect.includes('finish building team')) {
        writeToFile('index.html', employees)
        console.log('finish building team', answers)
      }
    })
};
function init() {
  inquirer
    .prompt(managerQuestions)
    .then((answers) => {
      employees.push(new Manager(answers.managerName, "Manager", answers.employeeID, answers.emailAddress, answers.officeNumber))
      console.log('answers', employees)
      askEmployeeType();
    })
    .catch((error) => {
      console.log(error)
    })
};

init();
