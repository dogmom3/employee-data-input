var inquirer = require('inquirer');
const fs = require('fs');
const generatePage = require('index.html'); //what file to assign here?

const questions = [
    class employee {
        constuctor(name, id, email, role) {
            this.name = name;
            this.id = id;
            this.email = email;
            this.role = role;
        }
    },
    class manager {
        constuctor(name, id, email, officeNumber, role) {
            this.name = name;
            this.id = id;
            this.email = email;
            this.officeNumber = officeNumber;
            this.role = role;
        }
    },
    class engineer {
        constuctor(name, id, email, github, role) {
            this.name = name;
            this.id = id;
            this.email = email;
            this.github = github;
            this.role = role;
        }
    },
    class intern {
        constuctor(name, id, email, school, role) {
            this.name = name;
            this.id = id;
            this.email = email;
            this.school = school;
            this.role = role;
        }
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
  