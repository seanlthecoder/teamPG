# TeamProfileGenerator

#Description

Using a series of prompts in the command line, this software produces an HTML document displaying details about every employee.


## Table of Contents

Installation
Usage
Walkthrough
License
Contributing
Tests


# Installation

To begin, replicate all the files from Github, and subsequently move to the "Develop" folder via the command line. It is essential to have node.js and npm inquirer installed.


# Usage

After reaching the "Develop" folder through the command line, initiate the application by entering "node app.js" and provide accurate responses to each prompt. When finished, answer "n" when asked to add another employee. The program will generate an output folder containing a team.html file. Access this file via a web browser to view the list of entered employees.


## Walkthrough Video




## License





# Tests

To assess the application's functionality, utilize the built-in tests by navigating to the "Develop" folder and entering "npm run test" in the command line. Note that the app rejects empty text input and accepts only numbers in number fields and the '@' symbol in email fields. To confirm these restrictions, attempt to submit inputs without the mandatory criteria.