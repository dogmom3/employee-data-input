const Employee = require("./lib/Employee")
class Manager extends Employee {
    constructor(name, id, email, role, officeNumber) {
        super(name, id, email, role);
        this.officeNumber = officeNumber;
    }
}
class Engineer extends Employee {
    constructor(name, id, email, role, githubUserName) {
        super(name, id, email, role);
        this.githubUserName = githubUserName;
    }
}
class Intern extends Employee {
    constructor(name, id, email, role, school) {
        super(name, id, email, role);
        this.school = school;
    }
}

module.exports = {Manager, Engineer, Intern} 