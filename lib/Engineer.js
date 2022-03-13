class Engineer extends Employee {
    constructor(name, id, email, gitHub) {
        super(name, id, email);
        this.gitHub = gitHub;
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
        return this.gitHub
    }
};

module.exports = Engineer