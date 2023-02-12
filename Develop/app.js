//This creates an employee summary page by prompting the user for employee details using the inquirer package, creating employee objects using constructor functions based on user input, and generating an HTML file with employee information using the htmlRenderer module. 

//prompts the user for the employee's position, name, ID number, email, and other position-specific details such as office number, GitHub username, or school, and validates the input using several validation functions. The program stores employee objects in an array, and if the user wishes to add another employee, the program continues prompting for details until the user is finished. 

// it generates an HTML file with employee information in the output directory.

const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");


