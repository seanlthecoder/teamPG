const Employee = require("../lib/Employee");

test("Testing Employee class and attributes", function () {
  const testEmployee = new Employee(
    "employeeTest1",
    "ID120",
    "employeeemail@gmail.com"
  );
  expect(testEmployee.name).toBe("employeeTest1");
  expect(testEmployee.id).toBe("ID120");
  expect(testEmployee.email).toBe("employeeemail@gmail.com");
  expect(typeof testEmployee).toBe("object");
});

test("Testing Employee methods", function () {
  const testEmployee = new Employee(
    "employeeTest1",
    "ID120",
    "employeeemail@gmail.com"
  );
  expect(testEmployee.getName()).toBe("employeeTest1");
  expect(testEmployee.getId()).toBe("ID120");
  expect(testEmployee.getEmail()).toBe("employeeemail@gmail.com");
});
