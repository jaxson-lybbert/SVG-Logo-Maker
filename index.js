const inquirer = require("inquirer");
const render = require("./lib/render");

inquirer
  .prompt([
    {
      type: "input",
      message: "Please enter up to three (3) characters:",
      name: "logoText",
    },
    {
      type: "input",
      message: "Enter what color you'd like the text to be:",
      name: "textColor",
    },
    {
      type: "list",
      message: "Select a shape for your logo:",
      choices: ["Circle", "Triangle", "Square"],
      name: "logoShape",
    },
    {
      type: "input",
      message: "What color would you like the shape to be?",
      name: "shapeColor",
    },
  ])
  .then((respone) => {
    // pass response into render constructor?
  });
