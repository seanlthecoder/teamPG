const Employee = require("./Employee")

class Intern extends Employee {
    constructor(name,id,email,schoolName){
        super(name,id,email) // calls parent class constructor, Employee is the parent
        this.schoolName = schoolName 
    }
    getschoolName(){
        return this.schoolName
    }
    getRole(){
        return "Intern"
    }
}

module.exports = Intern