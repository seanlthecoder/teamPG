const Employee = require("./Employee")

class Engineer extends Employee {
    constructor(name,id,email,github){
        super(name,id,email) // calls parent class constructor, Employee is the parent
        this.github = github 
    }
    getGithub(){
        return this.github
    }
    getRole(){
        return "Engineer"
    }
}

module.exports = Engineer