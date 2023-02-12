const Employee = require("./Employee")

class Intern extends Employee {
    constructor(name,id,email,schoolName){
        super(name,id,email) // calls parent class constructor, Employee is the parent
        this.schoolName = schoolName 
    }

    // gets school name
    getschoolName(){
        return this.schoolName;
    }

    // returns the role of intern
    getRole(){
        return "Intern";
    }
};

// exports the intern class so that it can be used in other modules
module.exports = Intern