const Employee = require("./Employee")
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
    getName() {
        return this.name
    }
    getRole() {
        return("Manager")
    }
    getId() {
        return this.id
    }
    getEmail() {
        return this.email
    }
    getOfficeNumber() {
        return this.officeNumber
    }
};
class Engineer extends Employee {
    constructor(name, id, email, gitHubUserName) {
        super(name, id, email);
        this.gitHubUserName = gitHubUserName;
    }
    getName() {
        return this.name
    }
    getRole(){
        return ("Engineer")
    }
    getId() {
        return this.id
    }
    getEmail() {
        return this.email
    }
    getGitHubUserName() {
        return this.gitHubUserName
    }
};
class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }
getName() {
    return this.name
}
getRole() {
    return ("Intern")
}
getId() {
    return this.id
}
getEmail() {
    return this.email
}
getSchool() {
    return this.school
}
};

module.exports = { Manager, Engineer, Intern } 