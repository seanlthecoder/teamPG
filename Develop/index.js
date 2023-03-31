const inquirer = require("inquirer");
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");

function init() {
  inquirer
    .prompt([
      {
        type: "list",
        message:
          "Welcome to Team profile generator! Do you like to add your team?",
        name: "optons",
        choices: ["Add Engineer", "Add Intern", "Generate HTML"],
      },
    ])
    .then(function (response) {
      switch (response.options) {
        case "Add Engineer":
          addEngineer();
          break;
        case "Add Intern":
          addIntern();
          break;
        default:
          generateHTML();
      }
    });
}

function addManager() {
  inquirer.prompt([
    {
      type: "input",
      message: "Enter manager name",
      name: "name",
    },

    {
      type: "input",
      message: "Enter ID",
      name: "id",
    },

    {
      type: "input",
      message: "Enter Email",
      name: "email",
    },

    {
      type: "input",
      message: "Enter office number",
      name: "officenumber",
    },
  ]);
}
