class Employee {
    constuctor(name, id, email, role) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = role;
    }
    // getName() {
    //     let getName = 
    //     return 
    // }
    getId() {
return this.id
    }
    getEmail() {
return this.email
    }
    getRole() {

    }
}

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

module.exports = {Employee, Manager, Engineer, Intern} 