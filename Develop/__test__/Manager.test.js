//  unit test for 'manager' class and its attributes.
const Manager = require("../lib/Manager");

test("Testing Manager class and attributes", function () {
  const testManager = new Manager(
    "ManagerTest1",
    "ID120",
    "Manageremail@gmail.com"
  );
  // test to verify instance of the 'manager' class can be created with the intended properties.
  // assertion statments checks the values of the attributes match the expected values
  expect(testManager.name).toBe("ManagerTest1");
  expect(testManager.id).toBe("ID120");
  expect(testManager.email).toBe("Manageremail@gmail.com");
  expect(typeof testManager).toBe("object");
});

// creating a new instance of the 'manager' class and calling the 'getName' method on that instance.
test("Testing Manager methods", function () {
  const testManager = new Manager(
    "ManagerTest1",
    "ID120",
    "Manageremail@gmail.com"
  );

  // 'tobe' is used to test that the actual values are equal to the expected values.
  expect(testManager.getName()).toBe("ManagerTest1");
  expect(testManager.getId()).toBe("ID120");
  expect(testManager.getEmail()).toBe("Manageremail@gmail.com");
});
