const Employee = require("./Employee")

class Manager extends Employee {
    constructor(name,id,email,officeNumber){
        super(name,id,email) // calls parent class constructor, Employee is the parent
        this.officeNumber = officeNumber 
    }
    getofficeNumber(){
        return this.officeNumber
    }
    getRole(){
        return "Manager"
    }
}

module.exports = Manager