const Engineer = require("../lib/Engineer");

test("Testing Engineer class and attributes",function(){
    const testEngineer = new Engineer("EngineerTest1","ID120","Engineeremail@gmail.com","seanlthecoder")
    expect(testEngineer.name).toBe("EngineerTest1")
    expect(testEngineer.id).toBe("ID120")
    expect(testEngineer.email).toBe("Engineeremail@gmail.com")
    expect(testEngineer.github).toBe("seanlthecoder")
    expect(typeof(testEngineer)).toBe("object")
})

test("Testing Engineer methods",function(){
    const testEngineer = new Engineer("EngineerTest1","ID120","Engineeremail@gmail.com","seanlthecoder")
    expect(testEngineer.getName()).toBe("EngineerTest1")
    expect(testEngineer.getId()).toBe("ID120")
    expect(testEngineer.getEmail()).toBe("Engineeremail@gmail.com")
    expect(testEngineer.getGithub()).toBe("seanlthecoder")
})