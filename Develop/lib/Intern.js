// class employee with a constructor function that pulls in parameters; name, id, email and schoolName.

// constructor function holds the values of name, id and email are assign to the properties of the object by using 'this'
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