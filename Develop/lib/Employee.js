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