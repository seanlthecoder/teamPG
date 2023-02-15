// test for the Intern class at its attributes.
// new instance of the Intern class with the contructor pulling in values for 'name', 'id', 'email'

const Intern = require("../lib/Intern");

test("Testing Intern class and attributes", function () {
  const testIntern = new Intern(
    "InternTest1",
    "ID120",
    "Internemail@gmail.com"
  );
  // test to verify instance of the 'Intern' class can be created with the intended properties.
  // assertion statments checks the values of the attributes match the expected values
  expect(testIntern.name).toBe("InternTest1");
  expect(testIntern.id).toBe("ID120");
  expect(testIntern.email).toBe("Internemail@gmail.com");
  expect(typeof testIntern).toBe("object");
});

test("Testing Intern methods", function () {
  const testIntern = new Intern(
    "InternTest1",
    "ID120",
    "Internemail@gmail.com"
  );

  // 'tobe' is used to test that the actual values are equal to the expected values.
  expect(testIntern.getName()).toBe("InternTest1");
  expect(testIntern.getId()).toBe("ID120");
  expect(testIntern.getEmail()).toBe("Internemail@gmail.com");
});
