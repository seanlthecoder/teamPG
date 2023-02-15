// class employee with a constructor function that pulls in three parameters; name, id and email.

// constructor function holds the values of name, id and email are assign to the properties of the object by using 'this'
class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;

    // gets employee email
  }

  getEmail() {
    return this.email;
  }

  // gets employee id

  getId() {
    return this.id;
  }

  //

  getName() {
    return this.name;
  }

  getRole() {
    return "Employee";
  }
}

// exports employee class so it can be accessed by other classes
module.exports = Employee;