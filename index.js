const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const { Triangle, Square, Circle } = require("../lib/shapes");

// Gets user input for logo design
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
  .then((response) => {
    // pass response into render constructor?
    let shape;

    if (response.logoShape == "Triangle") {
      shape = new Triangle().setColor(response.shapeColor);
    } else if (response.logoShape == "Circle") {
      shape = new Circle().setColor(response.shapeColor);
    } else if (response.logoShape == "Square") {
      shape = new Square().setColor(response.shapeColor);
    }

    const shapeString = JSON.stringify(shape);
    // writes result to output folder (logo.svg file)
    fs.writeFile(
      path.join(__dirname, "output", "logo.svg"),
      shapeString,
      (err) => (err ? console.log(err) : console.log("Logo created!"))
    );
  });
