const Employee = require("./Employee")

class Engineer extends Employee {
    constructor(name,id,email,github){
        super(name,id,email) // calls parent class constructor, Employee is the parent
        this.github = github 
    }

    // gets github username
    getGithub(){
        return this.github
    }

    // returns the role of engineer
    getRole(){
        return "Engineer"
    }
}

// exports the class of engineer so it can be accessed by other files
module.exports = Engineer