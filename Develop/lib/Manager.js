const Employee = require("./Employee")

class Manager extends Employee {
    constructor(name,id,email,officeNumber){
        super(name,id,email) // calls parent class constructor, Employee is the parent
        this.officeNumber = officeNumber 
    }

    // gets office number of manager
    getofficeNumber(){
        return this.officeNumber
    }

    // returns the role of manager
    getRole(){
        return "Manager"
    }
};

//exports the class Manager
module.exports = Manager