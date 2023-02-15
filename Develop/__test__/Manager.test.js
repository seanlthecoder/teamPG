const Manager = require("../lib/Manager");

test("Testing Manager class and attributes", function () {
  const testManager = new Manager(
    "ManagerTest1",
    "ID120",
    "Manageremail@gmail.com"
  );
  // test to verify instance of the 'manager' class can be created with the intended properties.
  expect(testManager.name).toBe("ManagerTest1");
  expect(testManager.id).toBe("ID120");
  expect(testManager.email).toBe("Manageremail@gmail.com");
  expect(typeof testManager).toBe("object");
});

test("Testing Manager methods", function () {
  const testManager = new Manager(
    "ManagerTest1",
    "ID120",
    "Manageremail@gmail.com"
  );
  expect(testManager.getName()).toBe("ManagerTest1");
  expect(testManager.getId()).toBe("ID120");
  expect(testManager.getEmail()).toBe("Manageremail@gmail.com");
});
