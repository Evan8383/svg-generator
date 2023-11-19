const { Triangle, Circle, Square, Shape, createShape } = require('../utils/shapes');

describe('Validate shape rendering', () => {

  describe('Validate creating a new Shapes', () => {
    it('Should return a circle tag, a radius of 80, and selected fill color', () => {
      const shape = new Circle('blue');
      expect(shape.setShape()).toBe(`<circle cx="150" cy="100" r="80" fill="${this.shapeColor}"/>`)
    })
    it('Should return a rect tag, the following attributes: x="75" y="25" rx="5" ry="5" width="150" height="150", and the selected fill color', () => {
      const shape = new Square('blue');
      expect(shape.setShape()).toBe(`<rect x="75" y="25" rx="5" ry="5" width="150" height="150" fill="${this.shapeColor}"/>`)
    })
    it('Should return a polygon tag, the following attributes: points="150, 18 244, 182 56, 182", and selected fill color', () => {
      const shape = new Triangle('blue');
      expect(shape.setShape()).toBe(`<polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}"/>`)
    })
  })
  describe('Validate text created within a created shape', () => {
    it('Should return a text tag', () => {
      const shape = new Shape('aaa', 'blue')
      expect(shape.setText()).toContain('<text')
      expect(shape.setText()).toContain('aaa', 'blue')
    })
  })
})