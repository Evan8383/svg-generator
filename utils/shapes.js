class Shape {
  constructor(text, textColor, shapeColor) {
    this.text = text;
    this.textColor = textColor;
    this.shapeColor = shapeColor;
  }
  setText() {
    return `<text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="60" fill="${this.textColor}">${this.text}</text>`
  }
}
class Triangle extends Shape {
  constructor(text, textColor, shapeColor) {
    super(text, textColor, shapeColor)
  }
  setShape() {
    return `<polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}"/>`
  }
}
class Square extends Shape {
  constructor(text, textColor, shapeColor) {
    super(text, textColor, shapeColor)
  }
  setShape() {
    return `<rect x="75" y="25" rx="5" ry="5" width="150" height="150" fill="${this.shapeColor}"/>`
  }
}
class Circle extends Shape {
  constructor(text, textColor, shapeColor) {
    super(text, textColor, shapeColor)
  }
  setShape() {
    return `<circle cx="150" cy="100" r="80" fill="${this.shapeColor}"/>`
  }
}

function selectShape(text, textColor, shape, shapeColor) {
  let selectedShape

  switch (shape) {
    case 'circle':
      selectedShape = new Circle(text, textColor, shapeColor)
      break;
    case 'square':
      selectedShape = new Square(text, textColor, shapeColor)
      break;
    case 'triangle':
      selectedShape = new Triangle(text, textColor, shapeColor)
      break;
  }

  return selectedShape
}

function createShape({ text, textColor, shape, shapeColor }) {

  return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

${selectShape(text, textColor, shape, shapeColor).setShape()}
${selectShape(text, textColor, shape, shapeColor).setText()}

</svg>`
}

module.exports = {
  Triangle,
  Circle,
  Square,
  createShape,
}