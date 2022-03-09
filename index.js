var inquirer = require('inquirer');
const fs = require('fs');
const generatePage = require('index.html'); //what file to assign here?

const questions = [
   
    
   
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
  