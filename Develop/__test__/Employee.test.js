// test for the Employee class at its attributes.
// new instance of the Employee class with the contructor pulling in values for 'name', 'id', 'email'
const Employee = require("../lib/Employee");

test("Testing Employee class and attributes", function () {
  const testEmployee = new Employee(
    "employeeTest1",
    "ID120",
    "employeeemail@gmail.com"
  );

  // assertion statments checks the values of the attributes match the expected values
  expect(testEmployee.name).toBe("employeeTest1");
  expect(testEmployee.id).toBe("ID120");
  expect(testEmployee.email).toBe("employeeemail@gmail.com");
  expect(typeof testEmployee).toBe("object");
});

// 'employe' class has 3 arguments to its constructor; name, id an email address.
test("Testing Employee methods", function () {
  const testEmployee = new Employee(
    "employeeTest1",
    "ID120",
    "employeeemail@gmail.com"
  );

  // 'tobe' is used to test that the actual values are equal to the expected values.
  expect(testEmployee.getName()).toBe("employeeTest1");
  expect(testEmployee.getId()).toBe("ID120");
  expect(testEmployee.getEmail()).toBe("employeeemail@gmail.com");
});
