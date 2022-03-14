const Employee = require("../lib/Employee")
const Manager = require("../lib/Manager")
const Engineer = require("../lib/Engineer")
const Intern = require("../lib/Intern")
const employees = [];

function generateManagerData(employees) {
    let managerData = ''
    for (let index = 0; index < employees.length; index++) {
        managerData += `
    <ul id="data">
    <h2 id="name">Name: ${employees[index].getName()}</h2>
    <li id="list">Role: ${employees[index].getRole()}</li>
    <li id="list">ID: ${employees[index].getId()}</li>
    <li id="list">Email: <a href="mailto: " target="_blank"> ${employees[index].getEmail()}</a></li>
    <li id="list">Office Number: ${employees[index].getOfficeNumber()}</li>
</ul>`
    }
    return managerData
};

function generateEngineerData(employees) {
    let engineerData = ''
    for (let index = 1; index < employees.length; index++) {
        engineerData += `
        <ul id="data">
        <h2 id="name">Name: ${employees[index].getName()} </h2>
        <li id="list">Role: ${employees[index].getRole()}</li>
        <li id="list">ID: ${employees[index].getId()} </li>
        <li id="list">Email: <a href="mailto: " target="_blank"> ${employees[index].getEmail()}</a></li>
        <li id="list">GitHub: ${employees[index].getGitHub()}</li>
    </ul>`
    }
    return engineerData
};

function generateInternData(employees) {
    let internData = ''
    for (let index = 1; index < employees.length; index++) {
    internData += `
    <ul id="data">
        <h2 id="name">Name: ${employees[index].getName()}</h2>
        <li id="list">Role: ${employees[index].getRole()}</li>
        <li id="list">ID: ${employees.getId()}</li>
        <li id="list">Email: <a href="mailto: " target="_blank"> ${employees[index].getEmail()}</a></li>
        <li id="list">School: ${employees[index].getSchool()}</li>
    </ul>`
}
return internData
    };

function generatePage(answers) {
    console.log(answers);
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="assets/css/style.css">
        <title>Document</title>
    </head>
    <body>
        <header>
            <h1>MY TEAM</h1>
        </header>
        <div id="container">
            <div id="employee-data">
                <div> ${generateManagerData(answers)} </div>
                <div> ${generateEngineerData(answers)} </div>
                <div> ${generateInternData(answers)} </div>
            </div>
        </div>
    </body>
    </html>
    ;`
};

module.exports = generatePage;
