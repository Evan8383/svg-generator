const { validateText, validateColor } = require('../index');

describe('Validate user inputs', () => {
  describe('Validate entered logo text', () => {
    it('should return a message if the string is longer than 3 charactes', () => {
      const validate = validateText('aaaa')
      expect(validate).toBe('Your entry has too many characters')
    })
    it('Should return true is the input is 3 characters or less', () => {
      const validate = validateText('aaa')
      expect(validate).toBe(true)
    })
  })
  describe('Validate entered color', () => {
    let invalidRegEx = ('#12' || '#12345')
    let validRegEx = ('#123' || '#F121212')
    const expected = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/g
    it('Should return an error message for an invalid hex color', () => {
      const validate = validateColor(invalidRegEx)

      expect(validate).toEqual(expect.not.stringMatching(expected))
      expect(validate).toBe('Invalid hex color')
    })
    it('Should return true when a valid hex color is entered', () => {
      const validate = validateColor(validRegEx)

      expect(validate).toBe(true)
    })
  })
})