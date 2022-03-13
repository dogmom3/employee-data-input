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

module.exports = Engineer