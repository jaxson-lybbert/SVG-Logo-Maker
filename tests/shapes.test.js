const Triangle = require("/Users/Jaxson/Desktop/class-repo-activities/week10/Challenges/SVG-Logo-Maker/lib/shapes");
const Square = require("");
const Circle = require("");

describe("Shapes", () => {
  // Test to render new Triangle
  describe("Render new Triangle", () => {
    it("Should render a new .svg triangle when the user selects triangle", () => {
      const shape = new Triangle();
      shape.setColor("blue");
      expect(shape.render()).toEqual(
        '<polygon points="150, 18 244, 182 56, 182" fill="blue" />'
      );
    });
  });
  // Test to render new Square
  //   describe("Render new Square", () => {
  //     it("Should render a new .svg square when the user selects square", () => {
  //       const shape = new Square();
  //       shape.setColor("white");
  //       expect(shape.render()).toEqual(
  //         '<rect x="20" y="10" width="200" height="200" fill="white"/>'
  //       );
  //     });
  //   });
  //   // Test to render new Circle
  //   describe("Render new Circle", () => {
  //     it("Should render a new .svg circle when the user selects circle", () => {
  //       const shape = new Circle();
  //       shape.setColor("red");
  //       expect(shape.render()).toEqual(
  //         '<circle cx="25" cy="75" r="100" fill="red"/>'
  //       );
  //     });
  //   });
});
