const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const { SVG, Triangle, Square, Circle } = require("./lib/shapes");

// Gets user input for logo design
inquirer
  .prompt([
    {
      type: "input",
      message: "Please enter up to three (3) characters:",
      name: "logoText",
      // Validates user input to make sure it's correct length
      validate: (logoText) => {
        if (logoText.length > 3) {
          console.log("\nCannot enter more than 3 characters");
          return false;
        } else {
          return true;
        }
      },
    },
    {
      type: "input",
      message: "Enter what color you would like the text to be:",
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
    // Renders the proper text and shape
    let shape;
    let textRender = new SVG(response.logoText, response.textColor);
    let finalRender;

    if (response.logoShape == "Triangle") {
      shape = new Triangle();
      shape.setColor(response.shapeColor);
      finalRender = `<?xml version="1.0" standalone="no"?>
      <svg height="300" width="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
      ${shape.render()}
      ${textRender.renderText()}
  </svg>`;
    } else if (response.logoShape == "Circle") {
      shape = new Circle();
      shape.setColor(response.shapeColor);
      finalRender = `<?xml version="1.0" standalone="no"?>
      <svg height="300" width="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
      ${shape.render()}
      ${textRender.renderText()}
  </svg>`;
    } else if (response.logoShape == "Square") {
      shape = new Square();
      shape.setColor(response.shapeColor);
      finalRender = `<?xml version="1.0" standalone="no"?>
      <svg height="300" width="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
      ${shape.render()}
      ${textRender.renderText()}
  </svg>`;
    }

    const shapeString = finalRender;
    // writes result to output folder (logo.svg file)
    fs.writeFile(
      path.join(__dirname, "output", "logo.svg"),
      shapeString,
      (err) => (err ? console.log(err) : console.log("Logo created!"))
    );
  });
