const Employee = require("../lib/Employee")
const Manager = require("../lib/Manager")
const Engineer = require("../lib/Engineer")
const Intern = require("../lib/Intern")
const employees = [];

function generateManagerData(employees) {
    let managers = employees.filter((employee)=> employee.getRole()==="Manager")
    let managerData = ''
    for (let index = 0; index < managers.length; index++) {
        managerData += `
   
<div class="card">
  <div class="card-content">
  <p class="title">${managers[index].getName()}
    </p>
    <p class="subtitle">${managers[index].getRole()}
    </p>
    <p class="subtitle">${managers[index].getId()}
    </p>
    <p class="subtitle">
    ${managers[index].getOfficeNumber()}
    </p>
  </div>
  <footer class="card-footer">
    <p class="card-footer-item">
      <span>
      Email: <a href="mailto: " target="_blank"> ${managers[index].getEmail()}</a>
      </span>
    </p>
  </footer>
</div>
`

    }
    return managerData
};

function generateEngineerData(employees) {
    let engineers = employees.filter((employee)=> employee.getRole()==="Engineer")
    let engineerData = ''
    for (let index = 0; index < engineers.length; index++) {
        engineerData += `
          <div class="card">
  <div class="card-content">
  <p class="title">${engineers[index].getName()}
    </p>
    <p class="subtitle">${engineers[index].getRole()}
    </p>
    <p class="subtitle">${engineers[index].getId()}
    </p>
    <p class="subtitle">
    <span>
    GitHub: <a href="https://github.com/${engineers[index].getGitHub()}" target="_blank"> ${engineers[index].getGitHub()}</a>
    </span>
  </p>
  </div>
  <footer class="card-footer">
    <p class="card-footer-item">
      <span>
      Email: <a href="mailto: " target="_blank"> ${engineers[index].getEmail()}</a>
      </span>
    </p>
  </footer>
</div>
    `
    }
    return engineerData
};

function generateInternData(employees) {
    let interns = employees.filter((employee)=> employee.getRole()==="Intern")
    let internData = ''
    for (let index = 0; index < interns.length; index++) {
    internData += `
    <div class="card">
  <div class="card-content">
  <p class="title">${interns[index].getName()}
    </p>
    <p class="subtitle">${interns[index].getRole()}
    </p>
    <p class="subtitle">${interns[index].getId()}
    </p>
    <p class="subtitle">${interns[index].getSchool()}
  </p>
  </div>
  <footer class="card-footer">
    <p class="card-footer-item">
      <span>
      Email: <a href="mailto: " target="_blank"> ${interns[index].getEmail()}</a>
      </span>
    </p>
  </footer>
</div>
    `
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
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css">
        <title>Document</title>
    </head>
    <body>
    <header>
    <section class="hero is-primary">
        <div class="hero-body">
          <p class="title has-text-centered">
            My Team
          </p>

        </div>
      </section>
</header>
        <div id="container">
            <div id="employee-data" class="is-flex is-flex-wrap-wrap is-justify-content-space-evenly">
                 ${generateManagerData(answers)} 
                 ${generateEngineerData(answers)} 
                 ${generateInternData(answers)} 
            </div>
        </div>
    </body>
    </html>
    ;`
};

module.exports = generatePage;
