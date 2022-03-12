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

    }
    getEmail() {

    }
    getRole() {

    }
}

class Manager extends Employee {
    constructor(name, id, email, role, officeNumber) {
        super(name);
        super(id);
        super(email);
        super(role);
        this.officeNumber = officeNumber;
    }
}
class Engineer extends Employee {
    constructor(name, id, email, role, githubUserName) {
        super(name);
        super(id);
        super(email);
        super(role);
        this.githubUserName = githubUserName;
    }
}
class Intern extends Employee {
    constructor(name, id, email, role, school) {
        super(name);
        super(id);
        super(email);
        super(role);
        this.school = school;
    }
}