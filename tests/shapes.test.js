const { SVG, Triangle, Square, Circle } = require("../lib/shapes");

describe("Shapes", () => {
  // Test to render new Triangle
  describe("Render new Triangle", () => {
    it("Should render a new .svg triangle when the user selects triangle", () => {
      const shape = new Triangle();
      shape.setColor("blue");
      expect(shape.render()).toEqual(
        '<polygon points="0, 300 100, 0 200, 300" fill="blue"/>'
      );
    });
  });
  // Test to render new Square
  describe("Render new Square", () => {
    it("Should render a new .svg square when the user selects square", () => {
      const shape = new Square();
      shape.setColor("white");
      expect(shape.render()).toEqual(
        '<rect x="20" y="20" width="200" height="200" fill="white"/>'
      );
    });
  });
  // Test to render new Circle
  describe("Render new Circle", () => {
    it("Should render a new .svg circle when the user selects circle", () => {
      const shape = new Circle();
      shape.setColor("red");
      expect(shape.render()).toEqual(
        '<circle cx="50%" cy="50%" r="100" fill="red"/>'
      );
    });
  });
});

describe("SVG", () => {
  describe("Render logo text", () => {
    it("Should render text with proper color for a square logo", () => {
      const logoText = new SVG("JAL", "blue");
      expect(logoText.renderText()).toEqual(
        '<text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="Verdana" font-size="35" fill="blue">JAL</text>'
      );
    });
  });
});
